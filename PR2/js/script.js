const img = document.querySelector('.article__img');

img .addEventListener('click', (event) =>{
  img.classList.toggle('active')
})

const menuLinks = document.querySelectorAll('.article-footer__link[data-goto]');

if (menuLinks.length > 0) {
  menuLinks.forEach(elem => {
    elem.addEventListener("click", onClick);
  });
  function onClick(elem) {
    const menuLink = elem.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      elem.preventDefault();
    }
  }
}