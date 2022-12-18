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
    pergunta: "Em um dado a soma dos lados opostos é sempre o mesmo valor. O número da face oposta à face que contém o 1 é:",
    alternativa: {
      A: "60",
      B: "2",
      C: "5",
      D: "6",
      certa: "6",
    },
  },
  {
    pergunta: "Quanto e 3+5-6x7-45+900??",
    alternativa: {
      A: "821",
      B: "-800",
      C: "3453",
      D: "1",
      certa: "821",
    },
  },
  {
    pergunta:
    "Qual dos conceitos abaixo diz respeito a juro??",
  alternativa: {
    A: "porcentagem do salário de um funcionário",
    B: "valor mensal gasto por uma empresa",
    C: "imposto de renda cobrado pelo governo",
    D: "renda ou rendimento de capital investido",
    certa: "renda ou rendimento de capital investido",
  },
  },
  {
    pergunta:
    "Chamamos de quociente o...",
  alternativa: {
    A: "resultado de uma multiplicação",
    B: " resultado de uma divisão",
    C: "a soma de dois números inteiros",
    D: "número que antecede a variável em uma equação do 1º grau",
    certa: " resultado de uma divisão",
  },
  }, 
  {
    pergunta:
    "Quantos centímetros existem em 5 metros?",
  alternativa: {
    A: "50 cm",
    B: "0,05 cm",
    C: "5000 cm",
    D: "500 cm",
    certa: "500 cm",
  },
  },
  {
    pergunta:
    'Uma figura plana é aquela que possui...?',
  alternativa: {
    A: "dois lados",
    B: "duas dimensões",
    C: "três lados",
    D: "três dimensões",
    certa: "duas dimensões",
  },
  },
{ 
  pergunta: "O que é uma fração?",
  alternativa: {
    A: "uma divisão entre dois números inteiros",
    B: "é um número elevado a outro número",
    C: "é uma parcela de um todo",
    D: "uma coleção com no mínimo 5 elementos",
    certa: "é uma parcela de um todo",
  },
},{
  pergunta: "Uma tonelada corresponde a:",
  alternativa: {
    A: "1000 quilogramas",
    B: "1000 metros",
    C: "100 litros",
    D: "1000 metros",
    certa: "1000 quilogramas",
  },
},
{
  pergunta: "Qual das opções abaixo é a base de um cone?",
  alternativa: {
    A: "elipse",
    B: "círculo",
    C: "quadrado",
    D: "retângulo",
    certa: "círculo",
  },
},{
  pergunta: "A unidade 'litro' serve para medir:",
  alternativa: {
    A: "volume",
    B: "massa",
    C: "capacidade",
    D: "tempo",
    certa: "capacidade",
  },
},{
  pergunta: "Se você dividir uma unidade em 1000 partes iguais, cada parte será...",
    alternativa: {
      A: "um milhar",
      B: "um milionésimo",
      C: "um décimo",
      D: "um milésimo",
      certa: "um milésimo",
    },
},
{
  pergunta:
  "Uma inequação é uma...",
alternativa: {
  A: " equação que possui alguma variável",
  B: "igualdade entre duas expressões numéricas",
  C: " equação que não possui letras",
  D: "desigualdade entre duas expressões matemáticas",
  certa: "desigualdade entre duas expressões matemáticas",
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
  "Qual o resultado dessa equação:'4x + 8x = 36'",
alternativa: {
  A: "3",
  B: "22",
  C: "45",
  D: "245",
  certa: "3",
},
},
{
  pergunta: "Marque o exemplo em que há uma equação do 1° grau",
  alternativa: {
    A: "4x4 = 36",
    B: "(4:2 x 5ab)2 = t",
    C: "4x - 2x = 36",
    D: "5+5:=5 = 20",
    certa: "4x - 2x = 36",
  },
},
{
  pergunta: "Quanto é 64 ÷ 100?",
  alternativa: {
    A: "43",
    B: "0,64",
    C: "6,4",
    D: "64,0",
    certa: "0,64",
  },
},
{
  pergunta: "50% de 30",
  alternativa: {
    A: "12",
    B: "14",
    C: "1500",
    D: "15",
    certa: "15",
  },
},
{
  pergunta: "Аnа, Lúсіо, Мárсіа е Јоãо еѕtãо ѕеntаdоѕ ао rеdоr dе umа mеѕа сіrсulаr. Ѕаbе-ѕе quе Јоãо еѕtá dе frеntе раrа Мárсіа quе, роr ѕuа vеz , еѕtá à еѕquеrdа dе Lúсіо. É соrrеtо аfіrmаr quе:",
  alternativa: {
    A: "João está á esquerda de Lúcio",
    B: "Ana está de frente para Lúcio",
    C: "João está à direita de Ana",
    D: "Lúcio está à esquerda de Ana",
    certa: "Ana está de frente para Lúcio",
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




    

