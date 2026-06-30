import { EventHandler } from "./bootstrap-helper";

const initGlobalHeader = () => {
  // Scroll state
  const handleWindowScroll = () => {
    const headerEl = document.getElementById("asu-header");
    const curPos = window.scrollY;
    curPos > headerEl?.getBoundingClientRect().top
      ? headerEl?.classList.add("scrolled")
      : headerEl?.classList.remove("scrolled");
  };

  EventHandler.on(window, "scroll.uds.header", handleWindowScroll);

  // Search toggle (v2 header only)
  const searchButtons = document.querySelectorAll(
    ".uds-header-v2 .header-top-search .search-button"
  );
  searchButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const form = btn.closest(".header-top-search");
      if (form) {
        form.classList.add("open");
        const input = form.querySelector(".search-input");
        if (input) input.focus();
      }
    });
  });

  // Mobile search: toggle submit button visibility based on input value
  document
    .querySelectorAll(".uds-header-v2 .navbar-mobile-search input[type=search]")
    .forEach(input => {
      input.addEventListener("input", () => {
        const form = input.closest(".navbar-mobile-search");
        if (form) {
          if (input.value.length > 0) {
            form.classList.add("has-value");
          } else {
            form.classList.remove("has-value");
          }
        }
      });
    });

  // Close search on blur if empty (v2 header only)
  document
    .querySelectorAll(".uds-header-v2 .header-top-search .search-input")
    .forEach(input => {
      input.addEventListener("blur", () => {
        if (!input.value) {
          const form = input.closest(".header-top-search");
          if (form) {
            // Small delay to allow submit button click to register
            setTimeout(() => form.classList.remove("open"), 200);
          }
        }
      });
    });
};

window.initGlobalHeader = window.initGlobalHeader || initGlobalHeader;

/* Function must be initialized after document load
 * Example:
 *   window.initGlobalHeader();
 */

EventHandler.on(window, "load.uds.global-header", initGlobalHeader);

export { initGlobalHeader };
