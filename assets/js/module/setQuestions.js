import {numberQuestions, dogeCoinsCounter} from './counters.js'

const boardContainer = document.querySelector("#questions__board-js");
const a = document.querySelector("#alternative-a");
const b = document.querySelector("#alternative-b");
const c = document.querySelector("#alternative-c");
const d = document.querySelector("#alternative-d");

export let dataQuestions;
export let correctAsk;

export const questionsApikey = async (thema) => {
  try{
    const apiKey = `https://the-trivia-api.com/api/questions?limit=20&categories=${thema}`;
    const dataResponse = await fetch(apiKey)
    const data = await dataResponse.json()
  
    setQuestions(data,0)
    dataQuestions = data;

  }catch(erro){
    console.error("Error fetching questions:", erro);
  }
}

export function setQuestions(questions, index) {

  const question = questions[index];           
  const alt = generateLetters(a, b, c, d);

  boardContainer.textContent = question.question;
  alt[0].textContent = question.incorrectAnswers[0];
  alt[1].textContent = question.correctAnswer;
  alt[2].textContent = question.incorrectAnswers[1];
  alt[3].textContent = question.incorrectAnswers[2];

  correctAsk = question.correctAnswer
  console.log(question.correctAnswer)
}


export const nextQuestion = (data, index) =>{
  numberQuestions()
  dogeCoinsCounter()
  setQuestions(data, index);
} 

function generateLetters(a , b , c ,d) {
  const letters = [a, b, c, d];
  let result = [];
  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * letters.length);
    result.push(letters[index]);
    letters.splice(index, 1);
  }
  return result;
}




