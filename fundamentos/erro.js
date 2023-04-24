function tratarErroELancar(erro){
    throw new Error('... mensagem de erro');
}


function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase(),'!!!');
    }catch (e){
        tratarErroELancar(e);
    }finally{
        console.log("Esse bloco de código vai executar de qualquer jeito.")
    }
    
}

const obj = {nome: 'Elyel'}
imprimirNomeGritado(obj.nome);