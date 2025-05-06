// @ts-nocheck

/**
 * TODO: Fix type errors
 * */
import PropTypes from "prop-types";
import React, { forwardRef, useRef, useImperativeHandle } from "react";

import { GaEventWrapper } from "../../GaEventWrapper/GaEventWrapper";
import { useBaseSpecificFramework } from "../../GaEventWrapper/useBaseSpecificFramework";

/**
 * @typedef {Object} TabHeaderProps
 * @property {import("../../GaEventWrapper/GaEventWrapper").GaEventType} gaData
 * @property {boolean} hidePrev
 * @property {boolean} hideNext
 * @property {() => void} slideNav
 */
const TabHeader = forwardRef(function TabHeader(props, ref) {
  const {
    id,
    selected,
    title,
    selectTab,
    leftKeyPressed,
    rightKeyPressed,
    icon,
    gaData,
  } = props;
  const { isReact, isBootstrap } = useBaseSpecificFramework();

  const inputRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus();
        },
        scrollIntoView() {
          const middle =
            inputRef.current?.offsetWidth / 2 + inputRef.current.offsetLeft;
          const targetMiddle =
            inputRef.current?.offsetParent?.scrollLeft +
            inputRef.current?.offsetParent?.offsetWidth / 2;

          inputRef.current?.offsetParent?.scrollBy({
            left: middle - targetMiddle,
          });
        },
      };
    },
    []
  );

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
        ref={inputRef}
        className={`nav-item nav-link ${selected ? "active" : ""}`}
        id={id}
        href={`#nav-${id}`}
        role="tab"
        aria-controls={`nav-${id}`}
        aria-selected={selected}
        data-bs-toggle={isBootstrap && "tab"}
        onClick={isReact && (e => selectTab(e, id, title))}
        onKeyDown={isReact && func}
        tabIndex={selected ? "" : "-1"}
      >
        {title} {icon && <i className={`${icon?.[0]} fa-${icon?.[1]} me-1`} />}
      </a>
    </GaEventWrapper>
  );
});

TabHeader.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
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
