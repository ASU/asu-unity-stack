import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js'
//import './charts-and-graphs';
import { useEffect } from '@storybook/client-api';

export default createComponent('Charts And Graphs');


const DonutChart = (
  <div class="container p-5">
    <div class="justify-content-center">
      <div class="uds-charts-and-graphs-container">
        <div class="uds-charts-and-graphs-overlay">
          <h4 id="percentage-display"></h4>
          <span>Fact goes here</span>
        </div>
        <canvas id="uds-donut"></canvas>
      </div>
    </div>
  </div>
);


const lalala = () => {

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
  }
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
}
export const BasicDonutChart = () => {
  console.log('asd');
  useEffect(lalala);
  return createStory(DonutChart);
}
