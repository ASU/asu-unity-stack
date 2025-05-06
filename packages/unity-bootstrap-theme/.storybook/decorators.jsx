import { useEffect } from "react";

export const windowLoadEvent = (storyFn) => {
  const mount = () => {
    // console.log("sb mounting");

    // custom events created by eventSpy.js to allow storybook to dispatch load events after the page is loaded
    document.dispatchEvent(new Event("sb_DOMContentLoaded"));
    window.dispatchEvent(new Event('sb_load'));
  }

  const unmount = () => {
    // console.log("sb unmounting");

    // bootstrap script has functionality initiated with window load event,
    // so we need to reload the page every time we unmount the story.
    // We set the opacity to 0 to avoid flickering.
    document.body.style.opacity = "0";

    // variable to prevent calling mount function before the page is reloaded
    window.unloading = true;
    window.location.reload();
  }

  useEffect(() => {
    if (!window.unloading) {
      mount()
    }
    return unmount
  }, []);

  return storyFn();
}
