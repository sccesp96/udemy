// genera una clave secreta random
const uuidV4 = require('uuid/v4');
module.exports = {
    port: process.env.PORT || 3001,
    db: process.env.MONGODB || 'mongodb://localhost:27017/amaApp',
    SECRET_TOKEN: uuidV4()
}