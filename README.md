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

# Zadanie 3: Steganography

Adres strony: [http://localhost:83](http://localhost:83)

Chowanie danych w obrazie, znane jako steganografia, polega na ukrywaniu informacji w taki sposób, by nie rzucały się w oczy. W kontekście obrazów często stosuje się technikę modyfikacji najmniej znaczących bitów (LSB, ang. Least Significant Bit) w pikselach, dzięki czemu dane są zapisane w obrazie, ale nie wpływają zauważalnie na jego wygląd. Przykładowo, tekst, klucz czy nawet inny plik można zaszyć w tych bitach.

W zadaniach typu CTF (Capture The Flag), steganografia jest często wykorzystywana do ukrycia flagi lub ukrycia niezbędnych informacji do jej zdobycia. Uczestnicy muszą zidentyfikować, że dane są ukryte, a następnie je wydobyć. Czasami zaszyte dane są zabezpieczone hasłem lub ukryte w nietypowy sposób, np. w metadanych obrazu, kanale alfa czy przez manipulację paletą kolorów.

Przykładową stroną do chowania i wyciągania danych z plików moze być [https://georgeom.net/StegOnline/upload](https://georgeom.net/StegOnline/upload)

W celu ułatwienia rozwiązania zadania dostępna jest 1 podpowiedż, którą można wykorzystać w trakcie rozgrywki.

Celem jest stworzenie konta jako administrator, aby uzyskać dostęp do flagi.

## Rozwiązanie

Aby ukończyć zadanie, należy znaleźć flagę w następującym formacie:
```bash
    FLAG{challenge-3-flag-xxxxxxxxxx}
```

Flagę należy podać na platformie **UPEL**, aby zadanie zostało zaliczone.

# Zadanie 4: Miscellaneous

Adres strony: [http://localhost:84](http://localhost:84)

Zadanie typu **Miscellaneous** to kategoria, która obejmuje różnorodne wyzwania, które nie pasują do innych kategorii. Może to być rozwiązanie zagadki, analiza pliku, dekodowanie tekstu, czy nawet rozwiązanie problemu matematycznego.

W celu ułatwienia rozwiązania zadania dostępne są 3 podpowiedzi, które można wykorzystać w trakcie rozgrywki.

## Rozwiązanie

Aby ukończyć zadanie, należy znaleźć flagę w następującym formacie:
```bash
    FLAG{challenge-4-flag-xxxxxxxxxx}
```

Flagę należy podać na platformie **UPEL**, aby zadanie zostało zaliczone.