function meuObjeto(){}

console.log(meuObjeto.prototype);

const obj1 = new meuObjeto;
const obj2 = new meuObjeto;

console.log(obj1.__proto__ === obj2.__proto__);