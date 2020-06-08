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
      <i class="fas fa-2x fa-home"></i>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
      <i class="fas fa-2x fa-bars"></i>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
      <i class="fas fa-2x fa-times"></i>
    </div>
  </div>
    <div class="row">
      <div class="col col-sm-12 col-md-4 p-4">
        <i class="fas fa-2x fa-chevron-up"></i>
        <i class="fas fa-2x fa-chevron-down"></i>
        <i class="fas fa-2x fa-chevron-left"></i>
        <i class="fas fa-2x fa-chevron-right"></i>
      </div>
      <div class="col col-sm-12 col-md-4 p-4">
        <i class="fas fa-2x fa-arrow-right"></i>
      </div>
      <div class="col col-sm-12 col-md-4 p-4">
        <i class="fas fa-2x fa-play"></i>
        <i class="fas fa-2x fa-pause"></i>
      </div>
    </div>
    <div class="row">
      <div class="col col-sm-12 col-md-4 p-4">
        <i class="fas fa-2x fa-search"></i>
      </div>
      <div class="col col-sm-12 col-md-4 p-4">
        <i class="fas fa-2x fa-external-link-alt"></i>
      </div>
    </div>
  </div>`)
