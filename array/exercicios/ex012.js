const objetoNovo = (obj, atributoASerRetirado) => {
    let novoObj = Object.assign(obj);

    delete novoObj[atributoASerRetirado];

    return novoObj;
}

const obj = {
    nome: "Elyel",
    idade: 26,
    estado: "Rio Grande do Sul"
}

console.log(objetoNovo(obj, "estado"));
console.log(objetoNovo(obj, "idade"))

console.log(obj)