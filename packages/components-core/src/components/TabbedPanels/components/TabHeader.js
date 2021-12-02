import PropTypes from "prop-types";
import React from "react";

export const TabHeader = ({ id, selected, title, selectTab }) => {
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

TabHeader.propTypes = {
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  selectTab: PropTypes.func.isRequired,
};
