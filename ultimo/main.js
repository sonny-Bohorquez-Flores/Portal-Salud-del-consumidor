function mostrarSiguienteFormulario() {
    // Obtén el valor seleccionado del especialista
    const especialistaSeleccionado = document.getElementById('especialista').value;
    // Obtén el valor seleccionado del doctor
    const doctorSeleccionado = document.getElementById('doctor').value;

    // Obtén el nombre del especialista y los doctores disponibles
    const nombreEspecialista = especialistas[especialistaSeleccionado].nombre;
    const doctoresDisponibles = especialistas[especialistaSeleccionado].doctores;

    // Oculta el primer formulario
    document.getElementById('formularioPrimero').style.display = 'none';

    // Muestra el div con el segundo formulario
    document.getElementById('formularioSiguiente').style.display = 'block';

    // Actualiza la información en el segundo formulario
    document.getElementById('especialistaSeleccionado').innerText = `Especialista: ${nombreEspecialista}`;
    document.getElementById('doctorSeleccionado').innerText = `Doctor en Turno: ${doctorSeleccionado}`;

    // Muestra los doctores disponibles en el segundo formulario
    const doctoresContainer = document.getElementById('doctoresDisponibles');
    doctoresContainer.innerHTML = '<p>Doctores Disponibles:</p>';
    const ul = document.createElement('ul');
    doctoresDisponibles.forEach(doctor => {
        const li = document.createElement('li');
        li.textContent = doctor;
        ul.appendChild(li);
    });
    doctoresContainer.appendChild(ul);
}
const especialistas = {
    especialista1: {
        nombre: "Especialista 1",
        doctores: ["Doctor A", "Doctor B"]
    },
    especialista2: {
        nombre: "Especialista 2",
        doctores: ["Doctor C", "Doctor D"]
    }
    // Agrega más especialistas y sus datos si es necesario
};

function mostrarDoctoresDisponibles() {
    const especialistaSeleccionado = document.getElementById('especialista').value;
    const doctoresDisponibles = especialistas[especialistaSeleccionado].doctores;

    const selectDoctor = document.getElementById('doctor');
    selectDoctor.innerHTML = '';

    doctoresDisponibles.forEach(doctor => {
        const option = document.createElement('option');
        option.value = doctor;
        option.textContent = doctor;
        selectDoctor.appendChild(option);
    });
}

function mostrarHorariosDisponibles() {
    const especialistaSeleccionado = document.getElementById('especialista').value;
    const doctorSeleccionado = document.getElementById('doctor').value;

    const horariosDisponibles = obtenerHorariosDisponibles(especialistaSeleccionado, doctorSeleccionado);

    const selectHorario = document.getElementById('horario');
    selectHorario.innerHTML = '<option value="">Seleccionar Horario</option>';

    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    horariosDisponibles.forEach(horario => {
        const fecha = new Date(horario.fecha);
        const diaSemana = diasSemana[fecha.getDay()]; // Obtener el día de la semana

        const option = document.createElement('option');
        option.value = horario.horario;
        option.textContent = `${diaSemana} - ${horario.fecha} - ${horario.horario}`; // Mostrar día, fecha y horario
        selectHorario.appendChild(option);
    });
}

  function formatFecha(fecha) {
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
return new Date(fecha).toLocaleDateString('es-ES', options);
}


function obtenerHorariosDisponibles(especialista, doctor) {
    const horarios = {
        especialista1: {
            "Doctor A": [
                { fecha: "2023-12-07", horario: "8:00 AM - 12:00 PM", },
                { fecha: "2023-12-08", horario: "1:00 PM - 5:00 PM",  }
            ],
            "Doctor B": [
                { fecha: "2023-12-09", horario: "8:00 AM - 12:00 PM", },
                { fecha: "2023-12-10", horario: "1:00 PM - 5:00 PM", }
            ]
        },
        especialista2: {
            "Doctor C": [
                { fecha: "2023-12-11", horario: "9:00 AM - 1:00 PM", },
                { fecha: "2023-12-12", horario: "2:00 PM - 6:00 PM", }
            ],
            "Doctor D": [
                { fecha: "2023-12-13", horario: "9:00 AM - 1:00 PM", },
                { fecha: "2023-12-14", horario: "2:00 PM - 6:00 PM", }
            ]
        }
        // Agrega más especialistas y sus horarios si es necesario
    };

    return horarios[especialista][doctor];
}
function validarNumeroDocumento(input) {
    // Filtrar y eliminar caracteres no numéricos
    input.value = input.value.replace(/[^\d]/g, '');
}

function mostrarSiguienteFormulario() {
    const especialistaSeleccionado = document.getElementById('especialista').value;
    const doctorSeleccionado = document.getElementById('doctor').value;

    document.getElementById('especialistaSeleccionado').textContent = `Especialista: ${especialistas[especialistaSeleccionado].nombre}`;
    document.getElementById('doctorSeleccionado').textContent = `Doctor en Turno: ${doctorSeleccionado}`;

    const horarioSeleccionado = document.getElementById('horariosDisponibles').rows[1].cells[1].textContent;
    document.getElementById('horarioSeleccionado').textContent = `Horario: ${horarioSeleccionado}`;

    document.getElementById('formularioPrimero').style.display = 'none';
    document.getElementById('formularioSiguiente').style.display = 'block';
}

function mostrarFormularioAnterior() {
    document.getElementById('formularioPrimero').style.display = 'block';
    document.getElementById('formularioSiguiente').style.display = 'none';
    window.scrollTo(0, 0);
}
function mostrarHorariosDisponibles() {
    const especialistaSeleccionado = document.getElementById('especialista').value;
    const doctorSeleccionado = document.getElementById('doctor').value;

    const horariosDisponibles = obtenerHorariosDisponibles(especialistaSeleccionado, doctorSeleccionado);

    const selectHorario = document.getElementById('horario');
    selectHorario.innerHTML = '<option value="">Seleccionar Horario</option>';

    horariosDisponibles.forEach(horario => {
        const option = document.createElement('option');
        option.value = horario.horario;
        const fecha = new Date(horario.fecha);
        const formattedDate = `${fecha.toLocaleDateString()} - ${horario.horario}`;
        option.textContent = formattedDate;
        selectHorario.appendChild(option);
    });
}
function mostrarSiguienteFormulario() {
const especialistaSeleccionado = document.getElementById('especialista').value;
const doctorSeleccionado = document.getElementById('doctor').value;
const horarioSeleccionado = document.getElementById('horario').value;

// Actualizar la información en el segundo formulario
document.getElementById('especialistaSeleccionado').innerText = `: ${especialistas[especialistaSeleccionado].nombre}`;
document.getElementById('doctorSeleccionado').innerText = `: ${doctorSeleccionado}`;
document.getElementById('horarioSeleccionado').innerText = `: ${horarioSeleccionado}`;

// Ocultar el primer formulario
document.getElementById('formularioPrimero').style.display = 'none';

// Mostrar el segundo formulario
document.getElementById('formularioSiguiente').style.display = 'block';
}