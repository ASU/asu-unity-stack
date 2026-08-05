import { EventHandler } from "./bootstrap-helper";

function openModal() {
  document.getElementById("uds-modal")?.classList.add("open");
  let closeModalButton = document.getElementById("closeModalButton");
  setTimeout(() => {
    if (closeModalButton) {
      // Wait for dom to update before setting focus
      closeModalButton?.focus();
    }
  }, 200);

  // const mainContent = document.getElementById("main-content");
  // mainContent.setAttribute("inert", "");
  // const mainContentChildren = mainContent.children;
  // let mainContentChildrenArray = Array.from(mainContentChildren);
  // for (let i = 0; i < mainContentChildrenArray.length; i++) {
  //   mainContentChildrenArray[i].setAttribute("inert", "");
  // }

  // Disable navigation to everything accept for the modal content
  // Source: https://stackoverflow.com/questions/4195616/how-to-set-the-focus-on-a-javascript-modal-window
  const focusableElements =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const modal = document.getElementsByClassName("uds-modal-container")[0];
  const firstFocusableElement = modal?.querySelectorAll(focusableElements)[0];
  const focusableContent = modal?.querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent
    ? focusableContent[focusableContent?.length - 1]
    : undefined;

  const handleTabKey = e => {
    let isTabPressed = e.key === "Tab"; // || e.keyCode === 9;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement?.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    } else {
      // if tab key is pressed
      if (document.activeElement === lastFocusableElement) {
        // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement?.focus(); // add focus for the first focusable element
        e.preventDefault();
      }
    }
  };

  if (lastFocusableElement && firstFocusableElement) {
    document.addEventListener("keydown", handleTabKey);
    // firstFocusableElement?.focus();
    return () => document.removeEventListener("keydown", handleTabKey);
  }
}

function closeModal() {
  document.getElementById("uds-modal").classList.remove("open");

  let openModalButton = document.getElementById("openModalButton");
  setTimeout(() => {
    if (openModalButton) {
      // Wait for dom to update before setting focus
      openModalButton?.focus();
    }
  }, 200);

  // const mainContent = document.getElementById("main-content");
  // mainContent?.removeAttribute("inert");
  // const mainContentChildren = mainContent.children;
  // let mainContentChildrenArray = Array.from(mainContentChildren);
  // for (let i = 0; i < mainContentChildrenArray.length; i++) {
  //   mainContentChildrenArray[i].removeAttribute("inert");
  // }
}

function initModals() {
  document
    .getElementById("openModalButton")
    ?.addEventListener("click", function () {
      openModal();
    });

  document
    .getElementById("closeModalButton")
    ?.addEventListener("click", function () {
      closeModal();
    });

  document?.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}

EventHandler.on(window, "load.uds.modals", initModals);

export { initModals };
