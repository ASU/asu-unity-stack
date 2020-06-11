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
      <span class="fas icon-small fa-envelope" alt="Email Icon"></span>
      <span class="fas icon-base fa-envelope" alt="Email Icon"></span>
      <span class="fas icon-large fa-envelope" alt="Email Icon"></span>
      <span class="fas icon-xl fa-envelope" alt="Email Icon"></span>
      <span class="fas icon-xxl fa-envelope" alt="Email Icon"></span>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
      <h4><em>Phone</em></h4>
      <span class="fas icon-small fa-phone" alt="Phone Icon"></span>
      <span class="fas icon-base fa-phone" alt="Phone Icon"></span>
      <span class="fas icon-large fa-phone" alt="Phone Icon"></span>
      <span class="fas icon-xl fa-phone" alt="Phone Icon"></span>
      <span class="fas icon-xxl fa-phone" alt="Phone Icon"></span>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
      <h4><em>Address</em></h4>
      <span class="fas icon-small fa-map-marker-alt" alt="Map Marker Icon"></span>
      <span class="fas icon-base fa-map-marker-alt" alt="Map Marker Icon"></span>
      <span class="fas icon-large fa-map-marker-alt" alt="Map Marker Icon"></span>
      <span class="fas icon-xl fa-map-marker-alt" alt="Map Marker Icon"></span>
      <span class="fas icon-xxl fa-map-marker-alt" alt="Map Marker Icon"></span>
    </div>
  </div>
</div>`)
