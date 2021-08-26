const burger = document.querySelector('.burger-inner');
const headerMenu = document.querySelector('.header__menu');
const burgerContent = document.querySelector('.burger');

burger.addEventListener('click', (event) => {
  burger.classList.toggle('active')
  headerMenu.classList.toggle('active');
  burgerContent.classList.toggle('active');
})

const header = document.querySelector('.header');
window .addEventListener('scroll', (event) =>{

  if(window.pageYOffset > 300) {
    header.classList.add('active');
  }else{
    header.classList.remove('active');
  }
 
})

const menuLinks = document.querySelectorAll('.header__link[data-goto]');

if (menuLinks.length > 0) {
  menuLinks.forEach(elem => {
    elem.addEventListener("click", onClick);
  });
  function onClick(elem) {
    burger.classList.remove('active')
    headerMenu.classList.remove('active');

    const menuLink = elem.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      elem.preventDefault();
    }
  }
}

const tab = document.querySelectorAll('.question-tab');
tab.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    elem.classList.toggle('active');
    let dataPage = elem.getAttribute('data-tab');
    let itemsPage = document.querySelector(dataPage);
    itemsPage.classList.toggle('active');
  })

})

var mySwiper = new Swiper('.slider__container', {
  slidesPerView: 1,
  //
  speed: 800,
  pagination: {
    //Иницылизацыя
    el: '.slider__pagination',
    //Тип
    type: 'bullets',//fraction
    //Возможносьть переключать слайды Пагинацыей
    clickable: true,
  },
  navigation: {
    //Иницылизацыя
    prevEl: '.slider__arrow-prev',
    nextEl: '.slider__arrow-next',

  },
  breakpoints: {
    // when window width is <= 575px
    901: {

    },
    310: {


    },
  }
})
