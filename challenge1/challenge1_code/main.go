package main

import (
	"database/sql"
	"fmt"
	_ "github.com/mattn/go-sqlite3"
	"log"
	"net/http"
)

var db *sql.DB

func loginHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	username := r.FormValue("username")
	password := r.FormValue("password")

	var dbPassword string

	query := "SELECT password FROM users WHERE username = '" + username + "'"
	fmt.Println("Executing query:", query)
	err := db.QueryRow(query).Scan(&dbPassword)
	if err != nil {
		http.Error(w, "Invalid username or password", http.StatusUnauthorized)
		return
	}

	if password == dbPassword {
		fmt.Fprintf(w, "Login successful! Welcome, %s", username)
		return
	}

	if username != "admin" && dbPassword != "" {
		fmt.Fprintf(w, "Congratulations! You got the flag: %s", dbPassword)
		return
	}

	http.Error(w, "Invalid username or password", http.StatusUnauthorized)
}

func main() {

	var err error
	db, err = sql.Open("sqlite3", "./users.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	_, err = db.Exec(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL
    )`)
	if err != nil {
		log.Fatal(err)
	}

	_, err = db.Exec(`INSERT INTO users (username, password) VALUES ('admin', 'super_secret_admin_password')`)
	if err != nil {
		log.Println("Admin user already exists, skipping creation.")
	}

	http.HandleFunc("/login", loginHandler)
	log.Println("Listening on :8080")
	http.ListenAndServe(":8080", nil)

}
