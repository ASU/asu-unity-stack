export default { title: 'Components/Content Sections/Card Image And Content' };
import exampleImage from './example-image.jpg';

export const Default = () => `
<div class="container">
  <div class="row">
  <div class="col"></div>
    <!-- Component start -->
    <div class="uds-card-image-and-content">
      <div class="uds-card-image-and-content-image-container" style="background-image: linear-gradient(180deg, #19191900 0%, #191919c9 100%), url('https://source.unsplash.com/random/1920x1200');">
        <div class="uds-card-image-and-content-image-container-headline">
          Section headline goes here
        </div>
      </div>
      <div class="uds-card-image-and-content-content-container">
        <div class="content">
          Here is some introductory text about the topic featured in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
        </div>
        <div class="card">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-sm btn-dark">Button link here</a>
          </div>
          <div class="card-link">
            <a href="#" class="">Regular text link here</a>
          </div>
          <div class="card-tags">
            <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Component end -->
  </div>
</div>
`;
