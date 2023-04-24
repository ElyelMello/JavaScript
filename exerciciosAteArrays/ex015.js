
console.log("Temos os seguintes modelos: \n 1 - Gol \n 2 - Gol Bolinha \n 3 - Santana \n 4 - Hatch")
let modelo = "Gol";

modelo = modelo.toLowerCase();


switch(modelo) {

    default:
        console.log("Não trabalhamos com esse modelo aqui.");
        break;

    case "hatch":
        console.log("Compra efetuada com sucesso!");
        break;
    
    case "gol":
        console.log("Tem certeza que não prefere o nosso modelo Hatch 2010?");
        break;
    
    case "gol bolinha":
        console.log("Tem certeza que não prefere o nosso modelo Hatch 2010?");
        break;

    case "santana":
        console.log("Tem certeza que não prefere o nosso modelo Hatch 2010?");
        break;

}