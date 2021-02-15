const Reserva = require('../models/Reservas');

/**
 * 
 * @param {*} req => Son todos los parametros que recibimos 
 * @param {*} res => Respuesta que se va a devolver
 */
function create(req, res) {
    var reserva = new Reserva();
    var params = req.body;

    reserva.restaurante = params.restaurante;
    reserva.fechaReserva = params.fechaReserva;
    reserva.horaReserva= params.horaReserva;
    reserva.numPersonas= params.numPersonas;
    reserva.celular=params.celular;
    reserva.email=params.email;

    reserva.save((error, reservaCreated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor..........."
            })
        } else {
            if (!reservaCreated) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al insertar el usaurio "
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Usuario almacenado correctamente",
                    dataReserva: reservaCreated
                })
            }
        }

    })
}

module.exports = {
    create
    
}