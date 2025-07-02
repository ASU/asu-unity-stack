import { adjustShrinkingElementIfAboveViewport } from "@shared";

import { EventHandler } from "./bootstrap-helper";

function initCollapse() {
  function accordionClick({target}) {
    const targetHref = target.getAttribute("href");
    if (target.getAttribute("data-bs-toggle") !== "collapse" || !targetHref || !targetHref.includes("#")) {
      return; // Exit the function - not a collapse link
    }

    /**
     * Find the first accordion that is currently collapsing or expanding
     * Function will determine if scroll adjustment is needed
     */
    adjustShrinkingElementIfAboveViewport(document.querySelector(".collapsing"));
  }
  EventHandler.on(document, "click.uds.collapse", accordionClick);
}

EventHandler.on(window, "load.uds.collapse", initCollapse);

export { initCollapse };
