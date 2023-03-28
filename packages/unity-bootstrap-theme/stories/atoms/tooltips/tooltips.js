export const initTooltip = () => {
  "use strict";

  const DOM_ELEMENT_BUTTON = "button.uds-tooltip";
  const EVENT_CLICK = "click";

  const buttons = document.querySelectorAll(DOM_ELEMENT_BUTTON);
  let element;

  buttons.forEach($button => {
    $button.addEventListener(EVENT_CLICK, e => {
      if (element && element === document.activeElement) {
        element.blur();
      }
      element = element
        ? undefined
        : document.querySelector(
            `button[aria-describedby="${e.currentTarget.getAttribute(
              "aria-describedby"
            )}"]`
          );
      if (element && element !== document.activeElement) {
        element.focus();
      }
    });
  });
};
