import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

storiesOf('Utilities/Colors', module)
  .addParameters({
    happo: false,
  })

  .add('Colors - text', () => `<p class="text-primary">.text-primary</p>
  <p class="text-secondary">.text-secondary</p>
  <p class="text-success">.text-success</p>
  <p class="text-danger">.text-danger</p>
  <p class="text-warning">.text-warning</p>
  <p class="text-info">.text-info</p>
  <p class="text-light bg-dark">.text-light</p>
  <p class="text-dark">.text-dark</p>
  <p class="text-body">.text-body</p>
  <p class="text-muted">.text-muted</p>
  <p class="text-white bg-dark">.text-white</p>
  <p class="text-black-50">.text-black-50</p>
  <p class="text-white-50 bg-dark">.text-white-50</p>`)

  .add('Colors - anchors', () => `<p><a href="#" class="text-primary">Primary link</a></p>
  <p><a href="#" class="text-secondary">Secondary link</a></p>
  <p><a href="#" class="text-success">Success link</a></p>
  <p><a href="#" class="text-danger">Danger link</a></p>
  <p><a href="#" class="text-warning">Warning link</a></p>
  <p><a href="#" class="text-info">Info link</a></p>
  <p><a href="#" class="text-light bg-dark">Light link</a></p>
  <p><a href="#" class="text-dark">Dark link</a></p>
  <p><a href="#" class="text-muted">Muted link</a></p>
  <p><a href="#" class="text-white bg-dark">White link</a></p>`)

  .add('Background color', () => `<div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>
  <div class="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
  <div class="p-3 mb-2 bg-success text-white">.bg-success</div>
  <div class="p-3 mb-2 bg-danger text-white">.bg-danger</div>
  <div class="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
  <div class="p-3 mb-2 bg-info text-white">.bg-info</div>
  <div class="p-3 mb-2 bg-light text-dark">.bg-light</div>
  <div class="p-3 mb-2 bg-dark text-white">.bg-dark</div>
  <div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
  <div class="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>`);
