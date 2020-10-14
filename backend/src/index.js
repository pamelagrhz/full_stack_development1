const express = require('express')
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');
require('./database')

const app = express();
//Arranque de servidor
app.set('Port', 4000);

//Start server
app.listen(app.get('Port'), () => {
    console.log('Escuchando el puerto: ', app.get('Port'))
})