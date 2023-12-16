// doctor.js

const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  especialidad: String,
});

// Cambia esta línea
const Doctor = mongoose.model('Doctor', doctorSchema);

// Añade esta línea para exportar el modelo
module.exports = Doctor;
