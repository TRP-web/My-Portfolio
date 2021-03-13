const burger = document.querySelector('.header__menu-burger')
const menu = document.querySelector('.header__menu-block')

burger.addEventListener('click', function () {
  burger.classList.toggle('active')
  menu.classList.toggle('active')
})

const tabBolock = document.querySelectorAll('.button-li')

tabBolock.forEach(function(item){
  item.addEventListener('click', function(){
    item.classList.toggle('active')

    tabId = item.getAttribute('data-tab')

    let Atab = document.querySelector(tabId)
    Atab.classList.toggle('active')
  })
})