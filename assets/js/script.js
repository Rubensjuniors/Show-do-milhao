
const containerButtons = document.querySelectorAll(".visible");

const questionsCounter = document.querySelector('#questions__counter--js');
const panelCoin = document.querySelector('#questions__coin-js');
const panelTime = document.querySelector('#questions__time-js');

const boardContainer = document.querySelector('#questions__board-js');

const helpsQuestions = document.querySelectorAll(".help__button--js");

const alternativasButtons = document.querySelectorAll('.response__options-js');
const resposta = document.querySelectorAll('[data-response]');


const alternativeAText = document.querySelector("#alternative-a");
const alternativeBText = document.querySelector("#alternative-b");
const alternativeCText = document.querySelector("#alternative-c");
const alternativeDText = document.querySelector("#alternative-d");


const hiddenClass = "hiden";
const urlQuestionsVariado = "./assets/json/variado.json";
const urlQuestionsPortugues = "./assets/json/portugues.json";
const urlQuestionsMatematica = "./assets/json/matematica.json";
let json = null

function handleContainerButtonClick(event) {
  const buttons = event.target.getAttribute("data-button");
  if (this.classList.contains(hiddenClass) || !buttons) {
    return;
  }
  this.classList.add(hiddenClass);
  containerButtons[1].classList.remove(hiddenClass);
  switch (buttons) {
    case "variado":
      containerButtons[1].classList.add(hiddenClass);
      containerButtons[2].classList.remove(hiddenClass);
      fetchQuestions(Math.floor(Math.random() * 30), urlQuestionsVariado);
      break;
    case "portugues":
      containerButtons[1].classList.add(hiddenClass);
      containerButtons[2].classList.remove(hiddenClass);
      fetchQuestions(Math.floor(Math.random() * 30), urlQuestionsPortugues);
      break;
    case "matematica":
      containerButtons[1].classList.add(hiddenClass);
      containerButtons[2].classList.remove(hiddenClass);
      fetchQuestions(Math.floor(Math.random() * 30), urlQuestionsMatematica);
      break;
    default:
      break;
  }
}
containerButtons.forEach((button) => {
  button.addEventListener("click", handleContainerButtonClick);
  button.addEventListener("touchstart", handleContainerButtonClick);
});

function fetchQuestions(questionIndex, url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      setQuestions(data.questions[questionIndex]);
      json = data.questions[questionIndex]
      console.log(json.correta)
    })
    .catch((error) => {
      console.error("Error fetching questions:", error);
    });
}

function setQuestions(questionData) {
  boardContainer.textContent = questionData.pergunta;
  alternativeAText.textContent = questionData.alternativaA;
  alternativeBText.textContent = questionData.alternativaB;
  alternativeCText.textContent = questionData.alternativaC;
  alternativeDText.textContent = questionData.alternativaD;
}

function handleClickAlternativa(){
  const {correta} = json
  const picked = this.querySelector('div').innerText;

  if(correta === picked){
    console.log("deu")
  }else{
    console.log('nao')
  }

 
}
alternativasButtons.forEach(alternativa => {
alternativa.addEventListener('click', handleClickAlternativa)
alternativa.addEventListener('touchstart', handleClickAlternativa)
})


