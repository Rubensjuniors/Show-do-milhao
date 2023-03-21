import {numberQuestions, dogeCoinsCounter} from './counters.js'

const boardContainer = document.querySelector("#questions__board-js");
const alternativeAText = document.querySelector("#alternative-a");
const alternativeBText = document.querySelector("#alternative-b");
const alternativeCText = document.querySelector("#alternative-c");
const alternativeDText = document.querySelector("#alternative-d");

export let dataQuestions;
export let correctAsk;

export const questionsApikey = async (thema) => {
  try{
    const apiKey = `https://the-trivia-api.com/api/questions?limit=20&categories=${thema}`;
    const dataResponse = await fetch(apiKey)
    const data = await dataResponse.json()
  
    setQuestions(data, randomNumber(data.length))
    dataQuestions = data


  }catch(erro){
    console.error("Error fetching questions:", erro);
  }
}

export function setQuestions(questions, index) {
  const question = questions[index];  

  boardContainer.textContent = question.question;
  alternativeAText.textContent = question.incorrectAnswers[0];
  alternativeBText.textContent = question.correctAnswer;
  alternativeCText.textContent = question.incorrectAnswers[1];
  alternativeDText.textContent = question.incorrectAnswers[2];

  correctAsk = question.correctAnswer

  console.log(question.correctAnswer)
}

export const randomNumber = (limite) => {
  const numerosPossiveis = Array.from({length: limite}, (_, i) => i);
  const indiceAleatorio = Math.floor(Math.random() * numerosPossiveis.length);
  const numeroAleatorio = numerosPossiveis.splice(indiceAleatorio, 1)[0];
  return numeroAleatorio;
}

export const nextQuestion = (data, index) =>{
  numberQuestions()
  dogeCoinsCounter()
  setQuestions(data, index);
} 