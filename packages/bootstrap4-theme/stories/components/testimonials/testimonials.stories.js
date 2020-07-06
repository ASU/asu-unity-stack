import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

// Random photos sourced from Unsplash: https://source.unsplash.com

storiesOf('Components/Testimonials', module)
  .addParameters({
    happo: false,
  })

// TODO Testimonials, Option 1
.add('Testimonials, Option 1', () => `
<div>
To come.
</div>
`)

.add('Testimonials, Option 2', () => `
<div class="uds-testimonial uds-testimonial-2" style="background-image: linear-gradient(180deg, #19191900 0%, #191919c9 100%), url('https://source.unsplash.com/random/1920x1200');">
  <div class="container uds-testimonial-container">
    <blockquote class="ws2-element-gold ws2-element-spacing-entity">
      <p>Having spent a lot of time learning on-the-job I thought I knew what
      earning my degree would be like, but ASU Online has surpassed my
      expectations in both the quality of coursework and in services offered.</p>
      <hr class="copy-divider">
      <cite class="ws2-sig-title">Dustin Hall</cite>
      <cite class="ws2-sig-byline">ASU Online student, 2019</cite>
    </blockquote>
  </div>
</div>
`)

// TODO Testimonials, Option 3
.add('Testimonials, Option 3', () => `
<div>
To come.
</div>
`)

; // close
