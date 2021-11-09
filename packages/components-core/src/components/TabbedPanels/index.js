// @ts-check
/* eslint react/jsx-props-no-spreading: "off" */
import PropTypes from "prop-types";
import React, { useState } from "react";

export const NavControls = ({clickPrev, clickNext}) => {
  return (
    <div>
      <a
        className="scroll-control-prev"
        role="button"
        data-scroll="prev"
        tabIndex={-1}
        onClick={e => clickPrev(e)}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="scroll-control-next"
        role="button"
        data-scroll="next"
        tabIndex={-1}
        onClick={e => clickNext(e)}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
};

NavControls.propTypes = {
  clickPrev: PropTypes.func.isRequired,
  clickNext: PropTypes.func.isRequired,
};

export const Tab = ({ id, selected, title, selectTab }) => {
  return (
    <a
      className={`nav-item nav-link ${selected ? "active" : ""}`}
      id={`nav-${id}-tab`}
      data-toggle="tab"
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
  selected: PropTypes.string.isRequired,
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
  selected: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export const TabbedPanels = ({ bgColor, panels, selected }) => {
  const [selectedId, setSelectedId] = useState(selected || panels[0].id);

  const switchToTab = (e, id) => {
    e.preventDefault();
    setSelectedId(id);
  };
  const tabs = panels.map(panel => {
    return {
      link: (
        <Tab
          id={panel.id}
          title={panel.title}
          selected={selectedId === panel.id}
          selectTab={switchToTab}
        />
      ),
      content: (
        <TabContent
          id={panel.id}
          bgColor={panel.bgColor}
          content={panel.content}
          selected={selectedId === panel.id}
        />
      ),
    };
  });

  const clickPrev = e => {
    const correctTabIndex = panels.findIndex(p => p.id === selectedId);
    if (correctTabIndex > 0) {
      switchToTab(e, panels[correctTabIndex - 1].id);
    }
  };

  const clickNext = e => {
    const correctTabIndex = panels.findIndex(p => p.id === selectedId);
    if (correctTabIndex < panels.length - 1) {
      switchToTab(e, panels[correctTabIndex + 1].id);
    }
  };

  return (
    <div className={bgColor}>
      <nav
        className={`uds-tabbed-panels ${
          bgColor === "bg-dark" ? "uds-tabbed-panels-dark" : ""
        }`}
      >
        <div
          className="nav nav-tabs"
          id="nav-tab"
          role="tablist"
          data-scroll-position="0"
        >
          {tabs.map(t => t.link)}
        </div>
        <NavControls clickPrev={clickPrev} clickNext={clickNext} />
      </nav>
      <div className="tab-content" id="nav-tabContent">
        {tabs.map(t => t.content)}
      </div>
    </div>
  );
};

TabbedPanels.propTypes = {
  bgColor: PropTypes.string.isRequired,
  panels: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};
