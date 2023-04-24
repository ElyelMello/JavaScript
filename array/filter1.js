const produtos = [
    {nome: "notebook", preco: 2499, fragil: true},
    {nome: "iPad Pro", preco: 4199, fragil: true},
    {nome: "Copo Vidro", preco: 12.50, fragil: true},
    {nome: "Copo Plástico", preco: 18.99, fragil: false}
]

const caro = produto => produto.preco >= 500;
 
const fragil = produto => produto.fragil;

console.log(produtos.filter(caro).filter(fragil))