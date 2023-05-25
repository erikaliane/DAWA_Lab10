const express = require('express');
const router = express.Router();
const conductorController = require('../controllers/conductorController');

// /api/conductores
router.post('/', conductorController.crearConductor);
router.get('/', conductorController.obtenerConductores);

// /api/conductores/:id
router.put('/:id', conductorController.actualizarConductor);
router.get('/:id', conductorController.verConductor);
router.delete('/:id', conductorController.eliminarConductor);

module.exports = router;
