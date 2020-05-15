import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

storiesOf('Utilities/Colors', module)
  .addParameters({
    happo: false,
  })

  .add('Colors - text', () => `<p class="text-primary">.text-primary color</p>
  <p class="text-secondary">.text-secondary color</p>
  <p class="text-rfi">.text-request-for-info color</p>
  <p class="text-program">.text-program color</p>
  <p class="text-success">.text-success color</p>
  <p class="text-danger">.text-danger color</p>
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
  <div class="p-3 mb-2 bg-transparent text-dark">.bg-transparent color</div>`);
