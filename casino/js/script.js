const vidjet = document.querySelectorAll('.casino__vidjet');
const closeR = document.querySelectorAll('.vigjet__close');

setTimeout(() => {
  vidjet[0].classList.add('active');
}, 30000);

closeR[0] .addEventListener('click', (event) =>{
  vidjet[0].classList.remove('active');
  setTimeout(() => {
    vidjet[1].classList.add('active');
  }, 30000);
})

closeR[1] .addEventListener('click', (event) =>{
  vidjet[1].classList.remove('active');
  setTimeout(() => {
    vidjet[0].classList.add('active');
  }, 80000);
})