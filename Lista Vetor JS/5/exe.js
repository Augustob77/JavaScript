function calcula(){
   let i;
   let linguagem = [];
   let logica = [];

   for(i=0; i<10; i++){
        logica.push(Number(prompt("Informe o número da maricula dos alunos de Logica")));   
   }
   for(i=0; i<5; i++){
       linguagem.push(Number(prompt("Informe o número da matricula dos alunos de Liguagem")));
   }

   var interseccao = []

   for(let i=0; i<10; i++){
       if(linguagem.indexOf(logica[i]) != -1){
           interseccao.push(logica[i])
       }
   }
   alert(interseccao);
}