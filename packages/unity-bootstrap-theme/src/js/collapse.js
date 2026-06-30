import { adjustShrinkingElementIfAboveViewport } from "@asu/shared";

import { EventHandler } from "./bootstrap-helper";

function initCollapse() {
  function accordionClick({ target }) {
    const targetHref = target.getAttribute("href");
    if (
      target.getAttribute("data-bs-toggle") !== "collapse" ||
      !targetHref ||
      !targetHref.includes("#")
    ) {
      return; // Exit the function - not a collapse link
    }

    /**
     * Find the first accordion that is currently collapsing or expanding
     * Function will determine if scroll adjustment is needed
     */
    adjustShrinkingElementIfAboveViewport(
      document.querySelector(".collapsing")
    );
  }

  /**
   * Accordion toggles built as `<a role="button" data-bs-toggle="collapse">`
   * (e.g. the global footer columns) activate on Enter but not on Space:
   * anchors don't fire a click on Space, so the browser scrolls the page
   * instead of toggling the accordion. Handle Space here so it matches Enter
   * and native <button> behavior, and stop the default page scroll.
   * (WCAG 2.1.1 Keyboard, 4.1.2 Name, Role, Value)
   */
  function accordionKeydown(event) {
    const { target, key } = event;

    // Only Space needs help — Enter already activates anchors natively.
    if (key !== " " && key !== "Spacebar") {
      return;
    }

    // Native <button> toggles handle Space themselves; only patch anchors.
    if (
      target.tagName !== "A" ||
      target.getAttribute("data-bs-toggle") !== "collapse"
    ) {
      return;
    }

    event.preventDefault(); // Prevent the default page scroll.
    target.click(); // Trigger Bootstrap's collapse toggle + scroll adjustment.
  }

  EventHandler.on(document, "click.uds.collapse", accordionClick);
  EventHandler.on(document, "keydown.uds.collapse", accordionKeydown);
}

EventHandler.on(window, "load.uds.collapse", initCollapse);

export { initCollapse };
