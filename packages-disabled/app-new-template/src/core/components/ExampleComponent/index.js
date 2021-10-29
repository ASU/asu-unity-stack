// @ts-check
import PropTypes from "prop-types";
import React from "react";

/**
 * @typedef {import("../../types/app-types").AppType} AppType
 */

/**
 * @param {AppType & {children: object}} props
 */
const ExampleComponent = ({ children, numItems }) => {
  const items = [];
  for (let i = 0; i < numItems; i += 1) {
    items.push(<div>item!</div>);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col"> {items} </div>
      </div>
      <div className="row">{children}</div>
    </div>
  );
};

ExampleComponent.propTypes = {
  numItems: PropTypes.number,
  children: PropTypes.element,
};

export { ExampleComponent };
