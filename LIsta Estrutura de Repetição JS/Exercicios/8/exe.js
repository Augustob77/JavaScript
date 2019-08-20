function calcula(){

    var idade, peso, altura, olhos, cabelos;
    var item1 = 0; var item2; var item3 = 0; var item4 = 0; var item2Qtde = 0;
    for(i=1; i<=6; i++){
        idade = Number(prompt("Informe a idade da " + i + "º pessoa"));
        peso = Number(prompt("Informe o peso da " + i + "º pessoa"));
        altura = Number(prompt("Informe a altura da " + i + "º pessoa"));
        olhos = prompt("Informe a cor dos olhos da " + i + "º pessoa");
        cabelos = prompt("Informe a cor dos cabelos da " + i + "ºpessoa");

        if ((idade > 50) && (peso < 60)){
            item1++;
        }

        if ((olhos == "A") || (olhos == "a")){
            item3++;
        }

        if (((cabelos == "R") || (cabelos == "r")) && (olhos != "A")){
            item4++;
        }

        if (altura < 1.50){
            item2 = item2 + idade;
            item2Qtde++;
        }
    }

    alert("Resultado do item 1: " + item1);
    alert("Resultado do item 2: " + item2/item2Qtde);
    alert("Resultado do item 3: " + item3/6*100 + "%");
    alert("Resultado do tem 4: " + item4);

}