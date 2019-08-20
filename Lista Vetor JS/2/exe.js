function calcula(){
    let i;
    var vet = []; 
    var mult2 = [];
    var mult3 = []; 
    var mult23 = [];

    for(i=1; i<=7; i++){

        vet.push(Number(prompt("Digite o " + i + "º número: ")));
    }

    for(i=1; i<=7; i++){

        if(vet[i] % 2==0){

            mult2.push(vet[i]);
        }
        if(vet[i] % 3==0){

            mult3.push(vet[i]);
        }

        if((vet[i] % 2==0) && (vet[i] % 3==0)){

            mult23.push(vet[i]);
            }
    }
        alert("Multiplos de 2: " + mult2);
        alert("Multiplos de 3: " + mult3);
        alert("Multiplos de 2 e 3: " + mult23);
}