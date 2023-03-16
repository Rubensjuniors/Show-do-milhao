import { optionsConteiner } from "./thema.js";

export const hiddenClass = "hiden";
const startConteiner = document.querySelector("#start-js");
const startButton = document.querySelector('[data-button^="start"]');

export function initGame() {
  startButton.addEventListener("click", () =>
    hiddenConteiner(startConteiner, optionsConteiner)
  );
}

export const hiddenConteiner = (ConteinerHidden, ConteinerVisible) => {
  return setTimeout(() => {
    ConteinerHidden.classList.add(hiddenClass);
    ConteinerVisible.classList.remove(hiddenClass);
  }, 300);
};
