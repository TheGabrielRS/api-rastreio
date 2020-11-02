const Encomenda = require ('../models/encomenda');
const verificarSeEncomendaJaExiste = require('../functions/verificarSeEncomendaJaExiste');

function cadastrarEncomenda(encomendaObj, res){
    verificarSeEncomendaJaExiste(encomendaObj, res, cadastrarOuInformarSeJaExiste); 
}

function cadastrarOuInformarSeJaExiste(res, encomendaObj){
    return function(err, encomenda){
        if (err){
            res.status(500).send({message: "Erro ao cadastrar encomenda"});
            return;
        }else if(encomenda[0] != undefined){
            res.status(500).send({message: "Erro ao cadastrar encomenda, código em uso"});
            return;
        }
        var novaEncomenda = Encomenda;
        novaEncomenda.create({nome: encomendaObj.nome, codigo: encomendaObj.codigo, status: 1}, resultadoDoCadastroDaEncomenda(res));
    }
}

function resultadoDoCadastroDaEncomenda(res){
    return function (err, encomenda){
        if (err){
            res.status(500).send({message: "Erro ao cadastrar encomenda"});
            return;
        }
        res.status(200).send(encomenda);
    }
}

module.exports = cadastrarEncomenda;