function calcula() {
    var num1, num2, num3, situacao;

    num1 = Number (document.getElementById("n1").value);
    num2 = Number (document.getElementById("n2").value);
    num3 = Number (document.getElementById("n3").value);

    if ((num1 > num2) && (num1 > num3)) {
        situacao = "Número 1 é maior que o número 2 e o número 3";
    }

    else if ((num2 > num1) && (num2 > num3)) {
        situacao = "Número 2 é maior que o número 1 e o número 3";
    }

    else{
        situacao = "Número 3 é maior que o número 1 e o número 2";
    }

    document.getElementById("resultado").innerHTML = " - " + situacao; 
}