// @ts-check
import PropTypes from "prop-types";
import React, { useState, useEffect, useRef, useCallback } from "react";

import { trackGAEvent } from "../../core/services/googleAnalytics";
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

const Tab = ({ id, bgColor, selected, children }) =>
  selected && (
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

Tab.propTypes = {
  id: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  selected: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

const TabbedPanels = ({
  initialTab,
  children,
  bgColor,
  onTabChange = () => {},
}) => {
  const childrenArray = React.Children.toArray(children);
  const [activeTabID, setActiveTabID] = useState(initialTab);
  const headerTabs = useRef(null);
  const [headerTabItems, setHeaderTabItems] = useRefs();
  const tabbedPanels = useRef(null);

  const updateTabParam = tab => {
    setActiveTabID(tab);
  };

  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollableWidth, setScrollableWidth] = useState();

  useEffect(() => {
    const onScroll = () => {
      setScrollLeft(headerTabs.current.scrollLeft);
    };
    headerTabs.current.addEventListener("scroll", onScroll);
    onScroll();
    return () => headerTabs.current.removeEventListener("scroll", onScroll);
  }, [scrollableWidth]);

  useEffect(() => {
    const onResize = () => {
      setScrollableWidth(headerTabs.current.scrollWidth - headerTabs.current.offsetWidth);
    };
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    headerTabItems.current[activeTabID]?.focus();
    headerTabItems.current[activeTabID]?.scrollIntoView();

    onTabChange(activeTabID);
  }, [activeTabID]);

  useEffect(() => {
    setActiveTabID(initialTab);
  }, [initialTab]);

  const [backgroundColor] = useState(bgColor || "");
  const [randId] = useState(Math.floor(Math.random() * 1000 + 1));
  const TabbedPanelsId = `tabbed-panels-${randId}`;
  const NavTabsId = `nav-tabs-${randId}`;

  const trackArrowsEvent = text => {
    trackGAEvent({
      event: "select",
      action: "click",
      name: "onclick",
      type: "carousel",
      region: "main content",
      text,
    });
  };

  const trackLinkEvent = text => {
    trackGAEvent({
      event: "link",
      action: "click",
      name: "onclick",
      type: "internal link",
      text,
    });
  };

  const tabs = childrenArray.map(el => {
    return React.cloneElement(el, {
      bgColor: backgroundColor,
      selected: activeTabID === el.props.id,
    });
  });

  const slideNav = direction => {
    headerTabs.current.scrollBy({
      left: 200 * direction,
      behavior: "smooth",
    });
  };

  const switchToTab = (e, tabID, title) => {
    trackLinkEvent(title);
    e.preventDefault();
    updateTabParam(tabID);
  };

  const incrementIndex = (up = true) => {
    const count = childrenArray.length;
    const num = up ? 1 : -1;
    const currPos = childrenArray.findIndex(c => c.props.id === activeTabID);
    const newTabID = childrenArray[(count + currPos + num)%count].props.id;
    updateTabParam(newTabID);
  };

  let navClasses = "uds-tabbed-panels";
  if (backgroundColor === "bg-dark") {
    navClasses += " uds-tabbed-panels-dark";
  }

  return (
    <div className={backgroundColor} ref={tabbedPanels}>
      <nav className={navClasses} id={TabbedPanelsId}>
        <div
          className="nav nav-tabs"
          id={NavTabsId}
          role="tablist"
          ref={headerTabs}
        >
          {childrenArray.map((child, index) => {
            return (
              <TabHeader
                ref={setHeaderTabItems(child.props.id)}
                id={child.props.id}
                title={child.props.title}
                selected={activeTabID === child.props.id}
                selectTab={switchToTab}
                key={child.props.id}
                leftKeyPressed={()=>incrementIndex(false)}
                rightKeyPressed={()=>incrementIndex()}
                icon={child.props.icon}
                index={index}
              />
            );
          })}
        </div>
        <NavControls
          hidePrev={scrollLeft === 0}
          hideNext={scrollLeft === scrollableWidth}
          clickPrev={() => {
            slideNav(-1);
            trackArrowsEvent("left chevron");
          }}
          clickNext={() => {
            slideNav(1);
            trackArrowsEvent("right chevron");
          }}
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

export { TabbedPanels, Tab };
