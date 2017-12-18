//fichero donde va la aplicacionen si 

// EN EL JSON PACKAGE.JSON EN SCRIPTS LO COMENTO AQUI YA QUE COMENTANDO EL PACKAGE.JSON DA ERRROR
// añado el start para hacer que cuando hago npm start (con esto ejecuto el servidor con npm start en vez de con node index.js
// ya que node index.js lo que hacia era ejectutarme el archivo index.js y en el archivo es donde está el codigo para montar el servidor express
// ahora el index.js lo ejecuto haciendo un script en el json que haga el codigo nodemon index.js que tmb ejecuta el fichero index.jspero ahora con nodemon)
// el servidor el index.js se ejecute con la libreria nodemon
// que sirve para no tener que reiniciar el serv cada vez que hago cambios
// hay que instalarla a parte tmb

// importo express en una variable
const express = require("express");
// necesito el bodyparser para poder coger las peticiones del body del post,etc si no me da error de que no se cogen las variables
// al hacer la consulta 
const bodyParser = require('body-parser')

// importo las rutas, como el archivo dentro es index.js se importa directamente
// al ser index.js no hace falta indicarle el nombre
const router = require('./routes')

// creo una variable y le doy la funcionalidad express
const app = express();


// los  delete  y get se tienen que pasar por url los parametros no por el body como con el post al haberle puesto /api/product/:productId 
// para hacerlo la url seria localhost:3000/api/product/idquesea

// los  delete  y get se tienen que pasar por url los parametros no por el body como con el post al haberle puesto /api/product/:productId 
// para hacerlo la url seria localhost:3000/api/product/idquesea


// necesito el bodyparser para poder coger las peticiones del body del post,etc si no me da error de que no se cogen las variables
// al hacer la consulta 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// le digo que para entrar primero tiene que llevar el /api y luego /rutaquesea que es lo que esta en el fichero de rutas
// el router es como llamo a la importacion del fichero de rutas, MIRAR FICHERO RUTAS PARA ENTENDER BIEN
app.use('/api', router)
module.exports = app