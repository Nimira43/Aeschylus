package main

import (
	"net/http"

	"github.com/Nimira43/websockets-1/internal/handlers"
	"github.com/bmizerany/pat"
)

func routes() http.Handler {
	mux := pat.New()
	mux.Get("/", http.HandlerFunc(handlers.Home)) 
	return mux  
}
