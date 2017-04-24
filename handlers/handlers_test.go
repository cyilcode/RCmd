package handlers_test

import "testing"
import "net/http"
import "net/http/httptest"
import "github.com/cyilcode/RCmd/handlers"

import "github.com/stretchr/testify/assert"
import "encoding/json"

type testManager struct{}

var readAllKeysData = []string{"test", "function"}

func (tm testManager) ReadAllKeys() []string {
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
