const menuLinks = document.querySelectorAll('.main__story[data-goto]');

if (menuLinks.length > 0) {
  menuLinks.forEach(elem => {
    elem.addEventListener("click", onClick);
  });
  function onClick(elem) {
    const menuLink = elem.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      elem.preventDefault();
    }
  }
}