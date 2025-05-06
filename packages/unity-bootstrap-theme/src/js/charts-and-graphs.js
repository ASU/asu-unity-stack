import * as Chart from 'chart.js';

import { EventHandler } from './bootstrap-helper';

function initChart() {
  Chart.Chart.register(...Chart.registerables);

  const GRAPH_PERCENTAGE_COMPLETE = 50;

  var ctx = document.getElementById('uds-donut');

  if (!ctx) {
      // id="uds-donut" not found in the DOM.
    return;
  }

  document.getElementById('percentage-display').innerHTML =
    GRAPH_PERCENTAGE_COMPLETE + '%';

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

  var myChart = new Chart.Chart(ctx, config);
};

EventHandler.on(window, 'load.uds.chart', initChart);

export { initChart };
