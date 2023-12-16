// doctores.js

document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch('/api/doctores');
        if (response.ok) {
            const doctores = await response.json();
            mostrarDoctoresEnTabla(doctores);
        } else {
            throw new Error('Error al obtener la lista de doctores');
        }
    } catch (error) {
        console.error('Error al cargar la lista de doctores:', error);
    }
});

function mostrarDoctoresEnTabla(doctores) {
    const tableBody = document.querySelector('#doctoresTable tbody');
    tableBody.innerHTML = ''; // Limpiar contenido existente

    doctores.forEach((doctor) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${doctor.nombre}</td>
            <td>${doctor.correo}</td>
            <td>${doctor.especialidad}</td>
            <td>
                <button class="detalles-button" onclick="verDetalles('${doctor._id}')">Detalles</button>
            </td>
        `;
    });
}

function verDetalles(doctorId) {

    console.log('Detalles del doctor con ID:', doctorId);
}
