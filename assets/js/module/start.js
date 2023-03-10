import { optionsButton } from "./options.js";

export const hiddenClass = "hiden";
const startButton = document.querySelector("#start-js");

export function initGame() {
  startButton.addEventListener("pointerdown", startHidden);

  function startHidden() {
    setTimeout(() => {
      startButton.classList.add(hiddenClass);
      if (optionsButton) {
        optionsButton.classList.remove(hiddenClass);
      }
    }, 300);
  }
}
