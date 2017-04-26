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
	keys := RegistryManager.ReadAllKeyAndValues()
	json, err := json.Marshal(keys)
	if err != nil {
		InternalServerError(w)
		return
	}

	if len(keys) == 0 {
		NotFound(w)
		return
	}

	JSONContent(w, json)
}
