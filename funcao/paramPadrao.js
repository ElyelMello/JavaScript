//Estratégia 1 para usar valor padrão como variável

function soma1(a, b, c){
    a = a || 1;
    b = b || 2;
    c = c || 3;

    return a + b + c;
}

console.log(soma1());
console.log(soma1(1, 5))

function soma2(a=0, b=0){
    return a+b;
}

console.log(soma2());