const saudacao = 'opa'; // contexto léxico 1

function exec(){
    const saudacao = "EAE"; //Contexto léxico 2
    return saudacao;
}

const cliente = {
    nome: 'Elyel',
    idade: 25,
    peso: 63,
    endereco: {
        logradouro: 'Rua tri',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente['endereco']);
