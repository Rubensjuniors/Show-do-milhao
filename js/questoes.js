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

let pular = document.querySelector("#pular");

let encerrar = document.querySelector("#encerrar-quantidade");
let errar = document.querySelector("#errar");


// questoes
const questoes = [
  {
    numQuestao: 0,
    dinherio: 0,
    pergunta: "Pergunta",
    alternativa: {
      A: "Alternativa A",
      B: "Alternativa B",
      C: "Alternativa C",
      D: "Alternativa D",
      correta: "alternativa certa",
    },
    encerrar: 0,
    errar: 0,
  },
  {
    numQuestao: 01,
    dinherio: 1000,
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 500,
    errar: 0,
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
    errar: 500,
  },

  {
    numQuestao: 03,
    dinherio: 3000,
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 2000,
    errar: 1000,
  },

  {
    numQuestao: 04,
    dinherio: 4000,
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 3000,
    errar: 1500,
  },

  {
    numQuestao: 05,
    dinherio: 5000,
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar:4000,
    errar: 2000,
  },

  {
    numQuestao: 06,
    dinherio: 10 + " " + "Mil",
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 5000,
    errar: 2500,
  },

  {
    numQuestao: 07,
    dinherio: 20 + " " + "Mil",
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 10 + " " + "Mil",
    errar: 5000,
  },

  {
    numQuestao: 08,
    dinherio: 30 + " " + "Mil",
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
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
    encerrar: 30 + " " + "MIl",
    errar: 1 + " " + "Mil",
  },

  {
    numQuestao: 10,
    dinherio: 50 + " " + "Mil",
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 40 + " " + "MIl",
    errar: 20 + " " + "Mil",
  },

  {
    numQuestao: 11,
    dinherio: 100 + " " + "MIl",
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 50 + " " + "Mil",
    errar: 25 + " " + "Mil",
  },

  {
    numQuestao: 12,
    dinherio: 200 + " " + "Mil",
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 100 + " " + "Mil",
    errar: 50 + " " + "Mil",
  },

  {
    numQuestao: 13,
    dinherio: 300 + " " + "MIl",
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 200 + " " + "Mil",
    errar: 100 + " " + "Mil",
  },

  {
    numQuestao: 14,
    dinherio: 400 + " " + "Mil",
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 300 + " " + "Mil",
    errar: 150 + " " + "Mil",
  },

  {
    numQuestao: 1,
    dinherio: 500 + " " + "Mil",
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 400 + " " + "Mil",
    errar: 200 + " " + "Mil",
  },

  {
    numQuestao: 16,
    dinherio: 1 + " " + "Milhão",
    pergunta: "Em que país nasceu Carmem Miranda?",
    alternativa: {
      A: "Brasil",
      B: "Espanha",
      C: "Portugal",
      D: "Argentina",
      correta: "Portugal",
    },
    encerrar: 500 + " " + "Mil",
    errar: 0,
  },


  
  
];





  numQuestao.innerHTML = questoes[1].numQuestao;
  numDinheiro.innerHTML = questoes[1].dinherio;
  
  pergunta.innerHTML = questoes[1].pergunta;
  
  a.innerHTML = questoes[1].alternativa.A;
  b.innerHTML = questoes[1].alternativa.B;
  c.innerHTML = questoes[1].alternativa.C;
  d.innerHTML = questoes[1].alternativa.D;

  
  encerrar.innerHTML = questoes[1].encerrar;
  errar.innerHTML = questoes[1].errar;
  
  const respostaCerta = questoes[1].alternativa.correta
 


  



  



 





