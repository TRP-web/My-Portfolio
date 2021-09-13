const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header__menu');

burger.addEventListener('click', (event) => {
  burger.classList.toggle('active')
  headerMenu.classList.toggle('active');
})

const header = document.querySelector('.header');
window.addEventListener('scroll', (event) => {


})

const menuLinks = document.querySelectorAll('.header__link[data-goto]');

if (menuLinks.length > 0) {
  menuLinks.forEach(elem => {
    elem.addEventListener("click", onClick);
  });
  function onClick(elem) {
    
    headerMenu.classList.remove('active');
    burger.classList.remove('active')
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

const videoPrev = document.querySelector('.video__video')
const video = document.querySelector('.video__pop-up')
const videoDel =document.querySelector('.video__del');

videoPrev.addEventListener('click', () =>{
  video.classList.add('active');
})

videoDel.addEventListener('click', ()=>{
  video.classList.remove('active');
})

video.addEventListener('click', ()=>{
  video.classList.remove('active')
})

var mySwiper = new Swiper('.title-slider__container', {
  slidesPerView: 1,
  //
  speceBetween: 50,
  speed: 500,
  pagination: {
    //Иницылизацыя
    el: '.title-slider__pagination',
    //Тип
    type: 'bullets',//fraction
    //Возможносьть переключать слайды Пагинацыей
    clickable: true,
  },
  
  breakpoints: {
    // when window width is <= 575px
    901: {

    },
    310: {


    },
  }
})
