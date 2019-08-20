function calcula(){
    var acao="";
    var pcompra, pvenda, lucro, lucrot= 0;
    var sup=0; var inf=0;

    acao= prompt("Digite a letra para representar a ação");

    do{
        compra = Number(prompt("Informe o preço de compra da ação"));
        venda = Number(prompt("Informe o preço de venda da ação"));

        lucro = pvenda - pcompra;

        alert("O lucro da compra foi de: " + lucro);
        acao = String(prompt("Digite o nome da ação: Para sair digite F"));

        if (lucro > 100){
            sup = sup + 1;
        }

        else if (lucro < 200){
            inf = inf + 1;
        }

        lucrot = lucrot + lucro;
    }

    while (acao != "F")
        alert("A quantidade de ações com o lucro superior a R$ 1000,00 é de: " + sup);
        alert("A quantidade de ações com o lucro inferior a R$ 200,00 é de: " + inf);
        alert("O lucro total é de: " + lucrot);

    }

   
