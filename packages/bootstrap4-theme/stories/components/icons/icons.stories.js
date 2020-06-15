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
      <span class="fas icon-small fa-home"><span class="sr-only">Home Icon</span></span>
      <span class="fas icon-base fa-home"><span class="sr-only">Home Icon</span></span>
      <span class="fas icon-large fa-home"><span class="sr-only">Home Icon</span></span>
      <span class="fas icon-xl fa-home"><span class="sr-only">Home Icon</span></span>
      <span class="fas icon-xxl fa-home"><span class="sr-only">Home Icon</span></span>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
      <h4><em>fa-bars</em></h4>
      <span class="fas icon-small fa-bars"><span class="sr-only">Menu Icon</span></span>
      <span class="fas icon-base fa-bars"><span class="sr-only">Menu Icon</span></span>
      <span class="fas icon-large fa-bars"><span class="sr-only">Menu Icon</span></span>
      <span class="fas icon-xl fa-bars"><span class="sr-only">Menu Icon</span></span>
      <span class="fas icon-xxl fa-bars"><span class="sr-only">Menu Icon</span></span>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
      <h4><em>fa-times</em></h4>
      <span class="fas icon-small fa-times"><span class="sr-only">Exit Icon</span></span>
      <span class="fas icon-base fa-times"><span class="sr-only">Exit Icon</span></span>
      <span class="fas icon-large fa-times"><span class="sr-only">Exit Icon</span></span>
      <span class="fas icon-xl fa-times"><span class="sr-only">Exit Icon</span></span>
      <span class="fas icon-xxl fa-times"><span class="sr-only">Exit Icon</span></span>
    </div>
  </div>
  <div class="row">
  <div class="col col-sm-12 col-md-4 p-4">
    <h4><em>fa-search</em></h4>
    <span class="fas icon-small fa-search"><span class="sr-only">Search Icon</span></span>
    <span class="fas icon-base fa-search"><span class="sr-only">Search Icon</span></span>
    <span class="fas icon-large fa-search"><span class="sr-only">Search Icon</span></span>
    <span class="fas icon-xl fa-search"><span class="sr-only">Search Icon</span></span>
    <span class="fas icon-xxl fa-search"><span class="sr-only">Search Icon</span></span>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
    <h4><em>fa-arrow-right</em></h4>
    <span class="fas icon-small fa-arrow-right"><span class="sr-only">Arrow Right Icon</span></span>
    <span class="fas icon-base fa-arrow-right"><span class="sr-only">Arrow Right Icon</span></span>
    <span class="fas icon-large fa-arrow-right"><span class="sr-only">Arrow Right Icon</span></span>
    <span class="fas icon-xl fa-arrow-right"><span class="sr-only">Arrow Right Icon</span></span>
    <span class="fas icon-xxl fa-arrow-right"><span class="sr-only">Arrow Right Icon</span></span>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
    <h4><em>fa-external-link-alt</em></h4>
    <span class="fas icon-small fa-external-link-alt"><span class="sr-only">External Link Icon</span></span>
    <span class="fas icon-base fa-external-link-alt"><span class="sr-only">External Link Icon</span></span>
    <span class="fas icon-large fa-external-link-alt"><span class="sr-only">External Link Icon</span></span>
    <span class="fas icon-xl fa-external-link-alt"><span class="sr-only">External Link Icon</span></span>
    <span class="fas icon-xxl fa-external-link-alt"><span class="sr-only">External Link Icon</span></span>
    </div>
  </div>
  <div class="row">
  <div class="col col-sm-12 col-md-4 p-4">
      <h4><em>fa-chevron-**</em></h4>
      <span class="fas icon-small fa-chevron-up"><span class="sr-only">Chevron Up Icon</span></span>
      <span class="fas icon-small fa-chevron-down"><span class="sr-only">Chevron Down Icon</span></span>
      <span class="fas icon-small fa-chevron-left"><span class="sr-only">Chevron Left Icon</span></span>
      <span class="fas icon-small fa-chevron-right"><span class="sr-only">Chevron Right Icon</span></span>
      <br/ >
      <span class="fas icon-base fa-chevron-up"><span class="sr-only">Chevron Up Icon</span></span>
      <span class="fas icon-base fa-chevron-down"><span class="sr-only">Chevron Down Icon</span></span>
      <span class="fas icon-base fa-chevron-left"><span class="sr-only">Chevron Left Icon</span></span>
      <span class="fas icon-base fa-chevron-right"><span class="sr-only">Chevron Right Icon</span></span>
      <br/ >
      <span class="fas icon-large fa-chevron-up"><span class="sr-only">Chevron Up Icon</span></span>
      <span class="fas icon-large fa-chevron-down"><span class="sr-only">Chevron Down Icon</span></span>
      <span class="fas icon-large fa-chevron-left"><span class="sr-only">Chevron Left Icon</span></span>
      <span class="fas icon-large fa-chevron-right"><span class="sr-only">Chevron Right Icon</span></span>
      <br/ >
      <span class="fas icon-xl fa-chevron-up"><span class="sr-only">Chevron Up Icon</span></span>
      <span class="fas icon-xl fa-chevron-down"><span class="sr-only">Chevron Down Icon</span></span>
      <span class="fas icon-xl fa-chevron-left"><span class="sr-only">Chevron Left Icon</span></span>
      <span class="fas icon-xl fa-chevron-right"><span class="sr-only">Chevron Right Icon</span></span>
      <br/ >
      <span class="fas icon-xxl fa-chevron-up"><span class="sr-only">Chevron Up Icon</span></span>
      <span class="fas icon-xxl fa-chevron-down"><span class="sr-only">Chevron Down Icon</span></span>
      <span class="fas icon-xxl fa-chevron-left"><span class="sr-only">Chevron Left Icon</span></span>
      <span class="fas icon-xxl fa-chevron-right"><span class="sr-only">Chevron Right Icon</span></span>
    </div>
    <div class="col col-sm-12 col-md-4 p-4">
      <h4><em>fa-play   fa-pause</em></h4>
      <span class="fas icon-small fa-play"><span class="sr-only">Play Icon</span></span>
      <span class="fas icon-small fa-pause"><span class="sr-only">Pause Icon</span></span>
      <br />
      <span class="fas icon-base fa-play"><span class="sr-only">Play Icon</span></span>
      <span class="fas icon-base fa-pause"><span class="sr-only">Pause Icon</span></span>
      <br />
      <span class="fas icon-large fa-play"><span class="sr-only">Play Icon</span></span>
      <span class="fas icon-large fa-pause"><span class="sr-only">Pause Icon</span></span>
      <br />
      <span class="fas icon-xl fa-play"><span class="sr-only">Play Icon</span></span>
      <span class="fas icon-xl fa-pause"><span class="sr-only">Pause Icon</span></span>
      <br />
      <span class="fas icon-xxl fa-play"><span class="sr-only">Play Icon</span></span>
      <span class="fas icon-xxl fa-pause"><span class="sr-only">Pause Icon</span></span>
    </div>
  </div>
</div>`)

.add('Contact Icons', () => `
<div class="container-fluid">
  <div class="row">

  </div>
</div>`)
