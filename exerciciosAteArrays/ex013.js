let dia = 15;
let diaUtilOuNao;
if(dia % 7 == 0 || dia % 8 == 0 || dia == 1 || dia % 7 == 1){
    diaUtilOuNao = "Não";
}else{
    diaUtilOuNao = "Sim";
}

switch (diaUtilOuNao) {

    case "Sim":
        console.log("É dia útil, vá trabalhar!");
        break;
    
    case "Não":
        console.log("Não é dia útil, pode descansar. Aproveita o final de semana.");
        break;
}
