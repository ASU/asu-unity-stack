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
  if (!navbar || !globalHeader) {
    return;
  }
  if (Array.from(navbar.classList).some(cls => cls.startsWith("sc-"))) {
    return;
  }

  const anchors = Array.from(navbar.getElementsByClassName("nav-link"));
  const anchorTargets = new Map();
  let isNavbarAttached = false;

  // Bottom of the (fixed) global header in the viewport — where the menu
  // should pin so it sits directly below the header instead of under it.
  const getHeaderBottomOffset = () =>
    Math.max(globalHeader.getBoundingClientRect().bottom, 0);

  // Attach/detach WITHOUT moving the node in the DOM, so keyboard tab order
  // is preserved (WCAG 2.1.1 Keyboard, 2.4.3 Focus Order). Mirrors the
  // unity-react-core AnchorMenu, which fixes the menu in place via
  // --uds-anchor-menu-top instead of relocating it into the header.
  const attachNavbar = () => {
    navbar.style.setProperty(
      "--uds-anchor-menu-top",
      getHeaderBottomOffset() + "px"
    );
    navbar.classList.add("uds-anchor-menu-attached");
    isNavbarAttached = true;
  };

  const detachNavbar = () => {
    navbar.classList.remove("uds-anchor-menu-attached");
    navbar.style.removeProperty("--uds-anchor-menu-top");
    isNavbarAttached = false;
  };

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
    }
  }

  // Attach when the menu's original top has scrolled under the header bottom.
  const shouldAttachNavbarOnLoad =
    window.scrollY >= navbarInitialTop - getHeaderBottomOffset();
  if (shouldAttachNavbarOnLoad) {
    attachNavbar();
  }

  /**
   * Calculates the percentage of an element that is visible in the viewport.
   *
   * @param {Element} el The element to calculate the visible percentage for.
   * @param {number} depth Recursion depth counter to prevent infinite loops.
   * @return {number} The percentage of the element that is visible in the viewport.
   */
  function calculateVisiblePercentage(el, depth = 0) {
    if (!el || depth > 10) {
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
      }

      // Remove active class from all other nav links in the navbar
      navbar
        .querySelectorAll(
          'a.nav-link:not([href="#' + mostVisibleElementId + '"])'
        )
        .forEach(function (e) {
          e.classList.remove("active");
        });
    }

    // Handle navbar attachment/detachment.
    // Use the stored original offset (navbarInitialTop) rather than the live
    // rect, because once attached the menu is position:fixed and its rect no
    // longer reflects its document position.
    const attachThreshold = navbarInitialTop - getHeaderBottomOffset();

    if (!isNavbarAttached && window.scrollY >= attachThreshold) {
      attachNavbar();
    } else if (isNavbarAttached && window.scrollY < attachThreshold) {
      detachNavbar();
    } else if (isNavbarAttached) {
      // Header height can change while scrolled (responsive/shrinking header);
      // keep the pinned offset in sync.
      navbar.style.setProperty(
        "--uds-anchor-menu-top",
        getHeaderBottomOffset() + "px"
      );
    }
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

      if (!anchorTarget || !document.body.contains(anchorTarget)) {
        console.warn("Anchor target no longer exists in DOM"); // This should be rare but if the target element has been removed from the DOM, this will make debuggin easier in webspark sites
        return;
      }

      // For the first anchor item, skip scrolling if the section top is
      // already clearly visible in the viewport (above the midpoint).
      const isFirstAnchor = anchor === anchors[0];
      if (isFirstAnchor) {
        const headerBottom = globalHeader.getBoundingClientRect().bottom;
        const navbarHeight = navbar.offsetHeight;
        const topOffset = headerBottom + navbarHeight;
        const targetTop = anchorTarget.getBoundingClientRect().top;
        const viewportMid = window.innerHeight / 2;

        if (targetTop >= topOffset && targetTop <= viewportMid) {
          history.replaceState(null, "", anchor.getAttribute("href"));
          moveFocusToTarget(anchorTarget);
          return;
        }
      }

      const viewportHeight = window.innerHeight;
      const targetQuarterPosition = Math.round(viewportHeight * 0.35); // 35% was determined to be a good position for the section top after testing different offsets, including centering the section in the viewport. Can work in wordpress or any other platform where there are admin toolbars

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

      const targetHash = anchor.getAttribute("href");
      if (targetHash) {
        history.replaceState(null, "", targetHash);
      }

      // Move focus to the target section so keyboard users can Tab
      // into its content (WCAG 2.4.3 Focus Order).
      moveFocusToTarget(anchorTarget);
    });
  }

  /**
   * Moves keyboard focus to the anchor target section.
   * Adds tabindex="-1" if needed so the element is programmatically
   * focusable without entering the natural tab order.
   *
   * fixes
   * WCAG 2.4.3 Focus Order (Level A) — focus sequence doesn't match visual/logical order
   * WCAG 2.1.1 Keyboard (Level A) — functionality isn't fully keyboard operable
   */
  function moveFocusToTarget(target) {
    if (!target.hasAttribute("tabindex")) {
      target.setAttribute("tabindex", "-1");
      target.style.outline = "none";
    }
    target.focus({ preventScroll: true });
  }
}

EventHandler.on(window, "load.uds.anchor-menu", initAnchorMenu);

export { initAnchorMenu };
