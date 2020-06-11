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
      <h4><em>fa-home</em></h4>
      <span class="fas icon-small fa-home" alt="Home Icon"></span>
      <span class="fas icon-base fa-home" alt="Home Icon"></span>
      <span class="fas icon-large fa-home" alt="Home Icon"></span>
      <span class="fas icon-xl fa-home" alt="Home Icon"></span>
      <span class="fas icon-xxl fa-home" alt="Home Icon"></span>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
      <h4><em>fa-bars</em></h4>
      <span class="fas icon-small fa-bars" alt="Menu Icon"></span>
      <span class="fas icon-base fa-bars" alt="Menu Icon"></span>
      <span class="fas icon-large fa-bars" alt="Menu Icon"></span>
      <span class="fas icon-xl fa-bars" alt="Menu Icon"></span>
      <span class="fas icon-xxl fa-bars" alt="Menu Icon"></span>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
      <h4><em>fa-times</em></h4>
      <span class="fas icon-small fa-times" alt="Exit Icon"></span>
      <span class="fas icon-base fa-times" alt="Exit Icon"></span>
      <span class="fas icon-large fa-times" alt="Exit Icon"></span>
      <span class="fas icon-xl fa-times" alt="Exit Icon"></span>
      <span class="fas icon-xxl fa-times" alt="Exit Icon"></span>
    </div>
  </div>
  <div class="row">
  <div class="col col-sm-12 col-md-4 p-4">
    <h4><em>fa-search</em></h4>
    <span class="fas icon-small fa-search" alt="Search Icon"></span>
    <span class="fas icon-base fa-search" alt="Search Icon"></span>
    <span class="fas icon-large fa-search" alt="Search Icon"></span>
    <span class="fas icon-xl fa-search" alt="Search Icon"></span>
    <span class="fas icon-xxl fa-search" alt="Search Icon"></span>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
    <h4><em>fa-arrow-right</em></h4>
    <span class="fas icon-small fa-arrow-right" alt="Right Arrow Icon"></span>
    <span class="fas icon-base fa-arrow-right" alt="Right Arrow Icon"></span>
    <span class="fas icon-large fa-arrow-right" alt="Right Arrow Icon"></span>
    <span class="fas icon-xl fa-arrow-right" alt="Right Arrow Icon"></span>
    <span class="fas icon-xxl fa-arrow-right" alt="Right Arrow Icon"></span>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
    <h4><em>fa-external-link-alt</em></h4>
    <span class="fas icon-small fa-external-link-alt" alt="External Link Icon"></span>
    <span class="fas icon-base fa-external-link-alt" alt="External Link Icon"></span>
    <span class="fas icon-large fa-external-link-alt" alt="External Link Icon"></span>
    <span class="fas icon-xl fa-external-link-alt" alt="External Link Icon"></span>
    <span class="fas icon-xxl fa-external-link-alt" alt="External Link Icon"></span>
    </div>
  </div>
  <div class="row">
  <div class="col col-sm-12 col-md-4 p-4">
      <h4><em>fa-chevron-**</em></h4>
      <span class="fas icon-small fa-chevron-up" alt="Up Chevron Icon"></span>
      <span class="fas icon-small fa-chevron-down" alt="Down Chevron Icon"></span>
      <span class="fas icon-small fa-chevron-left" alt="Left Chevron Icon"></span>
      <span class="fas icon-small fa-chevron-right" alt="Right Chevron Icon"></span>
      <br/ >
      <span class="fas icon-base fa-chevron-up" alt="Up Chevron Icon"></span>
      <span class="fas icon-base fa-chevron-down" alt="Down Chevron Icon"></span>
      <span class="fas icon-base fa-chevron-left" alt="Left Chevron Icon"></span>
      <span class="fas icon-base fa-chevron-right" alt="Right Chevron Icon"></span>
      <br/ >
      <span class="fas icon-large fa-chevron-up" alt="Up Chevron Icon"></span>
      <span class="fas icon-large fa-chevron-down" alt="Down Chevron Icon"></span>
      <span class="fas icon-large fa-chevron-left" alt="Left Chevron Icon"></span>
      <span class="fas icon-large fa-chevron-right" alt="Right Chevron Icon"></span>
      <br/ >
      <span class="fas icon-xl fa-chevron-up" alt="Up Chevron Icon"></span>
      <span class="fas icon-xl fa-chevron-down" alt="Down Chevron Icon"></span>
      <span class="fas icon-xl fa-chevron-left" alt="Left Chevron Icon"></span>
      <span class="fas icon-xl fa-chevron-right" alt="Right Chevron Icon"></span>
      <br/ >
      <span class="fas icon-xxl fa-chevron-up" alt="Up Chevron Icon"></span>
      <span class="fas icon-xxl fa-chevron-down" alt="Down Chevron Icon"></span>
      <span class="fas icon-xxl fa-chevron-left" alt="Left Chevron Icon"></span>
      <span class="fas icon-xxl fa-chevron-right" alt="Right Chevron Icon"></span>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
      <h4><em>fa-play   fa-pause</em></h4>
      <span class="fas icon-small fa-play" alt="Play Icon"></span>
      <span class="fas icon-small fa-pause" alt="Pause Icon"></span>
      <br />
      <span class="fas icon-base fa-play" alt="Play Icon"></span>
      <span class="fas icon-base fa-pause" alt="Pause Icon"></span>
      <br />
      <span class="fas icon-large fa-play" alt="Play Icon"></span>
      <span class="fas icon-large fa-pause" alt="Pause Icon"></span>
      <br />
      <span class="fas icon-xl fa-play" alt="Play Icon"></span>
      <span class="fas icon-xl fa-pause" alt="Pause Icon"></span>
      <br />
      <span class="fas icon-xxl fa-play" alt="Play Icon"></span>
      <span class="fas icon-xxl fa-pause" alt="Pause Icon"></span>
    </div>
  </div>
</div>`)
