const express = require('express');
const servestatic = require('serve-static');
const path = require('path')
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json())

app.use(servestatic(path.join(__dirname, 'peliculas')))

app.get('/helloworld', (request, response) => {
    console.log(request.query);
    response.send(request.query);
})

app.post('/helloworld', (request, response) => {
    console.log(request.body);
    response.send(request.body);
})

app.listen(3030, ()=>{
    console.log('Soy el servidor de videos :)')
})