const Rutas = require("../models/Rutas");

exports.crearRuta = async (req, res) => {
  try {
    const ruta = new Rutas(req.body);

    await ruta.save();
    res.send(ruta);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
};

exports.obtenerRutas = async (req, res) => {
  try {
    const rutas = await Rutas.find();
    res.json(rutas);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
};

exports.actualizarRuta = async (req, res) => {
  try {
    const { ruta, paradero, direccion, horario } = req.body;
    let rutaExistente = await Rutas.findById(req.params.id);

    if (!rutaExistente) {
      res.status(404).json({ msg: 'No existe la ruta' });
    }

    rutaExistente.ruta = ruta;
    rutaExistente.paradero = paradero;
    rutaExistente.direccion = direccion;
    rutaExistente.horario = horario;

    await rutaExistente.save();
    res.json(rutaExistente);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
};

exports.verRuta = async (req, res) => {
  try {
    let rutaExistente = await Rutas.findById(req.params.id);

    if (!rutaExistente) {
      res.status(404).json({ msg: 'No existe la ruta' });
    }

    res.json(rutaExistente);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
};

exports.eliminarRuta = async (req, res) => {
  try {
    let rutaExistente = await Rutas.findById(req.params.id);

    if (!rutaExistente) {
      res.status(404).json({ msg: 'No existe la ruta' });
    }

    await Rutas.findByIdAndRemove(req.params.id);

    res.json({ msg: 'La ruta se ha eliminado' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
};
