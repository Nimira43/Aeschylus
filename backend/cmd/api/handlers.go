package main

import (
	"backend/internal/models"
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

func (app *application) Home(w http.ResponseWriter, r *http.Request) {
	var payload = struct {
		Status string `json:"status"`
		Message string `json:"message"`
		Version string `json:"version"`
	}{
		Status: "active",
		Message: "Aeschylus up and running",
		Version: "1.0.0",
	}

	out, err := json.Marshal(payload)

	if err != nil {
		fmt.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(out)
}

func (app *application) AllMovies(w http.ResponseWriter, r *http.Request) {
	var movies []models.Movie

	rd, _ := time.Parse("2006-01-02","1977-05-25")

	starWars := models.Movie {
		ID: 1,
		Title: "Star Wars",
		ReleaseDate: rd,
		MPAARating: "PG",
		RunTime: 121,
		Description: "The Rebel Alliance aims to destroy the tyrannical Empire's ultimate weapon, the Death Star. When the rebel leader Princess Leia is captured by the Empire, Luke Skywalker acquires stolen architectural plans for the Death Star and sets out to rescue her while learning the ways of the Force from the Jedi Master Obi-Wan Kenobi.",
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	movies = append(movies, starWars)
	
	raidersOfTheLostArk := models.Movie {
		ID: 2,
		Title: "Raiders of the Lost Ark",
		ReleaseDate: rd,
		MPAARating: "PG",
		RunTime: 115,
		Description: "Set in 1936, Indiana Jones, a globetrotting archaeologist, faces Nazi German forces to recover the long-lost Ark of the Covenant which is said to make an army invincible. Teaming up with his tough former romantic interest Marion Ravenwood, Jones races to stop rival archaeologist René Belloq  from guiding the Nazis to the Ark and its power.",
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	
}