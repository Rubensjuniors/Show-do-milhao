const boardContainer = document.querySelector('[data-questions="board"]');

const alternativeAText = document.querySelector('[data-questions="alternative-a"]');
const alternativeBText = document.querySelector('[data-questions="alternative-b"]');
const alternativeCText = document.querySelector('[data-questions="alternative-c"]');
const alternativeDText = document.querySelector('[data-questions="alternative-d"]');

const containerButtons = document.querySelectorAll('[data-visible=""]');

function handleContainerButtonClick(event) {
  const hiddenClass = "hiden";
  const buttons = event.target.getAttribute("data-button");

  if (!this.classList.contains(hiddenClass)) {
    if (typeof buttons === "string") {
      this.classList.add(hiddenClass);
      containerButtons[1].classList.remove(hiddenClass);
      if (buttons === "variado") {
        this.classList.add(hiddenClass);
        containerButtons[2].classList.remove(hiddenClass);
        fetchQuestions(Math.floor(Math.random() * 30), "./assets/json/data.json");
      }else if(buttons === "portugue"){
        console.log('off')
      }else{
        console.log('off')
      }
    }
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








