// libreria que hay que instalar para crear el token
const jwt = require('jwt-simple')

// libreria que ayuda con las fechas hay que instalarla
const moment = require('moment')

const config = require('../config')

function createToken(user) {
    const payload = {
        // sub se pone el id del usuario
        // para que fuera una api mas segura este id no dbeeria de ser el de mongo db
        // pero en el tutorial lo ponen igual para reducir la complejidad delt tutorial
        sub: user._id,
        // momento creado token, la libreria con esta funcion
        // da la fecha actual en formato unix
        iat: moment().unix(),
        // momento expiacion token con moment con la siguiente funcion hago que caduque en 14 dias
        exp: moment().add(14, 'days').unix,
    }

    return jwt.encode(payload, config.SECRET_TOKEN)
}

function decodeToken(token) {
    // el decode sera una promesa, el resolve seria el paraetro cuando se cumple
    // el reject cuando hay algun error, los resolve los recogera el then cuando se llamea a la promesa
    // y los rjeect el catch de cuando se llame a la promesa que se llama cando se llama  ala funcion decodetoken
    const decoded = new Promise((resolve, reject) => {
            try {

                //creo un payload que es la decodificaicon de ese token
                //le paso como param el token recibido y el secret token que tengo
                //almacenado en el servidor para decoficarlo el token al decodificarlo ya trae el payload.exp 
                const payload = jwt.decode(token, config.SECRET_TOKEN)

                //compruebo que el token no este caducado
                // si la fecha de expiacion es menor o igual que la fecha actual significara 
                // que el token ha caducado
                if (payload.exp <= moment().unix()) {
                    // el reject sera el metodo que luego entre en el catch
                    reject({
                        status: 401,
                        message: 'El token ha expirado'
                    })
                }
                //else 
                // el resolve será el metodo que entre en el try
                // el payload.sub contiene el id del usuario
                resolve(payload.sub)


            } catch (err) {
                reject({
                    status: 500,
                    message: 'Invalid Token'
                })
            }
        })
        // devuelve el token decodificado que es la promera
    return decode
}

module.exports = { createToken, decodeToken }