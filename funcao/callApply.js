function getPreco(imposto = 0.1, moeda = 'R$'){
    return `${moeda}${this.preco * (1-this.desc) * (1+imposto)}`
}


const produto = {
    nome: "notebook",
    preco: 4689,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())