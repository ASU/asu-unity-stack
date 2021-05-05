import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

window.addEventListener('DOMContentLoaded', function () {
  var ctx = document.getElementById('uds-donut');

  const config = {
    type: 'doughnut',
    plugins: [ChartDataLabels],
    data: {
      datasets: [
        {
          label: 'My First Dataset',
          data: [50, 50],
          backgroundColor: ['#ffc627', '#fafafa'],
          hoverOffset: 4,
        },
      ],
    },
  };

  var myChart = new Chart(ctx, config);
});
