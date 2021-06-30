export default { title: 'Design/Backgrounds' };


export const approvedBackgroundColors = () => `
  <div class="container-fluid mt-2">
    <div class="row">
      <div class="col-12 pb-3">
        <h3><span class="highlight-black">Approved Background Colors</span></h3>
      </div>

      <div class="col-sm-6">
        <div class="background-panel gray-7-bg m-3"></div>
      </div>
      <div class="col-sm-6">
        <div class="background-panel gray-2-bg m-3"></div>
      </div>

      <div class="col-sm-6">
        <div class="background-panel gray-1-bg m-3"></div>
      </div>
      <div class="col-sm-6">
        <div class="background-panel white-bg m-3"></div>
      </div>
    </div>
  </div>
`;

export const approvedBackgroundPatterns = () => `
  <div class="container-fluid mt-2">
    <div class="row">
      <div class="col-12 pb-3">
        <h3><span class="highlight-black">Approved Background Patterns</span></h3>
      </div>

      <div class="col-12 pb-3">
        <h3>Learn to thrive morse code</h3>
      </div>
      <div class="col-sm-6">
        <div class="background-panel bg morse-code-white m-3"></div>
      </div>
      <div class="col-sm-6">
        <div class="background-panel bg morse-code-black m-3"></div>
      </div>

      <div class="col-12 pb-3">
        <h3>Network</h3>
      </div>
      <div class="col-sm-6">
        <div class="background-panel bg network-white m-3"></div>
      </div>
      <div class="col-sm-6">
        <div class="background-panel bg network-black m-3"></div>
      </div>

      <div class="col-12 pb-3">
        <h3>A Mountain topographical map</h3>
      </div>
      <div class="col-sm-6">
        <div class="background-panel bg topo-white m-3"></div>
      </div>
      <div class="col-sm-6">
        <div class="background-panel bg topo-black m-3"></div>
      </div>
    </div>
  </div>
`;

export const imageBackgrounds = () => `
  <div class="container-fluid mt-2">
    <div class="row">
      <div class="col-12 pb-3">
        <h3><span class="highlight-black">Image Backgrounds</span></h3>
      </div>

      <div class="col-sm-6">
        <div class="background-panel image-bg m-3"></div>
      </div>
    </div>
  </div>
`;

export const backgroundsScaling = () => `
  <div class="jumbotron-fluid max-size-container scaling-container">
    <span class="content-description">1920px max width</span>
    <div class="section-line"></div>
    <div class="content-description-container scaling-container">
      <div class="container scaling-container">
        <span class="content-description">1200px margin width</span>
        <div class="section-line"></div>
        <div class="container content-container">
          Section Content
        </div>
      </div>
    </div>
  </div>
`;

export const PatternDividersAndBackgroundPatterns = () => `
<div class="container p-5">
  <h2>
    <span class="highlight-gold">Pattern dividers and background patterns</span>
  </h2>
</div>
<div style="height: 250px" class="container-fluid bg morse-code-white"></div>
<div style="height: 250px" class="container-fluid bg morse-code-black"></div>
<div style="height: 250px" class="container-fluid bg topo-white"></div>
<div style="height: 250px" class="container-fluid bg topo-black"></div>
<div style="height: 250px" class="container-fluid bg network-white"></div>
<div style="height: 250px" class="container-fluid bg network-black"></div>
`;

export const PartialBackgrounds = () => `
<div class="container p-5">
  <div class="mb-5 bg morse-code-white bg-top bg-percent-66">
    <div style="height: 200px; border: 1px solid black;"></div>
  </div>


  <div class="mb-5 bg gray-7-bg bg-top bg-percent-25">
    <div style="height: 200px; border: 1px solid black;"></div>
  </div>

  <div class="mb-5 bg topo-black bg-bottom bg-percent-66">
    <div style="height: 200px; border: 1px solid black;"></div>
  </div>

  <div class="mb-5 bg gray-2-bg bg-bottom bg-percent-50">
    <div style="height: 200px; border: 1px solid black;"></div>
  </div>
</div>
`;
