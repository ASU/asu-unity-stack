// @ts-check
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";

import { useAppContext } from "../../../../core/context/app-context";
import { useIsMobile } from "../../../../core/hooks/isMobile";
import { NavTreePropTypes } from "../../../../core/models/app-prop-types";
import { trackGAEvent } from "../../../../core/services/googleAnalytics";
import { DropdownItem } from "../DropdownItem";
import { NavItemWrapper } from "./index.styles";

export const DROPDOWNS_GA_EVENTS = {
  event: "collapse",
  type: "click",
};

/**
 * @param {{ icon: string, children: React.ReactNode }} props
 * @returns {JSX.Element}
 */

const NavLinkIcon = ({ icon, children }) => {
  return (
    <>
      {/* @ts-ignore */}
      <FontAwesomeIcon icon={icon} className="icon-nav-item" alt="" />
      <span className="mobile-only">{children}</span>
    </>
  );
};

NavLinkIcon.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node,
};

/**
 * @typedef {import('../../../../core/models/types').NavTreeProps} NavTreeProps
 */

/**
 * @param {{
 *  link: NavTreeProps,
 *  setItemOpened: (value: any) => void,
 *  itemOpened: number
 * }} props
 * @returns
 */

const NavItem = ({ link, setItemOpened, itemOpened }) => {
  const opened = link.id === itemOpened;
  const { breakpoint, expandOnHover, title } = useAppContext();
  const isMobile = useIsMobile(breakpoint);

  const renderNavLinks = () => {
    if (link.type === "icon" || link.type === "icon-home") {
      return (
        <NavLinkIcon icon={link.type === "icon-home" ? "home" : link.class}>
          {link.text}
        </NavLinkIcon>
      );
    }
    return (
      <span>
        {link.text}
        {!!link.items?.length && (
          <FontAwesomeIcon
            icon="chevron-down"
            className={`chevron-icon ${opened ? "open" : ""}`}
            // @ts-ignore
            alt=""
          />
        )}
      </span>
    );
  };

  const dispatchGAEvent = () => {
    const isDropdown = !!link.items?.length;
    const action = opened ? "close" : "open";
    const { text } = link;
    trackGAEvent(
      isDropdown
        ? {
            ...DROPDOWNS_GA_EVENTS,
            action,
            text,
          }
        : {
            text: link.type === "icon-home" ? "home button" : text,
          }
    );
  };

  const handleClick = e => {
    if (link.items) {
      e.preventDefault();
      if (!expandOnHover && !isMobile) {
        setItemOpened();
      } else if (isMobile) {
        setItemOpened();
      }
    }
    dispatchGAEvent();
  };

  const handleOnMouseEnterLeave = () => {
    if (expandOnHover && !isMobile) {
      setItemOpened();
      dispatchGAEvent();
    }
  };

  return (
    <NavItemWrapper
      // @ts-ignore
      breakpoint={breakpoint}
      onClick={handleClick}
      onMouseEnter={handleOnMouseEnterLeave}
      onMouseLeave={handleOnMouseEnterLeave}
    >
      <a
        href={link.href}
        className={`${link.class ? link.class : ""}${
          link.selected ? " nav-item-selected" : ""
        }${opened ? " open-link" : ""}`}
        tabIndex={0}
        data-testid="nav-item"
        title={
          link.type === "icon-home" && title ? `${title} home page` : link.text
        }
      >
        {renderNavLinks()}
      </a>
      {link.items && (
        <DropdownItem
          items={link.items}
          buttons={link.buttons}
          dropdownName={link.text}
          classes={`header-dropdown-${link.id} ${opened ? "opened" : ""}`}
        />
      )}
    </NavItemWrapper>
  );
};

NavItem.propTypes = {
  link: NavTreePropTypes,
  setItemOpened: PropTypes.func,
  itemOpened: PropTypes.number,
};

export { NavItem };
