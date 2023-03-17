import { optionsConteiner } from "./thema.js";

export const hiddenClass = "hiden";
const startConteiner = document.querySelector("#start-js");
const startButton = document.querySelector('[data-button^="start"]');

export function initGame() {
  startButton.addEventListener("click", () =>
    hiddenConteiner(startConteiner, optionsConteiner)
  );
}

export const hiddenConteiner = (conteinerHidden, conteinerVisible) => {
  return setTimeout(() => {
    conteinerHidden.classList.add(hiddenClass);
    conteinerVisible.classList.remove(hiddenClass);
  }, 300);
};
