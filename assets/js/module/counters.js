import { visibleModal } from "./visible-modal.js";

const counterQuestions = document.querySelector("#questions__counter--js");
export const counterCoin = document.querySelector("#questions__coin-js");

let counter = 1;
let dogecoins = 2000;


export const numberQuestions = () => {
  counterQuestions.textContent = (counter++ + 1)
  if (counter > 19) {
    counterQuestions.textContent = 20;
    visibleModal("win");
  }
}

export const dogeCoinsCounter = () => {
  
  const currentNumber = +counterQuestions.textContent;
  const currentCoins = +counterCoin.textContent;

  if (currentNumber <= 5) {
    counterCoin.textContent = currentCoins + 2000;
  
  } else if (currentNumber > 5 && currentNumber <= 14) {
    counterCoin.textContent = currentCoins + 10000;

  } else if (currentNumber >= 15 && currentNumber <= 18) {
    counterCoin.textContent = currentCoins + 100000;

  } else {
    counterCoin.textContent = currentCoins + 1000000;
  }

}


counterQuestions.textContent = counter
counterCoin.textContent = dogecoins;






