$(document).ready(function () {
  $('.mobile__catigories-slider').slick({
    arrows: false,
    slidesToShow:3,
    slidesToScroll:2,
  })
  $('.mobile__popular-slider').slick({
    arrows: false,
    slidesToShow:1,
    slidesToScroll:1,
    dots: true,
  })
  $('.mobile__img-slider').slick({
    arrows: false,
    slidesToShow:1,
    slidesToScroll:1,
    dots: true,
  })
  $('.mobile__brend-slider').slick({
    arrows: false,
    slidesToShow:1,
    slidesToScroll:1,
    dots: false,
  })
  $('.mobile__stats-slider').slick({
    arrows: false,
    slidesToShow:1,
    slidesToScroll:1,
    dots: true,
  })
})