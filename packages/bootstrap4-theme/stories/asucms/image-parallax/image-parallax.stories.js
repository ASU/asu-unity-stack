export default { title: 'ASUCMS/Image Parallax' };
import './image-parallax';

export const parallaxSectionOnly = () => `
<section class="parallax-container carve-your-path">
  <img src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/Innovation-Collaboration-ISTB4.jpg">
</section>
`;

export const demoTwoImagesInPageOfSections = () => `
<div>
  <div class="d-flex flex-column justify-content-center align-items-center" style="height: 500px;">
    Section 1
  </div>
  <div class="d-flex flex-column justify-content-center align-items-center" style="height: 500px;">
    Section 2
  </div>
  <div class="d-flex flex-column justify-content-center align-items-center" style="height: 500px;">
    Section 3
  </div>
  <div class="d-flex flex-column justify-content-center align-items-center" style="height: 500px;">
    Section 4
  </div>
  <section class="parallax-container carve-your-path">
    <img src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/Innovation-Collaboration-ISTB4.jpg">
  </section>
  <div class="d-flex flex-column justify-content-center align-items-center" style="height: 500px;">
    Section 6
  </div>
  <div class="d-flex flex-column justify-content-center align-items-center" style="height: 500px;">
    Section 7
  </div>
  <div class="d-flex flex-column justify-content-center align-items-center" style="height: 500px;">
    Section 8
  </div>
  <section class="parallax-container asu-for-you">
    <img src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/asuForYouTexture.png">
  </section>
</div>
`;

export const twoImages = () => `
<div class="container p-5">

</div>
`;
