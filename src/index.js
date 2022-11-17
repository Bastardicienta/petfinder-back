require('dotenv').config();
const {faker} = require('@faker-js/faker');

const app = require('./app')
require('./database');

app.get('/', (req, res) => {
    res.send('Server run on express')
});

app.get('/new-route', (req, res) => {
    res.send('This is a new route')
});

app.get('/mascotas', (req, res) => {
    res.json([
        {
          name: "Firulais",
          slug: "firulais",
          tipo: "Perro",
          raza: "Pitbull americano",
          sexo: "Masculino",
        }, //Slug: identificador como palabra clave del objeto.
        {
          name: "Sandy",
          slug: "sandy",
          tipo: "Gato",
          raza: "Angora",
          sexo: "Femenino",
        },
        {
          name: "Sombra",
          slug: "sombra",
          tipo: "Gato",
          raza: "Persa",
          sexo: "Masculino",
        },
      ]);
    
});

app.get("/mascotas/:name", (req, res) => {
    const { name } = req.params.name;
    res.json({
      name,
      name: "sombra",
      tipo: "Gato",
    });
});

//Ejemplo endpoint de paginación
app.get('/users', (req, res) => {
    const {limit, offset} = req.query;
    if (limit && offset) {
        res.json({
            limit,
            offset
        });
    }
    else{
        res.send('No llegaron parámetros');
    }
});

//Ejemplo de endpoint usando Faker

app.get('/lugares', (req, res) => {
    const lugares = [];
    const { size } = req.query;
    const limit = size || 5;
    for (let index = 0; index < limit; index++) {
        lugares.push({
            name: faker.locales.es_MX,
            image: faker.image.city,
        });
    }
    res.json(lugares);
});

//Promesa para correr el servidor
async function main() {
    await app.listen(app.get('port'));
    console.log('Server run on port ' + app.get('port')); 
}

main();