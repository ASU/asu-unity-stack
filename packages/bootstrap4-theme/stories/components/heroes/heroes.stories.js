import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

// Random photos sourced from Unsplash: https://source.unsplash.com

storiesOf('Components/Heroes', module)
  .addParameters({
    happo: false,
  })

.add('Hero, small', () => `
<div class="uds-hero uds-hero-sm" style="background-image: linear-gradient(180deg, #19191900 0%, #191919c9 100%), url('https://source.unsplash.com/random/1920x1200');">
  <div class="container uds-hero-container">
    <h1 class="heading heading-one col-md-8"><span class="highlight highlight-gold highlight-heading-one">Heading 1</span></h1>
  </div>
</div>
`)

.add('Hero, medium', () => `
<div class="uds-hero uds-hero-md" style="background-image: linear-gradient(180deg, #19191900 0%, #191919c9 100%), url('https://source.unsplash.com/random/1920x1200');">
  <div class="container uds-hero-container">
    <h1 class="heading heading-one col-md-8"><span class="highlight highlight-gold highlight-heading-one">Heading 1</span></h1>
    <div class="uds-hero-text col-sm-12 col-md-7">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button class="btn btn-gold" type="submit">Call to action button</button>
    </div>
  </div>
</div>
`)

.add('Hero, large', () => `
<div class="uds-hero uds-hero-lg" style="background-image: linear-gradient(180deg, #19191900 0%, #191919c9 100%), url('https://source.unsplash.com/random/1920x1200');">
  <div class="container uds-hero-container">
    <h1 class="heading heading-one col-md-8"><span class="highlight highlight-gold highlight-heading-one">Heading 1</span></h1>
    <div class="uds-hero-text col-sm-12 col-md-7">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button class="btn btn-gold" type="submit">Call to action button</button>
    </div>
  </div>
</div>
`)

; // close
