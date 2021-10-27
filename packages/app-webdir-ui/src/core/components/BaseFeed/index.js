// @ts-check
import PropTypes from "prop-types";
import React from "react";

const BaseFeed = ({ numItems }) => {
  const items = [];
  for (let i = 0; i < numItems; i += 1) {
    items.push(<div>item!</div>);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col"> {items} </div>
      </div>
    </div>
  );
};

BaseFeed.propTypes = {
  numItems: PropTypes.number,
};

export { BaseFeed };
