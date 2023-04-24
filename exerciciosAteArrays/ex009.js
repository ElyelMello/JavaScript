function verificaNota(nota) {
    let verifica = nota;
    let notaFinal = 0;

    if(nota > 38){

        while(verifica % 5 != 0){
            verifica += 1;
        }
    
        let arredonda = verifica - nota;
    
        if(arredonda < 3){
            notaFinal = verifica;
        }else{
            notaFinal = nota;
            return `REPROVADO! nota final: ${notaFinal}`;
            
        }
    }else{
        notaFinal = nota;
        return `REPROVADO! Nota final: ${notaFinal}`;
       
    }

    if(notaFinal >= 40){
        return `APROVADO! Nota final: ${notaFinal}`;
    }

}

console.log(verificaNota(48));
console.log(verificaNota(37));