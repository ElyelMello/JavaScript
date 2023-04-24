const fabricante = ['mercedes', 'audi', 'bmw'];

function imprimirNome(nome, indice){
    console.log(`${indice + 1}. ${nome}`);
}

fabricante.forEach(imprimirNome)