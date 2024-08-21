// @ts-check

/**
 *
 *  Calculate number of buttons to show so we don't advance past perView.
 *  TODO Limtation: this does not recalc if the screen is resized and the
 *  perView adapts. In that case Prev/next buttons or swipe may need to be
 *  used to see all slides. Leverage GlideJS resize event?
 *  See docs: https://glidejs.com/docs/events/
 *  The resize event is implemented further down and commented out until a
 *  solid strategy for updating the buttons is in place.
 * @param {number} itemCount
 * @param {number} perView
 * @returns {number}
 */
function calcualteViewItems(itemCount, perView) {
  let buttonCount;

  // Get Original viewport width so we can set buttonCount.
  // Note: buttonCount is not adaptive at this time, per comment above.
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  buttonCount = itemCount;
  if (vw >= 992) {
    // Value for lg breakpoint
    if (perView >= 2) {
      buttonCount = itemCount - 1;
    }
    if (perView >= 3) {
      buttonCount = itemCount - 2;
    }
  }

  return buttonCount;
}

export { calcualteViewItems };
