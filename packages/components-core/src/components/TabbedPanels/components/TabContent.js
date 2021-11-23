import PropTypes from "prop-types";
import React from "react";

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
