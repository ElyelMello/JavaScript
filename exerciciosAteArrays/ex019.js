const comprandoLanches = (codigo, quantidade) => {
    switch(codigo){
        default:
            console.log("Código inválido.");
            break;
        case 100:
            console.log(`O valor a ser pago será: R$${(3.00*quantidade).toFixed(2)}.`);
            break;
        case 200:
            console.log(`O valor a ser pago será: R$${(4.00*quantidade).toFixed(2)}.`);
            break;
        case 300:
            console.log(`O valor a ser pago será: R$${(5.50*quantidade).toFixed(2)}.`);
            break;
        case 400:
            console.log(`O valor a ser pago será: R$${(7.50*quantidade).toFixed(2)}.`);
            break;
        case 500:
            console.log(`O valor a ser pago será: R$${(3.50*quantidade).toFixed(2)}.`);
            break;
        case 600:
            console.log(`O valor a ser pago será: R$${(2.80*quantidade).toFixed(2)}.`);
            break;
    }
}

comprandoLanches(500, 3);