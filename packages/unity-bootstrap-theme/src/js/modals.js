import { EventHandler } from "./bootstrap-helper";

function initModals() {
  document
    .getElementById("openModalButton")
    ?.addEventListener("click", function () {
      document.getElementById("uds-modal")?.classList.add("open");
      document.getElementById("closeModalButton")?.focus();
    });

  document
    .getElementById("closeModalButton")
    ?.addEventListener("click", function () {
      document.getElementById("uds-modal").classList.remove("open");
    });

  document?.addEventListener("keydown", function (event) {
    event.key === "Escape" &&
      document.getElementById("uds-modal")?.classList.remove("open");
  });
}

EventHandler.on(window, "load.uds.modals", initModals);

export { initModals };
