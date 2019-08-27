function calcula(){
    let i;
    var vet = []


    for(i=0; i<3; i++){
        var objeto= {}

        objeto.salario = Number(prompt("Digite o seu salário: "));
        objeto.idade = Number(prompt("Digite a sua idade: "));
        objeto.filhos = Number(prompt("Você tem filhos? Se sim, digite a quantidade de filhos. Se não, digite 0"));
        objeto.sexo = prompt("Digite o seu sexo. M para MASCULINO e F para FEMININO: ");
        vet.push(objeto)
    }

    var somaSal = 0;
    var somaFilhos = 0;
    var maiorSal = vet[0].salario;
    var cont = 0;

    for(i=0; i<vet.length; i++){
        somaSal = somaSal + vet[i].salario
        somaFilhos = somaFilhos + vet[i].filhos
        if(((vet[i].sexo == "F") || (vet[i].sexo == "f") && (vet[i].salario[i] > 1000))){
            cont++;
        }
        if(vet[i].salario > maiorSal){
            maiorSal = vet[i].salario
        }
    }
   
    alert("Média salarial da população: " + somaSal/vet.length);
    alert("Média de filhos: " + somaFilhos/vet.length);
    alert("Maior salário: " + maiorSal);
    alert("Percentual de mulheres com salário superior a R$ 1000,00: " + cont/3*100)
}

