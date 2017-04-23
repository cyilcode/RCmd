package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/cyilcode/RCmd/registrymanager"
)

// RegistryManager instance to interact with the Windows Registry
var RegistryManager registrymanager.RegistryManager

// GetRegistryItems - Retrieves Keys and Values in Windows App Path Registry Root
func GetRegistryItems(w http.ResponseWriter, r *http.Request) {
	keys := RegistryManager.ReadAllKeys()
	json, _ := json.Marshal(keys)
	w.Write(json)
	w.WriteHeader(200)
}
