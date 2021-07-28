// @ts-check

import PropTypes from "prop-types";
import React, { useState } from "react";

/**
 *
 * @param {{
 *  message: string
 *  type: "error" | "info"
 * }} props
 * @returns
 */
function MessageAlert({ message, type }) {
  const [closed, setClosed] = useState("");
  const alerts = {
    error: {
      className: "alert-danger",
      icon: "fa-exclamation-triangle",
      ariaLabel: "Error",
    },
    info: {
      className: "alert-info",
      icon: "fa-info-circle",
      ariaLabel: "Information",
    },
  };

  const alert = alerts[type];

  return (
    <div
      className={`alert ${alert.className}`}
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
          aria-label={alert.ariaLabel}
          className={`fa fa-icon ${alert.icon}`}
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
  type: PropTypes.string.isRequired,
  message: PropTypes.oneOf(["error", "info"]).isRequired,
};

/* eslint-disable react/prop-types */

/**
 * @param {{ message: string }} props
 */
function ErrorAlert({ message }) {
  return <MessageAlert message={message} type="error" />;
}

/**
 * @param {{ message: string }} props
 */
function InfoAlert({ message }) {
  return <MessageAlert message={message} type="info" />;
}
/* eslint-enable react/prop-types */

export { ErrorAlert, InfoAlert };
