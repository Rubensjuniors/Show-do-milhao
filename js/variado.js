const numeroPergunta = document.querySelector("#numero-pergunta");
const dinherio = document.querySelector("#dinheiro");
const pergunta = document.querySelector("#pergunta");

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
  },
  , {
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
        if (indicePergunta + 1 >= 4) {
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




    

