export default {title: "Components/Content Sections/Image And Text Block"}

export const ImageOnLeft = () => `
<div class="container">
  <div class="row">
    <div class="col col-12 ">

      <div class="uds-image-text-block-container">
        <div class="uds-image-text-block-image-container">
          <img src="https://source.unsplash.com/random/1200x750" class="img-fluid" alt="Random image. REPLACE with appropriate alt text for accessibility."></img>
        </div>

        <div class="uds-image-text-block-text-container">
          <h3>This is a heading</h3>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
          <div class="d-flex justify-content-around">
            <a href="#" class="btn btn-dark">Button link here</a>
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
`;

export const ImageOnRight = () => `
<div class="container">
  <div class="row">
    <div class="col col-12 ">
      <div class="uds-image-text-block-container">
        <div class="uds-image-text-block-text-container">
          <h3>This is a heading</h3>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
          <div class="d-flex justify-content-around">
            <a href="#" class="btn btn-dark">Button link here</a>
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div>

        <div class="uds-image-text-block-image-container">
          <img src="https://source.unsplash.com/random/1200x750" class="img-fluid" alt="Random image. REPLACE with appropriate alt text for accessibility."></img>
        </div>
      </div>

      </div>
    </div>
  </div>
`;

