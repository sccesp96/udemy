// importo el modelo product que he creado en models
const Product = require("../models/product");

function getProduct(req, res) {

    // creo la variable productId y le doy el valor que le paso por parametro con nombre productId
    let productId = req.params.productId;

    // utilizo la funcion de mongoose findbyid para buscar un producto por id,
    // le paso por parametro la variable superior y hago una arrow function
    // que tendrá como parametros de respuesta el error y el product si no hay error
    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({ message: 'Error al realizar la preticion' })
        if (!product) res.status(404).send({ message: 'El producto no existe' })
            //esto de abajo es el else al ser una linea solo se puede hacer asi
        res.status(200).send({ product })

    });

}



function getProducts(req, res) {
    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({ message: 'Error al realizar la preticion' })
        if (!products) res.status(404).send({ message: 'No existen productos' })

        res.status(200).send({ products })
    })
}


function saveProduct(req, res) {
    // el product es el modelo que he creado y obligará
    // a tener el formato que le he dado en el model
    // es parecido a una interfaz de java
    let product = new Product();
    // relleno cada campo el product con los parametros
    // que me vienen en el body de la peticion post
    product.name = req.body.name;
    product.picture = req.body.picture;
    product.price = req.body.price;
    // el category tiene qeu ser uno de los 3 valores
    // que le he dado en el model, si no no funcionará
    product.category = req.body.category;
    product.description = req.body.description;

    // es la funcion para guardar el producto en la bd, la funcion creará ella sola un id para el producto que lo identifique
    product.save((err, productoGuardado) => {
        // como elif es de una linea lo puedo hacer asi
        if (err)
            res.status(500).send({ message: `Error al guardar los datos: ${err}` });

        // esto de abajo es el else pero al ser de una linea no hace falta poner el else
        res.status(200).send({ product: productoGuardado });
    })
}


function updateProduct(req, res) {
    // Por url le paso el id del objeto que quiero actualizar

    let productId = req.params.productId
        // Por el body de la peticion le quiero los cambios que quiero, ej: postman
        // body params:  price: nuevoprecio nombre: nuevonombre      le puedo pasar los parametros que quiera ya que lo coge  como un json creo
        // y al pasarlo como parametro del findbyIdAndUpdate lo entiende
    let update = req.body

    Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
        if (err) res.status(500).send({ message: `Error al actualizar el producto ${err}` })

        res.status(200).send({ message: 'Producto actualizado' })
    })

}

function deleteProduct(id) {
    let productId = req.params.productId
    Product.findById(productId, (err, product) => {
        if (err) res.status(500).send({ message: `Error al recibir el producto ${err}` })

        product.remove(err => {
            if (err) res.status(500).send({ message: `Error al borrar el producto ${err}` })
                //else lo de abajo
            res.status(200).send({ message: 'Producto eliminado' })

        })
    })
}

module.exports = {
    getProduct,
    saveProduct,
    getProducts,
    updateProduct,
    deleteProduct
}