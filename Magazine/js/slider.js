$(document).ready(function () {
  $('.hot__slider').slick({
    infinite: false,
    variableWidth: true,
  })
  $('.new-products__slider').slick({
    infinite: false,
    variableWidth: true,
    slidesToShow:4,
  })
  $('.featured__slider').slick({
    infinite: false,
    variableWidth: true,
    slidesToShow:3,
    rows:2,
  })
})