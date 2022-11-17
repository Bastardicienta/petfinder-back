const express =  require('express');
const datafull = require('../data.json')
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/mascotas', (req, res) => {
    res.send(datafull.mascotas);
})

//Configuraciones
app.set('port', process.env.PORT || 5050)


//Middlewares

//Routes

module.exports = app;