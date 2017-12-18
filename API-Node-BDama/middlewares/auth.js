const services = require('../services/token')

function isAuth(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({ message: 'No tienes autorizacion' })
    } else {
        // cojo el token haciendo un split que lo que hace es coger el string
        // y convertirlo en array separando el array por el caracter que le paso en el split
        // en este caso cada vez que haya un espacio creara una posicion del array
        // como el header authorization tiene 2 partes así bearer tokenquesea
        // el token estara en la posicion [1] del array y es lo que meto en la variable token
        const token = req.headers.authorization.split(" ")[1]
            // como es una promesa tiene un then que sera si se cumple y un catch si hay error
        services.decodeToken(token)
            // las promesas tiene then si se cumplen y catch si hay error
            .then(response => {
                req.user = response
                    // para pasar al siguiente middleware
                next()
            })
            .catch(response => {
                res.status(response.status)
            })
    }
}

// cuando slo se exporta una funcion luego hay que llamarla solo con el nombre del documento no con el nombre.nombre de la funcion
// en este caso seria llamarla con auth y no con auth.isAuth ya que asi dara error
module.exports = isAuth