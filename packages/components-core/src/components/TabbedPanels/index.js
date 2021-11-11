// @ts-check
/* eslint react/jsx-props-no-spreading: "off" */
import PropTypes from "prop-types";
import React, { useState } from "react";

import { NavControlButtons } from "./index.styles";

export const NavControls = ({ clickPrev, clickNext }) => {
  return (
    <NavControlButtons>
      <button className="scroll-control-prev" type="button" onClick={clickPrev}>
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </button>
      <button className="scroll-control-next" type="button" onClick={clickNext}>
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </button>
    </NavControlButtons>
  );
};

NavControls.propTypes = {
  clickPrev: PropTypes.func.isRequired,
  clickNext: PropTypes.func.isRequired,
};

export const Tab = ({ id, selected, title, selectTab }) => {
  return (
    <a
      className={`nav-item nav-link ${selected ? "active" : ""}`}
      id={id}
      href={`#nav-${id}`}
      role="tab"
      aria-controls={`nav-${id}`}
      aria-selected={selected}
      onClick={e => selectTab(e, id)}
    >
      {title}
    </a>
  );
};

Tab.propTypes = {
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  selectTab: PropTypes.func.isRequired,
};

export const TabContent = ({ id, bgColor, selected, content }) => {
  return (
    <div
      className={`tab-pane fade show ${selected ? "show active" : ""} ${
        bgColor === "bg-dark" ? "text-white" : ""
      }`}
      id={`nav-${id}`}
      role="tabpanel"
      aria-labelledby={`nav-${id}-tab`}
    >
      {content}
    </div>
  );
};

TabContent.propTypes = {
  id: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  content: PropTypes.element.isRequired,
};

export const TabbedPanels = ({ bgColor, panels }) => {
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
    const atFarRight = nav.offsetWidth + scrollPos + 3 >= nav.scrollWidth;
    prevButton.style.display = scrollPos === 0 ? "none" : "block";
    nextButton.style.display = atFarRight ? "none" : "block";
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
          bgColor={bgColor}
          content={panel.content}
          selected={selectedId === `tab-${randId}-${panel.id}`}
          key={panel.id}
        />
      ),
    };
  });

  return (
    <div className={bgColor}>
      <nav
        className={`uds-tabbed-panels ${
          bgColor === "bg-dark" ? "uds-tabbed-panels-dark" : ""
        }`}
        onScroll={catchScroll}
        id={TabbedPanelsId}
      >
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
  bgColor: PropTypes.string.isRequired,
  panels: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.element,
    })
  ),
};
