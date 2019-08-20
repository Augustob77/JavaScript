function calcula() {

    var i = 1;
    var f1 = 0; var f2 = 0; var f3 = 0;
    var idade, altura, peso;
    var media  = 0 ;

    while (i <= 5){
        idade = Number(prompt("Informe a idade da " + i + "º pessoa"));
        altura = Number(prompt("Informe a altura da " + i + "º pessoa"));
        peso = Number(prompt("Informe o peso da " + i + "º pessoa"));
        i = (i + 1);

        if ((idade > 50) && (peso < 60)){
            f1 = f1 + 1;
        }

        else if ((idade > 10) && (idade < 20)){
            media = media + altura
            f2 = f2 + 1;
        }

        if (peso <= 40){
            f3 = f3 + 1;
        }
    }

    alert("A quantidade de pessoas com a idade superior a 50 anos e peso inferior a 60kg é de: " + f1);
    alert("A média das alturas das pessoas entre 10 e 20 anos é de: " + media/f2);
    alert("A porcentagem de pessoas com o peso inferior a 40kg é de: " + (f3/5*100) + " % ");


}
