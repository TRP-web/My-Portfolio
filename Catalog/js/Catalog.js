const Sort = document.querySelectorAll('.products__sort-button');

Sort.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    elem.classList.toggle('active')
  })
})

const conect = document.querySelectorAll('.filters__conect')
console.log(conect)
conect.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    elem.classList.toggle('active')
    if (elem.className === 'filters__conect active') {
      elem.textContent = 'Свернуть';
    }else{
      elem.textContent = 'Показать еще';
    }
    let dataVelue = elem.getAttribute('data-tab');
    let contentTab = document.querySelector(dataVelue);
    contentTab.classList.toggle('active');
  })
})

const scrollToTop = document.querySelector('#scrol-to-top')

scrollToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  console.log('top');
})

const blocks = document.querySelectorAll('.products__pages-block');

blocks.forEach((elem) =>{
  elem.addEventListener('click', (e)=>{
    blocks.forEach((elem) =>{
      elem.classList.remove('active');
    })
    elem.classList.add('active');
    
  })
})

const MobStats = document.querySelectorAll('.mobile__menu-list')

MobStats.forEach((elem) => {
  elem.addEventListener('click', (e) =>{
    elem.classList.toggle('active');
  })
})