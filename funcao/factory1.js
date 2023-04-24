const prod1 = {
    nome: 'Arroz',
    preco: 13.99
}

function criarPessoa(nome, sobrenome){
    return{
        nome: nome,
        sobrenome: sobrenome
    }
}

console.log(criarPessoa("Elyel", "Mello"));
console.log(criarPessoa());