function verificaNumero(array){
    let numeros = [];

    for(let item of array){
        if(typeof item == "number"){
            numeros.push(item);
        }
    }

    return numeros;
}

const arr = [12, "Elyel", 2];

console.log(verificaNumero(arr));