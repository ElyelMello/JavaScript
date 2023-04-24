const simboloMais = quantidade => {
    let string = "";

    for(let i = 0; i < quantidade; i++){
        string = string.concat("+");
    }
    return string;
}

console.log(simboloMais(5))