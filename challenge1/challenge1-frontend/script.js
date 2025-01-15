document.getElementById('login-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:8081/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    });

    const result = await response.text();
    document.getElementById('response').innerText = result;
});

document.getElementById('hint-btn').addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:8081/hint');
        const hint = await response.text();
        document.getElementById('hint-response').innerText = hint;
    } catch (error) {
        console.error('Error fetching hint:', error);
    }
});

