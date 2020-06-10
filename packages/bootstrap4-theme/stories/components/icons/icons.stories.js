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
      <h4><em>Email</em></h4>
      <i class="fas icon-small fa-envelope"></i>
      <i class="fas icon-base fa-envelope"></i>
      <i class="fas icon-large fa-envelope"></i>
      <i class="fas icon-xl fa-envelope"></i>
      <i class="fas icon-xxl fa-envelope"></i>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
      <h4><em>Phone</em></h4>
      <i class="fas icon-small fa-phone"></i>
      <i class="fas icon-base fa-phone"></i>
      <i class="fas icon-large fa-phone"></i>
      <i class="fas icon-xl fa-phone"></i>
      <i class="fas icon-xxl fa-phone"></i>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
      <h4><em>Address</em></h4>
      <i class="fas icon-small fa-map-marker-alt"></i>
      <i class="fas icon-base fa-map-marker-alt"></i>
      <i class="fas icon-large fa-map-marker-alt"></i>
      <i class="fas icon-xl fa-map-marker-alt"></i>
      <i class="fas icon-xxl fa-map-marker-alt"></i>
    </div>
  </div>
</div>`)
