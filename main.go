package main

import (
	"net/http"

	"github.com/gorilla/mux"
)

const webPath = "./web/public/"
const port = ":8080"

func main() {
	router := mux.NewRouter()
	router.PathPrefix("/").Handler(http.FileServer(http.Dir(webPath)))
	http.Handle("/", router)
	http.ListenAndServe(port, router)
}
