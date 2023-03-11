import { correct, randomNumber, dataQuestions, setQuestions } from './setQuestions.js'
import { resetTime, clearTime, numberQuestions, dogeCoinsCounter } from './counters.js'
import {visibleModal} from './backStart.js'

const alternativasButtons = Array.from(document.querySelectorAll('.response__options-js'));

 export default function initCheck(){

  alternativasButtons.forEach(button => {
    button.addEventListener('click', checkAlternativa)
    button.addEventListener('touchstart', checkAlternativa)
  })

  function checkAlternativa(){
    const picked = this.querySelector('div').innerText
    const corretaBox = alternativasButtons.filter(box =>{
      const boxs = box.querySelector('div').innerHTML
      if(boxs === correct){
        return box.classList.add('green');
      }
    })

   if(picked === correct){
    this.classList.add('green');
    setTimeout(()=>{
      this.classList.remove('green');
      numberQuestions()
      dogeCoinsCounter()
      resetTime()
      nextQuestion(dataQuestions, randomNumber(dataQuestions.length))
      
    },600);
   }else{
    this.classList.add('red');
    corretaBox
    clearTime()
    visibleModal('erro')
    // setTimeout(()=>{
    // },200)
   }
  }


  function nextQuestion(data, index){
    setQuestions(data, index)

  }

  

  
} 

