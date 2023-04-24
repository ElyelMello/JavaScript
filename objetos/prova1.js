function main(input){

        const lista = input.split(' ');
        console.log(lista);

        //const tipo = lista.group(type => type);
        //console.log(tipo);

        var result = lista.reduce((x, y) => {

            (x[y] = x[y] || []).push(y);

            return x;

        }, {});

        let retorno = [];
        for(let palavra in result){

            let valores = result[palavra];
            console.log(valores);

            if(valores.length > 1){
                retorno.push(valores[0]);
            }
        }

        console.log(retorno.join(' '))

}

main('cat batman latt matter cat matter cat');

