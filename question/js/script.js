const tabPages = document.querySelectorAll('.question__question-block')

tabPages.forEach((elem) => {
  elem.addEventListener('click', () => {
    elem.classList.toggle('active');
    let dataPage = elem.getAttribute('data-tab');
    let itemsPage = document.querySelector(dataPage);
    itemsPage.classList.toggle('active');
  })
})
