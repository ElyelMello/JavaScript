function pessoa (parametroConstrutor ){
    this.nome = parametroConstrutor;

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new pessoa('Elyel');

p1.falar();