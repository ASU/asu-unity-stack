// @ts-check
import { trackGAEvent } from "@asu/shared";
import { faChevronDown, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useRef, useEffect, useMemo } from "react";

import { useAppContext } from "../../../../core/context/app-context";
import {
  CLASS_NAMES,
  buildClassName,
  getDropdownClass,
} from "../../../../core/constants/classNames";
import { useIsMobile } from "../../../../core/hooks/isMobile";
import { NavTreePropTypes } from "../../../../core/models/app-prop-types";
import { DropdownItem } from "../DropdownItem";
import { NavItemWrapper } from "./index.styles";

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
      <FontAwesomeIcon
        icon={faHome}
        className={CLASS_NAMES.ICON_NAV_ITEM}
        alt=""
      />
      <span className={CLASS_NAMES.MOBILE_ONLY}>{children}</span>
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
  const {
    breakpoint,
    expandOnHover,
    title,
    mobileMenuOpen,
    setMobileMenuOpen,
  } = useAppContext();
  const isMobile = useIsMobile(breakpoint);

  const handleClickOutside = event => {
    if (opened && !clickRef?.current?.contains(event.target)) {
      setItemOpened();
    }
  };

  const handleFocusChange = () => {
    requestAnimationFrame(() => {
      const node = clickRef.current;

      if (opened && node && !node.contains(document.activeElement)) {
        setItemOpened();
      }
    });
  };
  useEffect(() => {
    if (opened) {
      document.addEventListener("click", handleClickOutside, true);
      document.addEventListener("focusin", handleFocusChange);
    } else {
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener("focusin", handleFocusChange);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener("focusin", handleFocusChange);
    };
  }, [opened, setItemOpened]);

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
            className={buildClassName(
              CLASS_NAMES.CHEVRON_ICON,
              opened && CLASS_NAMES.OPEN
            )}
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
    if (
      !link.items &&
      (link.href || link.onClick) &&
      (e.key === "Enter" || e.key === " " || e.type === "click")
    ) {
      trackGAEvent({ ...LINK_DEFAULT_PROPS, text: link.text });
      // Single page apps do not leave the page on link click,
      // so we need to manually close the menu and trigger the onClick event
      setMobileMenuOpen(false);
      setItemOpened();
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
        if (typeof clickRef?.current?.focus === "function") {
          clickRef.current.focus();
        }
        setItemOpened();
        return;
      }

      if (key === "Escape" && !opened && mobileMenuOpen) {
        setMobileMenuOpen(false);
        return;
      }
      // Handle Enter or Space key
      if (key === "Enter" || key === " ") {
        if (link.items) {
          // Regardless of state or props mobile/desktop/hover/click
          // if the item has a dropdown, we want to toggle it on Enter/Space
          setItemOpened();
        }
        dispatchGAEvent();
        link.onClick?.(e);
      }
      if (key === "ArrowDown" || key === "ArrowRight") {
        if (opened) {
          // Only need first matching item
          const dropdownItem = document.querySelector(
            `.${getDropdownClass(link.id)} li.${CLASS_NAMES.NAV_LINK} a`
          );
          if (typeof dropdownItem?.focus === "function") {
            dropdownItem.focus();
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
        className={buildClassName(
          link.class,
          link.selected && CLASS_NAMES.NAV_ITEM_SELECTED,
          opened && CLASS_NAMES.OPEN_LINK
        )}
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
          classes={buildClassName(
            getDropdownClass(link.id),
            opened && CLASS_NAMES.OPENED
          )}
          listId={`dropdown-${link.id}`}
          opened={opened}
          parentLink={parentLink}
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
