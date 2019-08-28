function calcula(){
    let i;
    var vet = [];

    for(i=0; i<3; i++){
        var objeto= {}

        objeto.idade = Number(prompt("Digite sua idade: "));
        objeto.sexo = prompt("Digite seu sexo. M para MASCULINO e F para FEMININO");
        objeto.renda = Number(prompt("Digite a renda familiar: "));
        objeto.filhos = Number(prompt("Digite o número de filhos: "));
        
        vet.push(objeto)
    }

    var mediaSal = 0;
    var maiorIdade = vet[0].idade;
    var menorIdade = vet[0].idade;
    var cont = 0;

    for(i=0; i<vet.length; i++){
        if(vet[i].idade > maiorIdade){
            maiorIdade = vet[i].idade
        }
        if(vet[i].idade > menorIdade){
            maiorIdade = vet[i].idade)
        }


    }


}