// @ts-check
import PropTypes from "prop-types";
import React, { useState } from "react";

import { NavControls, Tab, TabContent } from "./components";

export const TabbedPanels = ({ panels, bgColor }) => {
  const [backgroundColor] = useState(bgColor || "");
  const [randId] = useState(Math.floor(Math.random() * 1000 + 1));
  const [selectedId, setSelectedId] = useState(`tab-${randId}-${panels[0].id}`);
  const TabbedPanelsId = `tabbed-panels-${randId}`;
  const NavTabsId = `nav-tabs-${randId}`;

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
  const tabs = panels.map(panel => {
    return {
      link: (
        <Tab
          id={`tab-${randId}-${panel.id}`}
          title={panel.title}
          selected={selectedId === `tab-${randId}-${panel.id}`}
          selectTab={switchToTab}
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
          {tabs.map(t => t.link)}
        </div>
        <NavControls
          clickPrev={() => slideNav(-1)}
          clickNext={() => slideNav(1)}
        />
      </nav>
      <div className="tab-content" id="nav-tabContent">
        {tabs.map(t => t.content)}
      </div>
    </div>
  );
};

TabbedPanels.propTypes = {
  panels: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.element,
    })
  ),
  bgColor: PropTypes.string,
};
