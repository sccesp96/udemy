const express = require("express")
const router = express.Router()

const auth = require('../middlewares/auth')

const userCtrl = require('../controllers/user')


// NO LE TENGO QUE PASAR PARAMETROS A LAS FUNCIONES DEL CONTROLLER AUNQUE LO PIDAN YA QUE SE LLAMAN COMO UN CALLBACK
// DIRECTAMENTE CON LSO METODOS GET POST... ES DECIR AL EJECUTARSE YA ES COMO SI SE SUSTITUYERAN POR EL NOMBRE DE LA FUNCION
// CON LOS PARAMETROS CORRESPONDIENTES QUE SON LOS QUE LLEGAN CUANDO SE EJECUTA YA QUE HASTA QUE NO SE EJECUTA EL GET
// O LAS DEMAS PETICIONES LOS PARAMETROS QUE PIDEN LAS FUNCIONES CALLBACK NO EXISTEN

// el next del isAuth hace que si llega al next se ejecute la funcion callback que viene despues d eel ,
// que en este caso seria la de res.status tienes acceso
router.get('/private', auth, function(req, res) {
    res.status(200).send({ message: 'Tienes acceso' })
})

router.post('/signup', userCtrl.signUp)

router.post('/signin', userCtrl.signIn)

router.post('/comprobarUsuario', userCtrl.comprobarUsuario)


module.exports = router