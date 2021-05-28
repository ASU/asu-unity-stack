/* eslint-disable react/prop-types */
// @ts-check
import React, { useState } from "react";

const RequestInfo = () => (
  <div className="reqInfo">
    <a
      className="btn btn-maroon btn-sm btn-block"
      href="https://requestinfo.asu.edu/request-info?prog=UGHI&amp;plan=FAMUSTTBM&amp;name=Theory+and+Composition+%28Theory%29&amp;contact=MDTAdmissions@asu.edu"
      target="_blank"
      rel="noreferrer"
    >
      Request Info
    </a>
  </div>
);

const ApplyNow = () => (
  <div>
    <button
      type="button"
      className="btn btn-gold btn-sm btn-block tt_Apply"
      data-toggle="modal"
      data-target="#myModal_"
    >
      Apply Now
    </button>
  </div>
);

/**
 *
 * @param {{
 *    onClick: () => void
 * }} props
 * @returns {JSX.Element}
 */
function FavButton({ onClick = () => null }) {
  const [selected, setSelected] = useState(false);
  const baseIcon = (iconTypeClass, display, ariaLabel, style) => (
    <span
      style={{
        cursor: "pointer",
        display,
      }}
    >
      <i
        className={`${iconTypeClass} fa-heart icon-base`}
        aria-label={ariaLabel}
        title={ariaLabel}
        style={style}
      />
    </span>
  );

  const onClickButton = () => {
    setSelected(!selected);
    onClick();
  };

  return (
    <span
      role="button"
      tabIndex={0}
      onKeyDown={onClickButton}
      onClick={onClickButton}
      data-selected={selected}
    >
      {baseIcon("fas", selected ? "" : "none", "remove to my favorites")}
      {baseIcon("far", selected ? "none" : "", "add to my favorites", {
        color: "#e5e5e5",
      })}
    </span>
  );
}

const SortButton = () => (
  <i className="fa fa-caret-down fa-lg" aria-hidden="true" />
);

const InfoButton = () => (
  <i
    className="fas fa-info-circle"
    style={{
      color: "#747474",
    }}
    aria-hidden="true"
  />
);

export { RequestInfo, ApplyNow, FavButton, SortButton, InfoButton };
