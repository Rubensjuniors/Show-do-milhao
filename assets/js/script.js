const bord = document.querySelector('[data-questions="board"]');

const a = document.querySelector('[data-questions="a"]');
const b = document.querySelector('[data-questions="b"]');
const c = document.querySelector('[data-questions="c"]');
const d = document.querySelector('[data-questions="d"]');

const buttonStart = document.querySelector('.start__button--js'); 
const buttonsTema = document.querySelectorAll('.choose__button--js');
const containers = document.querySelectorAll('[data-visible=""]');


containers.forEach(container => {
  console.log(container)
})

function getData(questions) {
  fetch('./assets/json/data.json')
  .then(response =>{
        return response.json();
  })
  .then(data =>{
    setData(data, questions)
    
  })     
}

function setData(data, questions) {
  if(questions >= data.questions.length) {
    questions = 1
  }
  
  bord.textContent = data.questions[questions].pergunta;

  a.textContent= data.questions[questions].alternativaA;
  b.textContent= data.questions[questions].alternativaB;
  c.textContent= data.questions[questions].alternativaC;
  d.textContent= data.questions[questions].alternativaD;

  const {correta} = data.questions[questions]
}

 getData(Math.floor(Math.random() * 31));


