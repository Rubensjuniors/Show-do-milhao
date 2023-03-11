import { visibleModal } from './backStart.js'

const buttonsHelp = document.querySelectorAll('.help__button--js');
const closeButton = document.querySelectorAll('.modal__close-js')

buttonsHelp.forEach(button =>{
  button.addEventListener('click', helpVisible)
});

function helpVisible(){
    const helpType = this.getAttribute('data-card')
    visibleModal(helpType)
  }


function closeModal(){
    
}

closeButton.forEach( button =>{
  button.addEventListener('click', closeModal)
})