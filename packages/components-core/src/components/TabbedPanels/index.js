// @ts-check
import PropTypes from "prop-types";
import React, { useState } from "react";

import { trackGAEvent } from "../../core/services/googleAnalytics";
import { NavControls, Tab, TabContent, TabHeader } from "./components";

export const Tab = ({ id, bgColor, selected, children }) => {
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

export const TabbedPanels = ({ children, bgColor }) => {
  const [backgroundColor] = useState(bgColor || "");
  const [randId] = useState(Math.floor(Math.random() * 1000 + 1));
  const TabbedPanelsId = `tabbed-panels-${randId}`;
  const NavTabsId = `nav-tabs-${randId}`;
  const [selectedId, setSelectedId] = useState(
    `tab-${randId}-${children[0].props.id}`
  );
  const tabs = React.Children.toArray(
    children.map(el => {
      return React.cloneElement(el, {
        bgColor: backgroundColor,
        selected: selectedId === `tab-${randId}-${el.props.id}`,
      });
    })
  );

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

  const switchToTab = (e, id) => {
    e.preventDefault();
    setSelectedId(id);
  };

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

  const tabs = panels.map(panel => {
    return {
      link: (
        <Tab
          id={`tab-${randId}-${panel.id}`}
          title={panel.title}
          selected={selectedId === `tab-${randId}-${panel.id}`}
          selectTab={(e, id) => {
            switchToTab(e, id);
            trackLinkEvent(panel.title);
          }}
          key={panel.id}
        />
      ),
      content: (
        <TabContent
          id={panel.id}
          bgColor={backgroundColor}
          content={panel.content}
          selected={selectedId === `tab-${randId}-${panel.id}`}
          key={panel.id}
        />
      ),
    };
  });

  let navClasses = "uds-tabbed-panels";
  if (backgroundColor === "bg-dark") {
    navClasses += " uds-tabbed-panels-dark";
  }

  return (
    <div className={backgroundColor}>
      <nav className={navClasses} onScroll={catchScroll} id={TabbedPanelsId}>
        <div className="nav nav-tabs" id={NavTabsId} role="tablist">
          {children.map(child => {
            return (
              <TabHeader
                id={`tab-${randId}-${child.props.id}`}
                title={child.props.title}
                selected={selectedId === `tab-${randId}-${child.props.id}`}
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
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  bgColor: PropTypes.string,
};
