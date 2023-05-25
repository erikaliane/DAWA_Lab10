const express = require('express');
const router = express.Router();
const rutasController = require('../controllers/rutasController');

// Rutas de las rutas
router.post('/', rutasController.crearRuta);
router.get('/', rutasController.obtenerRutas);
router.put('/:id', rutasController.actualizarRuta);
router.get('/:id', rutasController.verRuta);
router.delete('/:id', rutasController.eliminarRuta);

module.exports = router;
