$(document).ready(function () {
  $('.slider1').slick({
    //Стрклки
    arrows: true,
    //Точки
    dots: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          arrows: false,

        }
      },


    ]
  })
  $('.posts__slider').slick({
    //Стрклки
    arrows: true,
    //Точки
    dots: false,
    //Количество отображаемых слайдов
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    variableWidth: true,
    //центер мод
    //centerMode: true,
    //Скакого слайда начать
    initialSlide: 0,
    waitForAnimate:false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          variableWidth: false,

        }
      },
      {
        breakpoint: 815,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
        }
      }
    ]
  })

  $('.slider-img').slick({
    //Стрклки
    arrows: false,
    //Точки
    dots: true,
    //Количество отображаемых слайдов
    slidesToShow: 1,
    infinite: true,
    variableWidth: true,
    //Прокурутка на копмпютере
    draggable: false,
    //Прокрутка на телефоне
    swope: false,
  })
})