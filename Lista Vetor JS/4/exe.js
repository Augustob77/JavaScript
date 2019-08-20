function calcula(){
    let i;
    var vet = [];
    var posi = [];

    for(i=0; i<30; i++){
        if(vet[i] == 30){
            posi.push(i);
        }
    }

    alert(posi + " - " + posi.length)