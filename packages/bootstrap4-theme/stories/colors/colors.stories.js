import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

storiesOf('Colors', module)
.addParameters({
  happo: false,
})

  .add('Color Palette', () => `
  <style> h5+p, p+p {margin-bottom:0; padding-bottom:.25rem;} h5 {margin-top:0;} </style>
  <div class="container-fluid mt-2">
    <div class="row">
      <div class="col-12 pb-3">
        <h3><span class="highlight-black">Primary Colors</span></h3>
        <h4 class="sr-only">Accessibility bypass</h4>
      </div>
      <div class="col-md-3">
        <div class="bg-gold p-3">
          <h5>ASU Gold</h5>
          <p>#FFC627</p>
          <p>rgb(255,198,39)</p>
        </div>
      </div>
      <div class="col-md-3">
        <div class="bg-maroon p-3 text-white">
          <h5>ASU Maroon</h5>
          <p>#8C1D40</p>
          <p>rgb(140, 29, 64)</p>
        </div>
      </div>
      <div class="col-md-3">
        <div class="bg-white p-3" style="border:1px solid #D0D0D0;">
          <h5>White</h5>
          <p>#FFFFFF</p>
          <p>rgb(255, 255, 255)</p>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid mt-2">
    <div class="row">
      <div class="col-12 py-3">
        <h3><span class="highlight-black">Secondary Colors</span></h3>
        <h4 class="sr-only">Accessibility bypass</h4>
      </div>
      <div class="col-md-3">
        <div class="bg-success p-3">
          <h5>ASU Green</h5>
          <p>#78BE20</p>
          <p>rgb(120, 190, 32)</p>
        </div>
      </div>
      <div class="col-md-3">
        <div class="bg-warning p-3">
          <h5>ASU Orange</h5>
          <p>#FF7F32</p>
          <p>rgb(255, 127, 50)</p>
        </div>
      </div>
      <div class="col-md-3">
        <div class="bg-info p-3">
          <h5>ASU Blue</h5>
          <p>#00A3E0</p>
          <p>rgb(0, 163, 224)</p>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid mt-2">
    <div class="row">
      <div class="col-12 py-3">
        <h3><span class="highlight-black">Grayscale</span></h3>
        <h4 class="sr-only">Accessibility bypass</h4>
      </div>
      <div class="col-md-3">
        <div class="bg-gray-1 p-3">
          <h5>Gray 1</h5>
          <p>#FAFAFA</p>
          <p>rgb(250, 250, 250)</p>
        </div>
      </div>
      <div class="col-md-3">
        <div class="bg-gray-2 p-3">
          <h5>Gray 2</h5>
          <p>#E8E8E8</p>
          <p>rgb(232, 232, 232)</p>
        </div>
      </div>
      <div class="col-md-3">
        <div class="bg-gray-3 p-3">
          <h5>Gray 3</h5>
          <p>#D0D0D0</p>
          <p>rgb(209, 209, 209)</p>
        </div>
      </div>
      <div class="col-md-3">
        <div class="bg-gray-4 p-3">
          <h5>Gray 4</h5>
          <p>#BFBFBF</p>
          <p>rgb(191, 191, 191)</p>
        </div>
      </div>
    </div>
    <div class="row py-md-3">
      <div class="col-md-3">
        <div class="bg-gray-5 p-3 text-light">
          <h5>Gray 5</h5>
          <p>#747474</p>
          <p>rgb(116, 116, 116)</p>
        </div>
      </div>
      <div class="col-md-3">
        <div class="bg-gray-6 p-3 text-light">
          <h5>Gray 6</h5>
          <p>#484848</p>
          <p>rgb(72, 72, 72)</p>
        </div>
      </div>
      <div class="col-md-3">
        <div class="bg-gray-7 p-3 text-light">
          <h5 class="">Gray 7</h5>
          <p>#191919</p>
          <p>rgb(25, 25, 25)</p>
        </div>
      </div>
    </div>
  </div>
  `)

  .add('Combinations', () => `
  <div class="container-fluid mt-2">

    <div class="row">
      <div class="col-12 pb-3">
        <h3><span class="highlight-black">Background and Foreground Color Combinations</span></h3>
      </div>
      <div class="col-sm-6">
        <div class="p-3" style="border:1px solid #d0d0d0;">
          <h3>This is a tertiary headline</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="#">sed do eiusmod tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia.</p>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="bg-gray-1 p-3">
          <h3>This is a tertiary headline</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="#">sed do eiusmod tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia.</p>
        </div>
      </div>
    </div>

    <div class="row pt-3">
      <div class="col-sm-6">
        <div class="bg-gray-2 p-3">
          <h3>This is a tertiary headline</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="#">sed do eiusmod tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia.</p>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="bg-gray-7 text-white p-3">
          <h3>This is a tertiary headline</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a class="text-gold" href="#">sed do eiusmod tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia.</p>
        </div>
      </div>
    </div>

  </div>
  `)
/*

  .add('Colors - text', () => `<p class="text-black">.text-black</p>
  <p class="text-secondary">.text-secondary color</p>
  <p class="text-maroon">.text-request-for-info color</p>
  <p class="text-gold">.text-program color</p>
  <p class="text-blue">.text-success color</p>
  <p class="text-gray-1">.text-danger color</p>
  <p class="text-warning">.text-warning color</p>
  <p class="text-info">.text-info color</p>
  <p class="text-light bg-dark">.text-light color</p>
  <p class="text-dark">.text-dark color</p>
  <p class="text-body">.text-body color</p>
  <p class="text-muted">.text-muted color</p>
  <p class="text-white bg-dark">.text-white color</p>
  <p class="text-black-50">.text-black-50 color</p>
  <p class="text-white-50 bg-dark">.text-white-50 color</p>`)

  .add('Colors - anchors', () => `<p><a href="#" class="text-primary">Primary link color</a></p>
  <p><a href="#" class="text-secondary">Secondary link color</a></p>
  <p><a href="#" class="text-rfi">Request info link color</a></p>
  <p><a href="#" class="text-program">Program link color</a></p>
  <p><a href="#" class="text-success">Success link color</a></p>
  <p><a href="#" class="text-danger">Danger link color</a></p>
  <p><a href="#" class="text-warning">Warning link color</a></p>
  <p><a href="#" class="text-info">Info link color</a></p>
  <p><a href="#" class="text-light bg-dark">Light link color</a></p>
  <p><a href="#" class="text-dark">Dark link color</a></p>
  <p><a href="#" class="text-muted">Muted link color</a></p>
  <p><a href="#" class="text-white bg-dark">White link color</a></p>`)

  .add('Background colors', () => `<div class="p-3 mb-2 bg-primary text-white">.bg-primary color</div>
  <div class="p-3 mb-2 bg-secondary text-white">.bg-secondary color</div>
  <div class="p-3 mb-2 bg-rfi text-white">.bg-request-info color</div>
  <div class="p-3 mb-2 bg-program text-white">.bg-program color</div>
  <div class="p-3 mb-2 bg-success text-white">.bg-success color</div>
  <div class="p-3 mb-2 bg-danger text-white">.bg-danger color</div>
  <div class="p-3 mb-2 bg-warning text-dark">.bg-warning color</div>
  <div class="p-3 mb-2 bg-info text-white">.bg-info color</div>
  <div class="p-3 mb-2 bg-light text-dark">.bg-light color</div>
  <div class="p-3 mb-2 bg-dark text-white">.bg-dark color</div>
  <div class="p-3 mb-2 bg-white text-dark">.bg-white color</div>
  <div class="p-3 mb-2 bg-transparent text-dark">.bg-transparent color</div>`)
*/
  ;
