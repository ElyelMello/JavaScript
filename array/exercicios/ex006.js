const retornoEstranho = function(argumento){
    if(typeof argumento == 'boolean'){
        if(argumento == true){
            argumento = false;
        }else{
            argumento = true;
        }
    }else if(typeof argumento == Number){
        argumento = argumento * (-1);
    }else{
        frase = "Boolean ou Number esperado. O valor passado é do tipo ".concat(typeof argumento).concat(".");
        return frase;
    }

    return argumento;

}

console.log(retornoEstranho(true));
console.log(typeof 1 === Number);