import { hiddenClass } from "./start.js";
import { counterCoin } from "./counters.js";

export const modal = document.querySelector("#modal-js");
export const popups = Array.from(document.querySelectorAll("[data-modal]"));
const backButton = document.querySelectorAll('.modal__button-js');
const desistirButton = document.querySelector('.button-desistir-js');
const panelDesistir = document.querySelector('.desistir__title-coin-js');

export const visibleModal = (type)=>{
    modal.setAttribute('data-modal' ,type)
    const typeModalContainer = modal.getAttribute('data-modal');
    const typeModal = popups.filter(modal =>{
      if(typeModalContainer === modal.getAttribute('data-modal')){
        return modal.classList.remove(hiddenClass)
      }
    })
  
    if(typeModalContainer === type){
      setTimeout(()=>{
        modal.classList.remove(hiddenClass)
        typeModal
      }, 600)
    }
  }
  
const backStart = () => window.location.reload(true);

  backButton.forEach(back =>{
    back.addEventListener('click', backStart)
    back.addEventListener('touchstart', backStart)
  })

const quit = ()=> {
    visibleModal('desistir');
    panelDesistir.innerText = (counterCoin.innerText)
  }
  desistirButton.addEventListener( 'click', quit)
  desistirButton.addEventListener( 'touchstart', quit)



