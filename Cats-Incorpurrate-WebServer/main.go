package main

import (
	"io/ioutil"
	"net/http"
)

func main() {
	// create an endpoint called cats that serves the cat data through a fn called GetCats
	http.HandleFunc("/cats", GetCats)
	// serves all images under the dir "images"
	http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir("./images"))))
	// starts a server on port 8080
	http.ListenAndServe(":8080", nil)
}

func GetCats(w http.ResponseWriter, r *http.Request) {
	// Read the JSON file with cat data
	catData, err := ioutil.ReadFile("catdata.json")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Set the content type of the response to `application/json`
	// the data will be of type json
	w.Header().Set("Content-Type", "application/json")

	// Write the contents of the JSON file to the response body
	w.Write(catData)
}
