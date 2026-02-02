// @ts-check
import { EventHandler } from "./bootstrap-helper";
import { throttle } from "@asu/shared";

/**
 * Initializes the anchor menu functionality.
 *
 * @param {Object} [options] - Configuration options
 * @param {boolean} [options.ignoreReactCheck] - If true, bypasses the check for React/Styled Components
 * @returns {function} Cleanup function to remove event listeners
 */
function initAnchorMenu(options = { ignoreReactCheck: false }) {
  const HEADER_IDS = ["asu-header", "asuHeader", "headerContainer"];
  const SCROLL_DELAY = 100;

  const globalHeaderId = HEADER_IDS.find(id => document.getElementById(id));
  const globalHeader = document.getElementById(globalHeaderId);
  const navbar = document.getElementById("uds-anchor-menu");

  // Check if this is the React version (Styled Components) to exclude react version
  // Styled components generate classes starting with "sc-"
  if (
    !options.ignoreReactCheck &&
    navbar &&
    Array.from(navbar.classList).some(cls => cls.startsWith("sc-"))
  ) {
    return () => {};
  }

  if (!navbar) {
    console.warn(
      "Anchor menu initialization failed: required elements not found"
    );
    return () => {};
  }

  const navbarOriginalParent = navbar.parentNode;
  const navbarOriginalNextSibling = navbar.nextSibling;

  const anchors = Array.from(navbar.getElementsByClassName("nav-link"));
  const anchorTargets = new Map();
  let previousScrollPosition = window.scrollY;
  let isNavbarAttached = false;

  // These values are for optionally present Drupal admin toolbars. They
  // are not present in Storybook and not required in implementations.
  const toolbarBarHeight =
    document.getElementById("toolbar-bar")?.offsetHeight || 0;
  const toolbarItemAdministrationTrayHeight =
    document.getElementById("toolbar-item-administration-tray")?.offsetHeight ||
    0;

  const combinedToolbarHeightOffset =
    toolbarBarHeight + toolbarItemAdministrationTrayHeight;
  const navbarInitialTop =
    navbar.getBoundingClientRect().top +
    window.scrollY -
    combinedToolbarHeightOffset;

  for (let anchor of anchors) {
    const href = anchor.getAttribute("href");
    if (!href || !href.startsWith("#")) {
      continue;
    }
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      anchorTargets.set(anchor, target);
    } else {
      console.warn(`Anchor menu: target element "${targetId}" not found`);
    }
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
   * @param {HTMLElement} el The element to calculate the visible percentage for.
   * @param {number} depth Recursion depth counter to prevent infinite loops.
   * @return {number} The percentage of the element that is visible in the viewport.
   */
  function calculateVisiblePercentage(el, depth = 0) {
    if (!el || depth > 10) {
      return 0;
    }
    if (!(el instanceof HTMLElement)) {
      return 0;
    }
    if (el.offsetHeight === 0 || el.offsetWidth === 0) {
      return calculateVisiblePercentage(el.parentElement, depth + 1);
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
    anchors.forEach(anchor => {
      const target = anchorTargets.get(anchor);
      if (!target) {
        return;
      }

      const visiblePercentage = calculateVisiblePercentage(target);
      if (visiblePercentage > 0 && visiblePercentage > maxVisibility) {
        maxVisibility = visiblePercentage;
        mostVisibleElementId = target.id;
      }
    });

    // Update active class if we found a visible element
    if (mostVisibleElementId) {
      const activeAnchor = document.querySelector(
        '[href="#' + mostVisibleElementId + '"]'
      );
      if (activeAnchor) {
        activeAnchor.classList.add("active");
        activeAnchor.setAttribute("aria-current", "location");
      }

      // Remove active class from all other nav links in the navbar
      navbar
        .querySelectorAll(
          'a.nav-link:not([href="#' + mostVisibleElementId + '"])'
        )
        .forEach(function (e) {
          e.classList.remove("active");
          e.removeAttribute("aria-current");
        });
    }

    // Handle navbar attachment/detachment
    const navbarY = navbar.getBoundingClientRect().top;
    const headerBottom = globalHeader
      ? globalHeader.getBoundingClientRect().bottom
      : 0;
    const isScrollingDown = window.scrollY > previousScrollPosition;

    // If scrolling DOWN and the bottom of globalHeader touches or overlaps the top of navbar
    if (isScrollingDown) {
      if (globalHeader) {
        if (headerBottom >= navbarY && !isNavbarAttached) {
          // Attach navbar to globalHeader
          globalHeader.appendChild(navbar);
          isNavbarAttached = true;
          navbar.classList.add("uds-anchor-menu-attached");
        }
      } else {
        if (window.scrollY >= navbarInitialTop && !isNavbarAttached) {
          // Attach fixed to body
          document.body.appendChild(navbar);
          navbar.style.position = "fixed";
          navbar.style.top = combinedToolbarHeightOffset + "px";
          navbar.style.width = "100%";
          navbar.style.zIndex = "1000";
          isNavbarAttached = true;
          navbar.classList.add("uds-anchor-menu-attached");
        }
      }
    }

    // If scrolling UP and the header bottom no longer overlaps with the navbar
    if (!isScrollingDown && isNavbarAttached) {
      // Only detach if we're back to the initial navbar position or if header no longer overlaps navbar
      let shouldDetach = false;

      if (globalHeader) {
        const currentHeaderBottom = globalHeader.getBoundingClientRect().bottom;
        const navbarCurrentTop = navbar.getBoundingClientRect().top;
        if (
          window.scrollY <= navbarInitialTop ||
          currentHeaderBottom < navbarCurrentTop
        ) {
          shouldDetach = true;
        }
      } else {
        if (window.scrollY <= navbarInitialTop) {
          shouldDetach = true;
        }
      }

      if (shouldDetach) {
        navbarOriginalParent.insertBefore(navbar, navbarOriginalNextSibling);
        if (!globalHeader) {
          // Reset styles
          navbar.style.position = "";
          navbar.style.top = "";
          navbar.style.width = "";
          navbar.style.zIndex = "";
        }
        isNavbarAttached = false;
        navbar.classList.remove("uds-anchor-menu-attached");
      }
    }

    previousScrollPosition = window.scrollY;
  };

  let throttledScrollHandler;
  const createThrottledHandler = () => {
    let isThrottled = false;
    return () => {
      if (isThrottled) return;
      isThrottled = true;
      scrollHandlerLogic();
      setTimeout(() => {
        isThrottled = false;
      }, SCROLL_DELAY);
    };
  };

  throttledScrollHandler = createThrottledHandler();

  window.addEventListener("scroll", throttledScrollHandler, { passive: true });

  // Set click event handlers for all valid anchors
  // Only anchors with valid targets were added to anchorTargets Map
  for (let [anchor, anchorTarget] of anchorTargets) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const hash = anchor.getAttribute("href");
      history?.pushState
        ? history.pushState(null, "", hash)
        : (window.location.hash = hash);

      if (!anchorTarget || !document.body.contains(anchorTarget)) {
        console.warn("Anchor target no longer exists in DOM");
        return;
      }

      anchorTarget.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Focus the target element to ensure correct tab order after navigation
      anchorTarget.setAttribute("tabindex", "-1");
      anchorTarget.focus({ preventScroll: true });

      // Remove active class from other anchor in navbar, and add it to the clicked anchor
      const active = navbar.querySelector(".nav-link.active");

      if (active) {
        active.classList.remove("active");
        active.removeAttribute("aria-current");
      }

      // @ts-ignore
      e.target.classList.add("active");
      // @ts-ignore
      e.target.setAttribute("aria-current", "location");
    });
  }

  // Cleanup function
  return () => {
    window.removeEventListener("scroll", throttledScrollHandler);
    if (isNavbarAttached && navbarOriginalParent) {
      navbarOriginalParent.insertBefore(navbar, navbarOriginalNextSibling);
    }
  };
}

EventHandler.on(window, "load.uds.anchor-menu", initAnchorMenu);

export { initAnchorMenu };
