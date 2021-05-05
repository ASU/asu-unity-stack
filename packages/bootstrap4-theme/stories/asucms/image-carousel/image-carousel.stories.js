export default { title: 'ASUCMS/Image Carousel' };

export const imageCarousel = () => `
  <div>
    <div class="carousel-header-section">
      <h2><span class="highlight-gold">One university, many places</span></h2>
    </div>
    <div class="image-carousel">
      <div id="one-university-carousel" class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide">
              <div class="asucms-image">
                <img
                  src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/210105-HomepageLocations-Poly.png"
                  alt="Polytechnic campus">
                <div class="content-area">
                  <h2 class="mb-3"><span class="highlight-gray">Polytechnic campus</span></h2>
                  <input class="btn btn-gold" type="submit" value="Schedule a tour"></input>
                </div>
              </div>
            </li>
            <li class="glide__slide">
              <div class="asucms-image">
                <img
                  src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/210105-HomepageLocations-Tempe.png"
                  alt="Tempe campus">
                <div class="content-area">
                  <h2 class="mb-3"><span class="highlight-gray">Tempe campus</span></h2>
                  <input class="btn btn-gold" type="submit" value="Schedule a tour"></input>
                </div>
              </div>
            </li>
            <li class="glide__slide">
              <div class="asucms-image">
                <img
                  src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/210105-HomepageLocations-West.png"
                  alt="West campus">
                <div class="content-area">
                  <h2 class="mb-3"><span class="highlight-gray">West campus</span></h2>
                  <input class="btn btn-gold" type="submit" value="Schedule a tour"></input>
                </div>
              </div>
            </li>
            <li class="glide__slide">
              <div class="asucms-image">
                <img
                  src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/210105-HomepageLocations-DowntownPhoenix.png"
                  alt="Downtown Phoenix Campus">
                <div class="content-area">
                  <h2 class="mb-3"><span class="highlight-gray">Downtown Phoenix Campus</span></h2>
                  <input class="btn btn-gold" type="submit" value="Schedule a tour"></input>
                </div>
              </div>
            </li>
            <li class="glide__slide">
              <div class="asucms-image">
                <img
                  src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/210105-HomepageLocations-Skysong.png"
                  alt="Skysong">
                <div class="content-area">
                  <h2 class="mb-3"><span class="highlight-gray">Skysong</span></h2>
                  <input class="btn btn-gold" type="submit" value="Schedule a tour"></input>
                </div>
              </div>
            </li>
            <li class="glide__slide">
              <div class="asucms-image">
                <img
                  src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/210105-HomepageLocations-Washington.png"
                  alt="Washington D.C.">
                <div class="content-area">
                  <h2 class="mb-3"><span class="highlight-gray">Washington D.C.</span></h2>
                  <input class="btn btn-gold" type="submit" value="Schedule a tour"></input>
                </div>
              </div>
            </li>
            <li class="glide__slide">
              <div class="asucms-image">
                <img
                  src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/210105-HomepageLocations-Havasu.png"
                  alt="Lake Havasu">
                <div class="content-area">
                  <h2 class="mb-3"><span class="highlight-gray">Lake Havasu</span></h2>
                  <input class="btn btn-gold" type="submit" value="Schedule a tour"></input>
                </div>
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


      new Glide('#one-university-carousel', {
          type: "slider", // No wrap-around.
          focusAt: 0,
          bound: true, // Only if type slider with focusAt 0
          rewind: false, // Only if type slider
          gap: 24, // Space between slides... may be impacted by viewport size.
          keyboard: true, // Left/Right arrow key support for slides - true is default. Accessible?
          startAt: 0,
          swipeThreshold: 80, // Distance required for swipe to change slide.
          dragThreshold: 120, // Distance for mouse drag to change slide.
          perTouch: 1, // Number of slides that can be moved per each swipe/drag.
          peek: 170,
          perView: 1,
      }).mount({ ArrowDisabler });
    </script>
  </div>
`;
