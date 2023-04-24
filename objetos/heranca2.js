const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        }else{
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual} Km/h de ${this.velMax}Km/h.`;
    }
 
}

const ferrari  = {
    modelo: "F40",
    velMax: 324 //shadowing
}

const volvo = {
    modelo: "V40",
    status(){
        return `${this.modelo}: ${super.status()}`; // sombreando a função status
    }
}


Object.setPrototypeOf(ferrari, carro); // estabelece relação entre ferrari e carro(protótipo de ferrari)
Object.setPrototypeOf(volvo, carro);