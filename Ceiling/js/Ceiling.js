const dataLink = document.querySelectorAll('.ceiling__title-tab-block');
const dataContent = document.querySelectorAll('.ceiling__title-tab-content');
const tabImg = document.querySelectorAll('.ceiling__title-set-img');

function tabRemove() {
  dataLink.forEach((elem) => {
    elem.classList.remove('active');
  })
  dataContent.forEach((elem) => {
    elem.classList.remove('active')
  })
  tabImg.forEach((elem) => {
    elem.classList.remove('active');
  })
}

dataLink.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    tabRemove();
    elem.classList.add('active');
    let data = elem.getAttribute('data-tab');
    console.log(data);
    let items = document.querySelectorAll(`#${data}`);
    items.forEach((elem) => {
      elem.classList.add('active');
    })
  })
})

tabImg.forEach((elem)=> {
  elem.addEventListener('click', ()=>{
    tabRemove();
    elem.classList.add('active');
    let data = elem.getAttribute('data-tab');
    console.log(data);
    let items = document.querySelectorAll(`#${data}`);
    items.forEach((elem) => {
      elem.classList.add('active');
    })
    let link = document.querySelectorAll(`.ceiling__title-tab-block[data-tab=${data}]`);
    console.log(link);
    link[0].classList.add('active');
  })
})

