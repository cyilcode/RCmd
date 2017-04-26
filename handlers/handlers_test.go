package handlers_test

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/cyilcode/RCmd/handlers"
	"github.com/cyilcode/RCmd/registrymanager"
	"github.com/stretchr/testify/assert"
)

type testManager struct{}

var readAllKeysData = []registrymanager.RegistryItem{registrymanager.RegistryItem{
	Key:    "test",
	Value:  "testValue",
	IsRcmd: true,
}}

func (tm testManager) ReadAllKeyAndValues() []registrymanager.RegistryItem {
	return readAllKeysData
}

func TestGetRegistryItems(t *testing.T) {
	handlers.RegistryManager = testManager{}
	r, _ := http.NewRequest("GET", "/api/registryitems", nil)
	w := httptest.NewRecorder()
	handlers.GetRegistryItems(w, r)
	assert.NotEmpty(t, w.Body)
	jsonStr, _ := json.Marshal(readAllKeysData)
	assert.ObjectsAreEqual(string(w.Body.Bytes()), string(jsonStr))
}
