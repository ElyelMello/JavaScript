const primeiroEUltimo = arr => {
    let retorno = [];

    retorno.push(arr[0]);
    retorno.push(arr[arr.length - 1]);

    return retorno;
}
let arr = [1, 2, 3, 1000];
console.log(primeiroEUltimo([1, 2, 3, 1000]))
