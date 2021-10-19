/* eslint-disable no-unused-vars */
import { cx } from "@emotion/css";
import { forwardRef } from "preact/compat";
import PropTypes from "prop-types";

import { trackGAEvent } from "../../services/googleAnalytics";
import { Button } from "../Button";
import * as S from "./styles";

export const DROPDOWNS_GA_EVENTS = {
  event: "collapse",
  type: "click",
};

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
      buttons,
      href, // destructure, but not used because dropdown onclick toggle shouldn't have href prop
      // If top level item should be a link, use the HoverDropNav
      mobile,
      selected,
      ...props
    },
    ref
  ) => {
    const action = isOpen ? "close" : "open";
    const toggle = index => {
      if (isOpen) {
        setOpen(-1);
      } else {
        setOpen(index);
      }
    };

    return (
      <li class={isOpen ? "dropdown-open" : ""}>
        <a
          {...props}
          class={cx(
            selected ? "nav-item-selected" : "",
            props.class ? props.class : ""
          )}
          role="button"
          aria-expanded={isOpen}
          onMouseDown={e => {
            e.preventDefault();
            toggle(pIndex);
            trackGAEvent({ ...DROPDOWNS_GA_EVENTS, action, text });
          }}
          onKeyDown={e => {
            const code = e.keyCode;
            // open menu upon 'enter' or 'space' keypress
            if (code == 32 || code == 13) {
              toggle(pIndex);
              trackGAEvent({ ...DROPDOWNS_GA_EVENTS, action, text });
            }
          }}
          onFocus={e => {
            setFocus([pIndex, -1, -1]);
          }}
          onClick={() => {}}
          tabIndex="0"
          ref={ref}
          data-onclick-identifier={`toggle-dropdown.${pIndex}`}
          data-onclick-dropdown-open="false"
        >
          {text}{" "}
          <S.IconChevronDown sr={text} className={isOpen ? "open" : ""} />
        </a>

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

DropNav.propTypes = {
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

DropNav.defaultProps = {
  isOpen: false,
};

export default DropNav;
