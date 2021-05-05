import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

(function () {
  window.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('uds-donut');

    const config = {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [50, 50],
            backgroundColor: ['#ffc627', '#fafafa'],
          },
        ],
      },
      options: {
        cutout: '70%',
        //responsive: false, // remove if want static size
        tooltips: { enabled: false },
        events: [],
        //maintainAspectRatio: false, // remove if want static size
      },
    };

    var myChart = new Chart(ctx, config);
  });
})();
