const obj1 = {}

const obj2 = new Object;

//função construtora

function Produto(nome, preco, desc){
    this.nome = nome;
    this.preco = preco;
    this.getPrecoComDesconto = () => {
        return (preco * (1 - desc));
    }
}