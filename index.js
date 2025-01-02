// app.js
import express from 'express';
import dotenv from 'dotenv'; // Para gestionar variables de entorno
import router from './routers/rutas.js'; // Importa las rutas

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Crear una instancia de Express
const app = express();

// Middleware para manejar cuerpos JSON
app.use(express.json()); 

// Usar el enrutador para manejar las rutas
app.use("/", router);

// Middleware para manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);  // Log de error en consola
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message || 'Algo salió mal en el servidor.'
  });
});

// Obtener el puerto desde una variable de entorno, o usar 4000 por defecto
const port = process.env.PORT || 4000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
