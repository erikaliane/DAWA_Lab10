const Conductor = require("../models/Conductor");

exports.crearConductor = async (req, res) => {
    try {
        const conductor = new Conductor(req.body);
        await conductor.save();
        res.send(conductor);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerConductores = async (req, res) => {
    try {
        const conductores = await Conductor.find();
        res.json(conductores);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarConductor = async (req, res) => {
    try {
        const { _id, nombre, apellidos, dni, placa, fecha_nac } = req.body;
        let conductor = await Conductor.findById(req.params.id);
        if (!conductor) {
            res.status(404).json({ msg: 'No existe el conductor' });
        }
        conductor._id = _id;
        conductor.nombre = nombre;
        conductor.apellidos = apellidos;
        conductor.dni = dni;
        conductor.placa = placa;
        conductor.fecha_nac = fecha_nac;
        conductor = await Conductor.findByIdAndUpdate(req.params.id, conductor, { new: true });
        res.json(conductor);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.verConductor = async (req, res) => {
    try {
        let conductor = await Conductor.findById(req.params.id);
        if (!conductor) {
            res.status(404).json({ msg: 'No existe el conductor' });
        }
        res.json(conductor);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarConductor = async (req, res) => {
    try {
        let conductor = await Conductor.findById(req.params.id);
        if (!conductor) {
            res.status(404).json({ msg: 'No existe el conductor' });
        }
        conductor = await Conductor.findByIdAndRemove(req.params.id);
        res.json({ msg: 'El conductor con DNI: ' + conductor.dni + ' se ha eliminado' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
