const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header__menu');

burger.addEventListener('click', (event) => {
  burger.classList.toggle('active')
  headerMenu.classList.toggle('active');
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


var mySwiper = new Swiper('.slider__container', {
  slidesPerView: 2,
  //

  spaceBetween: 20,
  speed: 800,
  navigation: {
    //Иницылизацыя
    prevEl: '.slider__arrows-prev',
    nextEl: '.slider__arrows-next',

  },
  breakpoints: {
    // when window width is <= 575px
    901: {
      slidesPerView: 2,
    },
    310: {
      slidesPerView: 1,

    },
  }
})
