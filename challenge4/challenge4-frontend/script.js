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
            responseDiv.innerText = `Flag: ${atob(data.flag)}`; // Odszyfrowanie Base64
        } else {
            const error = await response.json();
            responseDiv.innerText = `Error: ${error.detail}`;
        }
    } catch (err) {
        responseDiv.innerText = "An error occurred. Please try again.";
    }
}

function revealKey() {
    console.log("Funkcja revealKey została wywołana!");
    const xorKey = [83, 101, 99, 114, 101, 116, 49, 50, 51]; // Zakodowany klucz
    const decodedKey = xorKey.map(c => String.fromCharCode(c ^ 42)).join('');
    alert(`XORowany klucz: ${decodedKey}`);
}