function calcula(){
    var preco;
    var qtd = 120;
    var lucro;
    var saida = "Resultado";
    var lucromax = 0;
    var precomax = 0;

    for(preco = 5.0; preco >= 1; preco = preco - 0.50){
        lucro = (preco * qtd - 200);
        saida = saida + "\n Lucro com preço a R$" + preco + " = " + lucro;
        qtd = qtd + 26;

        if(lucro > lucromax){
            lucromax = lucro;
            precomax = preco;
        }
    }
    alert(saida + "\n \n Lucro máximo: " + lucromax);
    alert("Preço do lucro máximo: R$" + precomax);
}

   
