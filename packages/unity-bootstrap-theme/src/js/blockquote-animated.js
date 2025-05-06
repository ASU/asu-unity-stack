import { EventHandler } from "./bootstrap-helper";

function initBlockquoteAnimation () {
    // Find all marks with a class starting with pen-
    const markers = document.querySelectorAll('mark[class^="pen-"]');

    // Create an IntersectionObserver and add it to each marker
    // When the marker is in view, add the animate-bg-in-scroll class
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-bg-in-scroll");
          } else {
            entry.target.classList.remove("animate-bg-in-scroll");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    // Observe each marker
    markers.forEach((mark) => {
      observer.observe(mark);
    });
}

EventHandler.on(window, 'load.uds.blockquote-animation', initBlockquoteAnimation);

export { initBlockquoteAnimation };
