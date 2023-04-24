function compararJogos(listaPontuacao) {

    maior = Math.max.apply(null, listaPontuacao);
    menor = Math.min.apply(null, listaPontuacao);

    let indexMin = listaPontuacao.indexOf(menor);
    let numOcorrencia = 0;
    for(max of listaPontuacao){
        if(max == maior){
            numOcorrencia += 1;
        }
    
    }
    return [numOcorrencia, indexMin];


}

let temporada = [10, 15, 20, 12, 30, 30, 30, 1];
console.log(compararJogos(temporada));