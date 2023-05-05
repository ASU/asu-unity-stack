import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export const initChart = () => {
  const GRAPH_PERCENTAGE_COMPLETE = 50;
  document.getElementById('percentage-display').innerHTML =
    GRAPH_PERCENTAGE_COMPLETE + '%';
  var ctx = document.getElementById('uds-donut');

  const config = {
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: [GRAPH_PERCENTAGE_COMPLETE, 100 - GRAPH_PERCENTAGE_COMPLETE],
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
};
