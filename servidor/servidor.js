const express = require('express');
const servestatic = require('serve-static');
const path = require('path')
const cors = require('cors')

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//servir archivos
const ruta = path.join(__dirname, 'peliculas')
app.use(servestatic(ruta))

app.get('/helloworld', (request, response) => {
    console.log(request.query);
    response.send(request.query);
})

app.post('/helloworld', (request, response) => {
    console.log(request.body);
    response.send(request.body);
})

//arrancar el servidor :)
app.listen(3030, ()=>{
    console.log('Soy el servidor de videos :)')
})