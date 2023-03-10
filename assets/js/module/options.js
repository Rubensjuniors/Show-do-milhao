import { fetchQuestions } from "./setQuestions.js";
import { hiddenClass } from "./start.js";
import { counterTime } from "./counters.js";

export const optionsButton = document.querySelector("#options-js");
export const questionsButton = document.querySelector("#questions-js");

const buttonTemas = Array.from(document.querySelectorAll("[data-tema]"));

export function initOpitons() {
  buttonTemas.forEach((tema) => {
    tema.addEventListener("pointerdown", checkTema);
  });

  function checkTema() {
    setTimeout(() => {
      const temas = this.getAttribute("data-tema");
      const urlJson = "./assets/json/Questions.json";
      switch (temas) {
        case "variado":
          fetchQuestions(urlJson, temas);
          questionsButton.setAttribute("data-tema", temas);
          questionsButton.classList.remove(hiddenClass);
          if (!questionsButton.classList.contains(hiddenClass)) {
            optionsButton.classList.add(hiddenClass);
            counterTime();
          }
          break;
        case "portugues":
          fetchQuestions(urlJson, tema);
          questionsButton.classList.remove(hiddenClass);
          questionsButton.setAttribute("data-tema", temas);
          if (!questionsButton.classList.contains(hiddenClass)) {
            optionsButton.classList.add(hiddenClass);
            counterTime();
          }
          break;
        case "matematica":
          fetchQuestions(urlJson, tema);
          questionsButton.classList.remove(hiddenClass);
          questionsButton.setAttribute("data-tema", temas);
          if (!questionsButton.classList.contains(hiddenClass)) {
            optionsButton.classList.add(hiddenClass);
            counterTime();
          }
          break;
        default:
          break;
      }
    }, 300);
  }
}
