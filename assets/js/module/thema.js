import { hiddenConteiner } from "./start.js";
import { questionsApikey } from "./setQuestions.js";

export const optionsConteiner = document.querySelector("#options-js");
export const questionsConteiner = document.querySelector("#questions-js");
const themasButton = document.querySelectorAll('.themas__buttons-js')

export async function insertThemas(){
  const responseThema = await fetch('https://the-trivia-api.com/api/categories');
  const theme = await responseThema.json()
  
    themasButton[0].setAttribute('data-theme', theme["General Knowledge"][0])
    themasButton[1].setAttribute('data-theme', theme["Food & Drink"][0])
    themasButton[2].setAttribute('data-theme', theme["Film & TV"][2])
    themasButton[3].setAttribute('data-theme', theme["History"][0])
    themasButton[4].setAttribute('data-theme', theme["Music"][0])

}

const selectThema = (event)=>{
  const selectedTheme = event.currentTarget.getAttribute('data-theme')
  questionsApikey(selectedTheme)
  hiddenConteiner(optionsConteiner, questionsConteiner)
}
themasButton.forEach((button) => button.addEventListener("click", selectThema));
