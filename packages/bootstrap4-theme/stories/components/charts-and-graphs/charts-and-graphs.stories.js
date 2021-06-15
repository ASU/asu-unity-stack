export default { title: 'Components/Charts And Graphs' };
import './charts-and-graphs';

export const Donut = () => `
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
`;
