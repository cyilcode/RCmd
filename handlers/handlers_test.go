package handlers_test

import "testing"
import "net/http"
import "net/http/httptest"
import "github.com/cyilcode/RCmd/handlers"

import "github.com/stretchr/testify/assert"
import "fmt"

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
	fmt.Println(string(w.Body.Bytes()))
	assert.NotEmpty(t, w.Body)
}
