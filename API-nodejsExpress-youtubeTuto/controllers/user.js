const mongoose = require('mongoose')
const modelUser = require('../models/user')
const service = require('../services')

function signUp(req, res) {
    const user = new modelUser({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
            // el password es lo que se crea con la funcion ddel model user
            // el last login ya se creará cuando nos volvamos a loguear
    })

    user.save((err) => {
        if (err) res.status(500).send({ message: `Error al crear el usuario ${err}` })

        //else
        // llamo al servicio que crea el token, los sevicios son codigos que se utilizaran en mas de una libreria
        // y por eso se crean en un fichero a parte
        return res.status(200).send({ token: service.createToken(user) })
    })
}
// Cogeremos el mail que nos viene de la peticion, y miramos si ese email
// lo tiene algun usuario de la base de datos , si es así daremos acceso creando un token
// que viajara en las cabeceras 
function signIn(req, res) {
    modelUser.find({ email: req.body.email }, (err, user) => {
        if (err) return res.status(500).send({ message: err })
        if (!user) return res.status(404).send({ message: 'El usuario no existe' })

        //else
        req.user = user
        req.status(200).send({
            message: 'Te has logueado correctamente',
            token: service.createToken(user)
        })
    })

}

module.exports = {
    signUp,
    signIn
}