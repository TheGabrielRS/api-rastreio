const Encomenda = require ('../models/encomenda');

module.exports = function verificarSeEncomendaJaExiste(encomendaObj, res, callback){
    var encomendaConsultada = Encomenda;
    encomendaConsultada.find({codigo : encomendaObj.codigo},callback(res, encomendaObj));
}