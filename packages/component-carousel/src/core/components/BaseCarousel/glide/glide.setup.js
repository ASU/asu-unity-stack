// @ts-check
import Glide from "@glidejs/glide";

/**
 *
 * @param {string | number} perView
 * @returns {Glide.Options}
 */
function buildConfig(perView = "1") {
  // Set a perView value for each breakpoint so we adapt down appropriately.
  let perViewSm, perViewMd, perViewLg;
  switch (perView) {
    case "3":
      // Values used in config call.
      perViewSm = 1;
      perViewMd = 2;
      perViewLg = 3;
      break;
    case "2":
      // Values used in config call.
      perViewSm = 1;
      perViewMd = 2;
      perViewLg = 2;
      break;
    case "1":
    default:
      // Values used in config call.
      perViewSm = 1;
      perViewMd = 1;
      perViewLg = 1;
  }

  // Set GlideJS config options, per https://glidejs.com/docs/options/
  return {
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
    breakpoints: {
      576: {
        // BS4 sm
        perView: perViewSm,
        peek: { before: 0, after: 62 },
      },
      768: {
        // BS4 md
        //perView: props.perView > 1 ? 2 : 1,
        perView: perViewSm,
        peek: { before: 124, after: 124 },
      },
      992: {
        // BS4 lg
        //perView: props.perView > 1 ? props.perView : 1,
        perView: perViewMd,
        peek: { before: 124, after: 124 },
      },
      1260: {
        // BS4 xl
        //perView: props.perView > 1 ? props.perView : 1,
        perView: perViewLg,
        peek: { before: 124, after: 124 },
      },
      1400: {
        //perView: props.perView > 1 ? props.perView : 1,
        perView: perViewLg,
        peek: { before: 124, after: 124 },
      },
      1920: {
        //perView: props.perView > 1 ? props.perView : 1,
        perView: perViewLg,
        peek: { before: 124, after: 124 },
      },
    },
  };
}

/**
 *
 * @param {string } instanceName
 * @param {string | number} perView
 * @param {number} buttonCount
 *
 * @returns {Glide.Static}
 */
function setupCaroarousel(instanceName, perView, buttonCount, onItemClick) {
  const sliderConfig = buildConfig(perView);

  // Load up a new glideJS slider, but don't mount until we have event
  // listener (https://glidejs.com/docs/events/) handlers defined and configs
  // all mustered.
  const slider = new Glide(`#${instanceName}`, sliderConfig);

  // Implement glidejs event listeners.
  // We use event listeners to clear and set class names to show/hide
  // gradients when at the start, middle or end of a slider.

  // On build.before event...
  slider.on("build.before", () => {
    // Set .slider-start for starting gradient styles.
    const gliderElement = document.querySelector(`#${instanceName}`);
    if (!gliderElement) return; // necessary. it breaks on resize
    gliderElement.classList.add("slider-start");
  });

  // On Move event...
  slider.on("move", () => {
    // Get glider top level element.
    const gliderElement = document.querySelector(`#${instanceName}`);
    if (!gliderElement) return; // necessary. it breaks on resize

    const arrowPrev = gliderElement.querySelector(`.glide__arrow--prev`);
    const arrowNext = gliderElement.querySelector(`.glide__arrow--next`);
    // Gradient-triggering classes.
    const gradientClasses = ["slider-start", "slider-mid", "slider-end"];

    // @ts-ignore
    const currentIndendx = slider.index;

    // Set/clear classes for gradients.
    if (currentIndendx == 0) {
      // START SLIDE.
      // Gradient for start.
      gliderElement.classList.remove(...gradientClasses);
      gliderElement.classList.add("slider-start");
      // Enable/disable prev/next styles. Glide takes care of actual disable.
      arrowPrev.classList.add("glide__arrow--disabled");
      arrowNext.classList.remove("glide__arrow--disabled");
    } else if (currentIndendx >= buttonCount - 1) {
      // MIDDLE SLIDES.
      // Gradient for end.
      gliderElement.classList.remove(...gradientClasses);
      gliderElement.classList.add("slider-end");
      // Enable/disable prev/next styles. Glide takes care of actual disable.
      arrowPrev.classList.remove("glide__arrow--disabled");
      arrowNext.classList.add("glide__arrow--disabled");
    } else {
      // LAST SLIDE.
      // Gradient for middle.
      gliderElement.classList.remove(...gradientClasses);
      gliderElement.classList.add("slider-mid");
      // Enable/disable prev/next styles. Glide takes care of actual disable.
      arrowPrev.classList.remove("glide__arrow--disabled");
      arrowNext.classList.remove("glide__arrow--disabled");
    }
  });

  slider.on("move.after", () => {
    const gliderElement = document.querySelector(`#${instanceName}`);
    if (!gliderElement) return; // necessary. it breaks on resize
    // @ts-ignore
    const { index } = slider;
    gliderElement.setAttribute("data-current-index", index+1);
    onItemClick && onItemClick(index);
  });

  // On Resize event...
  /* TODO Leverage this event to recalculate and updating number of bullets.
     * See notes about this above.
    slider.on("resize", function () {
      // Get Original viewport width
      let vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      console.log("VW on resize", vw);
      if (vw < 768) {
        // Value for sm breakpoint
        console.log("VW sm", vw);
      } else if (vw < 992) {
        // Value for md breakpoint
        console.log("VW md", vw);
      } else {
        // Value for lg breakpoint
        console.log("VW lg", vw);
      }
    });
    */

  slider.mount();
  return slider;
}

export { setupCaroarousel };
