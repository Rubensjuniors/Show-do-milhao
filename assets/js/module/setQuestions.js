const boardContainer = document.querySelector("#questions__board-js");
const alternativeAText = document.querySelector("#alternative-a");
const alternativeBText = document.querySelector("#alternative-b");
const alternativeCText = document.querySelector("#alternative-c");
const alternativeDText = document.querySelector("#alternative-d");

export let correct;
export let dataQuestions = null;

export function fetchQuestions(url, tema) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      setQuestions(data[tema], randomNumber(data[tema].length));
      dataQuestions = data[tema]
    })
    .catch((error) => {
      console.error("Error fetching questions:", error);
    });
}

export function setQuestions(questions, index) {
  const question = questions[index];

  boardContainer.textContent = question.pergunta;
  alternativeAText.textContent = question.alternativaA;
  alternativeBText.textContent = question.alternativaB;
  alternativeCText.textContent = question.alternativaC;
  alternativeDText.textContent = question.alternativaD;

  correct = question.correta
  console.log(correct)
}

export function randomNumber(limite) {
  const numerosPossiveis = Array.from({length: limite}, (_, i) => i);
  const indiceAleatorio = Math.floor(Math.random() * numerosPossiveis.length);
  const numeroAleatorio = numerosPossiveis.splice(indiceAleatorio, 1)[0];
  return numeroAleatorio;
}
