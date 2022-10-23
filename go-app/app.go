package main

import (
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("../react-app/build")))
	// http.HandleFunc("/", appMain)
	http.ListenAndServe(":8080", nil)
}
func appMain(w http.ResponseWriter, r *http.Request) {
}
