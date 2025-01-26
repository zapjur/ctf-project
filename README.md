# CTF Project

---

## Instrukcja instalacji

Aby uruchomić projekt, upewnij się, że masz zainstalowane **Docker** oraz **Docker Compose**.

1. Sklonuj repozytorium na swój komputer za pomocą poniższej komendy:
    ```bash
    git clone https://github.com/zapjur/ctf-project.git
   ```
2. Przejdź do katalogu z projektem:
    ```bash
    cd ctf-project
    ```
3. Uruchom wszystkie usługi za pomocą Docker Compose:
    ```bash
    docker-compose up --build -d
    ```
4. Po uruchomieniu usług, cztery zadania będą dostępne pod następującymi adresami:
    - Zadanie 1: `http://localhost:81`
    - Zadanie 2: `http://localhost:82`
    - Zadanie 3: `http://localhost:83`
    - Zadanie 4: `http://localhost:84`

## Uwagi
Wszystkie usługi uruchamiane są w tle dzięki opcji `-d`.
Jeśli napotkasz problemy z uruchomieniem, upewnij się, że porty 81–84 są wolne na Twoim komputerze.

---

# Zadanie 1: SQL Injection

Adres strony: [http://localhost:81](http://localhost:81)

Na stronie znajduje się formularz logowania. Zadaniem uczestnika jest pozyskanie flagi, wykorzystując podatność serwera na atak typu **SQL Injection**.

W celu ułatwienia rozwiązania zadania dostępne są 3 podpowiedzi, które można wykorzystać w trakcie rozgrywki.
## Rozwiązanie

Aby ukończyć zadanie, należy znaleźć flagę w następującym formacie:
```bash
    FLAG{challenge-1-flag-xxxxxxxxxx}
```
Flagę należy podać na platformie **UPEL**, aby zadanie zostało zaliczone.

---

# Zadanie 2: File Upload Vulnerability

Adres strony: [http://localhost:82](http://localhost:82)

Na stronie znajduje się formularz umożliwiający przesłanie pliku. Zadaniem uczestnika jest pozyskanie flagi, wykorzystując podatność serwera na atak typu **File Upload Vulnerability**.

W celu ułatwienia rozwiązania zadania dostępne są 3 podpowiedzi, które można wykorzystać w trakcie rozgrywki.

## Rozwiązanie

Aby ukończyć zadanie, należy znaleźć flagę w następującym formacie:
```bash
    FLAG{challenge-2-flag-xxxxxxxxxx}
```
Flagę należy podać na platformie **UPEL**, aby zadanie zostało zaliczone.