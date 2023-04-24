function ladosTriangulo(a, b, c){
    let classificacao;
    if((a != b && a != c) && (c != b)){
      classificacao = "O triângulo é escaleno!";
    }else if (a == b && a == c){
        classificacao = "O triângulo é equilátero!";
    }else if ((a == b && a != c) || (a == c && a != b) || (c == b && c != a)){
        classificacao = "O triângulo é isóceles!";
    }

    return console.log(classificacao);
}

ladosTriangulo(10, 30, 30);