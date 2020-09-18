/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { forwardRef } from "preact/compat";
import PropTypes from "prop-types";
import * as S from "./styles";

const DropNav = forwardRef(
  (
    {
      text,
      setFocus,
      pIndex,
      isOpen,
      setOpen,
      children,
      mega,
      ...props
    },
    ref
  ) => {
    const toggle = index => {
      if (isOpen) {
        setOpen(-1);
      } else {
        setOpen(index);
      }
    };

    return (
      <li>
        <a
          {...props}
          role="button"
          class={isOpen ? "dropdown-open" : ""}
          aria-expanded={isOpen}
          onMouseDown={e => {
            e.preventDefault();
            toggle(pIndex);
            //setFocus([pIndex, -1, -1]);
          }}
          onKeyDown={e => {
            const code = e.keyCode;

            // open menu upon 'enter' or 'space' keypress
            if (code == 32 || code == 13) {
              toggle(pIndex);
            }
          }}
          onFocus={e => {
            //navOpen(pIndex);
            setFocus([pIndex, -1, -1]);
          }}
          tabIndex="0"
          ref={ref}
        >
          {text}{" "}
          <S.IconChevronDown sr={text} className={isOpen ? "open" : ""} />
        </a>

        <S.DropdownContainer
          {...{ open: isOpen }}
          class={mega ? "mega" : ""}
        >
          {children}
        </S.DropdownContainer>
      </li>
    );
  }
);

DropNav.propTypes = {
  setFocus: PropTypes.func.isRequired, // state hook for setting focus
  pIndex: PropTypes.number.isRequired, // top level parent index
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
  mega: PropTypes.bool,
  text: PropTypes.string
};

DropNav.defaultProps = {
  isOpen: false,
};

export default DropNav;
