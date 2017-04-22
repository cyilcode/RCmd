package main

import (
	"net/http"

	"fmt"

	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()
	router.PathPrefix("/").Handler(http.FileServer(http.Dir("./web/public/")))
	http.Handle("/", router)
	fmt.Println(http.ListenAndServe(":8080", router))
}
