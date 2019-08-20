function calcula(){
    var produto, categoria, tipo, situacao, limpeza, alimentacao, vestuario; 

    produto = Number (document.getElementById("produto").value);
    categoria = Number (document.getElementById("categoria").value);
    tipo = Number (document.getElementById("tipo").value);

    switch (categoria) {

        case 1: 
        if (produto <= 25) {
            limpeza = produto + (produto*5/100)
            situacao = "O valor do produto de limpeza com o aumento é de " + limpeza;
            break;
        }

        case 2:
        if (produto <= 25) {
            alimentacao = produto + (produto*8/100)
            situacao = "O valor do produto de alimentação com o aumento é de " + alimentacao; 
            break;
        }

        case 3:
        if (produto <= 25) {
            vestuario = produto + (produto*10/100)
            situacao = "O valor do produto de vestuário com o aumento é de " + vestuario;
            break 
        }

        case 4:
        if (produto > 25) {
            limpeza = produto + (produto*12/100)
            situacao = "O valor do produto de limpeza com o aumento é de " + limpeza;
            break;
        }

        case 5:
        if (produto > 25) {
            alimentacao = produto + (produto*15/100)
            situacao = "O valor do produto de alimentação com o aumento é de " + alimentacao; 
            break;
        }

        case 6: 
        if (produto > 25) {
            vestuario = produto + (produto*18/100)
            situacao = "O valor do produto de vestuário com o aumento é de " + vestuario;
            break;
        }
    }

    switch (tipo) {
        
    }
