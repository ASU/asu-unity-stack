// @ts-check
import { EventHandler } from "./bootstrap-helper";

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

  const navbarOriginalParent = navbar.parentNode;
  const navbarOriginalNextSibling = navbar.nextSibling;

  const anchors = Array.from(navbar.getElementsByClassName("nav-link"));
  const anchorTargets = new Map();
  let previousScrollPosition = window.scrollY;
  let isNavbarAttached = false;

  const navbarInitialTop = navbar.getBoundingClientRect().top + window.scrollY;

  // Cache toolbar elements
  const toolbarBar = document.getElementById("toolbar-bar");
  const toolbarTray = document.getElementById("toolbar-item-administration-tray");

  /**
   * Determines scroll-margin-top based on header and toolbar presence.
   * @returns {string} Scroll margin value in rem
   */
  function getScrollMargin() {
    const hasToolbar = toolbarBar || toolbarTray;
    const hasHeader = !!globalHeader;

    if (hasHeader && hasToolbar) {
      return "10rem";
    } else if (hasHeader && !hasToolbar) {
      return "4rem";
    } else {
      return "2rem";
    }
  }

  /**
   * Updates scroll-margin-top on all anchor targets.
   */
  function updateScrollMargins() {
    const margin = getScrollMargin();
    anchorTargets.forEach(target => {
      target.style.scrollMarginTop = margin;
    });
  }

  /**
   * Gets the toolbar offset for fixed positioning.
   * @returns {number} Offset in pixels
   */
  function getToolbarOffset() {
    return (toolbarBar?.offsetHeight || 0) + (toolbarTray?.offsetHeight || 0);
  }

  /**
   * Attaches the navbar to the global header or body.
   */
  function attachNavbar() {
    if (isNavbarAttached) return;

    if (globalHeader) {
      globalHeader.appendChild(navbar);
    } else {
      document.body.appendChild(navbar);
      navbar.style.position = "fixed";
      navbar.style.top = `${getToolbarOffset()}px`;
      navbar.style.width = "100%";
      navbar.style.zIndex = "1000";
    }

    isNavbarAttached = true;
    navbar.classList.add("uds-anchor-menu-attached");
    updateScrollMargins();
  }

  /**
   * Detaches the navbar and returns it to its original position.
   */
  function detachNavbar() {
    if (!isNavbarAttached) return;

    navbarOriginalParent.insertBefore(navbar, navbarOriginalNextSibling);

    if (!globalHeader) {
      navbar.style.position = "";
      navbar.style.top = "";
      navbar.style.width = "";
      navbar.style.zIndex = "";
    }

    isNavbarAttached = false;
    navbar.classList.remove("uds-anchor-menu-attached");
    updateScrollMargins();
  }

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

  // Set initial scroll margins
  updateScrollMargins();

  // Attach navbar on load if already scrolled past initial position
  if (window.scrollY > navbarInitialTop) {
    attachNavbar();
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
    // Handle active anchor highlighting
    let maxVisibility = 0;
    let mostVisibleElementId = null;

    // Find the element with highest visibility
    anchors.forEach(anchor => {
      const target = anchorTargets.get(anchor);
      if (!target) return;

      const visiblePercentage = calculateVisiblePercentage(target);
      if (visiblePercentage > 0 && visiblePercentage > maxVisibility) {
        maxVisibility = visiblePercentage;
        mostVisibleElementId = target.id;
      }
    });

    // Update active class if we found a visible element
    if (mostVisibleElementId) {
      const activeAnchor = navbar.querySelector(`[href="#${mostVisibleElementId}"]`);
      if (activeAnchor) {
        activeAnchor.classList.add("active");
        activeAnchor.setAttribute("aria-current", "location");
      }

      // Remove active class from all other nav links
      navbar
        .querySelectorAll(`a.nav-link:not([href="#${mostVisibleElementId}"])`)
        .forEach(link => {
          link.classList.remove("active");
          link.removeAttribute("aria-current");
        });
    }

    // Handle navbar attachment/detachment
    const isScrollingDown = window.scrollY > previousScrollPosition;

    if (isScrollingDown && !isNavbarAttached) {
      const shouldAttach = globalHeader
        ? globalHeader.getBoundingClientRect().bottom >= navbar.getBoundingClientRect().top
        : window.scrollY >= navbarInitialTop;

      if (shouldAttach) {
        attachNavbar();
      }
    } else if (!isScrollingDown && isNavbarAttached) {
      const shouldDetach = globalHeader
        ? window.scrollY <= navbarInitialTop ||
          globalHeader.getBoundingClientRect().bottom < navbar.getBoundingClientRect().top
        : window.scrollY <= navbarInitialTop;

      if (shouldDetach) {
        detachNavbar();
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

  // Update scroll margins on resize (handles zoom and font-size changes)
  let resizeTimeout;
  const handleResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      updateScrollMargins();
    }, 150);
  };
  window.addEventListener("resize", handleResize, { passive: true });

  // Set click event handlers for all valid anchors
  for (let [anchor, anchorTarget] of anchorTargets) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const hash = anchor.getAttribute("href");

      // Update URL hash
      history?.pushState
        ? history.pushState(null, "", hash)
        : (window.location.hash = hash);

      if (!anchorTarget || !document.body.contains(anchorTarget)) {
        console.warn("Anchor target no longer exists in DOM");
        return;
      }

      // scrollIntoView now respects scroll-margin-top
      anchorTarget.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Focus for accessibility and correct tab order
      anchorTarget.setAttribute("tabindex", "-1");
      anchorTarget.focus({ preventScroll: true });

      // Update active states
      navbar.querySelectorAll(".nav-link.active").forEach(link => {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
      });

      e.target.classList.add("active");
      e.target.setAttribute("aria-current", "location");
    });
  }

  // Cleanup function
  return () => {
    window.removeEventListener("scroll", throttledScrollHandler);
    window.removeEventListener("resize", handleResize);
    clearTimeout(resizeTimeout);
    if (isNavbarAttached && navbarOriginalParent) {
      detachNavbar();
    }
    // Reset scroll margins
    anchorTargets.forEach(target => {
      target.style.scrollMarginTop = "";
    });
  };
}

EventHandler.on(window, "load.uds.anchor-menu", initAnchorMenu);

export { initAnchorMenu };
