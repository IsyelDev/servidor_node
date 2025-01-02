// routers/rutas.js
import express from 'express';

// Crear una instancia de Router
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the API!"
  });
});

/**
 * Ruta de información sobre el autor.
 * Proporciona información sobre la persona o la aplicación.
 */
router.get("/about", (req, res) => {
  res.status(200).json({
    message: "About me... I'm a passionate developer!"
  });
});

/**
 * Manejo de rutas no encontradas (404).
 * Esta ruta se asegura de que cualquier ruta no definida devuelva un error 404.
 */
router.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
    message: "The requested resource could not be found"
  });
});

// Exportar el enrutador para usarlo en otros archivos
export default router;
