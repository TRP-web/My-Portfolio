const filter = document.querySelectorAll('.products__filt');

filter.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    elem.classList.toggle('active');
    e.stopPropagation()
  })
})

const scrollToTop = document.querySelector('#scrol-to-top')

scrollToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  console.log('top');
})

const scrollToTopMob = document.querySelector('#scrol-to-top-mob')

scrollToTopMob.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  console.log('top');
})

const filt = document.querySelectorAll('.slider2__menu-list');

filt.forEach((elem) =>{
  elem.addEventListener('click', (e)=>{
    elem.classList.toggle('active');
  })
})