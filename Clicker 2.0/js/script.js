const moneySum = document.querySelector('.header__sum');
const clickObj = document.querySelector('.page__click-obj');
const somClick = document.querySelector('.header__click');
const butBuy = document.querySelectorAll('.shop__button');
console.log(butBuy);

let click = parseInt(somClick.innerHTML);
if (clickObj) {
  clickObj.addEventListener('click', clickObjFun, clickObjFun);
}
function clickObjFun(mon) {
  mon = Number(moneySum.innerHTML) + click;
  moneySum.innerHTML = mon;
}
if (butBuy) {
  const elem = butBuy.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      console.log('fksdf')
      let price = Number(elem.parentNode.childNodes[3].childNodes[3].innerHTML);
      let improv = (parseInt(elem.parentNode.childNodes[3].childNodes[1].innerHTML));

      if (Number(moneySum.innerHTML) >= price) {
        moneySum.innerHTML = Number(moneySum.innerHTML) - price;
        click += improv;
        price += Math.round((price / 100) * 10);
        elem.parentNode.childNodes[3].childNodes[3].innerHTML = price;
        somClick.innerHTML = `${click}<img src="img/coin.png" alt="" class="header__coin"> for click `;

        const sumBuy = document.querySelectorAll('.shop__sum-buy');
        //all++
        //console.log(event.target.nextElementSibling);
        //event.target.nextElementSibling.innerHTML = `ALL: ${all}`
        event.target.nextElementSibling.innerHTML = `${++event.target.nextElementSibling.innerHTML}`
        //sumBuy.forEach((elem, index) => {
        //  event.target.nextElementSibling.innerHTML = event.target.nextElementSibling.innerHTML++;
        //})
      }
    });
  })
}
const timeLot = document.querySelectorAll('#time-lot');
const sumMoneyForSecond = document.querySelector('#sum-money-for-second');
console.log(sumMoneyForSecond);
let moneyForSecond = 0;
let interval = false
timeLot.forEach((elem) => {
  elem.addEventListener('click', (eventt) => {
    let timePrise = Number(elem.querySelector('#time-prise').innerHTML);
    if (Number(moneySum.innerHTML) >= timePrise) {
      let timeInfo = buy(elem);
      priseUp(timeInfo, elem);
      All(elem)
      console.log('55')
    }
  });
})

function buy(e) {
  let timePrise = Number(e.querySelector('#time-prise').innerHTML);
  let timeImprov = parseInt(e.querySelector('#time-up').innerHTML);

  moneySum.innerHTML = (Number(moneySum.innerHTML)) - timePrise;
  moneyForSecond += timeImprov;
  sumMoneyForSecond.innerHTML = `${moneyForSecond}/sec`;
  console.log(sumMoneyForSecond.innerHTML);
  if (moneyForSecond && interval == false) {
    interval = setInterval(() => {
      moneySum.innerHTML = Number(moneySum.innerHTML) + moneyForSecond;
    }, 1000);
  }
  return {
    timePrise: timePrise,
    timeImprov: timeImprov
  };
}

function priseUp(timeInfo, e) {
  let timePrise = e.querySelector('#time-prise');
  e.querySelector('#time-prise').innerHTML = Math.round(timePrise.innerHTML * 1.1);
}

function All(e) {
  let timeAll = e.querySelector('#all');
  timeAll.innerHTML = Number(timeAll.innerHTML) + 1;
}