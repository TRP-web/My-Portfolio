const burger = document.querySelector('.burger');
console.log(burger)
const headerMenu = document.querySelector('.second-line');
console.log(headerMenu)

burger.addEventListener('click', (event) =>{
  console.log('askdfjhk')
  burger.classList.toggle('active')
  headerMenu.classList.toggle('active')
})