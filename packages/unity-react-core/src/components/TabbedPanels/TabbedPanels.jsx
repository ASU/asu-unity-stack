// @ts-nocheck
/**
 *
 *
 * TODO: Does not work with Bootstrap Framework
 * Requires functionality UDS-1664
 *
 *
 */
import PropTypes from "prop-types";
import React, { useState, useEffect, useRef, useCallback } from "react";

import { throttle, debounce } from "../../../../../shared";
import { useBaseSpecificFramework } from "../GaEventWrapper/useBaseSpecificFramework";
import { NavControls, TabHeader } from "./components";

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
  return (
    (selected || isBootstrap) && (
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
    )
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
  if (childrenArray.length === 0) {
    return null;
  }
  const isMounted = useRef(false);
  const [activeTabID, setActiveTabID] = useState(
    initialTab && initialTab !== "null" ? initialTab : childrenArray[0].props.id
  );
  const headerTabs = useRef(null);
  const [headerTabItems, setHeaderTabItems] = useRefs();

  const updateActiveTabID = tab => {
    onTabChange(tab);

    headerTabItems.current[tab]?.focus();
    setActiveTabID(tab);
  };

  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollableWidth, setScrollableWidth] = useState();

  const handleResize = () => {
    setScrollableWidth(
      headerTabs.current?.scrollWidth - headerTabs.current?.offsetWidth
    );
  };

  const handleScroll = () => {
    setScrollLeft(headerTabs.current?.scrollLeft);
  };

  const throttleScroll = () => {
    const timeout = 150;
    // prevent function from being called excessively
    throttle(handleScroll, timeout);
    // ensure function executes after scrolling stops
    debounce(handleScroll, timeout);
  };

  const throttleResize = () => {
    const timeout = 150;
    // prevent function from being called excessively
    throttle(handleResize, timeout);
    // ensure function executes after scrolling stops
    debounce(handleResize, timeout);
  };

  useEffect(() => {
    headerTabs.current.addEventListener("scroll", throttleScroll);
    handleScroll();
    return () => {
      if (headerTabs.current) {
        headerTabs.current.removeEventListener("scroll", throttleScroll);
      }
    };
  }, [scrollableWidth]);

  useEffect(() => {
    window.addEventListener("resize", throttleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", throttleResize);
    };
  }, []);

  useEffect(() => {
    headerTabItems.current[activeTabID]?.scrollIntoView();
  }, [activeTabID]);

  useEffect(() => {
    if (
      isMounted.current &&
      initialTab &&
      initialTab !== "null" &&
      activeTabID !== initialTab
    ) {
      setActiveTabID(initialTab);
    }
  }, [initialTab]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

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
          {childrenArray.map((child, index) => {
            return (
              <TabHeader
                ref={setHeaderTabItems(child.props.id)}
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
