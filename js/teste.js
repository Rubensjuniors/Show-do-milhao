
function proximaQuestao() {

  pegarPerguntas(proxima)+1
}




// function verificarSeAcertou( resposta) {
  
// }





  resposta.forEach(el => {
    el.addEventListener('click',function(){

      console.log(el.getAttribute('value'))

      if(el !== el){
        el.style.backgroundColor = "#00FF00";
       
        }else{
          el.style.backgroundColor = "#FF0000";
          // pgErro.style.display = "block"
        }
    });
});




document.querySelectorAll(".parar").forEach(el => {
  el.addEventListener('click',function () {
  
     console.log(el.getAttribute('value'))
     pgParar.style.display = "block"
 
  });
})

setTimeout(function() {
    
  if(proxima > quantidadeDeQuestoes) {
      console.log('Fim do Jogo!')
      fimDoJogo()
  } else {
      proximaQuestao(proxima)
  }
}, 50)

function contador(numero){
  for(let i=1; i<=numero; i=i+1){
    if(i % 2 == 0){
      console.log(i);
    }
  }
  return("Pronto")
}

contador(20);



// document.querySelectorAll().addEventListener('click', function(e){

//   if(c = respostaCerta){
//     c.style.backgroundColor = "#00FF00";
//   }else{
//     c.style.backgroundColor = "#FF0000";
//   }
// });
