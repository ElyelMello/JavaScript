const salarioTotal = (salarioHora, diasTrabalhados) => "Salário do mês: R$".concat(salarioHora * diasTrabalhados).concat("."); 

console.log(salarioTotal(150, 40));