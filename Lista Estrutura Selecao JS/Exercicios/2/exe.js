function calcula() {
    var nota1, nota2, media, situacao;

    nota1 = Number (document.getElementById("n1").value);
    nota2 = Number (document.getElementById("n2").value);

    media = (nota1+nota2)/2

    if ((media >= 0) && (media < 3)) {
        situacao = "Reprovado";
    }

    else if ((media >= 3) && (media < 7)){
        situacao = "Exame";
    }

    else {
        situacao = "Aprovado";
    }


    document.getElementById("resultado").innerHTML = media +"-"+ situacao;
}