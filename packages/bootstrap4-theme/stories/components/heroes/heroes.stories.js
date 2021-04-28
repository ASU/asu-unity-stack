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
      <a href="#" class="btn btn-gold" />Call to action</a>
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
      <a href="#" class="btn btn-gold" />Call to action</a>
    </div>
  </div>
</div>
`)

  .add('Story hero, medium', () => `
<div class="uds-hero uds-story-hero uds-hero-md" style="background-image: linear-gradient(180deg, #19191900 0%, #191919c9 100%), url('https://source.unsplash.com/random/1920x1200');">

  <div class="container uds-story-hero-container">
  <div class = >
    <nav aria-label="breadcrumbs">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Second Nav Item</a></li>
        <li class="breadcrumb-item active" aria-current="page">Current Page</li>
      </ol>
    </nav>
    <div class="uds-story-hero-text col-sm-12 col-md-7">
      <p>This is a primary headline. This story hero is meant to accommodate long titles.</p>
    </div>
    </div>
    
    
  </div>
</div>
`)

  .add('Story hero, large', () => `
<div class="uds-hero uds-story-hero uds-hero-lg" style="background-image: linear-gradient(180deg, #19191900 0%, #191919c9 100%), url('https://source.unsplash.com/random/1920x1200');">
  <div class="container uds-story-hero-container">
  <div class = >
    <nav aria-label="breadcrumbs">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Second Nav Item</a></li>
        <li class="breadcrumb-item active" aria-current="page">Current Page</li>
      </ol>
    </nav>
    <div class="uds-story-hero-text col-sm-12 col-md-7">
      <p>This is a primary headline. This story hero is meant to accommodate long titles.</p>
    </div>
    </div>
    
    
  </div>
</div>
`)
;
