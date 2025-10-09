package main

import (
	"fmt"
	"net/http"
)

const port = 8080

type application struct {
}

func main() {
	var app application

	err := http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
}