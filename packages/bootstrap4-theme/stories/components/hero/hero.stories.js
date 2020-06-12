import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

storiesOf('Components/Hero', module)
  .addParameters({
    happo: false,
  })

.add('Hero, small', () => `
<section class="uds-hero uds-hero-sm">
  <img src="https://www.asu.edu/asuthemes/4.9/assets/arizona-state-university-logo.png" alt="" role="presentation" class="uds-hero-img">
  <div class="container">
    <h1 class="heading heading-one col-md-8"><span class="highlight highlight-gold highlight-heading-one">Heading 1</span></h1>
  </div>
</section>
`)

.add('Hero, medium', () => `
<section class="uds-hero uds-hero-md">
  <img src="https://www.asu.edu/asuthemes/4.9/assets/arizona-state-university-logo.png" alt="" role="presentation" class="uds-hero-img">
  <div class="container">
    <h1 class="heading heading-one col-md-8"><span class="highlight highlight-gold highlight-heading-one">Heading 1</span></h1>
    <div class="col-md-6">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <!-- TODO Is there a better call to action button? -->
      <button class="btn btn-gold" type="submit">Call to action button</button>
    </div>
  </div>
</section>
`)

.add('Hero, large', () => `
<section class="uds-hero uds-hero-lg">
  <img src="https://www.asu.edu/asuthemes/4.9/assets/arizona-state-university-logo.png" alt="" role="presentation" class="uds-hero-img">
  <div class="container">
    <h1 class="heading heading-one col-md-8"><span class="highlight highlight-gold highlight-heading-one">Heading 1</span></h1>
    <div class="col-md-6">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <!-- TODO Is there a better call to action button? -->
      <button class="btn btn-gold" type="submit">Call to action button</button>
    </div>
  </div>
</section>
`)

; // close
