let color = 'rgba(49, 140, 231, 0.2)';

const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');

function colorChart(color){
  for (let index = 0; index < myChart.data.datasets[0].backgroundColor.length; index++) {
    myChart.data.datasets[0].backgroundColor[index] = color;
    console.log(myChart.data.datasets[0].backgroundColor[index])
    myChart.update();
  }
  for (let index = 0; index < myChart.data.datasets[0].borderColor.length; index++) {
    myChart.data.datasets[0].borderColor[index] = color;
    console.log(myChart.data.datasets[0].borderColor[index])
    myChart.update();
  }
}

red.addEventListener('click', (event) => {
  colorChart('red')
})
blue.addEventListener('click', (event) => {
  colorChart('blue')
})
green.addEventListener('click', (event) => {
  colorChart('green')
})

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Иван Петрович', 'Максим Иванович', 'Денис Максимович',],
    datasets: [{
      label: 'Баланс ₽',
      data: [1000, 8000, 3000,],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        color,
        color,
        color,
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
