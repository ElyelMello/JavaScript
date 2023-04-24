function Aula(nome, videoId){
    this.nome = nome

    this.video = videoId
}

const aula1 = new Aula('Bem vindo', 123);
const aula2 = new Aula('Até breve', 456);

console.log(aula1, aula2)


function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params) 
    return obj
}

const aula3 = novo(Aula,'Bem vindo a aula 3', 999 )

console.log(aula3);