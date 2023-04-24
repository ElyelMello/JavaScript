const dentroIntervalo = (numero, minimo, maximo, entre) => {

    if(numero > minimo && numero < maximo){

        entre = true;

    }else{
        
        entre = false;

    }

    return entre;

}

console.log(dentroIntervalo(10, 50, 100));
console.log(dentroIntervalo(16, 100, 160));
console.log(dentroIntervalo(3, 3, 100));