const lang = document.querySelector('.languages__h1');
const langBlock = document.querySelector('.languages__blok');

lang.addEventListener('click', () => {
  lang.classList.toggle('active');
  langBlock.classList.toggle('active');
})

const burger = document.querySelector('.burger');
const menuBurger = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menuBurger.classList.toggle('active');
})

const slide = document.querySelectorAll('.slider__slide');
const slideRev = Array.from(slide).reverse();
const arrow = document.querySelector('.slider__next');
let pug = document.querySelectorAll('.pag__but');


let pugRev = Array.from(pug).reverse()
console.log(pugRev[1])
console.log(pug[1])

function elemS(elem) {
  elem.style.transform = `scale(${0.85 + (elem.style.zIndex * 0.05)}`
  elem.style.left = 30 * (-1 * (elem.style.zIndex)) + 'px';
}

function pugActive(elem, index, arr) {
  if (Number(elem.style.zIndex) === arr.length) {
    pug.forEach((elem) => {
      elem.children[0].classList.remove('active');
    })
    pug[index].children[0].classList.add('active');
    console.log(pug[index].children);
  }
}

slide.forEach((elem, index, arr) => {
  slideRev.forEach((elem, index, arr) => {
    elem.style.zIndex = (index + 1);
  })
  elemS(elem);
  pugActive(elem, index, arr)
  console.log(elem.style.zIndex);
});

arrow.addEventListener('click', () => {
  slide.forEach((elem, index, arr) => {
    if (Number(elem.style.zIndex) === arr.length) {
      elem.style.zIndex = Number(elem.style.zIndex) - (arr.length - 1);
    } else {
      elem.style.zIndex = Number(elem.style.zIndex) + 1;
    }
    elemS(elem);
    pugActive(elem, index, arr);
  })

});

const tabs = document.querySelectorAll('.features__tabs-title');
console.log(tabs);

tabs.forEach((elem) => {
  elem.addEventListener('click', () =>{
    elem.classList.toggle('active');
    let data = elem.getAttribute('data-tab');
    let tab = document.querySelector(data);
    tab.classList.toggle('active');
    tab.parentElement.classList.toggle('active');
  })
});