const headerTab = document.querySelectorAll('.header__list');
const headerContent = document.querySelectorAll('.header__block-tab');
console.log(headerContent) 
headerTab.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    headerContent.forEach((elem) => {
      elem.classList.remove('active');
    })
    elem.classList.add('active');
    let data = elem.getAttribute('data-tab');
    let items = document.querySelector(data);
    items.classList.add('active');
  })
})

document.addEventListener('click', (e) => {
    if (e.target.closest('.header')) {
      return
    } else {
      headerContent.forEach((elem) => {
        elem.classList.remove('active');
      })
    }
})

const menuBurger = document.querySelector('.header__burger');

menuBurger.addEventListener('click', () =>{
  headerContent[0].classList.toggle('active');
})

const subHeaderTub = document.querySelectorAll('.sub-tab')

subHeaderTub.forEach((elem) =>{
  elem.addEventListener('click', ()=>{
    elem.classList.toggle('active');
    elem.nextSibling.nextSibling.classList.toggle('active');
  })
})

;( function( $ ) {

	$( '.ceiling__foto-img-block' ).swipebox();

} )( jQuery );

;( function( $ ) {

	$( '.ceiling__settings-foto' ).swipebox();

} )( jQuery );

;( function( $ ) {

	$( '.ceiling__video-gal-foto' ).swipebox();

} )( jQuery );

const rangeSliderValue = document.getElementById('ceiling__volume');
document.addEventListener('DOMContentLoaded', ()=>{
  const calcSlider = document.getElementById('ceiling__fader');
  
  noUiSlider.create(calcSlider, {
    start: 0,
    connect: [true, false],
    step:1,
    range: {
        'min': 5,
        'max': 50
    }
  });
  calcSlider.noUiSlider.on('update', (values, handle)=>{
    let valuesRaund = Math.round(values);
    rangeSliderValue.textContent = valuesRaund;
  })
});