import { visibleModal, modal, popups} from "./visible-modal.js";
import { hiddenClass } from "./start.js";

const buttonsHelp = document.querySelectorAll(".help__button--js");
const closeButton = document.querySelectorAll(".modal__close-js");

export default function initHelp() {

  function helpVisible() {
    const helpType = this.getAttribute("data-card");
    visibleModal(helpType);
    setTimeout(()=>{
      this.setAttribute('disabled',"")
      this.classList.add("disabled");
    }, 600)
  }

  function closeModalHelp() {
    const typeModalContainer = modal.getAttribute("data-modal");
    const typeModal = popups.filter((popup) => {
      if (typeModalContainer === popup.getAttribute("data-modal")) {
        modal.classList.add(hiddenClass);
        popup.classList.add(hiddenClass);
      }
    });
    return typeModal;
  }

  buttonsHelp.forEach((button) => {
    button.addEventListener("click", helpVisible);
  });

  closeButton.forEach((button) => {
    button.addEventListener("click", closeModalHelp);
  });

}

