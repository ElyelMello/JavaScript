const alunos = [
    {nome: "João", nota: 7.3, bolsista: false},
    {nome: "Maria", nota: 9.9, bolsista: true},
    {nome: "Mário", nota: 4.9, bolsista: true},
    {nome: "Roberta", nota: 1.9, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){

    console.log(acumulador, atual);
    return acumulador + atual;
})

// desafio 1: são todos bolsistas?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista;

console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));

const algumBolsista = (resultado, bolsista) => resultado || bolsista;

console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
