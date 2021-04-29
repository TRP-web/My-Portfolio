const burger = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.burger-menu');

burger.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
})

const tab = document.querySelectorAll('.burger-menu__tab');
const contentTabs = document.querySelectorAll('.tab-content')


tab.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    tab.forEach((elem) => {
      elem.classList.remove('active');
    })
    elem.classList.add('active');
    contentTabs.forEach((elem) => {
      elem.classList.remove('active')
    })
    let dataVelue = elem.getAttribute('data-tab');
    let contentTab = document.querySelector(dataVelue);
    contentTab.classList.add('active');
  })
})

const prev = document.querySelectorAll('.tab-content__prev');
prev.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    let tabP = elem.closest('.tab-content');
    tabP.classList.remove('active')
    e.stopPropagation()
  })
})

const subCotegories = document.querySelectorAll('.tab-content__block h1')

subCotegories.forEach((elem) =>{
  elem.addEventListener('click', (e) => {
  elem.nextSibling.nextSibling.classList.toggle('active');
  })
})