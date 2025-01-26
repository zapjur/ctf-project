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
            responseDiv.innerText = `Flag: ${atob(data.flag)}`; 
        } else {
            const error = await response.json();
            responseDiv.innerText = `Error: ${error.detail}`;
        }
    } catch (err) {
        responseDiv.innerText = "An error occurred. Please try again.";
    }
}

function revealKey() {
    alert(`XOR hexadecimal: ${536563726574313219}`);
}

function showHint(hintNumber) {
    const hintBox = document.getElementById("hintBox");

    // Treści hintów - możesz je edytować
    const hints = {
        1: "Sprawdź w inspektorze kod html, może coś tam znajdziesz",
        2: "Teraz sprawdź czy ktoś czegoś nie ukrył w ciasteczkach",
        3: "Na moje oko ktoś tu zrobił xor, chyba trzeba użyć jakiegoś kalkulatora online do xorowania"
    };

    // Wyświetl hint w polu
    hintBox.innerText = hints[hintNumber];
}