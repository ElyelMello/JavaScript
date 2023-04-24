const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const nomeMes = numeroMes => "O nome do mês referente ao número é: ".concat(meses[numeroMes - 1]).concat(".");

console.log(nomeMes(1));
console.log(nomeMes(2));
console.log(nomeMes(3));
console.log(nomeMes(4));
console.log(nomeMes(5));
console.log(nomeMes(6));
