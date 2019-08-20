function calcula(){

    var i = 1;
    var resul = 0;
    var p = 0; var v = 0; var val = 0;
    var p1 = 0;
    var resultotal = 0;

    while (i <= 3){
        resul = prompt("Selecione V para a vista e P para a prazo: " + i);
        val = Number(prompt("Insira o valor da transação: "));

        if (resul = "v"){
            v = v + val;
        }

        else if (resul = "p"){
            p = p + val;
            p1 = p1 + (val/3);
        }

        else{
            "Para continuar, insira um valo válido"
        }

        i = i + 1;
        resultotal = v + p;
    }

    alert("O valor total de compras a vista é: " + v + " R$ ");
    alert("O valor total de compras a prazo é: " + p + " R$ ");
    alert("O valor total de compras efetuadas é de: " + resultotal + " R$ ");
    alert("O valor da primeira prestação das compras a prazo é de: " + p1 + " R$ ");

}