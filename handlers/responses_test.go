package handlers_test

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"encoding/json"

	"github.com/cyilcode/RCmd/handlers"
	"github.com/stretchr/testify/assert"
)

func TestJSONHTTPRespose(t *testing.T) {
	w := httptest.NewRecorder()
	testJson, _ := json.Marshal(`{"istest": true}`)
	result := handlers.JSONContent(w, testJson)
	assert.Equal(t, w.Code, http.StatusOK)
	assert.Equal(t, result, http.StatusOK)
	assert.ObjectsAreEqual(string(w.Body.Bytes()), string(testJson))
}

func TestNotFoundHTTPRespose(t *testing.T) {
	w := httptest.NewRecorder()
	result := handlers.NotFound(w)
	assert.Equal(t, w.Code, http.StatusNotFound)
	assert.Equal(t, result, http.StatusNotFound)
}

func TestInternalServerErrorHTTPResponse(t *testing.T) {
	w := httptest.NewRecorder()
	result := handlers.InternalServerError(w)
	assert.Equal(t, w.Code, http.StatusInternalServerError)
	assert.Equal(t, result, http.StatusInternalServerError)
}
