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
	key    string
	value  string
	isRcmd bool
}

// RegistryManager is the interface for Windows Registry interaction functionality
type RegistryManager interface {
	ReadAllKeys() []string
	ReadAllKeyAndValues() []RegistryItem
}

// RegistryHandler is a concrete implementation of RegistryManager interface
type RegistryHandler struct {
}

// ReadAllKeys reads returns the keys in Windows Registry
func (registryHandler RegistryHandler) ReadAllKeys() []string {
	registryKey := openAppPathKey()
	defer registryKey.Close()

	names, err := registryKey.ReadSubKeyNames(allKeys)
	if err != nil {
		log.Fatal(err)
	}

	return names
}

// ReadAllKeyAndValues reads and wraps the data read from the Windows Registry
func (registryHandler RegistryHandler) ReadAllKeyAndValues() []RegistryItem {
	registryKey := openAppPathKey()
	defer registryKey.Close()

	names, err := registryKey.ReadSubKeyNames(allKeys)
	if err != nil {
		log.Fatal(err)
	}

	for i := 0; i < len(names); i++ {
		subKey := openAppPathKey(names[i])
		fmt.Println(subKey.GetStringValue(""))
	}

	return nil
}

func openAppPathKey(params ...string) registry.Key {
	fullPath := keyPath
	if len(params) > 0 {
		fullPath = fmt.Sprintf(`%s\%s`, keyPath, params[0])
	}

	registryKey, err := registry.OpenKey(registry.LOCAL_MACHINE, fullPath, registry.ALL_ACCESS)
	if err != nil {
		log.Fatal(err)
	}

	return registryKey
}
