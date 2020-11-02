const Encomenda = require ('../models/encomenda');
const verificarSeEncomendaJaExiste = require('../functions/verificarSeEncomendaJaExiste');


function atualizarStatusEncomenda(encomendaObj, res){
    verificarSeEncomendaJaExiste(encomendaObj, res, resultadoSeEncomendaExiste)
}

function resultadoSeEncomendaExiste(res, encomendaObj){
    return function(err, encomenda){
        if (err){
            res.status(500).send({message: "Erro ao consultar encomenda"});
            return;
        }
        if(encomenda[0].status != encomendaObj.status){
            // encomenda[0].status = encomendaObj.status;
            // encomenda[0].save()
            // console.log('pendurado aqui');
            var atualizarEncomenda = Encomenda;
            var query = {codigo: encomendaObj.codigo};
            console.log('pendurado aqui porra');
            atualizarEncomenda.findOneAndUpdate(query, {status: encomendaObj.status},{}, resultadoAtualizacaoEncomenda(res));
            // atualizarEncomenda.update({codigo: encomendaObj.codigo});
        }else{
            res.status(200).send({message: "Encomenda já está no status desejado"});
            return;
        }
    }
}

function resultadoAtualizacaoEncomenda(res){
    return function (err, encomenda){
        if (err){
            res.status(500).send({message: "Erro ao atualizar encomenda"});
            return;
        }
        res.status(200).send(encomenda);
    }
}

module.exports = atualizarStatusEncomenda;