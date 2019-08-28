function calcula(){
    let i;
    var vet = []

    for(i=0; i<3; i++){
        var objeto= {}

        objeto.sexo = prompt("Digite seu sexo. M para MASCULINO e F para FEMININO");
        objeto.altura = Number(prompt("Digite sua altura: "));
        objeto.idade = Number(prompt("Digite sua idade: "));
        objeto.olhos = prompt("Digite a cor dos seus olhos. A para AZUIS, V para VERDES e C para CASTANHOS");

        vet.push(objeto)
    }

    var maiorIdade = vet[0].idade;
    var mediaIdade = 0;
    var contIdade = 0;
    var contHab = 0;
    var contHom = 0;

    for(i=0; i<vet.length; i++){
        if((vet[i].olhos == "C") || (vet[i].altura > 1.60)){
        contIdade++;
        }
        if(vet[i].idade > maiorIdade){
            maiorIdade = vet[i].idade
        }
        if((((vet[i].sexo == "F") || (vet[i].idade > 20 && vet[i].idade < 45) || (vet[i].olhos == "V") || (vet[i].altura < 1.70)))){
            contHab++;
        }
        if(vet[i].sexo == "M"){
            contHom++;
        }
    }

    alert("Média media de idade das pessoas com olhos Castanhos: " + contIdade/vet.length);
    alert("Maior idade entre os habitantes: " + maiorIdade);
    alert("Pessoas do sexo feminino, idade entre 20 e 45 anos, olhos verdes e altura inferior a 1.70 m: " + contHab + " pessoas");
    alert("Percentual de homens: " + contHom/3*100 + "%")  

}       
                  