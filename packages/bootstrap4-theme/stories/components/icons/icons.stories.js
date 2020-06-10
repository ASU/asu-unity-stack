import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

storiesOf('Components/Icons', module)
  .addParameters({
    happo: false,
  })

  .add('Contact Icons', () => `
<div class="container-fluid">
  <div class="row">
    <div class="col col-sm-12 col-md-4 p-4">
      <h4><em>fa-home</em></h4>
      <i class="fas icon-small fa-home"></i>
      <i class="fas icon-base fa-home"></i>
      <i class="fas icon-large fa-home"></i>
      <i class="fas icon-xl fa-home"></i>
      <i class="fas icon-xxl fa-home"></i>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
      <h4><em>fa-bars</em></h4>
      <i class="fas icon-small fa-bars"></i>
      <i class="fas icon-base fa-bars"></i>
      <i class="fas icon-large fa-bars"></i>
      <i class="fas icon-xl fa-bars"></i>
      <i class="fas icon-xxl fa-bars"></i>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
      <h4><em>fa-times</em></h4>
      <i class="fas icon-small fa-times"></i>
      <i class="fas icon-base fa-times"></i>
      <i class="fas icon-large fa-times"></i>
      <i class="fas icon-xl fa-times"></i>
      <i class="fas icon-xxl fa-times"></i>
    </div>
  </div>
  <div class="row">
  <div class="col col-sm-12 col-md-4 p-4">
    <h4><em>fa-search</em></h4>
    <i class="fas icon-small fa-search"></i>
    <i class="fas icon-base fa-search"></i>
    <i class="fas icon-large fa-search"></i>
    <i class="fas icon-xl fa-search"></i>
    <i class="fas icon-xxl fa-search"></i>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
    <h4><em>fa-arrow-right</em></h4>
    <i class="fas icon-small fa-arrow-right"></i>
    <i class="fas icon-base fa-arrow-right"></i>
    <i class="fas icon-large fa-arrow-right"></i>
    <i class="fas icon-xl fa-arrow-right"></i>
    <i class="fas icon-xxl fa-arrow-right"></i>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
    <h4><em>fa-external-link-alt</em></h4>
    <i class="fas icon-small fa-external-link-alt"></i>
    <i class="fas icon-base fa-external-link-alt"></i>
    <i class="fas icon-large fa-external-link-alt"></i>
    <i class="fas icon-xl fa-external-link-alt"></i>
    <i class="fas icon-xxl fa-external-link-alt"></i>
    </div>
  </div>
  <div class="row">
  <div class="col col-sm-12 col-md-4 p-4">
      <h4><em>fa-chevron-**</em></h4>
      <i class="fas icon-small fa-chevron-up"></i>
      <i class="fas icon-small fa-chevron-down"></i>
      <i class="fas icon-small fa-chevron-left"></i>
      <i class="fas icon-small fa-chevron-right"></i>
      <br/ >
      <i class="fas icon-base fa-chevron-up"></i>
      <i class="fas icon-base fa-chevron-down"></i>
      <i class="fas icon-base fa-chevron-left"></i>
      <i class="fas icon-base fa-chevron-right"></i>
      <br/ >
      <i class="fas icon-large fa-chevron-up"></i>
      <i class="fas icon-large fa-chevron-down"></i>
      <i class="fas icon-large fa-chevron-left"></i>
      <i class="fas icon-large fa-chevron-right"></i>
      <br/ >
      <i class="fas icon-xl fa-chevron-up"></i>
      <i class="fas icon-xl fa-chevron-down"></i>
      <i class="fas icon-xl fa-chevron-left"></i>
      <i class="fas icon-xl fa-chevron-right"></i>
      <br/ >
      <i class="fas icon-xxl fa-chevron-up"></i>
      <i class="fas icon-xxl fa-chevron-down"></i>
      <i class="fas icon-xxl fa-chevron-left"></i>
      <i class="fas icon-xxl fa-chevron-right"></i>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
      <h4><em>fa-play   fa-pause</em></h4>
      <i class="fas icon-small fa-play"></i>
      <i class="fas icon-small fa-pause"></i>
      <br />
      <i class="fas icon-base fa-play"></i>
      <i class="fas icon-base fa-pause"></i>
      <br />
      <i class="fas icon-large fa-play"></i>
      <i class="fas icon-large fa-pause"></i>
      <br />
      <i class="fas icon-xl fa-play"></i>
      <i class="fas icon-xl fa-pause"></i>
      <br />
      <i class="fas icon-xxl fa-play"></i>
      <i class="fas icon-xxl fa-pause"></i>
    </div>
  </div>
</div>`)
