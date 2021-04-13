const lang = document.querySelector('.languages__h1');
const langBlock = document.querySelector('.languages__blok');

lang.addEventListener('click', () => {
  lang.classList.toggle('active');
  langBlock.classList.toggle('active');
})

const burger = document.querySelector('.burger');
const menuBurger = document.querySelector('.header__menu')

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menuBurger.classList.toggle('active');
})

const slide = document.querySelectorAll('.slider__slide');
const arrow = document.querySelector('.slider__next')

function elemS(elem) {
  elem.style.transform = `scale(${0.85 + (elem.style.zIndex * 0.05)}`
  elem.style.left = 30 * (-1 * (elem.style.zIndex)) + 'px';
}

slide.forEach((elem, index) => {
  elem.style.zIndex = (index + 1);
  elemS(elem);
  //elem.style.transform = `scale(${})`
  console.log(elem.style.zIndex);
});

arrow.addEventListener('click', () => {
  slide.forEach((elem, index, arr) => {
    if (elem.style.zIndex == 1) {
      elem.style.zIndex = arr.length;
    } else {
      elem.style.zIndex = Number(elem.style.zIndex) - 1
    }
    elemS(elem);
  })

})