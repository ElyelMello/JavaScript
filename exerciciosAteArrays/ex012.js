const fatorial = (numero) => {
    let fatorial = numero;
    for(let i = (numero - 1); i > 0; i--) {

        fatorial = fatorial * i;
        
    }

    return fatorial;

}


console.log(fatorial(7))