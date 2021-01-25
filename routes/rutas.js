const express = require('express');
const EstudiantesController = require('../controllers/Estudiantes.Controller');
const api = express.Router();

/**
 * POST : Para insertar datos y enviar datos sostenibles.
 * GET: Para obterne datos.
 * PUT: Modificar datos.
 * DELETE: Eliminar informacion
 */

api.get('/saludar', (req, res) => {

    console.log('Llego a la ruta saludar....');

});

api.post('/', EstudiantesController.create);
api.put('/:idEstudiantes', EstudiantesController.update);
api.delete('/:idEstudiantes', EstudiantesController.remove);
api.get('/allStudent/', EstudiantesController.getAllStudent);

module.exports = api;