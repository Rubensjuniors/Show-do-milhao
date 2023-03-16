
const boardContainer = document.querySelector("#questions__board-js");
const alternativeAText = document.querySelector("#alternative-a");
const alternativeBText = document.querySelector("#alternative-b");
const alternativeCText = document.querySelector("#alternative-c");
const alternativeDText = document.querySelector("#alternative-d");

export const questionsApikey = (key, thema) => {
  fetch(key)
    .then((r) => r.json())
    .then((data) => {
      setQuestions(data[thema], randomNumber(data[thema].length))
    })
    .catch((error) => {
      console.error("Error fetching questions:", error);
    });
};

const setQuestions = (questions, index)=>{
  const question = questions[index]

  boardContainer.textContent = question.pergunta;
  alternativeAText.textContent = question.alternativaA;
  alternativeBText.textContent = question.alternativaB;
  alternativeCText.textContent = question.alternativaC;
  alternativeDText.textContent = question.alternativaD;

}


export const randomNumber = (limite) => {
  const numerosPossiveis = Array.from({length: limite}, (_, i) => i);
  const indiceAleatorio = Math.floor(Math.random() * numerosPossiveis.length);
  const numeroAleatorio = numerosPossiveis.splice(indiceAleatorio, 1)[0];
  return numeroAleatorio;
}
