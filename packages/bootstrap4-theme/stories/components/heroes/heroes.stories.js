export default { title: 'Components/Heroes' };

// Random photos sourced from Unsplash: https://source.unsplash.com

export const heroSmall = () => `
<div class="uds-hero uds-hero-sm" style="background-image: linear-gradient(180deg, #19191900 0%, #191919c9 100%), url('https://source.unsplash.com/random/1920x1200');">
  <div class="container uds-hero-container">
    <h1 class="heading heading-one col-md-8"><span class="highlight highlight-gold highlight-heading-one">Heading 1</span></h1>
  </div>
</div>
`;

export const heroMedium = () => `
<div class="uds-hero uds-hero-md" style="background-image: linear-gradient(180deg, #19191900 0%, #191919c9 100%), url('https://source.unsplash.com/random/1920x1200');">
  <div class="container uds-hero-container">
    <h1 class="heading heading-one col-md-8"><span class="highlight highlight-gold highlight-heading-one">Heading 1</span></h1>
    <div class="uds-hero-text col-sm-12 col-md-7">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <a href="#" class="btn btn-gold" />Call to action</a>
    </div>
  </div>
</div>
`;

export const heroLarge = () => `
<div class="uds-hero uds-hero-lg" style="background-image: linear-gradient(180deg, #19191900 0%, #191919c9 100%), url('https://source.unsplash.com/random/1920x1200');">
  <div class="container uds-hero-container">
    <h1 class="heading heading-one col-md-8"><span class="highlight highlight-gold highlight-heading-one">Heading 1</span></h1>
    <div class="uds-hero-text col-sm-12 col-md-7">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <a href="#" class="btn btn-gold" />Call to action</a>
    </div>
  </div>
</div>
`;

export const storyHero = () => `
<section class="uds-story-hero">
  <img class="hero" src="https://source.unsplash.com/random/1920x512" alt="Be sure to include alt text in your image tag." />
  <div class="content">
    <h1 class="article">ASU is measured not by whom we exclude, but rather by whom we include and how they succeed.</h1>
  </div>
</section>
`;

export const storyHeroLarge = () => `
<section class="uds-story-hero uds-story-hero-lg entry-header">
  <img class="hero" src="https://source.unsplash.com/random/1920x512" alt="Be sure to include alt text in your image tag." />
  <div class="content">
    <nav aria-label="breadcrumbs">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Second Nav Item</a></li>
        <li class="breadcrumb-item active" aria-current="page">Current Page</li>
      </ol>
    </nav>
    <h1 class="article">The answer to the ultimate question of life, the universe, and everything</h1>
  </div>
</section>
`;
