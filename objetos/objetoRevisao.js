const produto = new Object

produto.nome = "Arroz";
produto['preco'] = 13.50;

console.log(produto);

delete produto.nome;

console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56
    }
}

console.log(carro.proprietario.nome)