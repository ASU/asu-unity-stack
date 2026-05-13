import { EventHandler } from "./bootstrap-helper";

function initTooltips() {
  /* this value must stay in sync, found in files: */
  /* packages/unity-bootstrap-theme/src/scss/extends/_tooltips.scss */
  /* packages/unity-bootstrap-theme/src/js/tooltips.js */
  const TOOLTIP_MAX_WIDTH = 288;
  const CONTAINER_CLASS = "uds-tooltip-container";
  const CONTAINER_SELECTOR = `.${CONTAINER_CLASS}`;
  const TRIGGER_ATTR = "aria-describedby";
  const TRIGGER_SELECTOR = `[${TRIGGER_ATTR}]`;
  const CONTENT_ATTR = "role=tooltip";
  const CONTENT_SELECTOR = `[${CONTENT_ATTR}]`;

  // This query selector is not just creating a List,
  // it's also checking to ensure all 3 elements are present
  // (container, trigger, content) and in the correct order
  // (trigger immediately followed by content)
  const tooltipContentList = document.querySelectorAll(
    `${CONTAINER_SELECTOR} > ${TRIGGER_SELECTOR} + ${CONTENT_SELECTOR}`
  );

  function closeActiveTooltips() {
    const activeTooltips = document.querySelectorAll(
      `${TRIGGER_SELECTOR}[aria-expanded="true"]`
    );
    activeTooltips.forEach(activeTooltip => {
      activeTooltip.setAttribute("aria-expanded", "false");
    });
  }

  function show(e) {
    // container or trigger
    let trigger =
      e.target.querySelector(`${CONTAINER_SELECTOR} ${TRIGGER_SELECTOR}`) ||
      e.target;
    let content = trigger.nextElementSibling;

    if (e.type === "keydown") {
      if (e.key !== " ") {
        return;
      }
    }

    closeActiveTooltips();

    if (
      trigger.getBoundingClientRect().right + TOOLTIP_MAX_WIDTH >
      window.innerWidth
    ) {
      content.classList.add("bottom-placement");
    } else {
      content.classList.remove("bottom-placement");
    }
    trigger.setAttribute("aria-expanded", "true");
  }

  function hide(e) {
    // container or trigger
    let trigger =
      e.target.querySelector(`${CONTAINER_SELECTOR} ${TRIGGER_SELECTOR}`) ||
      e.target;

    if (e.type === "mouseleave") {
      if (trigger === document.activeElement) {
        return;
      }
    }
    trigger.setAttribute("aria-expanded", "false");
  }

  function keyboardHide(e) {
    if (e.key === "Escape") {
      hide(e);
    }
  }

  [...tooltipContentList].map(contentEl => {
    const controller = new AbortController();
    const { signal } = controller;
    const triggerEl = contentEl.previousElementSibling;
    const containerEl = triggerEl.parentElement;

    triggerEl.addEventListener("mouseenter", show, { signal });
    triggerEl.addEventListener("focus", show, { signal });
    triggerEl.addEventListener("keydown", show, { signal });
    triggerEl.addEventListener("blur", hide, { signal });
    triggerEl.addEventListener("keydown", keyboardHide, { signal });
    containerEl.addEventListener("mouseleave", hide, { signal });

    return controller;
  });
}

EventHandler.on(window, "load.uds.tooltips", initTooltips);

export { initTooltips };
