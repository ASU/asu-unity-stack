/**
 * GaEventType represents the structure of Google Analytics event data.
 *
 * @typedef {Object} GaEventType
 * @property {string} [text] - The text associated with the event.
 * @property {string} [name] - The name of the event.
 * @property {string} [event] - The event type.
 * @property {string} [action] - The action taken.
 * @property {string} [type] - The type of event.
 * @property {string} [region] - The region where the event occurred.
 * @property {string} [section] - The section of the application.
 * @property {string} [component] - The component associated with the event.
 */

/**
 * GaEventWrapper props.
 *
 * @typedef {Object} GaEventWrapper
 * @property {undefined|""|"input"|"header"|"header-input"} [prefix] - The prefix for the data-ga attributes (data-ga-{prefix}-action).
 * @property {GaEventType} gaData - Google Analytics data.
 * @property {import("react").ReactElement} children - Expects a single child element.
 */

/**
 * GaEventWrapper component wraps a child element and tracks Google Analytics events.
 *
 * @param {GaEventWrapper} props - The props for the component.
 * @returns {import("react").ReactElement} The wrapped child element with GA tracking.
 */
import React from "react";

// @ts-ignore
import { trackGAEvent } from "../../../../../shared";
import { useBaseSpecificFramework } from "./useBaseSpecificFramework";

/**
 *
 * @param GaEventWrapper
 * @returns
 */
export const GaEventWrapper = ({ gaData, prefix = "", children: child }) => {
  const { isReact } = useBaseSpecificFramework();
  const { onClick: initialOnClick, ...props } = child.props;

  if (isReact) {
    return React.cloneElement(child, {
      ...props,
      onClick: e => {
        trackGAEvent(gaData);
        if (initialOnClick) {
          return initialOnClick(e);
        }
        return true;
      },
    });
  }

  let overridePrefix = "";
  if (["input", "header", "header-input"].includes(prefix)) {
    overridePrefix = `-${prefix}`;
  }
  const gaProps = {
    [`data-ga${overridePrefix}`]: gaData.text,
    [`data-ga${overridePrefix}-name`]: gaData.name,
    [`data-ga${overridePrefix}-event`]: gaData.event,
    [`data-ga${overridePrefix}-action`]: gaData.action,
    [`data-ga${overridePrefix}-type`]: gaData.type,
    [`data-ga${overridePrefix}-region`]: gaData.region,
    [`data-ga${overridePrefix}-section`]: gaData.section,
    [`data-ga${overridePrefix}-component`]: gaData.component,
  };
  return React.cloneElement(child, {
    ...props,
    onClick: initialOnClick,
    ...gaProps,
  });
};
