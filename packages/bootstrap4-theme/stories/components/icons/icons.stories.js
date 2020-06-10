import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

storiesOf('Components/Icons', module)
  .addParameters({
    happo: false,
  })

.add('Navigational Icons', () => `
<div class="container-fluid">
  <div class="row">
    <div class="col col-sm-12 col-md-4 p-4">
      <h4>fa-home</h4>
      <i class="fas icon-base fa-home"></i>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
      <h4>fa-bars</h4>
      <i class="fas icon-base fa-bars"></i>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
      <h4>fa-times</h4>
      <i class="fas icon-large fa-times"></i>
    </div>
  </div>
  <div class="row">
    <div class="col col-sm-12 col-md-4 p-4">
      <h4>fa-chevron</h4>
      <i class="fas icon-small fa-chevron-up"></i>
      <i class="fas icon-small fa-chevron-down"></i>
      <i class="fas icon-small fa-chevron-left"></i>
      <i class="fas icon-small fa-chevron-right"></i>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
      <h4>fa-arrow-right</h4>
      <i class="fas icon-xl fa-arrow-right"></i>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
      <h4>fa-play   fa-pause</h4>
      <i class="fas icon-xxl fa-play"></i>
      <i class="fas icon-xxl fa-pause"></i>
    </div>
  </div>
  <div class="row">
    <div class="col col-sm-12 col-md-4 p-4">
      <h4>fa-search</h4>
      <i class="fas icon-base fa-search"></i>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
      <h4>fa-external-link-alt</h4>
      <i class="fas icon-large fa-external-link-alt"></i>
    </div>
  </div>
</div>`)
