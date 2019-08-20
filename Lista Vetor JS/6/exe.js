function calcula(){

   let i = [] 
   var nomes = []
   var vendas = []
   var comissoes = []

   for(i=0; i<5; i++){
       nomes.push(prompt("Informe o nome do vendedor"));
       vendas.push(Number(prompt("Informe o total de vendas do vendedor")));
       comissoes.push(Number(prompt("Informe a comissão do vendedor")));
   }

   var receber = []

   for(i=0; i<5; i++){
       receber.push(vendas[i] * comissoes[i] / 100)
   }

   alert(nomes + "/n" + receber)
   alert(nomes + "/n" + vendas)

   var maior = receber[0]
   var menos = receber[0]]
   var nomeMaior = nomes[0]
   var nomeMenor = nomes[0]

   for(i=0; i<5; i++){
       if(receber[i] > maior){
           maior = receber[i];
           nomeMaior = nomes[i];
       }
       if(receber[i] < menor){
           menor = receber[i];
           nomeMenor = nomes[i];
       }
   }

alert("")
alert("")
