// @ts-check

import PropTypes from "prop-types";
import React, { useState } from "react";

/**
 *
 * @param {{
 *  message: string
 *  type: string
 * }} props
 * @returns
 */
function MessageAlert({ message, type }) {
  const [closed, setClosed] = useState("");
  const settings = {
    error: {
      alertClass: "danger",
      alertIcon: "fa-exclamation-triangle",
      alertIconLabel: "Error",
    },
    info: {
      alertClass: "danger",
      alertIcon: "fa-exclamation-triangle",
      alertIconLabel: "Info",
    },
  };
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

MessageAlert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
};

/* eslint-disable react/prop-types */
function ErrorAlert({ message = "" }) {
  return <MessageAlert message={message} type="error" />;
}

function InfoAlert({ message = "" }) {
  return <MessageAlert message={message} type="info" />;
}
/* eslint-enable react/prop-types */

export { ErrorAlert, InfoAlert };
