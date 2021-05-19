export default { title: 'ASUCMS/Image Parallax' };

export const OneImage = () => `
<div>
  <div class="full-width-test-container">
    Section 1
  </div>
  <div class="full-width-test-container">
    Section 2
  </div>
  <div class="full-width-test-container">
    Section 3
  </div>
  <div class="full-width-test-container">
    Section 4
  </div>
  <section class="parallax-container">
    <div class="parallax-wrapper">
      <img src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/Innovation-Collaboration-ISTB4.jpg">
    </div>
  </section>
  <div class="full-width-test-container">
    Section 6
  </div>
  <div class="full-width-test-container">
    Section 7
  </div>
  <div class="full-width-test-container">
    Section 8
  </div>
  <section class="parallax-container">
    <div class="parallax-wrapper asu-for-you">
      <img src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/asuForYouTexture.png">
    </div>
  </section>
  <script>
    const scrollHandler = () => {
      document.querySelectorAll('.parallax-container').forEach((elem) => {
        const the_container = elem;
        const the_image_wrapper = the_container.querySelector(".parallax-wrapper");
        const the_image = the_image_wrapper.querySelector("img");

        const default_position = (the_container.offsetHeight - the_image.height) - 150;
        const distance_to_travel = window.innerHeight + the_container.offsetHeight;
        const top_of_container = the_container.getBoundingClientRect().top;
        const amount_of_distance_travelled = window.innerHeight - top_of_container;
        const portion_of_container_scrolled = amount_of_distance_travelled / distance_to_travel;

        if(portion_of_container_scrolled < 0){
          the_image_wrapper.style.top = default_position + 'px';
        } else if(portion_of_container_scrolled > 1){
          the_image_wrapper.style.top = '0';
        } else {
          const correct_position = default_position * (1 - portion_of_container_scrolled);
          the_image_wrapper.style.top = correct_position + 'px';
        }
      });
    };
    window.addEventListener("scroll", scrollHandler )
  </script>
</div>
`;

export const twoImages = () => `
<div class="container p-5">

</div>
`;
