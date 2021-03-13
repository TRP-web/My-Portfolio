console.log('Звездный рейтинг подключен! (08.03.2021)');

const ratings = document.querySelectorAll('.rating');
//console.log(ratings[0].childNodes[1])
if (ratings.length > 0) {
  initRatings();
}

//Основная функцыя
function initRatings() {
  let ratingActive, ratingValue;
  for (let index = 0; index < ratings.length; index++) {
    const rating = ratings[index];
    initRating(rating);
    test(rating)
    ratingHover(rating)
  }

  //Иницылизируем конкретный рейтинг
  function initRating(rating) {
    initRatingVars(rating);

    setRatingActiveWidth();

  }
  //Иницыальзацыя переменных
  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating__active');
    ratingValue = rating.querySelector('.rating__value');
  }

  //Изменение шырены конкретных звезд
  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }
  //Оценка по клику
  function test(rating) {
    const ratingItem = rating.querySelectorAll('.rating__item');
    const ratingSum = rating.querySelector('.rating__value');

    ratingItem.forEach(function (elem) {
      elem.addEventListener('click', function (e) {
        ratingSum.innerText = elem.value;
        initRatingVars(rating);
        setRatingActiveWidth();
      })
    })
  }
  function ratingHover(rating) {
    const ratingItem = rating.querySelectorAll('.rating__item');
    ratingItem.forEach(function (elem) {
      elem.addEventListener('mouseenter', function () {
        initRatingVars(rating);
        setRatingActiveWidth(elem.value);
      })
      elem.addEventListener('mouseleave', function () {
        setRatingActiveWidth();
      })
    })
  }
}