const mongoose = require('mongoose');
var buscaSchema = require('./buscaSchema');

const schema = new mongoose.Schema({ nome: 'string', codigo: 'string', status: 'number' });
const nomeSchema = 'Encomenda'

var Encomenda = buscaSchema(nomeSchema, schema)

// if (mongoose.models.Encomenda) {
//     Encomenda = mongoose.model('Encomenda');
// } else {
//     Encomenda = mongoose.model('Encomenda', schema);
// }

module.exports = Encomenda;