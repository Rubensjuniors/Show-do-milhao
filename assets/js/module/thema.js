import { hiddenConteiner } from "./start.js";
import { questionsApikey } from "./setQuestions.js";

export const optionsConteiner = document.querySelector("#options-js");
export const questionsConteiner = document.querySelector("#questions-js");

const buttonTemas = Array.from(document.querySelectorAll("[data-tema]"));
const urlJson = "./assets/json/Questions.json";



const pickedThema = (option) => {
  const themas = {
    variado(thema) {
      questionsApikey(urlJson, thema);
      hiddenConteiner(optionsConteiner, questionsConteiner);
    },
    portugues(thema) {
      questionsApikey(urlJson, thema);
      hiddenConteiner(optionsConteiner, questionsConteiner);
    },
    matematica(thema) {
      questionsApikey(urlJson, thema);
      hiddenConteiner(optionsConteiner, questionsConteiner);
    },
  };

  return themas?.[option](option);
};

const selectThema = (event) => {
  const themaPicked = event.currentTarget.getAttribute("data-tema");
  return pickedThema(themaPicked);
};

buttonTemas.forEach((button) => button.addEventListener("click", selectThema));
