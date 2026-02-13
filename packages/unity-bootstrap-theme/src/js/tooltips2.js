import { EventHandler } from "./bootstrap-helper";

// WeakMap for better garbage collection
const tooltipInstances = new WeakMap();
const t2 = [];
let isInitialized = false;
window.tooltipInstances = tooltipInstances; // Expose for debugging
window.t2 = t2; // Expose for debugging

function getOrCreateTooltipInstance(triggerEl, contentEl) {
  if (!tooltipInstances.has(triggerEl)) {
    const popperInstance = new bootstrap.Popover(triggerEl, contentEl, {
      placement: "right",
      modifiers: [
        {
          name: "flip",
          options: {
            fallbackPlacements: ["bottom", "left"],
          },
        },
        {
          name: "offset",
          options: {
            offset: [0, 8],
          },
        },
      ],
    });
    console.log("Creating tooltip instance for:", triggerEl, popperInstance);
    tooltipInstances.set(triggerEl, popperInstance);
    t2.push(popperInstance);
  }
  return tooltipInstances.get(triggerEl);
}

function showTooltip(triggerEl) {
  const contentEl = triggerEl.nextElementSibling;
  if (
    !contentEl ||
    !contentEl.hasAttribute("role") ||
    contentEl.getAttribute("role") !== "tooltip"
  ) {
    return;
  }

  const popperInstance = getOrCreateTooltipInstance(triggerEl);
  triggerEl.setAttribute("aria-expanded", "true");
  console.log(popperInstance);
  popperInstance.setOptions &&
    popperInstance.setOptions(options => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: "eventListeners", enabled: true },
      ],
    }));

  // Update position after showing
  popperInstance.update();
}

function hideTooltip(triggerEl) {
  triggerEl.setAttribute("aria-expanded", "false");

  // Disable the event listeners
  if (!getOrCreateTooltipInstance(triggerEl).setOptions) return;
  getOrCreateTooltipInstance(triggerEl).setOptions(options => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: "eventListeners", enabled: false },
    ],
  }));
}

function tryGetTriggerElement(element) {
  return element.closest ? element.closest(".uds-tooltip") : element;
}

function isTooltipTrigger(element) {
  return (
    element?.classList?.contains("uds-tooltip") &&
    element.nextElementSibling?.getAttribute("role") === "tooltip"
  );
}

// Event delegation handlers
function handleShowEvent(event) {
  const triggerEl = tryGetTriggerElement(event.target);
  if (!isTooltipTrigger(triggerEl)) return;

  // Handle specific event conditions
  if (event.type === "keypress") {
    if (!(event.charCode === 32 || event.key === "Enter")) return;
  }

  showTooltip(triggerEl);
}

function handleHideEvent(event) {
  const triggerEl = tryGetTriggerElement(event.target);
  if (!isTooltipTrigger(triggerEl)) return;

  // Handle specific event conditions
  if (event.type === "mouseleave") {
    if (triggerEl === document.activeElement) return;
  }

  if (event.target !== triggerEl) return;
  hideTooltip(triggerEl);
}

function handleEscapeKey(event) {
  if (event.key === "Escape") {
    const triggerEl = tryGetTriggerElement(event.target);
    if (!isTooltipTrigger(triggerEl)) return;
    hideTooltip(triggerEl);
  }
}

function initTooltips() {
  if (isInitialized) return;

  // Check if tooltips exist before setting up listeners
  const hasTooltips = document.querySelector(
    '.uds-tooltip-container .uds-tooltip + [role="tooltip"]'
  );
  if (!hasTooltips) return;

  // Event delegation - single listeners for all tooltips
  document.addEventListener("mouseenter", handleShowEvent, true);
  document.addEventListener("focus", handleShowEvent, true);
  document.addEventListener("keypress", handleShowEvent, true);

  document.addEventListener("mouseleave", handleHideEvent, true);
  document.addEventListener("blur", handleHideEvent, true);
  document.addEventListener("keydown", handleEscapeKey, true);

  isInitialized = true;
}

function destroyTooltips() {
  if (!isInitialized) return;

  // Remove event listeners
  document.removeEventListener("mouseenter", handleShowEvent, true);
  document.removeEventListener("focus", handleShowEvent, true);
  document.removeEventListener("keypress", handleShowEvent, true);
  document.removeEventListener("mouseleave", handleHideEvent, true);
  document.removeEventListener("blur", handleHideEvent, true);
  document.removeEventListener("keydown", handleEscapeKey, true);

  // Clear instances - WeakMap will handle garbage collection
  if (tooltipInstances.clear) {
    tooltipInstances.clear();
  }

  isInitialized = false;
}

EventHandler.on(window, "load.uds.tooltips", initTooltips);

export { initTooltips, destroyTooltips };
