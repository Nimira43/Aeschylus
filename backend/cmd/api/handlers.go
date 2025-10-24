package main

import (
	"net/http"
)

func (app *application) Home(w http.ResponseWriter, r *http.Request) {
	var payload = struct {
		Status string `json:"status"`,
		Message string `json:"message"`,
		Version string `json:"version"`,
	}{
		Status: "active",
		Message: "Aeschylus up and running",
		Version: "1.0.0",
	}
}