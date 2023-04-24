//forma literal

function fun1(){

}

//armazenar em uma variável

const func2 = function (){}


//armazenar em um array

const arr = [function(a, b){ return a+b}, fun1, func2];

console.log(arr[0](4, 5));