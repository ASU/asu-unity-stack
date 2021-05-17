export default { title: 'ASUCMS/Charts And Graphs' };

export const Donut = () => `
<div class="container p-5">
  <div class="row justify-content-center">
    <div class="col-12 col-md-4">

      <div class="uds-charts-and-graphs-container">
        <div class="uds-charts-and-graphs-overlay">
          <h4>50%</h4>
          <span>Fact goes here</span>
        </div>
        <canvas id="uds-donut"></canvas>
      </div>

    </div>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.2.0/chart.min.js" integrity="sha512-VMsZqo0ar06BMtg0tPsdgRADvl0kDHpTbugCBBrL55KmucH6hP9zWdLIWY//OTfMnzz6xWQRxQqsUFefwHuHyg==" crossorigin="anonymous"></script>
  <script>
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
  </script>
</div>
`;
