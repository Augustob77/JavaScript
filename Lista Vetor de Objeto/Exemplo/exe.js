function calcula(){
    //Criando o vetor
    var vet = []
    //Criando o objeto
    var objeto = {}
    //Criando os produtos
    for(i=0; i<5; i++){
        objeto.codigo = Number(prompt("Informe o código: "))
        objeto.nome = prompt("Informe o nome: ")
        objeto.quantidade = Number(prompt("Informe a quantidade: "))
        objeto.preco = Number(prompt("Informe o preço: "))
        vet.push(objeto)
        alert("Produto registrado com sucesso")
    }
    var soma = 0;
    var i;

    for(i=0; i<5; i++){
        soma = soma + vet[i].quantidade
    }

    alert("Quantidade de produtos: " + soma)
}
    
