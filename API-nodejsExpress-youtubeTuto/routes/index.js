const express = require("express")

const router = express.Router()

// importo el midleware para controlar que solo puedan acceder a la ruta rpivada los usuarios autorizados
const auth = require('../middlewares/auth')
    // importo el controlador donde tengo todas las funciones
const product_controller = require("../controllers/product.js")
const userCtrl = require('../controllers/user')

// El get lo utilizo para devolver datos, con la siguiente funcion devolvere todos los productos que hay en la bd
// devuelve directamente todos los productos porque creo que al haber exportado el model products con mongoose,
// al hacer el find sin pasarle parametros devuelve todos y como arriba he creado la variable Product que es un mongoose model Product
// directamente devuelve de la bd todo lo que coincide con este modelo

// NO LE TENGO QUE PASAR PARAMETROS A LAS FUNCIONES DEL CONTROLLER AUNQUE LO PIDAN YA QUE SE LLAMAN COMO UN CALLBACK
// DIRECTAMENTE CON LSO METODOS GET POST... ES DECIR AL EJECUTARSE YA ES COMO SI SE SUSTITUYERAN POR EL NOMBRE DE LA FUNCION
// CON LOS PARAMETROS CORRESPONDIENTES QUE SON LOS QUE LLEGAN CUANDO SE EJECUTA YA QUE HASTA QUE NO SE EJECUTA EL GET
// O LAS DEMAS PETICIONES LOS PARAMETROS QUE PIDEN LAS FUNCIONES CALLBACK NO EXISTEN
router.get("/products", product_controller.getProducts);

// Aqui devuelvo solo el producto que coincida con el id del parametro que le paso
router.get("/product/:productId", product_controller.getProduct);

router.post("/product", product_controller.saveProduct);

router.put('/product/:productId', product_controller.updateProduct);

// los json delete  put y get se tienen que pasar por url los parametros no por el body como con el post
router.delete('/product/:productId', product_controller.deleteProduct);

// el next del isAuth hace que si llega al next se ejecute la funcion callback que viene despues d eel ,
// que en este caso seria la de res.status tienes acceso
router.get('/private', auth, function(req, res) {
    res.status(200).send({ message: 'Tienes acceso' })
})

router.post('/signup', userCtrl.signUp)

router.post('/signin', userCtrl.signIn)

module.exports = router