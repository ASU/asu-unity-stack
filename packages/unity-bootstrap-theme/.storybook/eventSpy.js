var originalAddEventListener = EventTarget.prototype.addEventListener;
EventTarget.prototype.addEventListener = function (type, listener, options) {
  if(listener.uidEvent && (type === "load" || type === "DOMContentLoaded")) {
  /**
   * Used by storybook windowLoadEvent decorator
   * creates custom events sb_load and sb_DOMContentLoaded
   * to allow storybook to dispatch load events after the page is loaded
   *  */
    originalAddEventListener.call(this, `sb_${type}`, listener, options);
  }

  originalAddEventListener.call(this, type, listener, options);
};
