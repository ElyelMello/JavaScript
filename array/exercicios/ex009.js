const repetir = (numeroARepetir, vezesRepetir) => {
    let retorno = "";
    for(let i = 0; i < vezesRepetir; i++){

        retorno = retorno.concat(` ${i + 1}:`).concat(numeroARepetir).concat(".");

    }
    return retorno;
}

console.log(repetir(5, 2));