/* eslint-disable no-unused-vars */
import { cx } from "@emotion/css";
import { forwardRef } from "preact/compat";
import PropTypes from "prop-types";

import { trackGAEvent } from "../../services/googleAnalytics";
import { Button } from "../Button";
import * as S from "./styles";

const HoverDropNav = forwardRef(
  (
    {
      text,
      setFocus,
      pIndex,
      isOpen,
      setOpen,
      children,
      mega,
      buttons,
      mobile,
      selected,
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
      <li
        class={isOpen ? "dropdown-open" : ""}
        {...(!mobile
          ? {
              onMouseEnter: e => {
                setOpen(pIndex);
                !isOpen && trackGAEvent(text);
              },
              onMouseLeave: e => {
                setOpen(-1);
                !isOpen && trackGAEvent(text);
              },
            }
          : {})}
      >
        <S.DropControls {...{ selected }}>
          <a
            {...props}
            class={cx(props.class ? props.class : "")}
            role="button"
            aria-expanded={isOpen}
            onFocus={e => {
              setFocus([pIndex, -1, -1]);
            }}
            tabIndex="0"
            ref={ref}
          >
            {text}{" "}
          </a>
          <S.IconChevronDown
            sr={text}
            className={isOpen ? "open" : ""}
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
          />
        </S.DropControls>

        <S.DropdownContainer
          {...{ open: isOpen }}
          class={`header-dropdown-${pIndex}${mega ? " mega" : ""}`}
          {...(buttons
            ? {
                buttons: buttons.map((item, index) => {
                  return (
                    <Button
                      key={`button-${index}`}
                      href={item.href}
                      {...(item.color ? { [item.color]: true } : {})}
                      medium
                    >
                      {item.text}
                    </Button>
                  );
                }),
              }
            : {})}
        >
          {children}
        </S.DropdownContainer>
      </li>
    );
  }
);

HoverDropNav.propTypes = {
  setFocus: PropTypes.func.isRequired, // state hook for setting focus
  pIndex: PropTypes.number.isRequired, // top level parent index
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.object), // CTA buttons which will be shown at bottom of dropdown nav
  mega: PropTypes.bool,
  text: PropTypes.string,
  mobile: PropTypes.bool,
  selected: PropTypes.bool,
};

HoverDropNav.defaultProps = {
  isOpen: false,
  selected: false,
};

export default HoverDropNav;
