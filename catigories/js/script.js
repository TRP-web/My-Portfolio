var mySwiper = new Swiper('.catigories-slider__container', {
  slidesPerView: 'auto',
  spaceBetween: 8,
  slidesPerGroup: 4,
  navigation: {
    //Иницылизацыя
    nextEl: '.catigories-slider__arrow-next',
    prevEl: '.catigories-slider__arrow-prev',
  },
})