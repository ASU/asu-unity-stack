import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const init = () => {
  const GRAPH_PERCENTAGE_COMPLETE = 50;
  document.getElementById('percentage-display').innerHTML = GRAPH_PERCENTAGE_COMPLETE + '%';
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

export const initChart = function () {
  if( document.readyState !== 'loading' ) {
    console.log('333');
    init();
  } else {
    console.log('111');
    window.addEventListener('DOMContentLoaded', function () {
      console.log('222');
      init();
    });
  }
};
