const express = require('express');
const cors = require('cors');
const routes = require('./routes');

//criando aplicação
const app = express();

//para que todos os fronts acessem o back
app.use(cors());

app.use(express.json());
//Usando as rotas importadas
app.use(routes);

//Qual porta vai estar no navegador
app.listen(3333);