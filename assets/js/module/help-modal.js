import { visibleModal, modal,  popups } from './backStart.js'
import { hiddenClass } from './start.js';
import { counterTime } from './counters.js';

const buttonsHelp = document.querySelectorAll('.help__button--js');
const closeButton = document.querySelectorAll('.modal__close-js')

export default function initHelp(){

  buttonsHelp.forEach(button =>{
    button.addEventListener('click', helpVisible)
  });
  
  function helpVisible(){
      const helpType = this.getAttribute('data-card')
      visibleModal(helpType)
      counterTime(true)
    }
  
  function closeModalHelp(){
    
    const typeModalContainer = modal.getAttribute('data-modal');
    const typeModal = popups.filter(popup =>{
      if(typeModalContainer === popup.getAttribute('data-modal')){
        modal.classList.add(hiddenClass)
        return popup.classList.add(hiddenClass)
      }
    })
  
    return typeModal
  }
  closeButton.forEach( button =>{
    button.addEventListener('click', closeModalHelp)
  })
}