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
    <nav aria-label="breadcrumbs">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Second Nav Item</a></li>
        <li class="breadcrumb-item active" aria-current="page">Current Page</li>
      </ol>
    </nav>
    <h1 class="article">ASU is measured not by whom we exclude, but rather by whom we include and how they succeed.</h1>
  </div>
</section>
<!-- The following section is included to allow for the easy testing of how a bootstrap container behaves with this element. -->
<div class="container-xl">
  <div class="row">
    <div class="col-lg-10 offset-lg-1">
      <article>
        <p>Cuba Poland worldwide hotel South-America flexibility Amsterdam currency. Expedia Moscow St. Petersburg Tripit. Lonely planet train airBnB on a shoestring Amsterdam South-America. Hotspots flight active lifestyle France activities relaxation car rental New York City discount. Maps Australia Tripit translator St. Petersburg Russia bus Hungary. Package horse riding itinerary foreign flight last minute travel housing euro.</p>
        <p>Lodge tent rural. Transit relaxation Poland Asia airmiles hotel deal things to do Cuba airBnB diary animals package. Rome bunkbeds itinerary Pacific. Hitchhiking ticket Pacific France national bunkbeds St. Petersburg Hungary. Translator recommendations booking discover expedia city trip diary motel chartering guest travel. Unique experiences lonely planet guest nighttrain couchsurfing horse riding flight China Germany last minute overnight.</p>
        <p>Stay Pacific uncharted relaxation transit tourist attractions insurance tent lifestyle booking train hotel. Itinerary exchange rate Budapest last minute hotel translation. Earth Cuba booking spa place to stay adventure group discount unique experiences caravan Moscow gateway package currency kayak. Lonely planet housing Barcelona. Australia private jet city trip taxi translator cab active lifestyle airBnB explore South-America caravan tour operator.</p>
      </article>
    </div>
  </div>
</div>
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
