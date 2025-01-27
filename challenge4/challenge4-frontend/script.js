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
            responseDiv.innerText = `FLAG{challenge-4-flag-1230951320}`; 
        } else {
            const error = await response.json();
            responseDiv.innerText = `Error: ${error.detail}`;
        }
    } catch (err) {
        responseDiv.innerText = "An error occurred. Please try again.";
    }
}

function revealKey() {
    const xorResult = "536563726574313219";  
    const responseDiv = document.getElementById("response");
    alert(`1 z dwóch kluczy(hexdecimal): ${xorResult}`);
}

function showHint(hintNumber) {
    const hintBox = document.getElementById("hintBox");

    const hints = {
        1: "Sprawdź w inspektorze kod html, może coś tam znajdziesz",
        2: "Teraz sprawdź czy ktoś czegoś nie ukrył w ciasteczkach(może jakieś /cookies pomoże jak nic w nich nie ma)",
        3: "Na moje oko ktoś tu zrobił xor, chyba trzeba użyć jakiegoś kalkulatora online do xorowania i odpowiedz jest w ASCII"
    };

    hintBox.innerText = hints[hintNumber];  
}
