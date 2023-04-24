function formataMoeda(valor){

    valor = valor.toFixed(2);

    valor = valor.toString().replace('.', ',');
    console.log(valor);
}

formataMoeda(0.5000);
formataMoeda(0.30000000000000000000000005);