// @ts-nocheck

/**
 * TODO: Fix type errors
 * */
import PropTypes from "prop-types";
import React, { forwardRef, useRef} from "react";

import { GaEventWrapper } from "../../GaEventWrapper/GaEventWrapper";
import { useBaseSpecificFramework } from "../../GaEventWrapper/useBaseSpecificFramework";

/**
 * @typedef {Object} TabHeaderProps
 * @property {import("../../GaEventWrapper/GaEventWrapper").GaEventType} gaData
 * @property {boolean} hidePrev
 * @property {boolean} hideNext
 * @property {() => void} slideNav
 */
const TabHeader = function TabHeader(props) {
  const {
    id,
    selected,
    title,
    selectTab,
    leftKeyPressed,
    rightKeyPressed,
    icon,
    gaData,
    ref,
  } = props;
  const { isReact, isBootstrap } = useBaseSpecificFramework();

  const inputRef = useRef(null);


  const func = e => {
    if (e.keyCode === 37) {
      e.preventDefault();
      leftKeyPressed();
    } else if (e.keyCode === 39) {
      e.preventDefault();
      rightKeyPressed();
    }
  };
  return (
    <GaEventWrapper gaData={{ ...gaData, text: title }}>
      <a
        ref={(node) => {
          inputRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        className={`nav-item nav-link ${selected ? "active" : ""}`}
        id={id}
        href={`#nav-${id}`}
        role="tab"
        aria-controls={`nav-${id}`}
        aria-selected={selected}
        data-bs-toggle={isBootstrap ? "tab" : undefined}
        onClick={isReact ? (e => selectTab(e, id, title)) : undefined}
        onKeyDown={isReact ? func : undefined}
        tabIndex={0}
      >
        {title} {icon && <i className={`${icon?.[0]} fa-${icon?.[1]} me-1`} />}
      </a>
    </GaEventWrapper>
  );
};

TabHeader.propTypes = {
  gaData: PropTypes.object,
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  selectTab: PropTypes.func.isRequired,
  leftKeyPressed: PropTypes.func.isRequired,
  rightKeyPressed: PropTypes.func.isRequired,
  icon: PropTypes.arrayOf(PropTypes.string),
};

export { TabHeader };
