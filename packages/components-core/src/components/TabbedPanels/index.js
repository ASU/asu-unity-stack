// @ts-check
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { trackGAEvent } from "../../core/services/googleAnalytics";
import { NavControls, TabHeader } from "./components";

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

const TabbedPanels = ({ id, children, bgColor, onTabChange }) => {
  const childrenArray = React.Children.toArray(children);
  const [activeTabID, setActiveTabID] = useState(childrenArray[0].props.id);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const current = searchParams.get(id);
    if (current === null) {
      setSearchParams({ [id]: activeTabID });
    } else {
      setActiveTabID(searchParams.get(id));
    }
  }, [searchParams]);

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
  const catchScroll = event => {
    const item = document.querySelector(`#${TabbedPanelsId}`);
    const nav = item.querySelector(".nav-tabs");
    const scrollPos = event.target.scrollLeft;
    const prevButton = item.querySelector(".scroll-control-prev");
    const nextButton = item.querySelector(".scroll-control-next");
    const atFarRight = nav["offsetWidth"] + scrollPos + 3 >= nav.scrollWidth;
    prevButton["style"].display = scrollPos === 0 ? "none" : "block";
    nextButton["style"].display = atFarRight ? "none" : "block";
  };

  const slideNav = direction => {
    const selectedElem = document.querySelector(`#${NavTabsId}`);
    selectedElem.scrollBy({
      left: 200 * direction,
      behavior: "smooth",
    });
  };

  const switchToTab = (e, tabID, title) => {
    trackLinkEvent(title);
    e.preventDefault();
    setSearchParams({ [id]: tabID });
    onTabChange(tabID);
  };

  let navClasses = "uds-tabbed-panels";
  if (backgroundColor === "bg-dark") {
    navClasses += " uds-tabbed-panels-dark";
  }

  return (
    <div className={backgroundColor}>
      <nav className={navClasses} onScroll={catchScroll} id={TabbedPanelsId}>
        <div className="nav nav-tabs" id={NavTabsId} role="tablist">
          {childrenArray.map(child => {
            return (
              <TabHeader
                id={child.props.id}
                title={child.props.title}
                selected={activeTabID === child.props.id}
                selectTab={switchToTab}
                key={child.props.id}
              />
            );
          })}
        </div>
        <NavControls
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
      <div className="tab-content" id="nav-tabContent">
        {tabs}
      </div>
    </div>
  );
};

TabbedPanels.propTypes = {
  id: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  bgColor: PropTypes.string,
  onTabChange: PropTypes.func,
};

export { TabbedPanels, Tab };
