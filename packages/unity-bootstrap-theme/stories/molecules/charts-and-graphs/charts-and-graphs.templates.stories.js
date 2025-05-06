import React from "react";

import { defaultDecorator } from "../../../../../shared/components/Layout";

export default {
  title: "Molecules/Charts And Graphs/Templates",
  decorators: [ defaultDecorator ],
  parameters: {
    initFunc: {
      disable: false,
    },
    controls: { disable: true }
  },
};

export const DonutChartMarkUp = () => (
  <div className="uds-charts-and-graphs-container">
    <div className="uds-charts-and-graphs-overlay">
      <p>
        <span id="percentage-display"></span>
        <span>Fact goes here</span>
      </p>
    </div>
    <canvas id="uds-donut"></canvas>
  </div>
);
