let plano = "C";
let salario = 1200;

plano = plano.toUpperCase();

switch(plano) {

    default:
        console.log("Plano inválido.");
        break;

    case "A":
        console.log(`Seu plano é o A. Seu salário irá de ${salario} para ${salario*1.1}.`);
        break;

    case "B":
        console.log(`Seu plano é o B. Seu salário irá de ${salario} para ${salario*1.15}.`);
        break;
    
    case "C":
        console.log(`Seu plano é o C. Seu salário irá de ${salario} para ${salario*1.2}.`);
        break;
}