export default { title: 'ASUCMS/Rankings Carousel' };

export const rankingsCarousel = () => `
  <div class="image-carousel">
    <div id="rankings-carousel" class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">
            <div class="asucms-image">
              <img
                src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/210211-ASURankings-1Innovation%20(1).png"
                alt="Replace with appropriate alt text">
            </div>
          </li>
          <li class="glide__slide">
            <div class="asucms-image">
              <img
                src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/210211-ASURankings-_BestBachelors.png"
                alt="Replace with appropriate alt text">
            </div>
          </li>
          <li class="glide__slide">
            <div class="asucms-image">
              <img
                src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/210211-ASURankings-_Excellence.png"
                alt="Replace with appropriate alt text">
            </div>
          </li>
          <li class="glide__slide">
            <div class="asucms-image">
              <img
                src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/210211-ASURankings-_Top10International.png"
                alt="Replace with appropriate alt text">
            </div>
          </li>
          <li class="glide__slide">
            <div class="asucms-image">
              <img
                src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/210211-ASURankings-_Top25MBA.png"
                alt="Replace with appropriate alt text">
            </div>
          </li>
        </ul>
      </div>

      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-left"
            className="svg-inline--fa fa-chevron-left fa-w-10"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path fill="currentColor" d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z" class="arrow" transform="translate(15,0)"></path>
          </svg>
        </button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            className="svg-inline--fa fa-chevron-right fa-w-10"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path fill="currentColor" d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z" class="arrow" transform="translate(85,100) rotate(180)"></path>
          </svg>
        </button>
      </div>
      <div class="link-section">
        <a href="example.com">View all rankings</a>
      </div>
    </div>
    <script src="https://unpkg.com/@glidejs/glide@3.4.1/dist/glide.js"></script>
    <script>
      var ArrowDisabler = function (Glide, Components, Events) {
        return {
          mount() {
            // Only in effect when rewinding is disabled
            if (Glide.settings.rewind) {
              return
            }

            Glide.on(['mount.after', 'run'], () => {
              // Filter out arrows_control
              for (let controlItem of Components.Controls.items) {
                if (controlItem.className !== 'glide__arrows') {
                  continue
                }

                // Set left arrow state
                var left = controlItem.querySelector('.glide__arrow--left')
                if (left) {
                  if (Glide.index === 0) {
                    left.classList.add("glide__arrow--disabled");
                    //left.setAttribute('disabled', '') // Disable on first slide
                  } else {
                    left.classList.remove("glide__arrow--disabled");
                    //left.removeAttribute('disabled') // Enable on other slides
                  }
                }

                // Set right arrow state
                var right = controlItem.querySelector('.glide__arrow--right')
                if (right) {
                    if (Glide.index === Components.Sizes.length - Glide.settings.perView) {
                      right.classList.add("glide__arrow--disabled");
                      //right.setAttribute('disabled', '') // Disable on last slide
                    } else {
                      right.classList.remove("glide__arrow--disabled");
                      //right.removeAttribute('disabled') // Disable on other slides
                    }
                }
              }
            })
          }
        }
      }


      new Glide('#rankings-carousel', {
          type: "slider", // No wrap-around.
          focusAt: 0,
          bound: true, // Only if type slider with focusAt 0
          rewind: false, // Only if type slider
          keyboard: true, // Left/Right arrow key support for slides - true is default. Accessible?
          startAt: 0,
          swipeThreshold: 80, // Distance required for swipe to change slide.
          dragThreshold: 120, // Distance for mouse drag to change slide.
          perTouch: 1, // Number of slides that can be moved per each swipe/drag.
          peek: 0,
          gap: 0,
          perView: 1,
      }).mount({ ArrowDisabler });
    </script>
  </div>
`;




