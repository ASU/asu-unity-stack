import Glide from './glide-3-4-1';


export const initCarousel = () => {
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

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const gap = 48;
  let peek = 0;
  if(vw > 1200) {
    // We want slides to max-width at 1200px but we can only control the peek
    peek = 360; // (1920 - 1200) / 2;
  }
  new Glide('#one-university-carousel', {
      type: "slider", // No wrap-around.
      focusAt: 0,
      bound: true, // Only if type slider with focusAt 0
      rewind: false, // Only if type slider
      gap, // Space between slides... may be impacted by viewport size.
      keyboard: true, // Left/Right arrow key support for slides - true is default. Accessible?
      startAt: 0,
      swipeThreshold: 80, // Distance required for swipe to change slide.
      dragThreshold: 120, // Distance for mouse drag to change slide.
      perTouch: 1, // Number of slides that can be moved per each swipe/drag.
      peek,
      perView: 1,
  }).mount({ ArrowDisabler });
}
