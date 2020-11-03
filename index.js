var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/encomendas', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('logado');
});

var consultarEncomenda = require('./routes/consultarEncomenda');
var cadastrarEncomenda = require('./routes/cadastrarEncomenda');
var atualizarStatusEncomenda = require('./routes/atualizarStatusEncomenda');



app.get('/', (req, res) => {
    res.send('Hello App');
})

app.get('/encomenda/:codigo', (req, res) => {
  var codigo = req.params.codigo;
  consultarEncomenda(codigo, res);
})

app.post('/encomenda/:nome/:codigo', (req,res) => {
  var nome = req.params.nome;
  var codigo = req.params.codigo;
  cadastrarEncomenda({nome: nome, codigo: codigo}, res);
})

app.post('/encomenda/status/:codigo/:status', (req, res) => {
  var codigo = req.params.codigo;
  var status = req.params.status;
  if(status > 4 || status < 1)
    res.status(500).send({message: "Status inválido, utlize valores entre 1 e 4"});
  else
    atualizarStatusEncomenda({codigo: codigo, status: status}, res);
})

const server = app.listen(3000, () => {
    console.log('Aplicação rodando na porta 3000');
});

module.exports = server;