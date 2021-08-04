var mySwiper = new Swiper('.engine-slider__container', {
  
  
  navigation: {
    //Иницылизацыя
    nextEl: '.engine-slider__arrow-next',
    prevEl: '.engine-slider__arrow-prev',
  },
  breakpoints: {
    // when window width is <= 575px
    1400: {
      slidesPerView: 2,
      centeredSlides: true,
      loop: true,
    },
    771: {
      slidesPerView: 2,
      centeredSlides: true,
      loop: true,
    },
    610: {
      slidesPerView: 2,
      centeredSlides: false,
      loop: true,
      //spaceBetween: 15,
    },
    490: {
      slidesPerView: 1.7,
      centeredSlides: true,
      loop: true,
    },
    430: {
      slidesPerView: 1.5,
      centeredSlides: true,
      loop: false,
    },
    410: {
      slidesPerView: 1.4,
      centeredSlides: true,
      loop: false,
    },
    320: {
      slidesPerView: 1,
      centeredSlides: true,
      loop: false,
    },
  }
})