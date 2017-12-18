const mongoose = require('mongoose')
const modelUser = require('../models/user')
const service = require('../services/token')

function signUp(req, res) {
    const user = new modelUser({
        email: req.body.email,
        password: req.body.password

    })

    user.save((err) => {
        if (err) {
            if (err.code === 11000) {
                res.status(500).send({ message: `Este usuario ya existe ${err}` })

            } else {
                res.status(500).send({ message: `Error al crear el usuario ${err}` })

            }
        } else {
            // llamo al servicio que crea el token, los sevicios son codigos que se utilizaran en mas de una libreria
            // y por eso se crean en un fichero a parte
            // return res.status(200).send({ token: service.createToken(user) })
            return res.status(200).send({ message: 'Usuario creado' })

        }


    })
}

// Cogeremos el mail que nos viene de la peticion, y miramos si ese email
// lo tiene algun usuario de la base de datos , si es así daremos acceso creando un token
// que viajara en las cabeceras 
function signIn(req, res) {
    modelUser.find({ email: req.body.email, password: req.body.password }, (err, user) => {

        if (err) return res.status(500).send({ message: err })

        // si el array user que devuelve está vacio, es que no exise ese email
        if (!Array.isArray(user) || !user.length) {
            return res.status(404).send({ message: "Usuario o contraseña incorrectos" })

            // si no está vacio si existe el usuario
        } else {
            req.user = user

            return res.status(200).send({
                message: "Te has logueado correctamente",
                token: service.createToken(user)
            })
        }
        // if (err) return res.status(500).send({ message: err })
        // if (!user) return res.status(404).send({ message: 'El usuario no existe' })

        // //else

        // req.user = user
        // res.status(200).send({
        //     message: `Te has logueado correctamente `,
        //     token: service.createToken(user)
        // })
    })

}


function comprobarUsuario(req, res) {
    modelUser.find({ email: req.body.email }, (err, user) => {

        if (err) return res.status(500).send({ message: err })

        // si el array user que devuelve está vacio, es que no exise ese email
        if (!Array.isArray(user) || !user.length) {
            return res.status(404).send({ message: "El usuario no existe" })

            // si no está vacio si existe el usuario
        } else {
            req.user = user

            return res.status(200).send({
                message: "Usuario correcto"
            })
        }
        // if (err) return res.status(500).send({ message: err })
        // if (!user) return res.status(404).send({ message: 'El usuario no existe' })

        // //else

        // req.user = user
        // res.status(200).send({
        //     message: `Te has logueado correctamente `,
        //     token: service.createToken(user)
        // })
    })

}

module.exports = {
    signUp,
    signIn,
    comprobarUsuario
}