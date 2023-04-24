const sequencia = {
    _valor: 1, //convenção para dizer que essa variável é pretendida a ser acessada apenas internamente

    get valor(){
        return this._valor++;
    },

    set valor(valor){
        this._valor = valor;
    }
}