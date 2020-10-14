//crearemos la coneccion con mondodb gracias a mongoose
const mongoose = require('mongoose')
    //establecemos una variable que es la dirección de la bd
URI = ('mongodb://localhost/firstDB')
    //mandamos a llamar la base de datos 
mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    })
    //mensaje en caso de conectarse o no 
    .then(db => console.log('Conexión exitosa!'))
    .catch(error => console.log(error))

module.exports = mongoose