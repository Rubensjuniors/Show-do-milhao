const questoes = [
  {
    numQuestao: 01,
    dinherio: 2000,
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 1000,
  },

  {
    numQuestao: 02,
    dinherio: 2000,
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 1000,
  },

  {
    numQuestao: 03,
    dinherio: 2000,
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 1000,
  },

  {
    numQuestao: 04,
    dinherio: 2000,
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 1000,
  },

  {
    numQuestao: 05,
    dinherio: 2000,
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 1000,
  },

  {
    numQuestao: 06,
    dinherio: 2000,
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 1000,
  },

  {
    numQuestao: 07,
    dinherio: 2000,
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 1000,
  },

  {
    numQuestao: 08,
    dinherio: 2000,
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 1000,
  },

  {
    numQuestao: 09,
    dinherio: 2000,
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 1000,
  },

  {
    numQuestao: 10,
    dinherio: 2000,
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 1000,
  },

  {
    numQuestao: 11,
    dinherio: 2000,
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 1000,
  },

  {
    numQuestao: 12,
    dinherio: 2000,
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 1000,
  },

  {
    numQuestao: 13,
    dinherio: 2000,
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 1000,
  },

  {
    numQuestao: 14,
    dinherio: 2000,
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 1000,
  },

  {
    numQuestao: 15,
    dinherio: 2000,
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 1000,
  },

  {
    numQuestao: 16,
    dinherio: 2000,
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 1000,
  },

  {
    numQuestao: 17,
    dinherio: 2000,
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 1000,
  },

  {
    numQuestao: 18,
    dinherio: 2000,
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 1000,
  },
  
  
];


let numQuestao = document.querySelector("#num-questao");
let numDinheiro = document.querySelector("#num-dinheiro");
let pergunta = document.querySelector("#pergunta");

let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d");

let divQuestoes = document.querySelector(".questoes");
let alternativas = document.querySelector("#alternativa");

let encerrar = document.querySelector("#encerrar-quantidade");

numQuestao.innerHTML = questoes[0].numQuestao;
numDinheiro.innerHTML = questoes[0].dinherio;

pergunta.innerHTML = questoes[0].pergunta;

a.innerHTML = questoes[0].alternativa.A;
b.innerHTML = questoes[0].alternativa.B;
c.innerHTML = questoes[0].alternativa.C;
d.innerHTML = questoes[0].alternativa.D;

encerrar.innerHTML = questoes[0].encerrar;




// questoes.map(function(questao){
//   document.innerHTML = questao.alternativas
// })



