// @ts-check
/**
 * This methos dispatches a DOMContentLoaded event.
 * It helps the story to refresh the slider.
 */
function dispatchDOMContentLoaded() {
  setTimeout(() => {
    document.dispatchEvent(new Event("DOMContentLoaded"));
  }, 5000);
}

export { dispatchDOMContentLoaded };
