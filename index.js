// index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Doctor = require('./models/doctor'); // Asegúrate de usar la ruta correcta
const User = require('./models/usuario'); // Asegúrate de usar la ruta correcta
const cors = require('cors'); // Agregado para manejar CORS

const app = express();
const PORT = process.env.PORT || 5000;

// Configuración de Mongoose y conexión a la base de datos
mongoose.connect('mongodb+srv://pruebasbd:pruebasbd@cluster0.o9f3u.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', (err) => {
  console.error('Error de conexión a la base de datos:', err);
});

mongoose.connection.once('open', () => {
  console.log('Conexión exitosa a la base de datos');
});

// Configuración de middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); // Agregado para manejar CORS

// Ruta para obtener la lista de doctores
app.get('/api/doctores', async (req, res) => {
  try {
    // Lógica para obtener la lista de doctores desde la base de datos
    const doctores = await Doctor.find({}, 'nombre correo especialidad telefono');

    res.status(200).json(doctores);
  } catch (error) {
    console.error('Error al obtener la lista de doctores:', error);
    res.status(500).json({ message: 'Error al obtener la lista de doctores' });
  }
});

// Ruta de registro de usuario
app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password, role, specialty } = req.body;

    // Asegúrate de validar y guardar los datos correctamente en tu modelo de usuario
    const newUser = new User({ username, email, password, role, specialty, telefono  });
    await newUser.save();

    res.status(201).json({ message: 'Usuario registrado con éxito' });
  } catch (error) {
    console.error('Error en el registro:', error);
    res.status(500).json({ message: 'Error en el registro' });
  }
});

// Ruta para archivos estáticos (por ejemplo, tus páginas HTML y archivos CSS)
app.use(express.static('public'));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
