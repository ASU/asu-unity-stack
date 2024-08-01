import PropTypes from "prop-types";
import React, { forwardRef, useRef, useImperativeHandle } from "react";

const TabHeader = forwardRef(function TabHeader(props, ref) {
  const {
    id,
    selected,
    title,
    selectTab,
    leftKeyPressed,
    rightKeyPressed,
    icon,
  } = props;

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
    <a
      ref={inputRef}
      className={`nav-item nav-link ${selected ? "active" : ""}`}
      id={id}
      href={`#nav-${id}`}
      role="tab"
      aria-controls={`nav-${id}`}
      aria-selected={selected}
      onClick={e => selectTab(e, id, title)}
      onKeyDown={func}
      tabIndex={selected ? "" : "-1"}
    >
      {title} {icon && <i className={`${icon?.[0]} fa-${icon?.[1]} me-1`} />}
    </a>
  );
});

TabHeader.propTypes = {
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  selectTab: PropTypes.func.isRequired,
  leftKeyPressed: PropTypes.func.isRequired,
  rightKeyPressed: PropTypes.func.isRequired,
  icon: PropTypes.arrayOf(PropTypes.string),
};

export { TabHeader };
