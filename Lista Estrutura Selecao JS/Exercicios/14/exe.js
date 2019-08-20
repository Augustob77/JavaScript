function calcula() {
    var sal, situacao, conta1, conta2, conta3, conta4, conta5, conta6 ;

    sal = Number (document.getElementById("n1").value);

    if (sal < 300) {
        conta1 = sal + (sal*50/100)
        situacao = "Seu novo salário é: " + conta1;
    }

    else if ((sal > 300) && (sal < 500)){
        conta2 = sal + (sal*40/100)
        situacao = "Seu novo salário é: " + conta2;      
    }

    else if ((sal > 500) && (sal < 700)){
        conta3 = sal + (sal*30/100)
        situacao = "Seu novo salário é: " + conta3;
    }

    else if ((sal > 700) && (sal < 800)){
        conta4 = sal + (sal*20/100)
        situacao = "Seu novo salário é: " + conta4;
    }

    else if ((sal >800) && (sal < 1000)){
        conta5 = sal + (sal*10/100)
        situacao = "Seu novo salário é: " + conta5;
    }

    else{
        conta6 = sal + (sal*5/100)
        situacao = "Seu novo salário é: " + conta6;
    }

    document.getElementById("resultado").innerHTML = situacao;

}