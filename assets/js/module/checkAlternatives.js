import { correctAsk, nextQuestion, dataQuestions, randomNumber} from "./setQuestions.js";
import { visibleModal } from "./visible-modal.js";

const alternativasButtons = Array.from(
  document.querySelectorAll(".response__options-js")
);
export function initCheck() {

  const selectAlt = (event) => {
    const boxAlt = event.currentTarget;
    const selectAltText = event.currentTarget.querySelector("div").innerText;
    selectedAlternative(boxAlt, selectAltText, correctAsk);
  };

  const selectedAlternative = (element, selected, correct) => {
    if (selected === correct) {
      element.classList.add("green");
      setTimeout(() => {
        element.classList.remove("green");
        nextQuestion(dataQuestions, randomNumber(dataQuestions.length))
      }, 600);
    }else{
      element.classList.add('red');
      visibleModal('erro')
    }
  };

  alternativasButtons.forEach((alt) => {
    alt.addEventListener("click", selectAlt);
  });
}
