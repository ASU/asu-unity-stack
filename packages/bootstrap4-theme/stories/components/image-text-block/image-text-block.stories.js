export default {title: "Components/Content Sections/Image And Text Block"}

export const ImageOnLeft = () => `
<div class="uds-image-text-block-container">
  <div class="uds-image-text-block-image-container">
    <img src="https://source.unsplash.com/random/1200x750" class="img-fluid" alt="Random image. REPLACE with appropriate alt text for accessibility."></img>
  </div>

  <div class="uds-image-text-block-text-container">
    <h2>This is a secondary heading, Lorem ipsum dolor sit amet</h2>
    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</h4>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
    <div class="d-flex mb-2">
      <a href="#" class="btn btn-dark mr-2">Button link here</a>
      <a href="#" class="btn btn-dark">Button link here</a>
    </div>
  </div>
</div>
`;

export const ImageOnRight = () => `
<div class="uds-image-text-block-container">
  <div class="uds-image-text-block-text-container">
    <h2>This is a secondary heading, Lorem ipsum dolor sit amet</h2>
    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</h4>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
    <div class="d-flex mb-2">
      <a href="#" class="btn btn-dark mr-2">Button link here</a>
      <a href="#" class="btn btn-dark">Button link here</a>
    </div>
  </div>

  <div class="uds-image-text-block-image-container">
    <img src="https://source.unsplash.com/random/1200x750" class="img-fluid" alt="Random image. REPLACE with appropriate alt text for accessibility."></img>
  </div>
</div>
`;

export const Mobile = () => `
<div class="uds-image-text-block-container">
  <div class="uds-image-text-block-text-container">
    <h2>This is a secondary heading, Lorem ipsum dolor sit amet</h2>
    <h3>Lorem ipsum dolor sit amet</h3>
    <p>This is the same as the other examples. The button in this example is just smaller.</p>
    <div class="d-flex mb-2">
      <a href="#" class="btn btn-sm btn-dark mr-2">Button link here</a>
    </div>
  </div>

  <div class="uds-image-text-block-image-container">
    <img src="https://source.unsplash.com/random/1200x750" class="img-fluid" alt="Random image. REPLACE with appropriate alt text for accessibility."></img>
  </div>
</div>
`;
