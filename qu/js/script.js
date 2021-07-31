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
const parent = document.querySelector('.popup__inner-yas')
console.log(parent)
no.addEventListener('mouseover', (event) => {
  //Рандомное розположение по x
  no.style.left = `${Math.round(Math.random() * 200)}` + 'px';
  //Рандомное розположение по y
  no.style.top = `${Math.round(Math.random() * 200)}` + 'px';;
})

console.log()