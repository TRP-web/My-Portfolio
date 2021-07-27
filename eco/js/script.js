const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu')
const body = document.querySelector('body');
headerButton = document.querySelector('.header-button');
burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  menu.classList.toggle('active');
  body.classList.toggle('lock');
  headerButton.classList.toggle('active');
})

const headerButtonForm = document.querySelector('#button-form')
const headerForm = document.querySelector('.write__me');
const popupDel = document.querySelector('#del');
console.log(headerForm)
console.log(headerButtonForm)
headerButtonForm.addEventListener('click', () => {
  headerForm.classList.add('active');
  body.classList.toggle('lock');
  console.log('ddlfk')
})

popupDel.addEventListener('click', () => {
  headerForm.classList.remove('active');
  body.classList.toggle('lock');
})

const tabBut = document.querySelector('.tab__container')
const tabCont = document.querySelector('.tab__content');
const tabarrow = document.querySelector('.tab__arrow');
tabBut.addEventListener('click', (e) => {
  tabCont.classList.toggle('active');
  tabarrow.classList.toggle('active')
})

const tabPages = document.querySelectorAll('.agrar__block')
const info2 = document.querySelectorAll('.info2')
tabPages.forEach((elem) => {
  elem.addEventListener('click', () => {
    console.log('sdfksdf')
    elem.classList.add('active');
    let dataPage = elem.getAttribute('data-tab');
    let itemsPage = document.querySelector(dataPage);
    itemsPage.classList.add('active');
    body.classList.toggle('lock');
  })
})

const inDel = document.querySelectorAll('.info2__del');
inDel.forEach((elem) => {
  elem.addEventListener('click', () => {
    tabPages.forEach((elem) => {
      elem.classList.remove('active')
    })
    info2.forEach((elem) =>{
      elem.classList.remove('active')
    })
    body.classList.toggle('lock');
  })
})
var mySwiper = new Swiper('.main__slider', {

  //slidesPerColumn: 2,
  //slidesPerColumnFill: 'row',


  pagination: {
    //Иницылизацыя
    el: '.main__slider-pugination',
    //Тип
    type: 'bullets',//fraction
    //Возможносьть переключать слайды Пагинацыей
    clickable: true,
  },
  //Навигацыя(стрелки)
  navigation: {
    //Иницылизацыя
    nextEl: '.main__slider-button-next',
    prevEl: '.main__slider-button-prev',
  },
  slidesPerGroup: 1,
  breakpoints: {
    // when window width is <= 575px
    1231: {
      slidesPerView: 4,
    },
    1160: {
      slidesPerView: 3,
      spaceBetween: 110,
    },
    1040: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    945: {
      slidesPerView: 3,
      spaceBetween: 15,
      loop: false,
    },
    850: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      spaceBetween: 0,
      //initialSlide: 1,
    },
    365: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',

      //initialSlide: 1,
    },
    320: {
      spaceBetween: 15,

      //initialSlide: 1,
    },
  }
})

var mySwiper = new Swiper('.use__slider', {
  slidesPerView: 3,
  centerMode: true,
  pagination: {
    //Иницылизацыя
    el: '.use__slider-pug',
    //Тип
    type: 'bullets',//fraction
    //Возможносьть переключать слайды Пагинацыей
    clickable: true,
  },
  navigation: {
    //Иницылизацыя
    nextEl: '.use__slider-arrow-next',
    prevEl: '.use__slider-arrow-prev',
  },
  centeredSlides: true,
  spaceBetween: 15,
  initialSlide: 1,

  breakpoints: {
    ////Число пиксилей
    1200: {
      //что случится
      slidesPerView: 3,
    },
    961: {
      //что случится
      slidesPerView: 2,
      centerMode: false,
    },

    800: {
      //что случится
      slidesPerView: 2,
      centerMode: false,
      //spaceBetween: 50,
    },

    310: {
      //что случится
      slidesPerView: 1,
      centerMode: true,
    },
    //768:{
    //  //что случится
    //  slidesPerView: 1,
    //  
    //},
    //1024:{
    //  slidesPerView: 2,
    //  spaceBetween: 20,
    //},
    //1366:{
    //  slidesPerView: 3,
    //},
    //1500:{
    //  slidesPerView: 5,
  },
})

var mySwiper = new Swiper('.prep__slider', {
  slidesPerView: 3,
  centerMode: true,
  centeredSlides: true,
  initialSlide: 1,
  pagination: {
    //Иницылизацыя
    el: '.prep__slider-pug',
    //Тип
    type: 'bullets',//fraction
    //Возможносьть переключать слайды Пагинацыей
    clickable: true,
  },
  navigation: {
    //Иницылизацыя
    nextEl: '.prep__slider-next',
    prevEl: '.prep__slider-prev',
  },
  breakpoints: {
    ////Число пиксилей
    1100: {
      //что случится
      slidesPerView: 3,
      centerMode: true,
      centeredSlides: true,
      initialSlide: 1,
    },
    900: {
      //что случится
      slidesPerView: 2,

    },
    750: {
      slidesPerView: 1,

    },
    310: {
      slidesPerView: 1,
    },
  },
})