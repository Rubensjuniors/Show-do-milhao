import { correct } from "./setQuestions.js";
const alternativasButtons = Array.from(
  document.querySelectorAll(".response__options-js")
);
export function initCheck() {
  const pickedAlternative = (element, picked, correctCallBack) => {
    if (picked === correctCallBack) {
      element.classList.add("green");
      setTimeout(() => {
        element.classList.remove("green");
      }, 600);
    }else{
      element.classList.add('red');
    }
  };

  const selectAlt = (event) => {
    const boxAlt = event.currentTarget;
    const selectAltText = event.currentTarget.querySelector("div").innerText;
    pickedAlternative(boxAlt, selectAltText, correct);
    console.log(boxAlt);
  };

  alternativasButtons.forEach((alt) => {
    alt.addEventListener("click", selectAlt);
  });
}
