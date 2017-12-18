// importo mongoose
const mongoose = require('mongoose')
    // importo schema de mongoose que seria como una tabla creo
const Schema = mongoose.Schema

// creo el formato de este schema y le doy nombre 
const ProductSchema = Schema({
    name: String,
    picture: String,
    price: { type: Number, default: 0 },
    // el enum es que solo puede tener esos valores que le paso en el array
    // si le introduzco un valor que no sea uno d eesos 3 no se podria 
    category: { type: String, enum: ['computers', 'phones', 'accesories'] },
    description: String
})

// Hago que ahora pueda importar este schema en otro sitio con el nomrbre product
module.exports = mongoose.model('Product', ProductSchema)