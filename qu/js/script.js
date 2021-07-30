const tabPages = document.querySelectorAll('.popup__quest-but')

tabPages.forEach((elem) => {
  elem.addEventListener('click', () => {
    elem.classList.toggle('active');
    let dataPage = elem.getAttribute('data-tab');
    let itemsPage = document.querySelector(dataPage);
    itemsPage.classList.toggle('active');
  })
})

const no = document.querySelector('#no');

no.addEventListener('mouseover',(event) =>{
  console.log(no.style.top)
  //Рандомное розположение по x
  no.style.left = `30px`;//${Math.round(Math.random() * (250 - parseInt(no.style.width)))}px
  //Рандомное розположение по y
  no.style.top = `${Math.round(Math.random() * (100 - parseInt(no.style.height)))}px`;
  console.log(Math.round(Math.random() ))
  console.log('hover')
})

console.log(no)