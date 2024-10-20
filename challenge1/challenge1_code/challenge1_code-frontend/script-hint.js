async function fetchHint() {
    try {
        const response = await fetch('http://localhost:8080/hint');

        if (!response.ok) {
            throw new Error('Failed to fetch the hint');
        }

        const hint = await response.text();

        document.getElementById('hint').innerText = hint;
    } catch (error) {
        document.getElementById('hint').innerText = "Error fetching the hint.";
        console.error(error);
    }
}
fetchHint();
