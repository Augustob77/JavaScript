function calcula() {
    var num1, num2, operacao, categoria, situacao, media, diferenca, divisao, produto;

    num1 = Number (document.getElementById("n1").value);
    num2 = Number (document.getElementById("n2").value);
    operacao = Number (document.getElementById("operacao").value);
    


    switch (operacao) {

    case 1 :
    media = (num1+num2)/2;
    situacao = "A média dos números é" + media;
    break;
 
    case 2 :
    if (num1 > num2){
    diferenca = (num1 - num2)
    situacao ="A diferença entre o 1º e 2º número" + diferenca;
    }

    else if (num2 > num1){
        diferenca = (num2 - num1)
        situacao = "A diferenca entre o 2º e 3º número" + diferenca;

    }
    break;
   
    case 3 : 
    divisao = (num1/num2);
    situacao = "A divisão dos números é" + divisao;
    break;

    case 4 : 
    produto = (num1*num2);
    situacao = "O produto dos números é" + produto;
    break;


    default:
        situacao = "Algo deu errado! Tente novamente";

}
    document.getElementById("resultado").innerHTML = situacao;

}