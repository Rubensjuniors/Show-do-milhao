import {correctAsk, nextQuestion, dataQuestions,} from "./setQuestions.js";
import { visibleModal } from "./visible-modal.js";


const alternativasButtons = [...document.querySelectorAll(".response__options-js")]


export function initCheck() {
  const selectAlt = (event) => {
    const boxAlt = event.currentTarget;
    const selectAltText = event.currentTarget.querySelector("div").innerText;
    selectedAlternative(boxAlt, selectAltText, correctAsk);
  };

  const selectedAlternative = (element, selected, correct) => {
    const classGreen = 'green';
    const classRed = 'red';

    const corretaConteiner = alternativasButtons.filter( conteiner => {
      const conteiners = conteiner.querySelector("div").innerHTML;
      if (conteiners === correct) {
        return conteiner.classList.add(classGreen);
      }
    });

    if (selected === correct) {
      element.classList.add(classGreen);
      setTimeout(() => {
        element.classList.remove(classGreen);
        nextQuestion(dataQuestions, Math.floor(Math.random() * dataQuestions.length));
      }, 600);
    } else {
      element.classList.add(classRed);
      visibleModal("erro");
      corretaConteiner;
    }
  };

  alternativasButtons.forEach((alt) => {
    alt.addEventListener("click", selectAlt);
    alt.addEventListener("touchstart", selectAlt);
  });
}


