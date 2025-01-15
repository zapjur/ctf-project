package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	_ "github.com/mattn/go-sqlite3"
)

var db *sql.DB

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
	username := r.FormValue("username")

	query := "SELECT password FROM users WHERE username = '" + username + "'"
	fmt.Println("Executing query:", query)

	rows, err := db.Query(query)
	if err != nil {
		log.Println("SQL query error:", err)
		http.Error(w, "Invalid username or password", http.StatusUnauthorized)
		return
	}
	defer rows.Close()

	for rows.Next() {
		var dbPassword string
		err := rows.Scan(&dbPassword)
		if err != nil {
			log.Println("Error scanning row:", err)
			continue
		}

		log.Println("dbPassword:", dbPassword)

		if dbPassword == "FLAG{challenge-1-flag-3647932492}" {
			fmt.Fprintf(w, "Congratulations! You got the flag: %s", dbPassword)
			return
		}
	}

	http.Error(w, "Invalid username or password", http.StatusUnauthorized)
}

func hintHandler(w http.ResponseWriter, r *http.Request) {
	hint := "SELECT password FROM users WHERE username = '<username>'"
	fmt.Fprintf(w, "Hint: The query used is: %s", hint)
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

	_, err = db.Exec(`CREATE TABLE IF NOT EXISTS flags (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        flag TEXT NOT NULL
    )`)
	if err != nil {
		log.Fatal(err)
	}

	_, err = db.Exec(`INSERT OR IGNORE INTO flags (flag) VALUES ('FLAG{challenge-1-flag-3647932492}')`)
	if err != nil {
		log.Println("Flag already exists, skipping creation.")
	}

	mux := http.NewServeMux()
	mux.HandleFunc("/login", loginHandler)
	mux.HandleFunc("/hint", hintHandler)

	handler := corsMiddleware(mux)
	log.Println("Listening on :8081")
	http.ListenAndServe(":8081", handler)
}
