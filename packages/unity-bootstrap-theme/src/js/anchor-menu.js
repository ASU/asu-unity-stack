import { EventHandler } from "./bootstrap-helper";
import { throttle } from "@asu/shared";

/**
 * Initializes the anchor menu functionality.
 *
 * @param {string} idPrefix - The prefix for the IDs of the anchor menu elements
 * @returns {void}
 */
function initAnchorMenu() {
  const HEADER_IDS = ["asu-header", "asuHeader"];
  const SCROLL_DELAY = 100;

  const globalHeaderId = HEADER_IDS.find(id => document.getElementById(id));
  const globalHeader = document.getElementById(globalHeaderId);
  const navbar = document.getElementById("uds-anchor-menu");
  const navbarOriginalParent = navbar.parentNode;
  const navbarOriginalNextSibling = navbar.nextSibling;
  const anchors = navbar.getElementsByClassName("nav-link");
  const anchorTargets = new Map();
  let previousScrollPosition = window.scrollY;
  let isNavbarAttached = false;

  // These values are for optionally present Drupal admin toolbars. They
  // are not present in Storybook and not required in implementations.
  const toolbarBarHeight =
    document.getElementById("toolbar-bar")?.toolbarBarHeight || 0;
  const toolbarItemAdministrationTrayHeight =
    document.getElementById("toolbar-item-administration-tray")?.offsetHeight ||
    0;

  const combinedToolbarHeightOffset =
    toolbarBarHeight + toolbarItemAdministrationTrayHeight;
  const navbarInitialTop =
    navbar.getBoundingClientRect().top +
    window.scrollY -
    combinedToolbarHeightOffset;

  // Cache the anchor target elements
  for (let anchor of anchors) {
    const targetId = anchor.getAttribute("href").replace("#", "");
    const target = document.getElementById(targetId);
    anchorTargets.set(anchor, target);
  }

  const shouldAttachNavbarOnLoad = window.scrollY > navbarInitialTop;
  if (shouldAttachNavbarOnLoad) {
    globalHeader.appendChild(navbar);
    isNavbarAttached = true;
    navbar.classList.add("uds-anchor-menu-attached");
  }

  /**
   * Calculates the percentage of an element that is visible in the viewport.
   *
   * @param {Element} el The element to calculate the visible percentage for.
   * @return {number} The percentage of the element that is visible in the viewport.
   */
  function calculateVisiblePercentage(el) {
    if (el.offsetHeight === 0 || el.offsetWidth === 0) {
      return calculateVisiblePercentage(el.parentElement);
    }
    const rect = el.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;

    const elHeight = rect.bottom - rect.top;
    const elWidth = rect.right - rect.left;

    const elArea = elHeight * elWidth;

    // Calculate the visible area of the element in the viewport
    const visibleHeight =
      Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
    const visibleWidth =
      Math.min(windowWidth, rect.right) - Math.max(0, rect.left);
    const visibleArea = visibleHeight * visibleWidth;

    // Calculate the percentage of the element that is visible in the viewport
    const visiblePercentage = (visibleArea / elArea) * 100;
    return visiblePercentage;
  }

  const scrollHandlerLogic = function () {
    // Custom code added for Drupal - Handle active anchor highlighting
    let maxVisibility = 0;
    let mostVisibleElementId = null;

    // Find the element with highest visibility
    Array.from(anchors).forEach(anchor => {
      let elementId = anchor.getAttribute("href").replace("#", "");
      let el = document.getElementById(elementId);
      const visiblePercentage = calculateVisiblePercentage(el);
      if (visiblePercentage > 0 && visiblePercentage > maxVisibility) {
        maxVisibility = visiblePercentage;
        mostVisibleElementId = el.id;
      }
    });

    // Update active class if we found a visible element
    if (mostVisibleElementId) {
      document
        .querySelector('[href="#' + mostVisibleElementId + '"]')
        .classList.add("active");
      navbar
        .querySelectorAll(
          `nav > a.nav-link:not([href="#` + mostVisibleElementId + '"])'
        )
        .forEach(function (e) {
          e.classList.remove("active");
        });
    }

    // Handle navbar attachment/detachment
    const navbarY = navbar.getBoundingClientRect().top;
    const headerBottom = globalHeader.getBoundingClientRect().bottom;
    const isScrollingDown = window.scrollY > previousScrollPosition;

    // If scrolling DOWN and the bottom of globalHeader touches or overlaps the top of navbar
    if (isScrollingDown && headerBottom >= navbarY) {
      if (!isNavbarAttached) {
        // Attach navbar to globalHeader
        globalHeader.appendChild(navbar);
        isNavbarAttached = true;
        navbar.classList.add("uds-anchor-menu-attached");
      }
    }

    // If scrolling UP and the header bottom no longer overlaps with the navbar
    if (!isScrollingDown && isNavbarAttached) {
      const currentHeaderBottom = globalHeader.getBoundingClientRect().bottom;
      const navbarCurrentTop = navbar.getBoundingClientRect().top;

      // Only detach if we're back to the initial navbar position or if header no longer overlaps navbar
      if (
        window.scrollY <= navbarInitialTop ||
        currentHeaderBottom < navbarCurrentTop
      ) {
        navbarOriginalParent.insertBefore(navbar, navbarOriginalNextSibling);
        isNavbarAttached = false;
        navbar.classList.remove("uds-anchor-menu-attached");
      }
    }

    previousScrollPosition = window.scrollY;
  };

  window.addEventListener("scroll", () => throttle(scrollHandlerLogic, SCROLL_DELAY), { passive: true });

  // Set click event of anchors
  for (let [anchor, anchorTarget] of anchorTargets) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      // Get current viewport height and calculate the 1/4 position so that the
      // top of section is visible when you click on the anchor.
      const viewportHeight = window.innerHeight;
      const targetQuarterPosition = Math.round(viewportHeight * 0.25);

      const targetAbsoluteTop =
        anchorTarget.getBoundingClientRect().top + window.scrollY;

      let scrollToPosition = targetAbsoluteTop - targetQuarterPosition;

      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });

      // Remove active class from other anchor in navbar, and add it to the clicked anchor
      const active = navbar.querySelector(".nav-link.active");

      if (active) {
        active.classList.remove("active");
      }

      e.target.classList.add("active");
    });
  }
}

EventHandler.on(window, "load.uds.anchor-menu", initAnchorMenu);

export { initAnchorMenu };
