const mongoose = require('mongoose');

const RutasSchema = mongoose.Schema({
    
    ruta: {
        type: String,
        require: true
    },
    paradero: {
        type: String,
        require: true
    },
    direccion: {
        type: String,
        require: true
    },
    horario: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Rutas', RutasSchema)