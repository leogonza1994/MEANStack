const mongoose= require('mongoose');
const Schema = mongoose.Schema;

var EstudiantesSchema = new Schema({
    Nombres: String, 
    Apellidos: String,
    Correo: String,
    Direccion: String,
    Telefono: Number,
    Grado: String

}); 
module.exports= mongoose.model('Estudiantes', EstudiantesSchema);