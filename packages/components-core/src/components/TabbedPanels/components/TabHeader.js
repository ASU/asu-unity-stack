import PropTypes from "prop-types";
import React from "react";

const TabHeader = ({
  id,
  selected,
  title,
  selectTab,
  leftKeyPressed,
  rightKeyPressed,
}) => {
  const func = e => {
    if (e.keyCode === 37) {
      leftKeyPressed();
    } else if (e.keyCode === 39) {
      rightKeyPressed();
    }
  };
  return (
    <a
      className={`nav-item nav-link ${selected ? "active" : ""}`}
      id={id}
      href={`#nav-${id}`}
      role="tab"
      aria-controls={`nav-${id}`}
      aria-selected={selected}
      onClick={e => selectTab(e, id, title)}
      onKeyDown={func}
      tabIndex={selected ? "" : "-1"}
    >
      {title}
    </a>
  );
};

TabHeader.propTypes = {
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  selectTab: PropTypes.func.isRequired,
  leftKeyPressed: PropTypes.func.isRequired,
  rightKeyPressed: PropTypes.func.isRequired,
};

export { TabHeader };
