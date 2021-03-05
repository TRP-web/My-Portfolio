const tabsProjects = document.querySelectorAll('.projects__link')

tabsProjects.forEach(function (item) {
  item.addEventListener('click', function () {
    tabsProjects.forEach(function (item) {
      item.classList.remove('active')
    })

    item.classList.add('active')
  })
})

const tabsMobile = document.querySelectorAll('.mobile__span')

tabsMobile.forEach(function (item) {
  item.addEventListener('click', function () {
    item.classList.toggle('active')
    
    let tabMob = item.getAttribute('data-tab')
    
    let pTabMob = document.querySelector(tabMob)
    
    pTabMob.classList.toggle('active')
    
  })
})
const burger = document.querySelector('.header__burger')

const headerMenu = document.querySelector('.header__menu')

burger.addEventListener('click', function(){
  burger.classList.toggle('active')
  headerMenu.classList.toggle('active')
})
