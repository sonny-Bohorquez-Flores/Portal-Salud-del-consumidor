// registro.js

async function registerUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;
    const specialty = document.getElementById('specialty').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                role,
                specialty,
                password,
            }),
        });

        if (response.ok) {
            const result = await response.json();
            alert(result.message); // Puedes manejar el resultado de la respuesta como desees
        } else {
            throw new Error('Error en la solicitud de registro');
        }
    } catch (error) {
        console.error('Error en el registro:', error);
        alert('Error en el registro. Consulta la consola para obtener más detalles.');
    }
}

