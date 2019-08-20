function calcula() {
    var investimento, operacao, situacao, poupanca, RendaFixa;

    investimento = Number (document.getElementById("investimento").value);
    operacao = Number (document.getElementById("operacao").value);

    
    switch (operacao) {

        case 1 :
        poupanca = investimento + (investimento*3/100);
        situacao = "O valor gerado com a poupança em 1 mês é " + poupanca;
        break;
     
        case 2 :
        RendaFixa = investimento + (investimento*4/100);
        situacao = "O valor gerado com a poupança em 1 mês é " + RendaFixa;
        break;
       
        default:
            situacao = "Algo deu errado! Tente novamente";
    }

    document.getElementById("resultado").innerHTML = situacao;

}