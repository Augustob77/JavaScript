function calcula(){
    let cod = [];
    let estoque = [];
    let i;

    //Entrada de dados

    for(i=0; i<=10; i++){

        cod.push(Number(prompt("Informe o código do produto")));
        estoque.push(Number(prompt("Informe a quantidade de produtos")));
    }

    //Processamento

    let cliente = Number(prompt("Informe o cód do cliente"));

    while(cod != 0){
        let codProduto = Number(prompt("Informe o cód do produto"));
        let quantiProduto = Number(prompt("Informe a quantidade do produto"));
        let auxPosicao = cod.indexOf(codProduto)
        if(auxPosicao == -1){    //Não exise no vetor
            alert("Produto não existe")
        } 
        else{
            if(estoque[auxPosicao] - quantiProduto >= 0){
                estoque[auxPosicao] = estoque[auxPosicao] - quantiProduto
                alert("Produto comprado com sucesso")
            }
            else{
                alert("Não tem estoque")
            }
        }
        cliente = Number(prompt("Informe um novo cód do cliente." + " Digite 0 para encerrar o programa"));
    }
    //Saída de dados
    
    alert("Estoque atualizado" + estoque);
}
    
        

    
    