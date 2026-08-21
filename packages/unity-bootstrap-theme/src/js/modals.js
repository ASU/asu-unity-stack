import { EventHandler } from "./bootstrap-helper";

function initModals() {
  const modal = document.getElementById("uds-modal");
  const modalBackdrop = document.getElementById("uds-modal-backdrop");
  const openModalButton = document.getElementById("openModalButton");
  const closeModalButton = document.getElementById("closeModalButton");
  const firstFocusable = modal.querySelector(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  let previousFocus = null;
  function focusTrap(e) {
    // If relatedTarget is outside, move focus back inside
    if (!modal.contains(e.relatedTarget)) {
      firstFocusable?.focus();
    }
  }

  function openModal() {
    // When opening: save current focus and move into modal
    previousFocus = document.activeElement;
    modal.classList.add("open");
    modalBackdrop.classList.add("open");
    // attach event listeners to trap focus and close modal
    modalBackdrop.addEventListener("focusout", focusTrap);
    modalBackdrop.addEventListener("click", closeModal, true);
    document.addEventListener("keydown", closeModal);

    // Focus the first interactive element inside (or body if none)
    setTimeout(() => {
      firstFocusable?.focus();
    }, 200);
  }

  function closeModal({ type, target, key } = {}) {
    if (
      // escape key pressed
      (type === "keydown" && key === "Escape") ||
      // click on close button
      (type === "click" && target === closeModalButton) ||
      // click on backdrop
      (type === "click" && target === modalBackdrop)
    ) {
      modal.classList.remove("open");
      modalBackdrop.classList.remove("open");
      modalBackdrop.removeEventListener("focusout", focusTrap);
      modalBackdrop.removeEventListener("click", closeModal, true);
      document.removeEventListener("keydown", closeModal);
      // When closing: restore original focus
      previousFocus?.focus();
    }
  }
  openModalButton.addEventListener("click", openModal);
}

EventHandler.on(window, "load.uds.modals", initModals);

export { initModals };
