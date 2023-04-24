function baskara(a, b, c) {
    let delta = b**2 - 4*a*c;

    if(delta < 0 ){
        delta = delta * -1;
    }

    let raiz1 = (-b + Math.sqrt(delta)) / (a * 2);
    let raiz2 = (-b - Math.sqrt(delta)) / (a * 2);

    let mensagem = `As raízes da função de segundo grau são: ${(raiz1).toFixed(2)}, ${(raiz2).toFixed(2)}. `;

    return mensagem;
}

console.log(baskara(2, 4, 5));