const counterQuestions = document.querySelector("#questions__counter--js");
const timeQuestions = document.querySelector("#questions__time-js");
const counterCoin = document.querySelector("#questions__coin-js");

let counter = 2;
let time = 60;
let dogecoins = 2000;

counterCoin.textContent = dogecoins;
timeQuestions.textContent = time;

export function numberQuestions() {
  counterQuestions.textContent = counter++;
  if (counter > 21) {
    counterQuestions.textContent = 20;
    console.log("ganhou");
  }
}

export function dogeCoinsCounter() {
 const currentNumber = +counterQuestions.textContent
 const currentCoins = +counterCoin.textContent
 if(currentNumber <= 5){
  currentCoins + 1000 ;
  console.log('somar 2.000')
} else if(currentNumber > 5 && currentNumber <= 15){
   console.log('somar 10.000')
  }else if(currentNumber >= 15 && currentNumber <= 19){
   console.log('somar 100.000')
  }else{
   console.log('somar 500.000')
 }
 console.log(currentNumber)
}

export function counterTime() {
  const parar = setInterval(() => {
    timeQuestions.textContent = time--;
    if (time <= -1) {
      clearInterval(parar);
      console.log("tempo esgotado");
    }
  }, 900);
}
export function clearTime() {
  return (time = 0);
}
export function resetTime() {
  time = 60;
}

