import React from "react";

import { defaultDecorator } from "../../../../../shared/components/Layout";
import { initChart } from "./charts-and-graphs";

export default {
  title: "Molecules/Charts And Graphs/Templates",
  decorators: [ defaultDecorator ],
  parameters: {
    initFunc: {
      code: initChart,
      disable: false,
    },
    controls: { disable: true }
  },
};

export const DonutChartMarkUp = () => (
  <div className="uds-charts-and-graphs-container">
    <div className="uds-charts-and-graphs-overlay">
      <h4 id="percentage-display"></h4>
      <span>Fact goes here</span>
    </div>
    <canvas id="uds-donut"></canvas>
  </div>
);
