// 'use strict'
// importo config que es el archivo donde tengo las variables de configuracion
const config = require('./config')

const app = require('./app')

// installo mongoose con el npm que sirve para poder conectarse a mongodb, no es el oficial pero en el tutorial que vi usaban este
const mongoose = require("mongoose");

// importo bodyParser que es una libreria que se usa en express
// paracontrolar mejor las peticiones http,etc se tiene que instalar
// a parte con npm
const bodyParser = require("body-parser");



conectarDB();
iniciarServidor();


// los  delete  y get se tienen que pasar por url los parametros no por el body como con el post en nodejs al haberle puesto /api/product/:productId 
// para hacerlo la url seria localhost:3000/api/product/idquesea


function conectarDB() {
    // CONEXION A LA BD CON MONGOOSE pongo_promise porque es una promesa
    var mongoDB_promise = mongoose.connect(config.db, {
        useMongoClient: true
    });

    // Get Mongoose to use the global promise library
    mongoose.Promise = global.Promise;
    //Get the default connection
    var db = mongoose.connection;

    //Bind connection to error event (to get notification of connection errors)
    db.on("error", console.error.bind(console, "MongoDB connection error:"));

}

function iniciarServidor() {
    // configuro bodyparser en la variable app
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // inciio el servidor express , le doy el puerto 3000 y lo que quiero que haga cuando se ejecute
    app.listen(config.port, () => {
        console.log("API REST");
    });
}