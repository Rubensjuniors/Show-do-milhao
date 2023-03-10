import { hiddenClass } from "./start.js";

const modal = document.querySelector("#modal-js");
const popups = Array.from(document.querySelectorAll("[data-modal]"));

export default function visibleModal(tipe){
    modal.setAttribute('data-modal' ,tipe)
    const typeModalContainer = modal.getAttribute('data-modal');
    
    const typeModal = popups.filter(modal =>{
      if(typeModalContainer === modal.getAttribute('data-modal')){
        return modal.classList.remove(hiddenClass)
      }
    })
  
    if(typeModalContainer === typeModal){
      modal.classList.remove(hiddenClass)
      typeModal
    }
  
    
  }
