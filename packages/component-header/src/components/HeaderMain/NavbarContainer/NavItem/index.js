// @ts-check
import { faChevronDown, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useRef, useEffect, useMemo } from "react";

import { trackGAEvent } from "../../../../../../../shared";
import { useAppContext } from "../../../../core/context/app-context";
import { useIsMobile } from "../../../../core/hooks/isMobile";
import { NavTreePropTypes } from "../../../../core/models/app-prop-types";
import { DropdownItem } from "../DropdownItem";
import { NavItemWrapper } from "./index.styles";

// TODO: why did we stop using this class and should we remove
const DROPDOWN_CONTAINER_CLASS = "dropdown-container";

export const DROPDOWNS_GA_EVENTS = {
  event: "collapse",
  type: "click",
};

export const LINK_DEFAULT_PROPS = {
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link",
  region: "navbar",
  section: "main navbar",
  text: "",
};

/**
 * @param {{ children: React.ReactNode }} props
 * @returns {JSX.Element}
 */

const NavLinkIcon = ({ children }) => {
  return (
    <>
      {/* @ts-ignore */}
      <FontAwesomeIcon icon={faHome} className="icon-nav-item" alt="" />
      <span className="mobile-only">{children}</span>
    </>
  );
};

NavLinkIcon.propTypes = {
  children: PropTypes.node,
};

/**
 * @typedef {import('../../../../core/models/types').NavTreeProps} NavTreeProps
 */

/**
 * @param {{ link: NavTreeProps, setItemOpened: Function, itemOpened: number }} props
 * @returns {JSX.Element}
 *
 */

const NavItem = ({ link, setItemOpened, itemOpened }) => {
  const clickRef = useRef(null);
  const parentLink = useRef(null);
  const opened = link.id === itemOpened;
  const { breakpoint, expandOnHover, title } = useAppContext();
  const isMobile = useIsMobile(breakpoint);

  useEffect(() => {
    const handleClickOutside = event => {
      if (opened && !clickRef?.current?.contains(event.target)) {
        setItemOpened();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [opened]);

  const renderNavLinks = useMemo(() => {
    if (link.type === "icon-home") {
      return <NavLinkIcon>{link.text}</NavLinkIcon>;
    }
    return (
      <span>
        {link.text}
        {!!link.items?.length && (
          <FontAwesomeIcon
            // @ts-ignore
            icon={faChevronDown}
            className={`chevron-icon ${opened ? "open" : ""}`}
            // @ts-ignore
            alt=""
          />
        )}
      </span>
    );
  }, [link]);

  const dispatchGAEvent = () => {
    const isDropdown = !!link.items?.length;
    const action = opened ? "close" : "open";
    const { text } = link;
    trackGAEvent(
      // @ts-ignore
      isDropdown
        ? {
            ...LINK_DEFAULT_PROPS,
            ...DROPDOWNS_GA_EVENTS,
            action,
            text,
          }
        : {
            ...LINK_DEFAULT_PROPS,
            text: link.type === "icon-home" ? "home button" : text,
          }
    );
  };

  const handleKeyDown = e => {
    if (!link.items && link.href) {
      trackGAEvent({ ...LINK_DEFAULT_PROPS, text: link.text });
      return;
    }
    const { key } = e;
    const navigableKeys = [
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "Enter",
      " ",
      "Escape",
      "Click",
    ];
    if (navigableKeys.includes(key)) {
      e.preventDefault();
      if (key === "Escape" && opened) {
        setItemOpened();
        return;
      }
      // Handle Enter or Space key
      if (key === "Enter" || key === " ") {
        if (link.items) {
          if (!expandOnHover && !isMobile) {
            setItemOpened();
          } else if (isMobile) {
            setItemOpened();
          }
        }
        dispatchGAEvent();
        link.onClick?.(e);
      }
      if (key === "ArrowDown" || key === "ArrowRight") {
        if (opened) {
          const dropdownItems = document.querySelectorAll(
            `.header-dropdown-${link.id} li.nav-link a`
          );
          if (dropdownItems.length) {
            dropdownItems[0].focus();
          }
        }
      }
    } else if (e.type === "click" && link.items) {
      e.preventDefault();
      dispatchGAEvent();
      setItemOpened();
    } else if (e.type === "click") {
      dispatchGAEvent();
      link.onClick?.(e);
    }
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
      ref={clickRef}
      onMouseEnter={handleOnMouseEnterLeave}
      onMouseLeave={handleOnMouseEnterLeave}
    >
      {/* @ts-ignore */}
      <a
        onKeyDown={handleKeyDown}
        onClick={handleKeyDown}
        href={link.href}
        {...(link.items ? { "aria-expanded": opened } : {})}
        {...(!link.href ? { tabIndex: 0 } : {})}
        aria-owns={link.items ? `dropdown-${link.id}` : null}
        className={`${link.class ? link.class : ""}${
          link.selected ? " nav-item-selected" : ""
        }${opened ? " open-link" : ""}`}
        data-testid="nav-item"
        title={
          link.type === "icon-home" && title ? `${title} home page` : link.text
        }
        ref={parentLink}
      >
        {renderNavLinks}
      </a>
      {link.items && (
        <DropdownItem
          items={link.items}
          // @ts-ignore
          buttons={link.buttons}
          // @ts-ignore
          dropdownName={link.text}
          classes={`header-dropdown-${link.id} ${opened ? "opened" : ""}`}
          listId={`dropdown-${link.id}`}
          setItemOpened={setItemOpened}
          parentLink={parentLink?.current}
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
