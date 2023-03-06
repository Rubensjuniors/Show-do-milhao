const boardContainer = document.querySelector('[data-questions="board"]');

const alternativeAText = document.querySelector('[data-questions="alternative-a"]');
const alternativeBText = document.querySelector('[data-questions="alternative-b"]');
const alternativeCText = document.querySelector('[data-questions="alternative-c"]');
const alternativeDText = document.querySelector('[data-questions="alternative-d"]');

const containerButtons = document.querySelectorAll('[data-visible=""]');

 const urlQuestionsVariado = "./assets/json/variado.json";
 const urlQuestionsPortugues = "./assets/json/portugues.json";
 const urlQuestionsMatematica= "./assets/json/matematica.json";
 const hiddenClass = "hiden";

const helpButtons = document.querySelectorAll('.help__button--js');
const modal = document.querySelector(".popups-js");
const close = document.querySelector('.close-js');



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
    })
    .catch((error) => {
      console.error("Error fetching questions:", error);
    });
}

function setQuestions(questionData) {
  const correctAnswer = questionData.correta;

  boardContainer.textContent = questionData.pergunta;

  alternativeAText.textContent = questionData.alternativaA;
  alternativeBText.textContent = questionData.alternativaB;
  alternativeCText.textContent = questionData.alternativaC;
  alternativeDText.textContent = questionData.alternativaD;

 
}


fetchQuestions(Math.floor(Math.random() * 30), urlQuestionsVariado);

function handleModalClick(event){
  const cards = event.target.getAttribute( 'alt');
  if(cards === 'picked'){
    modal.classList.remove(hiddenClass)
  }
   
console.log(event.target.getAttribute( 'alt'))
}

helpButtons.forEach((button) =>{
  button.addEventListener('click', handleModalClick)
})

close.addEventListener('click', ()=>{
  modal.classList.add(hiddenClass)
})