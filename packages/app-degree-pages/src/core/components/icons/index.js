/* eslint-disable react/prop-types */
// @ts-check

import React, { useState } from "react";

import { BaseStateIconButton } from "./BaseStateIconButton";

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
      {baseIcon(
        "fas",
        selected ? "" : "none",
        "Saved as favorited. Click to remove"
      )}
      {baseIcon("far", selected ? "none" : "", "Click to save as favorited", {
        color: "#e5e5e5",
      })}
    </span>
  );
}

const SortIcon = () => (
  <i className="fa fa-caret-down fa-lg" aria-hidden="true" />
);

/**
 *
 * @param {{
 *            onClick: () => void
 *            onMouseOver: () => void
 * }} props
 * @returns {JSX.Element}
 */
const InfoIcon = ({ onClick = () => null, onMouseOver = () => null }) => (
  <span
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyDown={onClick}
    onMouseOver={onMouseOver}
    onFocus={onMouseOver}
  >
    <i
      className="fas fa-info-circle"
      style={{
        color: "#747474",
      }}
      aria-hidden="true"
    />
  </span>
);

const ChevronUpIcon = () => (
  <i className="fas fa-chevron-up" aria-hidden="true" />
);

const ChevronDownIcon = () => (
  <i className="fas fa-chevron-down" aria-hidden="true" />
);

/**
 *
 * @param {{onClick: (selected: boolean) => void}} props
 * @returns {JSX.Element}
 */
const ChevronIconButton = ({ onClick = () => null }) =>
  BaseStateIconButton({
    baseIconClassName1: "fas fa-chevron-up",
    baseIconClassName2: "fas fa-chevron-down",
    onClick,
  });

export {
  FavButton,
  SortIcon,
  InfoIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronIconButton,
};
