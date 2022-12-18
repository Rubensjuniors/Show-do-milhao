const numeroPergunta = document.querySelector("#numero-pergunta");
const dinherio = document.querySelector("#dinheiro");
const pergunta = document.querySelector("#pergunta");

// Alternativas
const alternativas = document.querySelector("#alternativa");

const a = document.querySelector("#A");
const b = document.querySelector("#B");
const c = document.querySelector("#C");
const d = document.querySelector("#D");

const alternativaResposta = document.querySelectorAll(".alternativa-resposta")

const desistir = document.querySelector("#desistir"); // button de desistir
const desistiuDinheiro= document.querySelector(".desistiu-dinheiro"); // quantidade de dinheiro que desistiu

const erro = document.querySelector("#erro"); 
const popupDesistir = document.querySelector("#popup-desistir"); // ativação do popup desistir
const popupGanhou = document.querySelector("#ganhou")


// array dos numeros e dinheiro
const numeros =[
  {
    perguntaNumero: 01,
    dinherio: 1000
  },
   {
    perguntaNumero: 02,
    dinherio: 2000
  },
   {
    perguntaNumero: 03,
    dinherio: 3000
  },
   {
    perguntaNumero: 04,
    dinherio: 4000
  },
   {
    perguntaNumero: 05,
    dinherio: 5000
  },
   {
    perguntaNumero: 06,
    dinherio:10 + " " + "Mil"
  },
   {
    perguntaNumero: 07,
    dinherio: 20 + " " + "Mil"
  }, {
    perguntaNumero: 08,
    dinherio:  30 + " " + "Mil"
  }, {
    perguntaNumero: 09,
    dinherio: 40 + " " + "MIl"
  }, {
    perguntaNumero: 10,
    dinherio:50 + " " + "Mil"
  }, {
    perguntaNumero: 11,
    dinherio: 100 + " " + "MIl"
  }, {
    perguntaNumero: 12,
    dinherio: 200 + " " + "Mil"
  }, {
    perguntaNumero: 13,
    dinherio: 300 + " " + "MIl"
  }, {
    perguntaNumero: 14,
    dinherio:400 + " " + "Mil"
  }, {
    perguntaNumero: 15,
    dinherio: 500 + " " + "Mil"
  }, {
    perguntaNumero: 16,
    dinherio: 600 + " " + "Mil"
  }, {
    perguntaNumero: 17,
    dinherio: 800 + " " + "Mil"
  }, {
    perguntaNumero: 18,
    dinherio:  1 + " " + "Milhão",
  },
]
// array das perguntas
const perguntas = [
  {
    pergunta: "Quais são os planetas internos?",
    alternativa: {
      A: "Céres e  Mercúrio",
      B: "Mercúrio, Vênus, terra e Marte",
      C: "Júpiter, Marte e Terra",
      D: "As alternativas 'A' e 'B' estão corretas",
      certa: "Mercúrio, Vênus, terra e Marte",
    },
  },
  {
    pergunta: "Quantos noves tem de 0 a 100?",
    alternativa: {
      A: "10",
      B: "11",
      C: "20",
      D: "21",
      certa: "20",
    },
  },
  {
    pergunta:
    "Qual elemento da tabela periódica recebeu seu nome em homenagem a um gnomo subterrâneo “malvado”?",
  alternativa: {
    A: "Háfnio",
    B: "Cobalto",
    C: "Berílio",
    D: "Telúrio",
    certa: "Berílio",
  },
  },
  {
    pergunta:
    "O crime de emílio Eduardo da Rocha Devesa, o famoso 'Morre, diabo!!' foi:",
  alternativa: {
    A: "Estrangular a vizinha",
    B: "Esfaquear a própria mãe",
    C: "Dar pauladas em um poodle",
    D: "Jogar a irmã do viadulto",
    certa: "Esfaquear a própria mãe",
  },
  }, 
  {
    pergunta:
    "Qual é o triângulo que tem todos os lados diferentes?",
  alternativa: {
    A: "Equilátero",
    B: "Escaleno",
    C: "Isóceles",
    D: "Trapézio",
    certa: "Escaleno",
  },
  },
  {
    pergunta:
    'Qual é o antônimo de "malograr"?',
  alternativa: {
    A: "Desprezar",
    B: "Fracassar",
    C: "Perder",
    D: "Conseguir",
    certa: "Conseguir",
  },
  },
{ 
  pergunta: "Que fruta é ressecada para se tornar uma ameixa seca?",
  alternativa: {
    A: "Uva",
    B: "Pêssego",
    C: "Ameixa",
    D: "Melão",
    certa: "Ameixa",
  },
},{
  pergunta: "Que Profissional usa ferramenta chamada formão?",
  alternativa: {
    A: "Carpinteiro",
    B: "Relojoeiro",
    C: "Confeiteiro",
    D: "Bombeiro",
    certa: "Carpinteiro",
  },
},
{
  pergunta: "Quem compôs o hino da independência?",
  alternativa: {
    A: "Dom Pedro I",
    B: "Manuel Bandeira",
    C: "Castro Alvez",
    D: "Carlos Gomes",
    certa: "Dom Pedro I",
  },
},{
  pergunta: "Em que país nasceu Carmem Miranda?",
  alternativa: {
    A: "Brasil",
    B: "Espanha",
    C: "Portugal",
    D: "Argentina",
    certa: "Portugal",
  },
},{
  pergunta: "Quantos planetas Terra cabem dentro do sol? ",
    alternativa: {
      A: "um milhão",
      B: "cem",
      C: "seiscentos",
      D: "centro e cinquenta",
      certa: "um milhão",
    },
},
{
  pergunta: "Em que lugar vivem mais cangurus do que pessoas? ",
  alternativa: {
    A: "indonésia",
    B: "nova Zelândia",
    C: "África do Sul",
    D: "Austrália",
    certa: "Austrália",
  },
},
{
  pergunta: "Quingentésimo corresponde a qual número?",
  alternativa: {
    A: "5",
    B: "50",
    C: "5000",
    D: "500",
    certa: "500",
  },
},
{
  pergunta:
  "Em que ano foi proclamada a República do Brasil e qual foi o primerio presidente?",
alternativa: {
  A: "1776, George Washington",
  B: "1882, Dom Pedro I",
  C: "1889, Marechal Deodoro da fonseca",
  D: "1894, Prudente de Morais",
  certa: "1889, Marechal Deodoro da fonseca",
},
},
{
  pergunta: "Um ano e composto por quantos trimestres???",
  alternativa: {
    A: "2",
    B: "4",
    C: "6",
    D: "8",
    certa: "4",
  },
},
{
  pergunta: "Em que parte do corpo se encontra a epiglote?",
  alternativa: {
    A: "Estômago",
    B: "Pâncreas",
    C: "Rim",
    D: "Boca",
    certa: "Boca",
  },
},
{
  pergunta: "Qual dos nomes abaixo nunca foi de um papa?",
  alternativa: {
    A: "Valentim",
    B: "Eugênio",
    C: "Jorge",
    D: "Vitor",
    certa: "Jorge",
  },
},
{
  pergunta: "Qual montanha se localiza entre a fronteira do Tibet com o Nepal?",
  alternativa: {
    A: "Monte Everest",
    B: "Monte Carlo",
    C: "Monte Fuji",
    D: "Monte Branco",
    certa: "Monte Everest",
  },
}

]

// atribuindo as pesguntas e numeros
function atribuirPerguntas(perguntas, numeros, i){
  if(i >= perguntas.length && numeros.length){
    
    i = 0;
  }
  
  alternativas.dataset.perguntas = i;
  numeroPergunta.textContent = numeros[i].perguntaNumero
  dinherio.textContent = numeros[i].dinherio
  desistiuDinheiro.textContent = numeros[i].dinherio

  pergunta.textContent = perguntas[i].pergunta;

  a.textContent = perguntas[i].alternativa.A;
  b.textContent = perguntas[i].alternativa.B;
  c.textContent = perguntas[i].alternativa.C;
  d.textContent = perguntas[i].alternativa.D;

}
function pegarPerguntas(i) {
  atribuirPerguntas(perguntas,numeros, i);
}

pegarPerguntas(0);


// verificação da resposta
alternativaResposta.forEach((resposta)=>{

    resposta.addEventListener('click', ()=>{

      const indicePergunta = alternativas.dataset.perguntas;
      const respostaSelecionada = resposta.getAttribute("id");

      console.log(indicePergunta, respostaSelecionada); // so pra mostra indice e a respota

      const respostaEscolhida = perguntas[indicePergunta].alternativa[respostaSelecionada];
      const respostaCerta = perguntas[indicePergunta].alternativa.certa;

      // verificação da resposta

      if(respostaEscolhida === respostaCerta){
        const indicePergunta = parseInt(alternativa.dataset.perguntas);
        if (indicePergunta + 1 >= 18) {
          ganhou.style.display = "grid";
        } else {
          pegarPerguntas(indicePergunta + 1);
        
        }
      } else{
       resposta.classList.add("erro");
       erro.style.display = "grid";
      }
      });
});

    // função de desistir
desistir.addEventListener("click", ()=>{
      popupDesistir.style.display = "grid";
});




    

