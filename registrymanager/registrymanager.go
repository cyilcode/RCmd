package registrymanager

import (
	"log"

	"fmt"

	"golang.org/x/sys/windows/registry"
)

const keyPath = `SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths`
const allKeys = -1

// RegistryItem is a data wrapper struct for the keys from Windows Registry
type RegistryItem struct {
	Key    string
	Value  string
	IsRcmd bool
}

// RegistryManager is the interface for Windows Registry interaction functionality
type RegistryManager interface {
	ReadAllKeyAndValues() []RegistryItem
}

// RegistryHandler is a concrete implementation of RegistryManager interface
type RegistryHandler struct {
}

// ReadAllKeyAndValues reads and wraps the data read from the Windows Registry
func (registryHandler RegistryHandler) ReadAllKeyAndValues() []RegistryItem {
	registryKey, err := openAppPathKey()
	defer registryKey.Close()

	var registryItems []RegistryItem
	names, err := registryKey.ReadSubKeyNames(allKeys)
	if err != nil {
		log.Fatal(err)
	}

	for i := 0; i < len(names); i++ {
		subKey, err := openAppPathKey(names[i])
		if err == nil {
			subKeyValue, _, err := subKey.GetStringValue("")
			if err == nil {
				item := RegistryItem{
					IsRcmd: false,
					Key:    names[i],
					Value:  subKeyValue,
				}

				registryItems = append(registryItems, item)
			}
		}
	}

	return registryItems
}

func openAppPathKey(params ...string) (*registry.Key, error) {
	fullPath := keyPath
	if len(params) > 0 {
		fullPath = fmt.Sprintf(`%s\%s`, keyPath, params[0])
	}

	registryKey, err := registry.OpenKey(registry.LOCAL_MACHINE, fullPath, registry.ALL_ACCESS)
	if err != nil {
		log.Println(`Couldn't access key`, params[0])
		return nil, err
	}

	return &registryKey, nil
}
