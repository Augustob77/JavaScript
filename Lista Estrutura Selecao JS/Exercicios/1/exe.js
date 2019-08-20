function calcula () {
    var nota1, nota2, nota3, nota4, media, situacao;

    nota1 = Number (document.getElementById("n1").value);
    nota2 = Number (document.getElementById("n2").value);
    nota3 = Number (document.getElementById("n3").value);
    nota4 = Number (document.getElementById("n4").value);

    media = (nota1+nota2+nota3+nota4)/4

    if (media >= 7) {
        situacao = "Aprovado";
    }

    else {
        situacao = "Reprovado";
    }

    document.getElementById("resultado").innerHTML = media +"-"+ situacao;
}
