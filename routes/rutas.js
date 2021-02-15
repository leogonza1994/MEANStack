const express = require('express');
const ReservasController = require('../controllers/ReservasController');
const api2 = express.Router();

/**
 * POST : Para insertar datos y enviar datos sostenibles.
 * GET: Para obterne datos.
 * PUT: Modificar datos.
 * DELETE: Eliminar informacion
 */

api2.get('/saludar', (req, res) => {

    console.log('Llego a la ruta saludar....');

});

api2.post('/', ReservasController.create);
//api.put('/:idEstudiantes', EstudiantesController.update);
//api.delete('/:idEstudiantes', EstudiantesController.remove);
//api.get('/allStudent/', EstudiantesController.getAllStudent);

module.exports = api2;