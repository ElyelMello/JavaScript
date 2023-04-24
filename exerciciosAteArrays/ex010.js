function divisivelPorTres (numeroInteiro){
    if(numeroInteiro % 3 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(divisivelPorTres(9));
console.log(divisivelPorTres(19));
console.log(divisivelPorTres(9*3));