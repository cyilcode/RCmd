package main

import (
	"net/http"

	"github.com/cyilcode/RCmd/handlers"
	"github.com/cyilcode/RCmd/registrymanager"
	"github.com/gorilla/mux"
)

const webPath = "./web/public/"
const port = ":8080"

func main() {
	injectDependencies()
	router := mux.NewRouter()
	router.HandleFunc("/api/registryitems", handlers.GetRegistryItems).Methods("GET")
	router.PathPrefix("/").Handler(http.FileServer(http.Dir(webPath)))
	http.Handle("/", router)
	http.ListenAndServe(port, router)
}

func injectDependencies() {
	handlers.RegistryManager = registrymanager.RegistryHandler{}
}
