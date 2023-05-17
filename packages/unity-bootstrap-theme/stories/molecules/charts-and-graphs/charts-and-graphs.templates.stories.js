import { createComponent, createStory } from "../../../helpers/wrapper.js";
import { initChart } from "./charts-and-graphs";

export default createComponent("Charts And Graphs", "Molecules", "Templates");

export const DonutChartMarkUp = createStory(
  <div className="uds-charts-and-graphs-container">
    <div className="uds-charts-and-graphs-overlay">
      <h4 id="percentage-display"></h4>
      <span>Fact goes here</span>
    </div>
    <canvas id="uds-donut"></canvas>
  </div>,
  {
    initFunc: initChart,
  }
);
DonutChartMarkUp.args = {
  template: 1,
};
