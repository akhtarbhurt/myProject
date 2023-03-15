

// navbar javascript 
document.querySelector(".menu").addEventListener('click', () => {
  document.querySelector('ul').classList.toggle('active')
})

// pop up message javascript 

let play = document.getElementById('play')
let popup = document.querySelector('.popup-message')
let sectionAll = document.querySelectorAll('section')
let mark = document.querySelector('.mark')

play.addEventListener('click', () => {
  popup.classList.remove('active')
  sectionAll.forEach((elem) => {
    elem.classList.add('background')
  })
})

mark.addEventListener('click', () => {
  popup.classList.add('active')
  sectionAll.forEach((elem) => {
    elem.classList.remove('background')
  })
})

// tab section javascript 

const tabs = document.querySelector('.tabs');
const btns = document.querySelectorAll('.button')
const articles = document.querySelectorAll('.content')
tabs.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove('live')
    });
    event.target.classList.add('live');
    articles.forEach((article) => {
      article.classList.add('live')
      article.classList.add('animate__fadeInUp')
    });
    const element = document.getElementById(id);
    element.classList.remove('live')
  }

})

