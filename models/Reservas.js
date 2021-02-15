const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var ReservaSchema = new Schema({

    restaurante:String,
    fechaReserva: String,
    horaReserva: String,
    numeroPersonas: Number,
    celular: Number,
    email:String,
   
   
});

module.exports = mongoose.model('reservas', ReservaSchema);