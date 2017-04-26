package handlers

import "net/http"

// JSONContent is HTTP response for json content return with OK status
func JSONContent(w http.ResponseWriter, json []byte) int {
	w.WriteHeader(http.StatusOK)
	w.Write(json)
	w.Header().Add("Content-Type", "application/json")
	return http.StatusOK
}

// NotFound is HTTP response for the requests that are to return empty
func NotFound(w http.ResponseWriter) int {
	w.WriteHeader(http.StatusNotFound)
	w.Write([]byte("Resource not found"))
	return http.StatusNotFound
}

// InternalServerError is HTTP response for server sided errors
func InternalServerError(w http.ResponseWriter) int {
	w.WriteHeader(http.StatusInternalServerError)
	w.Write([]byte("Internal server error"))
	return http.StatusInternalServerError
}
