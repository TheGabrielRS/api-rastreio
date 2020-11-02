module.exports = function statusExterno(status){
    switch(status){
        case 1:
            return "Postado no destino";
        case 2:
            return "A caminho";
        case 3:
            return "Chegou ao destino";
        case 4:
            return "Erro na entrega, nova tentativa será realizada"
    }
}