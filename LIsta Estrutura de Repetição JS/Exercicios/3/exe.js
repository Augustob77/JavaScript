function calcula(){
    var i = 1;
    var f1 = 0; var f2 = 0; var f3 = 0; var f4 = 0; var f5 = 0;
    var idade;

    while (i <= 8){
        idade = Number(prompt("Informe a " + i + "º idade"));
        i = (i + 1);

        if (idade <= 15) {
            f1 = f1 + 1;
        }
    
        else if ((idade >= 16) && (idade <= 30)){
            f2 =  f2 + 1;
        }
    
        else if ((idade >= 31) && (idade <= 45)){
            f3 = f3 + 1;
        }
    
        else if ((idade >= 46) && (idade <= 60)){
            f4 = f4 + 1;
        }
    
        else{
            f5 = f5 + 1;
        }
    }   

    alert("Quantidade de pessoas na faixa etária 1: " + f1 + " / Quantidade de pessoas na faixa etária 2: " + f2 + " / Quantidade de pessoas na faixa etária 3: " + f3 + " / Quantidade de pessoas na faixa etária 4: " + f4 + " / Quantidade de pessoas na faixa etária 5: " + f5);

    alert("A porcentagem de pessoas na faixa etária 1 é " + (f1/8*100) + "% ") 
    alert("A porcentagem de pessoas na faixa etária 5 é " + (f5/8*100) + "% ")


}