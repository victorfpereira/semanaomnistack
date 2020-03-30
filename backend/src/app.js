const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

//criando aplicação
const app = express();

//para que todos os fronts acessem o back
app.use(cors());

app.use(express.json());
//Usando as rotas importadas
app.use(routes);

app.use(errors());

module.exports = app;