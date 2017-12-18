// importo mongoose
const mongoose = require('mongoose')
    // importo schema de mongoose que seria como una tabla creo
const Schema = mongoose.Schema
    // importo bcrypt para hashear el pass, hay que instalarlo con npm
const bcrypt = require('bcrypt-nodejs')


// creo el formato de este schema y le doy nombre 
const UserSchema = Schema({
    // unique true, hace que el valor sea unico, lowecase: true, lo pasa todo a minuscula
    email: { type: String, unique: true, lowercase: true },
    name: String,
    // select false , hace que al hacer un get con un select no pase el password
    password: { type: String, select: false },
    signupDate: { type: Date, default: Date.now() },
    lastLogin: Date
})

// con el .pre('save') hago que se ejecute antes de que se salve en la bd este schema
UserSchema.pre('save', function(next) {
    //creo la variable user y le doy el valor de this, que en este caso es el UserSchema
    let user = this

    // si user.ismoifiedpassword da false pasa a lo siguiente y no entres a las demas funciones
    if (!user.isModified('password')) return next()

    //else
    // el segundo parametro siempre es la res, en este caso pongo salt porque es un salt
    bcrypt.genSalt(10, (err, salt) => {
        // si da error pasa a lo siugiente y no entres a las demas funciones
        if (err) return next(err)

        //else es decir if no error
        //el segundo parametro de una funcion callback siempre es la res en este caso pongo hash porque es un hash
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            // si da error pasa a lo siugiente y no entres a las demas funciones
            if (err) return next(err)

            // else
            // hasheo el password
            user.password = hash
            next()
        })
    })
})

// Hago que ahora pueda importar este schema en otro sitio con el nomrbre product
module.exports = mongoose.model('User', UserSchema)