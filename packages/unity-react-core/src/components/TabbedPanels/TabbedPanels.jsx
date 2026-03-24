// @ts-nocheck
/**
 *
 *
 * TODO: Does not work with Bootstrap Framework
 * Requires functionality UDS-1664
 *
 *
 */
import { throttle, debounce } from "@asu/shared";
import PropTypes from "prop-types";
import React, { useState, useEffect, useRef, useCallback } from "react";

import { useBaseSpecificFramework } from "../GaEventWrapper/useBaseSpecificFramework";
import { NavControls, TabHeader, MoreDropdown } from "./components";

function useRefs() {
  const refs = useRef({});

  const register = useCallback(
    refName => ref => {
      refs.current[refName] = ref;
    },
    []
  );

  return [refs, register];
}

const Tab = ({ id, bgColor, selected, children }) => {
  const { isBootstrap } = useBaseSpecificFramework();

  if (!(selected || isBootstrap)) {
    return null;
  }

  return (
    <div
      className={`tab-pane fade show ${selected ? "show active" : ""} ${
        bgColor === "bg-dark" ? "text-white" : ""
      }`}
      id={`nav-${id}`}
      role="tabpanel"
      aria-labelledby={`nav-${id}-tab`}
    >
      {children}
    </div>
  );
};

Tab.propTypes = {
  id: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  selected: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
};

const TabbedPanels = ({
  initialTab = "",
  children,
  bgColor = "",
  onTabChange = _ => {},
}) => {
  const childrenArray = React.Children.toArray(children);
  const idToChild = {};
  childrenArray.forEach((child) => {
    if (child && child.props && child.props.id) {
      idToChild[child.props.id] = child;
    }
  });

  // Move all hooks before any early returns
  const isMounted = useRef(false);
  const [activeTabID, setActiveTabID] = useState(
    initialTab && initialTab !== "null"
      ? initialTab
      : childrenArray[0]?.props?.id || ""
  );
  const headerTabs = useRef(null);
  const [headerTabItems, setHeaderTabItems] = useRefs();
  // helper to register a DOM node for a tab id in both headerTabItems (for keyboard focus)
  // and tabRefs (for width measurements)
  const registerTabNode = (id) => (node) => {
    setHeaderTabItems(id)(node);
    if (node) {
      tabRefs.current[id] = node;
    } else {
      delete tabRefs.current[id];
    }
  };
    const tabRefs = useRef({});
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollableWidth, setScrollableWidth] = useState();

  // -----------------------------
  // TODO 1.1
  // -----------------------------
  const [overflowTabs, setOverflowTabs] = useState([]);
  const [visibleTabs, setVisibleTabs] = useState(
    childrenArray.map((c) => c.props.id)
  );

  // -----------------------------
  // TODO 2.1
  // -----------------------------
  const calculateOverflow = useCallback(() => {
    const MORE_BTN_WIDTH = 83;
    const TAB_GAP = 8;

    const container = headerTabs.current;
    if (!container) {
      // show all tabs by default and clear overflow if no container
      setVisibleTabs(childrenArray.map((c) => c.props.id));
      setOverflowTabs([]);
      return;
    }

    const tabIDs = childrenArray.map((c) => c.props.id);

    // measure widths using tabRefs first then headerTabItems
    const widths = tabIDs.map((id) => {
      const domNode = tabRefs.current[id] || headerTabItems.current?.[id];
      if (domNode && typeof domNode.getBoundingClientRect === "function") {
        return Math.round(domNode.getBoundingClientRect().width);
      }
      return 80;
    });

    const availableWidth = container.clientWidth || 0;

    const newVisibleTabs = [];
    const newOverflowTabs = [];

    let used = 0;
    for (let i = 0; i < tabIDs.length; i++) {
      const w = widths[i] || 0;

      // mark the remaining tabs as overflow if more button exceeds limit
      if (used + w + MORE_BTN_WIDTH > availableWidth) {
        for (let j = i; j < tabIDs.length; j++) {
          newOverflowTabs.push(tabIDs[j]);
        }
        break;
      }

      newVisibleTabs.push(tabIDs[i]);
      used += w + TAB_GAP;
    }

    setVisibleTabs(newVisibleTabs);
    setOverflowTabs(newOverflowTabs);

    setScrollableWidth(container.scrollWidth - container.clientWidth);
  }, [childrenArray, headerTabItems]);

  // REVIEW: This useEffect is missing its dependency array. What happens when you call setState without dependencies?
  // REVIEW: This will cause an infinite loop. Think about when this effect should run and add the appropriate dependency array. remember that what you add int the depenmdency array should not be derived from the state being set inside the effect.
    // run overflow calculation on mount and on resize
    useEffect(() => {
      calculateOverflow();
    }, [calculateOverflow]);

    const handleResize = useCallback(() => {
      setScrollableWidth(
        headerTabs.current?.scrollWidth - headerTabs.current?.offsetWidth
      );

      calculateOverflow();
    }, [calculateOverflow]);

  const handleScroll = useCallback(() => {
    setScrollLeft(headerTabs.current?.scrollLeft);
  }, []);

  const throttleScroll = useCallback(() => {
    const timeout = 150;
    // prevent function from being called excessively
    throttle(handleScroll, timeout);
    // ensure function executes after scrolling stops
    debounce(handleScroll, timeout);
  }, [handleScroll]);

  const throttleResize = useCallback(() => {
    const timeout = 150;
    // prevent function from being called excessively
    throttle(handleResize, timeout);
    // ensure function executes after scrolling stops
    debounce(handleResize, timeout);
  }, [handleResize]);

  // Move all useEffect hooks before early return
  useEffect(() => {
    const currentHeaderTabs = headerTabs.current;
    if (currentHeaderTabs) {
      currentHeaderTabs.addEventListener("scroll", throttleScroll);
      handleScroll();
    }
    return () => {
      if (currentHeaderTabs) {
        currentHeaderTabs.removeEventListener("scroll", throttleScroll);
      }
    };
  }, [scrollableWidth, throttleScroll, handleScroll]);

  useEffect(() => {
    window.addEventListener("resize", throttleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", throttleResize);
    };
  }, [throttleResize, handleResize]);

  useEffect(() => {
    if (headerTabItems.current[activeTabID]) {
      headerTabItems.current[activeTabID].scrollIntoView();
    }
  }, [activeTabID, headerTabItems]);

  useEffect(() => {
    if (
      isMounted.current &&
      initialTab &&
      initialTab !== "null" &&
      activeTabID !== initialTab
    ) {
      setActiveTabID(initialTab);
    }
  }, [initialTab, activeTabID]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  // Early return check after all hooks
  if (childrenArray.length === 0) {
    return null;
  }

  const updateActiveTabID = tab => {
    onTabChange(tab);

    headerTabItems.current[tab]?.focus();
    setActiveTabID(tab);
  };

  const trackArrowsEvent = {
    event: "select",
    action: "click",
    name: "onclick",
    type: "carousel",
    region: "main content",
    text: "",
  };

  const trackLinkEvent = {
    event: "link",
    action: "click",
    name: "onclick",
    type: "internal link",
    text: "",
  };

  const tabs = childrenArray.map(el => {
    return React.cloneElement(el, {
      bgColor,
      selected: activeTabID === el.props.id,
    });
  });

  const slideNav = direction => {
    const container = headerTabs.current;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const currentScrollLeft = container.scrollLeft;

    let newScrollLeft = currentScrollLeft + 200 * direction;

    // Ensure the scroll position stays within bounds
    newScrollLeft = Math.max(0, Math.min(maxScrollLeft, newScrollLeft));

    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  const switchToTab = (e, tabID, title) => {
    // trackLinkEvent(title);
    e.preventDefault();
    updateActiveTabID(tabID);
  };

  const incrementIndex = (up = true) => {
    const count = childrenArray.length;
    const num = up ? 1 : -1;
    const currPos = childrenArray.findIndex(c => c.props.id === activeTabID);
    const newTabID = childrenArray[(count + currPos + num) % count].props.id;
    updateActiveTabID(newTabID);
  };

  let navClasses = "uds-tabbed-panels";
  if (bgColor === "bg-dark") {
    navClasses += " uds-tabbed-panels-dark";
  }

  return (
    <div className={bgColor}>
      <nav className={navClasses}>
      <div className="nav nav-tabs" role="tablist" ref={headerTabs}>
        {visibleTabs.map((tabId, index) => {
          const child = idToChild[tabId];
          if (!child) return null;

          return (
            <TabHeader
              // register both headerTabItems and tabRefs for this tab id
              ref={registerTabNode(tabId)}
              id={child.props.id}
              title={child.props.title}
              selected={activeTabID === child.props.id}
              gaData={trackLinkEvent}
              selectTab={switchToTab}
              key={child.props.id}
              leftKeyPressed={() => incrementIndex(false)}
              rightKeyPressed={() => incrementIndex()}
              icon={child.props.icon}
              index={index}
            />
          );
        })}

        {overflowTabs && overflowTabs.length > 0 && (
          <MoreDropdown
            overflowTabs={overflowTabs}
            idToChild={idToChild}
            activeTabID={activeTabID}
            selectTab={switchToTab}
            gaData={trackLinkEvent}
          />
        )}
      </div>

        <NavControls
          hidePrev={scrollLeft <= 0}
          hideNext={scrollLeft >= scrollableWidth}
          gaData={trackArrowsEvent}
          slideNav={slideNav}
        />
      </nav>
      <div
        className="tab-content"
        tabIndex={0}
        role="tabpanel"
        id="nav-tabContent"
      >
        {tabs}
      </div>
    </div>
  );
};

TabbedPanels.propTypes = {
  initialTab: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  bgColor: PropTypes.string,
  onTabChange: PropTypes.func,
};

export { TabbedPanels, Tab, NavControls, TabHeader };
