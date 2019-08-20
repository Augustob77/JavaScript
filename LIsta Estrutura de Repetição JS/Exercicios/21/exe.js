function calcula(){

    var voto;
    var total;
    var a = 0; var b = 0; var c = 0; var d = 0; var e = 0; var f = 0;

    voto = prompt("Informe seu voto. Sendo 1 para o 1º canditato, 2 para o 2º canditato, 3 para o 3º canditato, 4 para o 4º canditato,  5 para Nulo e 6 para Branco");

    do{
        switch(voto){
            
            case 1: a++; break;
            case 2: b++; break;
            case 3: c++; break;
            case 4: d++; break;
            case 5: e++; break;
            case 6: f++; break;

            default: alert("Voto inválido! Tente novamente");
            break;
        }

        voto = Number(prompt("Informe um voto. Digite 0 para encerrar"));
    }

    while (voto != 0);
    total = a + b + c + d + e + f;
    alert("O total de votos do candidato 1 é: " + a + " O total de votos do candidato 2 é: " + b + " O total de votos do candidato 3 é: " + c + " O total de votos do candidato 4 é: " + d );
    alert("O total de votos nulos é: " + e + " e  O total de votos em branco é: " + f);
    alert("Porcentagem de votos nulos " + e/total*100 + "% ");
    alert("Porcentagem de votos brancos " + f/total*100 + "% ");
    alert("Encerrado!");

}

   
