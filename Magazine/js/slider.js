$(document).ready(function () {
  $('.hot__slider').slick({
    infinite: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          variableWidth: false,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          variableWidth: false,
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        }
      },
    ]
  })
  $('.new-products__slider').slick({
    infinite: false,
    variableWidth: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          variableWidth: false,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
        }
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          
        }
      },
    ]
  })
  $('.featured__slider').slick({
    infinite: false,
    variableWidth: true,
    slidesToShow: 3,
    rows: 2,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          rows: 1,
          variableWidth: false,
        }
      },
      {
        breakpoint: 615,
        settings: {
          slidesToShow: 1,
          rows: 1,
          variableWidth: false,
          
        }
      },
      
      
    ]
  })
})