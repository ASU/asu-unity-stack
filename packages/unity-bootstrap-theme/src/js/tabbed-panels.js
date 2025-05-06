import { EventHandler } from "./bootstrap-helper";

function initTabbedPanels() {
  ("use strict");

  const DOM_ELEMENT_A = "a";
  const DOM_ELEMENT_BUTTON = "button";
  const DOM_ELEMENT_NAV_TABS = ".nav-tabs";
  const DOM_ELEMENT_NAV_ITEM = ".nav-item";
  const DOM_ELEMENT_UDS_TABBED_PANELS = ".uds-tabbed-panels";
  const DOM_ELEMENT_SCROLL_CONTROL_PREV = ".scroll-control-prev";
  const DOM_ELEMENT_SCROLL_CONTROL_NEXT = ".scroll-control-next";
  const EVENT_CLICK = "click";
  const EVENT_SCROLL = "scroll";
  const EVENT_FOCUS = "focus";
  const CSS_DISPLAY_NONE = "none";
  const CSS_DISPLAY_BLOCK = "block";
  const scrollTollerance = 10;
  const LG_BREAKPOINT = 992;

  // helpers functions
  const setButtonsCompatibility = e => {
    const targets = [DOM_ELEMENT_A, DOM_ELEMENT_BUTTON];
    if (targets.includes(e.target.localName)) {
      e.target.focus();
    }
  };

  document
    .querySelectorAll(DOM_ELEMENT_UDS_TABBED_PANELS)
    .forEach(parentContainer => {
      const parentNav = parentContainer.querySelector(DOM_ELEMENT_NAV_TABS);
      const navItems = parentContainer.querySelectorAll(DOM_ELEMENT_NAV_ITEM);
      const prevButton = parentContainer.querySelector(
        DOM_ELEMENT_SCROLL_CONTROL_PREV
      );
      const nextButton = parentContainer.querySelector(
        DOM_ELEMENT_SCROLL_CONTROL_NEXT
      );
      let scrollPosition = 0;

      parentContainer.addEventListener(EVENT_CLICK, function (e) {
        setButtonsCompatibility(e);
      });

      const slideNav = (clicked, e, direction) => {
        e.preventDefault();

        // get left value to interact with scroll
        const rawLeftValue = getComputedStyle(parentNav).left;
        const sanitizedLeftValue = rawLeftValue.replace("px", "");
        let scrollOffset = parseInt(sanitizedLeftValue, 10);

        if (direction === 1 && scrollPosition > 0) {
          scrollPosition -= 1;
        }
        if (scrollPosition < navItems.length - 1 && direction == -1) {
          scrollPosition += 1;
        }
        parentNav.dataset.scrollPosition = scrollPosition;

        scrollOffset = 0;
        for (var i = 0; i < scrollPosition; i++) {
          scrollOffset +=
            navItems[i].offsetWidth +
            parseInt(getComputedStyle(navItems[i]).marginLeft, 10) +
            parseInt(getComputedStyle(navItems[i]).marginRight, 10);
        }

        // set the position of the scroll of the .nav-tabs element
        parentNav.scrollLeft = scrollOffset;
        setControlVisibility(clicked, scrollOffset);
      };

      const setControlVisibility = (clicked, scrollOffset) => {
        const tabPosition = parentNav.scrollWidth - scrollOffset;

        // hide or show the scroll buttons based on the scroll position
        if (scrollPosition == 0) {
          prevButton.style.display = CSS_DISPLAY_NONE;
        } else {
          prevButton.style.display = CSS_DISPLAY_BLOCK;
        }
        if (tabPosition <= parentContainer.offsetWidth) {
          nextButton.style.display = CSS_DISPLAY_NONE;
        } else {
          nextButton.style.display = CSS_DISPLAY_BLOCK;
        }
      };

      parentNav.addEventListener(EVENT_SCROLL, event => {
        const scrollPos = event.target.scrollLeft;
        const atFarRight =
          parentNav.offsetWidth + scrollPos + scrollTollerance >=
          parentNav.scrollWidth;
        prevButton.style.display =
          scrollPos < scrollTollerance ? CSS_DISPLAY_NONE : CSS_DISPLAY_BLOCK;
        nextButton.style.display = atFarRight
          ? CSS_DISPLAY_NONE
          : CSS_DISPLAY_BLOCK;
      });
      // });

      // handle focus event for tabs titles
      navItems.forEach(tabTitle => {
        tabTitle.addEventListener(EVENT_FOCUS, function (e) {
          tabTitle.scrollIntoView();
        });
      });

      // click of the next button
      nextButton.addEventListener(EVENT_CLICK, function (e) {
        if (window.innerWidth > LG_BREAKPOINT) {
          slideNav(this, e, -1);
        }
      });

      // click of the prev button
      prevButton.addEventListener(EVENT_CLICK, function (e) {
        if (window.innerWidth > LG_BREAKPOINT) {
          slideNav(this, e, 1);
        }
      });

      // hide prev button on load

      prevButton.style.display = CSS_DISPLAY_NONE;

      // width of all tabs
      const navTabWidth = parentNav.scrollWidth;

      // width of the parent element
      const udsTabbedPanelsWidth = parentContainer.offsetWidth;

      if (navTabWidth <= udsTabbedPanelsWidth) {
        nextButton.style.display = CSS_DISPLAY_NONE;
      }
    });
}

EventHandler.on(window, 'load.uds.tabs', initTabbedPanels);

// window.addEventListener("load.uds.tabs", initTabs, true);

export { initTabbedPanels };
