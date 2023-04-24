function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {

    let montante = (capitalInicial * (taxaJuros) * tempoAplicacao);

    let mensagem = `Com o capital inicial de ${(capitalInicial).toFixed(2)} e tempo de aplicação de ${tempoAplicacao}, o montante recebido ao final do prazo, sob regime de juros simples, é de: R$${(montante + capitalInicial).toFixed(2)}`;

    return mensagem;
}

console.log(jurosSimples(1000, 0.01, 5));

console.log();

function jurosCompostos (capitalInicial, taxaJuros, tempoAplicacao) {

    let montante = capitalInicial*(1+taxaJuros)**tempoAplicacao
    
    let mensagem = `Com o capital inicial de ${(capitalInicial).toFixed(2)} e tempo de aplicação de ${tempoAplicacao}, o montante recebido ao final do prazo, sob regime de juros compostos, é de: R$${(montante).toFixed(2)}`;

    return mensagem;

}

console.log(jurosCompostos(1000, 0.01, 5));