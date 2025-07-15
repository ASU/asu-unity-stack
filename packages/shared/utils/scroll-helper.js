// @ts-check
export function adjustShrinkingElementIfAboveViewport(element) {
  if (element && typeof element.getBoundingClientRect === "function") {
    const { bottom: inViewportHeight, top } = element.getBoundingClientRect();
    const { offsetTop } = element;
    if (top < 0 && inViewportHeight > 0) {
      const savedStyle = element.style;
      element.style = `${savedStyle};transition: height 0s !important; overflow:hidden; height:${inViewportHeight}px!important;max-height:${inViewportHeight}px!important`;
      window.scrollTo({ behavior: "instant", top: offsetTop });
      setTimeout(() => {
        element.style = savedStyle;
        window.scrollTo({
          behavior: "smooth",
          top: element.offsetTop - inViewportHeight / 2,
        });
      }, 50);
    }
  }
}
