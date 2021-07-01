window.addEventListener("load", function () {
  const tabPages = document.querySelectorAll('.footer__logo')
  console.log(tabPages);
  tabPages.forEach((elem) => {
    elem.addEventListener('click', () => {
      console.log('click');
      elem.classList.add('active');
      let dataPage = elem.getAttribute('data-tab');
      let itemsPage = document.querySelector(dataPage);

      itemsPage.classList.add('active');
    })
  })
  const tabPrevArrow = document.querySelectorAll('.card__header-arrow')
  const page = document.querySelectorAll('.page')
  tabPrevArrow.forEach((elem) => {
    elem.addEventListener('click', () => {
      page.forEach((elem) => {
        elem.classList.remove('active');
      })
    })

  })
})

