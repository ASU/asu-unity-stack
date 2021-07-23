import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js'
import './charts-and-graphs';

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


export const BasicDonutChart = createStory(DonutChart);
