const mongoose = require('mongoose');

const ConductorSchema = mongoose.Schema({
    
    nombre: {
        type: String,
        require: true
    },
    apellidos: {
        type: String,
        require: true
    },
    dni: {
        type: String,
        require: true
    },
    placa: {
        type: String,
        require: true
    },
    fecha_nac: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Conductor', ConductorSchema)