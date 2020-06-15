import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import bkgPlaceholderImg from './Placeholder_Img_Large-5@2x.png'


storiesOf('Components/Heroes', module)
  .addParameters({
    happo: false,
  })

.add('Hero, small', () => `
<section class="uds-hero uds-hero-sm">
  <img src=${bkgPlaceholderImg} alt="" role="presentation" class="uds-hero-img">
  <div class="container uds-hero-container">
    <h1 class="heading heading-one col-md-8"><span class="highlight highlight-gold highlight-heading-one">Heading 1</span></h1>
  </div>
</section>
`)

.add('Hero, medium', () => `
<section class="uds-hero uds-hero-md">
  <img src=${bkgPlaceholderImg} alt="" role="presentation" class="uds-hero-img">
  <div class="container uds-hero-container">
    <h1 class="heading heading-one col-md-8"><span class="highlight highlight-gold highlight-heading-one">Heading 1</span></h1>
    <div class="uds-hero-text col-6">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button class="btn btn-gold" type="submit">Call to action button</button>
    </div>
  </div>
</section>
`)

.add('Hero, large', () => `
<section class="uds-hero uds-hero-lg">
  <img src=${bkgPlaceholderImg} alt="" role="presentation" class="uds-hero-img">
  <div class="container uds-hero-container">
    <h1 class="heading heading-one col-md-8"><span class="highlight highlight-gold highlight-heading-one">Heading 1</span></h1>
    <div class="uds-hero-text col-6">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button class="btn btn-gold" type="submit">Call to action button</button>
    </div>
  </div>
</section>
`)

; // close
