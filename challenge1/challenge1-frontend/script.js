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

const hints = [
    "Hint 1: Query: SELECT password FROM users WHERE username = '<username>'",
    "Hint 2: Flag is in the flags table.",
    "Hint 3: Try to use: UNION SELECT"
];

document.getElementById('hint-btn-1').addEventListener('click', () => {
    document.getElementById('hint-response').innerText = hints[0];
});

document.getElementById('hint-btn-2').addEventListener('click', () => {
    document.getElementById('hint-response').innerText = hints[1];
});

document.getElementById('hint-btn-3').addEventListener('click', () => {
    document.getElementById('hint-response').innerText = hints[2];
});