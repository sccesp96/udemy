const mongoose = require('mongoose')
    // importo schema de mongoose que seria como una tabla creo
const Schema = mongoose.Schema
    // importo bcrypt para hashear el pass, hay que instalarlo con npm
const bcrypt = require('bcrypt-nodejs')

const UserSchema = ({
    email: { type: String, unique: true, required: true, lowercase: true },
    // select false , hace que al hacer un get con un select no pase el password
    password: { type: String, select: false, required: true },
    signupDate: { type: Date, default: Date.now(), required: true },
})

// UserSchema.pre('save', function(next) {

//     //creo la variable user y le doy el valor de this, que en este caso es el UserSchema
//     let user = this

//     if (!user.isModified('password')) return next()

//     //else 
//     bycryps.genSalt(10, )
// })

module.exports = mongoose.model('User', UserSchema)