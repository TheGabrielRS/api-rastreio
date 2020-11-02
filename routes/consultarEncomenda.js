const Encomenda = require ('../models/encomenda');
const statusEncomenda = require('../functions/statusEncomendaExterno');


function consulta(res){
    return function(err, encomendas){
        if (err){
            console.log('error occured');
            return;
        }
        var encomenda = encomendas[0];
        if(encomenda != undefined){
            res.status(200).send({codigo: encomenda.codigo, nome: encomenda.nome, status: statusEncomenda(encomenda.status)});
        }else{
            res.status(404).send();
        }
        // console.log(encomenda);
    }
}

function consultarEncomenda(codigoEncomenda, res){
    var encomendaConsultada = Encomenda;
    encomendaConsultada.find({codigo : codigoEncomenda},consulta(res));
}

module.exports = consultarEncomenda;