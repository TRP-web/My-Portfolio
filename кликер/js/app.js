const moneyColection = document.querySelector('h2')

const objectClik = document.querySelector('.clik')

const objectClik2 = document.querySelector('.pun1')

const objectClik3 = document.querySelector('.pun2')

const objectClik4 = document.querySelector('.pun3')

const objectClik5 = document.querySelector('.pun4')

const sumClickValue = document.querySelector('.sum__click__Value')

const objectClikTime = document.querySelector('.pun__t1')

const objectClikTime2 = document.querySelector('.pun__t2')

const objectClikTime3 = document.querySelector('.pun__t3')

const objectClikTime4 = document.querySelector('.pun__t4')

const sumMoneyPlus = document.querySelector('.time__plus')

let sumMoney = 0

let clikValue = 1

let timeValue = 0

moneyColection.textContent = sumMoney + '$'

sumClickValue.textContent = clikValue + '$'

sumMoneyPlus.textContent ='+' + timeValue + '$/sec'

function buy (a, b,) {
	if (sumMoney >= a) {
		sumMoney = sumMoney -a
		clikValue = clikValue + b
		moneyColection.textContent = sumMoney + '$'
		sumClickValue.textContent = clikValue + '$'
	}
}

function buyTime(a, b){
	if (sumMoney >= a) {
		sumMoney = sumMoney - a
 		timeValue = timeValue + b
 		moneyColection.textContent = sumMoney + '$'
 		sumMoneyPlus.textContent ='+' + timeValue + '$/sec'
 	}
}
		
function click (a){
	a.classList.toggle('click1')
	setTimeout(function(){
		a.classList.toggle('click1')
	}, 30)
	console.log('cl')	
}

setInterval (function(){
	sumMoney = sumMoney + timeValue
	moneyColection.textContent = sumMoney + '$'
	}, 1000)
	
	//setInterval(function(){
	//	moneyColection.textContent = sumMoney + '$'
	//}, 100)

objectClik.onclick = function () {
	sumMoney= sumMoney + clikValue
	moneyColection.textContent = sumMoney + '$'
}

objectClik2.addEventListener("mousedown", function(){
	buy (5, 1,)
	click (objectClik2)
})
objectClik3.onclick = function (){
	buy(100, 20)
	click (objectClik3)
}

objectClik4.onclick = function(){
	buy(2500, 500)
	click (objectClik4)
}

objectClik5.onclick = function(){
	buy(10000, 2500)
	click (objectClik5)
}

objectClikTime.onclick = function(){
	buyTime(15, 1)
	click (objectClikTime)
}

objectClikTime2.onclick = function(){
	buyTime(300, 20)
	click (objectClikTime2)
}

objectClikTime3.onclick = function(){
	buyTime(7500, 500)
	click (objectClikTime3)
}

objectClikTime4.onclick = function(){
	buyTime(300000, 20000)
	click (objectClikTime4)
}


console.log(sumClickValue)

console.log(objectClik2)

console.log(moneyColection)

console.log(objectClik)

console.log(sumMoney)

console.log(objectClikTime)

console.log(timeValue)