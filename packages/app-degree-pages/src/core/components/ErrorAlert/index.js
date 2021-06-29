// @ts-check

import PropTypes from "prop-types";
import React, { useState } from "react";

function ErrorAlert({ message = "" }) {
  const [closed, setClosed] = useState("");

  return (
    <div
      className="alert alert-danger"
      role="alert"
      style={{
        display: closed,
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div className="alert-icon">
        <span
          aria-label="Error"
          className="fa fa-icon fa-exclamation-triangle"
        />
      </div>
      <div className="alert-content">{message}</div>
      <div className="alert-close">
        <button
          type="button"
          className="btn btn-circle btn-circle-alt-black close"
          aria-label="Close"
          onClick={() => setClosed("none")}
        >
          <i className="fas fa-times" />
        </button>
      </div>
    </div>
  );
}

ErrorAlert.propTypes = {
  message: PropTypes.string,
};

export { ErrorAlert };
