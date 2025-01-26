async function submitKey() {
    const key = document.getElementById("keyInput").value;
    const responseDiv = document.getElementById("response");

    try {
        const response = await fetch("http://127.0.0.1:8000/validate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ key }),
        });

        if (response.ok) {
            const data = await response.json();
            responseDiv.innerText = `Flag: ${atob(data.flag)}`; // Dekodowanie flagi z base64
        } else {
            const error = await response.json();
            responseDiv.innerText = `Error: ${error.detail}`;
        }
    } catch (err) {
        responseDiv.innerText = "An error occurred. Please try again.";
    }
}

function revealKey() {
    const xorResult = "53 65 63 72 65 74 31 32 19";  // Zakodowana wartość XOR w formacie szesnastkowym
    const responseDiv = document.getElementById("response");
    alert(`1 z dwóch kluczy(hexdecimal): ${xorResult}`);
}

function showHint(hintNumber) {
    const hintBox = document.getElementById("hintBox");

    const hints = {
        1: "Sprawdź w inspektorze kod html, może coś tam znajdziesz",
        2: "Teraz sprawdź czy ktoś czegoś nie ukrył w ciasteczkach(może jakieś /cookies pomoże jak nic w nich nie ma)",
        3: "Na moje oko ktoś tu zrobił xor, chyba trzeba użyć jakiegoś kalkulatora online do xorowania"
    };

    hintBox.innerText = hints[hintNumber];  // Wyświetlanie tekstu w elemencie hintBox
}
