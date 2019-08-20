function calcula(){
    let i;
    var vet = [];
    var par = [];
    var impar = [];

    for(i=0; i<6; i++){
        vet.push(Number(prompt("Digite um número: ")));
    }

    for(i=0; i<6; i++){
        if(vet[i] % 2 == 0){
            par.push(vet[i]);
        }

        else{
            impar.push(vet[i]);
        }
    }
    
    alert(par + " - " + pares.lenght);
    alert(impar + " - " + impar.length);
}

