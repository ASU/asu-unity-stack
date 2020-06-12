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
      <h4><em>Email Icon</em></h4>
      <span class="fas icon-small fa-envelope" alt="Email Icon"><span class="sr-only">Email Icon</span></span>
      <span class="fas icon-base fa-envelope" alt="Email Icon"><span class="sr-only">Email Icon</span></span>
      <span class="fas icon-large fa-envelope" alt="Email Icon"><span class="sr-only">Email Icon</span></span>
      <span class="fas icon-xl fa-envelope" alt="Email Icon"><span class="sr-only">Email Icon</span></span>
      <span class="fas icon-xxl fa-envelope" alt="Email Icon"><span class="sr-only">Email Icon</span></span>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
      <h4><em>Phone Icon</em></h4>
      <span class="fas icon-small fa-phone" alt="Phone Icon"><span class="sr-only">Phone Icon</span></span>
      <span class="fas icon-base fa-phone" alt="Phone Icon"><span class="sr-only">Phone Icon</span></span>
      <span class="fas icon-large fa-phone" alt="Phone Icon"><span class="sr-only">Phone Icon</span></span>
      <span class="fas icon-xl fa-phone" alt="Phone Icon"><span class="sr-only">Phone Icon</span></span>
      <span class="fas icon-xxl fa-phone" alt="Phone Icon"><span class="sr-only">Phone Icon</span></span>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
      <h4><em>Address Icon</em></h4>
      <span class="fas icon-small fa-map-marker-alt" alt="Map Marker Icon"><span class="sr-only">Address Icon</span></span>
      <span class="fas icon-base fa-map-marker-alt" alt="Map Marker Icon"><span class="sr-only">Address Icon</span></span>
      <span class="fas icon-large fa-map-marker-alt" alt="Map Marker Icon"><span class="sr-only">Address Icon</span></span>
      <span class="fas icon-xl fa-map-marker-alt" alt="Map Marker Icon"><span class="sr-only">Address Icon</span></span>
      <span class="fas icon-xxl fa-map-marker-alt" alt="Map Marker Icon"><span class="sr-only">Address Icon</span></span>
    </div>
  </div>
</div>`)
