import { EventHandler } from "./bootstrap-helper";

function initKeyEvents() {
  const activeKeys = new Set();

  function handleKeyEvents(e) {
    activeKeys.add(e.key);
    if (activeKeys.has("Escape") && activeKeys.size === 1) {
      document.activeElement.blur();
    }
  }

  document.addEventListener("keydown", handleKeyEvents);
  document.addEventListener("keyup", e => activeKeys.delete(e.key));
  window.addEventListener("blur", () => activeKeys.clear());
}

EventHandler.on(window, "load.uds.keys", initKeyEvents);

export { initKeyEvents };
