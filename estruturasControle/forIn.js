const notas = [5, 7, 8, 3];

for (i in notas) {
    console.log(`${notas[i]}`);
}

const pessoa = {
    nome: 'Elyel',
    idade: 25,
    ocupacao: 'Programador'
}
console.log("Informações sobre a pessoa: ");
for (const i in pessoa) {
        console.log(`${i}: ${pessoa[i]}`);
}