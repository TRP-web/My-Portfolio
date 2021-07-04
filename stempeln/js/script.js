window.addEventListener("load", function () {
  const burger = document.querySelector('.header__burger');
  const burgerMenu = document.querySelector('.header__menu');
  const burgerDel = document.querySelector('.header__menu-del');
  burger.addEventListener('click', (e) =>{
    burgerMenu.classList.add('active');
    burgerDel.classList.add('active');
    burger.classList.add('active');
  } )
  burgerDel.addEventListener('click', (e) =>{
    burgerMenu.classList.remove('active');
    burgerDel.classList.remove('active');
    burger.classList.remove('active');
  } )
  const tabPages = document.querySelectorAll('.footer__logo');
  const headArr = document.querySelector('.header-arrow');
  const mainWrapper =  document.querySelector('.main__wrapper');
  const pages = document.querySelectorAll('.page');
  console.log(headArr)
  console.log(tabPages);
  tabPages.forEach((elem) => {
    elem.addEventListener('click', () => {
      pages.forEach((elem) =>{
        elem.classList.remove('active');
      })
      console.log('click');
      elem.classList.add('active');
      let dataPage = elem.getAttribute('data-tab');
      let itemsPage = document.querySelector(dataPage);
      burger.classList.add('active');
      headArr.classList.add('active');
      itemsPage.classList.add('active');
      mainWrapper.classList.add('active');
    })
  })
  const tabPrevArrow = document.querySelectorAll('.header-arrow')
  const page = document.querySelectorAll('.page')
  tabPrevArrow.forEach((elem) => {
    elem.addEventListener('click', () => {
      page.forEach((elem) => {
        elem.classList.remove('active');
      })
      burger.classList.remove('active');
      headArr.classList.remove('active');
      mainWrapper.classList.remove('active');
    })

  })
})

new Swiper('.main__swip-slider',{
  slidesPerView: 1,
  centeredSlides:true,
  loop: true,
  autoplay: {
    deley: 3000,
    disableOnInteraction: false,
  }
})
