var mongoose = require('mongoose');

function buscaSchema(nomeSchema, schema){
    if (mongoose.models.Objeto) {
        Objeto = mongoose.model(nomeSchema);
    } else {
        Objeto = mongoose.model(nomeSchema, schema);
    }    
    return Objeto;
}
module.exports = buscaSchema;