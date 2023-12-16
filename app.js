const mongoose = require('mongoose');

// Coloca la cadena de conexión aquí
const MONGODB_URI = 'mongodb+srv://pruebasbd:pruebasbd@cluster0.o9f3u.mongodb.net/?retryWrites=true&w=majority';

// Conectar a la base de datos
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Verificar la conexión
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a MongoDB');
});

// ... Código de conexión a MongoDB ...

// Definir un modelo simple
const User = mongoose.model('User', {
    username: String,
    email: String,
    password: String,
  });
  
  // Crear un documento de prueba y guardarlo
  const newUser = new User({
    username: 'testuser',
    email: 'testuser@example.com',
    password: 'password123',
  });
  
  newUser.save((error, savedUser) => {
    if (error) {
      console.error('Error al guardar el usuario:', error);
    } else {
      console.log('Usuario guardado con éxito:', savedUser);
    }
  
    // Cerrar la conexión después de la operación
    mongoose.connection.close();
  });
  