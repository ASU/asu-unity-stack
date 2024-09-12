function initializeBlockquoteAnimation () {
  window.addEventListener("load", () => {
    const markers = document.querySelectorAll('mark[class^="pen-"]');

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

    markers.forEach((mark) => {
      observer.observe(mark);
    });
  });
}

export { initializeBlockquoteAnimation };
