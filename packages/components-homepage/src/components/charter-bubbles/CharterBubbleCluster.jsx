import React, { forwardRef } from "react";

import { CHARTER_BUBBLE_COUNT } from "./charter-bubbles-data.js";

/**
 * @typedef {Object} CharterBubbleClusterProps
 * @property {React.ReactNode} children One canonical bubble list or its shell.
 * @property {number} [openIndex=-1] Zero-based open item index; -1 means closed.
 * @property {string} [className=""] Additional class for composition only.
 */

/**
 * Reserves the component block and provides the desktop overlap/collision hooks.
 * Children are emitted once and remain responsible for their own semantics.
 *
 * @param {CharterBubbleClusterProps} props
 * @param {React.ForwardedRef<HTMLDivElement>} ref
 * @returns {JSX.Element}
 */
const CharterBubbleClusterRender = (
  { children, openIndex = -1, className = "" },
  ref
) => {
  const hasOpenBubble =
    Number.isInteger(openIndex) &&
    openIndex >= 0 &&
    openIndex < CHARTER_BUBBLE_COUNT;
  const classes = [
    "hp-charter-bubbles__cluster-shell",
    hasOpenBubble ? "has-open-bubble" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={ref}
      className={classes}
      data-charter-bubble-cluster=""
      data-open-slot={hasOpenBubble ? openIndex + 1 : undefined}
    >
      <div
        className="hp-charter-bubbles__cluster-stage"
        data-charter-bubble-cluster-stage=""
      >
        {children}
      </div>
    </div>
  );
};

const CharterBubbleCluster = forwardRef(CharterBubbleClusterRender);
CharterBubbleCluster.displayName = "CharterBubbleCluster";

export { CharterBubbleCluster };
