package registrymanager

import (
	"log"

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
}

// RegistryHandler is a concrete implementation of RegistryManager interface
type RegistryHandler struct {
}

// ReadAllKeys reads and wraps the data read from the Windows Registry
func (registryHandler RegistryHandler) ReadAllKeys() []string {
	registryKey := openAppPathKey()
	defer registryKey.Close()

	names, err := registryKey.ReadSubKeyNames(allKeys)
	if err != nil {
		log.Fatal(err)
	}

	return names
}

func openAppPathKey() registry.Key {
	registryKey, err := registry.OpenKey(registry.LOCAL_MACHINE, keyPath, registry.ALL_ACCESS)
	if err != nil {
		log.Fatal(err)
	}

	return registryKey
}
