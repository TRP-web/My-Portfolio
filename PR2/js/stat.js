const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');

function colorChart(color) {
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
  type: 'line',
  data: {
    labels: ['Сентябрь', 'Август', 'Июль', 'Июнь',],
    datasets: [{
      label: 'Просмотры',
      data: [5000, 8000, 4000, 15000,],
      backgroundColor: [
        'rgb(255, 99, 132)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
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
