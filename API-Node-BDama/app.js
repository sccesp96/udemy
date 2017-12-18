const express = require('express')
    // creo una variable y le doy la funcionalidad express
const app = express()

const router = require('./routes/routes')

const bodyParser = require('body-parser')

// para el allow error
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// necesito el bodyparser para poder coger las peticiones del body del post,etc si no me da error de que no se cogen las variables
// al hacer la consulta 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', router)
module.exports = app