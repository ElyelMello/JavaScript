function divisaoResto(dividendo, divisor){
    let mensagem;

    mensagem = `O resultado da divisão entre o denominador e o numerador inseridos, respectivamente, é: ${(divisor/dividendo).toFixed(2)}. O resto da divisão entre esses valores é: ${divisor % dividendo}.`;


    return mensagem;
}

console.log(divisaoResto(2, 5));

console.log(divisaoResto(5, 50));