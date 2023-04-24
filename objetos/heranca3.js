const pai = {nome: "João", corCabelo: "Preto"};

const filha1 = Object.create(pai);
filha1.nome = 'Bia';

console.log(filha1.corCabelo);
console.log(filha1.nome);

const filha2 = Object.create(pai, {nome:{value: 'Júlia', writable: false, enumerable: true}});

console.log(filha2.nome);

console.log("Chaves: ");
console.log(Object.keys(filha1));
console.log(Object.keys(filha2));