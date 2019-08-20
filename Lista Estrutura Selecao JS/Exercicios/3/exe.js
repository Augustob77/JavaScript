function calcula() {
    var num1, num2, situacao;

    num1 = Number (document.getElementById("n1").value);
    num2 = Number (document.getElementById("n2").value);

    
    if (num1 > num2){
        situacao = "Número 1 é maior que o número 2";
    }

    else{
        situacao = "Número 2 é maior que o número 1";
    }

    document.getElementById("resultado").innerHTML = " - " + situacao
}