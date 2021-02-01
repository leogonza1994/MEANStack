
//ArchivoRutas
const Estudiantes = require('../models/Estudiantes');

/**
 * 
 * @param {*} req => Son todos los parametros que recibimos. 
 * @param {*} res => Respuesta.
 */
function create(req, res) {
    var student = new Estudiantes();
    var params = req.body;

    student.Nombres = params.Nombres;
    student.Apellidos = params.Apellidos;
    student.Correo = params.Correo;
    student.Direccion = params.Direccion;
    student.Telefono = params.Telefono;
    student.Grado = params.Grado;

    student.save((error, studentCreated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!studentCreated) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al insertar el usuario"
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Usuario almacenado correctamente",
                    dataEstudiantes: studentCreated

                })
            }
        }


    })

}
function update(req, res) {
    var parameters = req.body;
    var idEstudiantes = req.params.idEstudiantes;
    Estudiantes.findByIdAndUpdate(idEstudiantes, parameters, (error, studentUpdate) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"

            })
        } else {
            if (!studentUpdate) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al actualizar el usuario"
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Usuario actualizado correctamente"

                })
            }
        }

    })
}

function remove(req, res) {
    var idEstudiantes = req.params.idEstudiantes;
    Estudiantes.findByIdAndDelete(idEstudiantes, (error, studentRemoved) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!studentRemoved) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al eliminar el usuario"
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Usuario eliminado correctamente"
                })
            }
        }

    })

}
function getAllStudent(req, res) {
    
    Estudiantes.find({ }, (error, allStudent) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: "Todos los usuarios fueron creados",
                allStudent: allStudent
            })
        }

    })

}


module.exports = {
    create,
    update,
    remove,
    getAllStudent
}