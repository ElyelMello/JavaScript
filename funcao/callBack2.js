const notas = [7.7, 7.6, 5.6, 9.0, 3.7, 2.5];

//SEM CALLBACK
let notasBaixas = [];

for(let nota of notas){
    if(nota < 7){
        notasBaixas.push(nota);
    }
}

console.log(notasBaixas);

//USANDO CALLBACK

notasBaixas = notas.filter(function(nota){
    return nota < 7;
})

console.log(notasBaixas);