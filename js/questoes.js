//seleção dos id e class
let numQuestao = document.querySelector("#num-questao");
let numDinheiro = document.querySelector("#num-dinheiro");
let pergunta = document.querySelector("#pergunta");

let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d");

let divQuestoes = document.querySelector(".questoes");
let alternativas = document.querySelector("#alternativa");

let pular = document.querySelectorAll("#pular");

let encerrar = document.querySelector("#encerrar-quantidade");
let errar = document.querySelector("#errar");

let resposta = document.querySelectorAll(".resposta");


// questoes
const questoes = [
 
  {
    numQuestao: 01,
    dinherio: 1000,
    pergunta: "Que fruta é ressecada para se tornar uma ameixa seca?",
    alternativa: {
      A: "Uva",
      B: "Pêssego",
      C: "Ameixa",
      D: "Melão",
      correta: "Ameixa", 
    },
    encerrar: 500,
    errar: 0,
  },

  {
    numQuestao: 02,
    dinherio: 2000,
    pergunta: "Qual bicho transmite Doença de Chagas?",
    alternativa: {
      A: "Abelha",
      B: "Barata",
      C: "Pulga",
      D: "Barbeiro",
      correta: "Barbeiro",
    },
    encerrar: 1000,
    errar: 500,
  },

  {
    numQuestao: 03,
    dinherio: 3000,
    pergunta: "Em que parte do corpo se encontra a epiglote?",
    alternativa: {
      A: "Estômago",
      B: "Pâncreas",
      C: "Rim",
      D: "Boca",
      correta: "Boca",
    },
    encerrar: 2000,
    errar: 1000,
  },

  {
    numQuestao: 04,
    dinherio: 4000,
    pergunta: "Um ano e composto por quantos trimestres???",
    alternativa: {
      A: "2",
      B: "4",
      C: "6",
      D: "8",
      correta: "4",
    },
    encerrar: 3000,
    errar: 1500,
  },

  {
    numQuestao: 05,
    dinherio: 5000,
    pergunta: "Que Profissional usa ferramenta chamada formão?",
    alternativa: {
      A: "Carpinteiro",
      B: "Relojoeiro",
      C: "Confeiteiro",
      D: "Bombeiro",
      correta: "Carpinteiro",
    },
    encerrar:4000,
    errar: 2000,
  },

  {
    numQuestao: 06,
    dinherio: 10 + " " + "Mil",
    pergunta: "Qual dos nomes abaixo nunca foi de um papa?",
    alternativa: {
      A: "Valentim",
      B: "Eugênio",
      C: "Jorge",
      D: "Vitor",
      correta: "Jorge",
    },
    encerrar: 5000,
    errar: 2500,
  },
  {
    numQuestao: 07,
    dinherio: 20 + " " + "Mil",
    pergunta: "Quem compôs o hino da independência?",
    alternativa: {
      A: "Dom Pedro I",
      B: "Manuel Bandeira",
      C: "Castro Alvez",
      D: "Carlos Gomes",
      correta: "Dom Pedro I",
    },
    encerrar: 10 + " " + "Mil",
    errar: 5000,
  },

  {
    numQuestao: 08,
    dinherio: 30 + " " + "Mil",
    pergunta: "Qual elemento da tabela periódica recebeu seu nome em homenagem a um gnomo subterrâneo “malvado”?",
    alternativa: {
      A: "Háfnio",
      B: "Cobalto",
      C: "Berílio",
      D: "Telúrio",
      correta: "Berílio",
    },
    encerrar: 20 + " " + "Mil",
    errar: 10 + " " + "Mil",
  },

  {
    numQuestao: 09,
    dinherio: 40 + " " + "MIl",
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 30 + " " + "Mil",
    errar: 0 + " " + "Mil",
  },

  {
    numQuestao: 10,
    dinherio: 50 + " " + "Mil",
    pergunta: "Quantos planetas Terra cabem dentro do sol? ",
    alternativa: {
      A: "um milhão",
      B: "cem",
      C: "seiscentos",
      D: "centro e cinquenta",
      correta: "um milhão",
    },
    encerrar: 40 + " " + "MIl",
    errar: 20 + " " + "Mil",
  },

  {
    numQuestao: 11,
    dinherio: 100 + " " + "MIl",
    pergunta: "Em que lugar vivem mais cangurus do que pessoas? ",
    alternativa: {
      A: "indonésia",
      B: "nova Zelândia",
      C: "África do Sul",
      D: "Austrália",
      correta: "Austrália",
    },
    encerrar: 50 + " " + "Mil",
    errar: 25 + " " + "Mil",
  },

  {
    numQuestao: 12,
    dinherio: 200 + " " + "Mil",
    pergunta: "O crime de emílio Eduardo da Rocha Devesa, o famoso 'Morre, diabo!!' foi:",
    alternativa: {
      A: "Estrangular a vizinha",
      B: "Esfaquear a própria mãe",
      C: "Dar pauladas em um poodle",
      D: "Jogar a irmã do viadulto",
      correta: "Esfaquear a própria mãe",
    },
    encerrar: 100 + " " + "Mil",
    errar: 50 + " " + "Mil",
  },

  {
    numQuestao: 13,
    dinherio: 300 + " " + "MIl",
    pergunta: "Quantos noves tem de 0 a 100?",
    alternativa: {
      A: "10",
      B: "11",
      C: "20",
      D: "21",
      correta: "20",
    },
    encerrar: 200 + " " + "Mil",
    errar: 100 + " " + "Mil",
  },

  {
    numQuestao: 14,
    dinherio: 400 + " " + "Mil",
    pergunta: "Quingentésimo corresponde a qual número?",
    alternativa: {
      A: "5",
      B: "50",
      C: "5000",
      D: "500",
      correta: "500",
    },
    encerrar: 300 + " " + "Mil",
    errar: 150 + " " + "Mil",
  },

  {
    numQuestao: 15,
    dinherio: 500 + " " + "Mil",
    pergunta: "Quais são os planetas internos?",
    alternativa: {
      A: "Céres e  Mercúrio",
      B: "Mercúrio, Vênus, terra e Marte",
      C: "Júpiter, Marte e Terra",
      D: "As alternativas 'A' e 'B' estão corretas",
      correta: "Mercúrio, Vênus, terra e Marte",
    },
    encerrar: 400 + " " + "Mil",
    errar: 200 + " " + "Mil",
  },

  {
    numQuestao: 16,
    dinherio: 1 + " " + "Milhão",
    pergunta: "Em que ano foi proclamada a República do Brasil e qual foi o primerio presidente?",
    alternativa: {
      A: "1776, George Washington",
      B: "1882, Dom Pedro I",
      C: "1889, Marechal Deodoro da fonseca",
      D: "1894, Prudente de Morais",
      correta: "1889, Marechal Deodoro da fonseca",
    },
    encerrar: 500 + " " + "Mil",
    errar: 0,
  },


  
  
];



function atribuirPerguntas(questoes, i){
  if(i >= questoes.length){
    i = 0
  }

  numQuestao.innerHTML = questoes[i].numQuestao;
  numDinheiro.innerHTML = questoes[i].dinherio;
  
  pergunta.innerHTML = questoes[i].pergunta;
  
  a.innerHTML = questoes[i].alternativa.A;
  b.innerHTML = questoes[i].alternativa.B;
  c.innerHTML = questoes[i].alternativa.C;
  d.innerHTML = questoes[i].alternativa.D;

  encerrar.innerHTML = questoes[i].encerrar;
  errar.innerHTML = questoes[i].errar;

  

}

function pegarPerguntas(i){
  atribuirPerguntas(questoes, i)
}


pegarPerguntas(0)



pular.forEach(el => {
  el.addEventListener('click',function(){
    console.log(el.getAttribute('value'))
  })
  
  
  
})



  resposta.forEach(el => {
    el.addEventListener('click',function(){

      console.log(el.getAttribute('value'))
      if(el){
        el.style.backgroundColor = "#00FF00";
        }else{
          el.style.backgroundColor = "#FF0000";
        }
    });
});





document.querySelectorAll(".parar").forEach(el => {
  el.addEventListener('click',function () {
  
     console.log(el.getAttribute('value'))
 
  });
})



// document.querySelectorAll().addEventListener('click', function(e){

//   if(c = respostaCerta){
//     c.style.backgroundColor = "#00FF00";
//   }else{
//     c.style.backgroundColor = "#FF0000";
//   }
// });


  



  



 





