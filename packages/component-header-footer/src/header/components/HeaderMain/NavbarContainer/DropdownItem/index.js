// @ts-check
import { idGenerator, trackGAEvent } from "@asu/shared";
import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";

import { useAppContext } from "../../../../core/context/app-context";
import { CLASS_NAMES } from "../../../../core/constants/classNames";
import { ButtonPropTypes } from "../../../../core/models/app-prop-types";
import { Button } from "../../../Button";
import { DropdownWrapper } from "./index.styles";

const LINK_DEFAULT_PROPS = {
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link",
  region: "navbar",
  section: "main navbar",
  component: "dropdown menu",
  text: "",
};

const HeadingItem = ({ text }) => (
  <h3 className={CLASS_NAMES.UL_HEADING}>{text}</h3>
);

HeadingItem.propTypes = {
  text: PropTypes.string,
};

const ButtonItem = ({ link, dropdownName, handleLinkEvent }) => (
  <div className={CLASS_NAMES.NAV_BUTTON}>
    <Button
      text={link.text}
      color={link.color || "maroon"}
      href={link.href}
      onClick={e => handleLinkEvent(e, link)}
      onKeyDown={e => handleLinkEvent(e, link)}
    />
  </div>
);

ButtonItem.propTypes = {
  link: PropTypes.shape({
    text: PropTypes.string,
    color: PropTypes.string,
    href: PropTypes.string,
  }),
  dropdownName: PropTypes.string,
  handleLinkEvent: PropTypes.func,
};

const LinkItem = ({ link, dropdownName, handleLinkEvent }) => (
  <li className={CLASS_NAMES.NAV_LINK}>
    <a
      {...(!link.href ? { tabIndex: 0 } : {})}
      href={link.href}
      onClick={e => handleLinkEvent(e, link)}
      onKeyDown={e => handleLinkEvent(e, link)}
    >
      {link.text}
    </a>
  </li>
);

LinkItem.propTypes = {
  link: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
  }),
  dropdownName: PropTypes.string,
  handleLinkEvent: PropTypes.func,
};

/**
 * @typedef { import("../../../../core/models/types").Button } Button
 * @typedef {{
 *  dropdownName: string
 *  items: Array<Array<object>>
 *  buttons: Button[]
 *  classes?: string,
 *  listId: string
 *  opened: boolean
 *  parentLink: React.RefObject<HTMLElement> | null
 * }} DropdownItemProps
 */

/**
 * @param {DropdownItemProps} props
 * @returns {JSX.Element}
 */
const DropdownItem = ({
  dropdownName,
  items,
  buttons,
  classes,
  listId,
  opened,
  parentLink,
}) => {
  const {
    breakpoint,
    headerHeight,
    setItemOpened,
    setMobileMenuOpen,
    mobileMenuOpen,
  } = useAppContext();
  let cols = 0;
  items.map(lists => {
    cols += lists[0].span || 1;
  });

  const isMega = cols > 2;
  /**
   * @type {React.MutableRefObject<HTMLDivElement|null>}
   */
  const dropdownRef = useRef(null);
  const [alignedRight, setAlignedRight] = useState(false);
  const MULTIPLE_SUBMENUS = items?.length > 1;

  useEffect(() => {
    if (window && dropdownRef.current) {
      const elPosition = dropdownRef?.current?.getBoundingClientRect().left;
      const breakpointPosition = window.innerWidth * 0.55;
      setAlignedRight(elPosition > breakpointPosition);
    }
  }, []);
  useEffect(() => {
    if (opened && dropdownRef?.current?.parentElement) {
      dropdownRef.current.parentElement.scrollIntoView(
        /** @type {ScrollIntoViewOptions} */ {
          behavior: "smooth",
          block: "start",
        }
      );
    }
  }, [dropdownRef, opened]);

  const stopPropagation = e => e.stopPropagation();

  const handleLinkEvent = (e, link) => {
    const { key, type, target } = e;
    const { parentElement } = target;

    const focusNextLink = () => {
      const nextLink = parentElement.nextElementSibling?.firstChild;
      if (typeof nextLink?.focus === "function") nextLink.focus();
    };

    const focusPrevLink = () => {
      const prevLink = parentElement.previousElementSibling?.firstChild;
      if (typeof prevLink?.focus === "function") prevLink.focus();
    };
    stopPropagation(e);

    if (key === "ArrowDown") {
      e.preventDefault();
      focusNextLink();
    } else if (key === "ArrowUp") {
      e.preventDefault();
      focusPrevLink();
    } else if (key === "Escape" && opened) {
      setItemOpened();
      if (typeof parentLink?.current?.focus === "function") {
        parentLink.current.focus();
      }
    } else if (key === "Escape" && !opened && mobileMenuOpen) {
      setMobileMenuOpen(false);
    } else if (key === "Enter" || key === " " || type === "click") {
      // Single page apps do not leave the page on link click,
      // so we need to manually close the menu and trigger the onClick event
      setMobileMenuOpen(false);
      setItemOpened();
      link?.onClick?.(e);
      trackGAEvent({ ...LINK_DEFAULT_PROPS, text: link.text });
    }
  };

  const renderItem = (link, index) => {
    const key = `${link.text}-${link.href}-${index}`;
    if (link.type === "heading")
      return <HeadingItem key={key} text={link.text} />;
    if (link.type === "button")
      return (
        <ButtonItem
          key={key}
          link={link}
          dropdownName={dropdownName}
          handleLinkEvent={handleLinkEvent}
        />
      );
    return (
      <LinkItem
        key={key}
        link={link}
        dropdownName={dropdownName}
        handleLinkEvent={handleLinkEvent}
      />
    );
  };

  return (
    <DropdownWrapper
      ref={dropdownRef}
      className={`${classes}${alignedRight ? " aligned-right" : ""}${
        isMega ? " mega" : ""
      }`}
      breakpoint={breakpoint}
      headerHeight={headerHeight}
    >
      <div
        style={{ "--cols": cols < 3 ? 4 : cols }}
        id={MULTIPLE_SUBMENUS ? listId : ""}
        className={CLASS_NAMES.DROPDOWN_CONTAINER}
      >
        <>
          {items?.map((item, index0) => {
            const genKey = idGenerator(`dropdown-item-${index0}-`);
            const key = genKey.next().value;
            return (
              <div
                className={CLASS_NAMES.DROPDOWN_CONTAINER_COLUMN}
                style={{ "--span": item[0].span || 1 }}
                key={`${listId}-${key}`}
                id={MULTIPLE_SUBMENUS ? `${listId}-${key}` : listId}
              >
                {(() => {
                  let currentUl = [];
                  const uls = [];
                  item.forEach((link, index) => {
                    if (link.type === "heading") {
                      if (currentUl.length > 0) {
                        uls.push(currentUl);
                        currentUl = [];
                      }
                      uls.push([link]);
                    } else if (link.type === "button") {
                      if (currentUl.length > 0) {
                        uls.push(currentUl);
                        currentUl = [];
                      }
                      uls.push([link]);
                    } else {
                      currentUl.push(link);
                    }
                  });

                  if (currentUl.length > 0) {
                    uls.push(currentUl);
                  }

                  return uls.map((group, groupIndex) => {
                    const groupKey = `${key}-group-${groupIndex}`;
                    if (group.length === 1 && group[0].type === "heading") {
                      return renderItem(group[0], groupIndex);
                    }
                    if (group.length === 1 && group[0].type === "button") {
                      return renderItem(group[0], groupIndex);
                    }
                    return (
                      <ul key={groupKey}>
                        {group.map((link, index) => renderItem(link, index))}
                      </ul>
                    );
                  });
                })()}
              </div>
            );
          })}
        </>
      </div>
      {buttons && (
        <div className={CLASS_NAMES.DROPDOWN_BUTTON_CONTAINER}>
          <div>
            {buttons.map((button, index) => (
              <Button
                key={`${button.text}-${button.href || index}`}
                color={button.color}
                text={button.text}
                href={button.href}
                onClick={stopPropagation}
              />
            ))}
          </div>
        </div>
      )}
    </DropdownWrapper>
  );
};

DropdownItem.propTypes = {
  dropdownName: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        selected: PropTypes.bool,
        onClick: PropTypes.func,
        href: PropTypes.string,
      })
    )
  ),
  buttons: PropTypes.arrayOf(PropTypes.shape(ButtonPropTypes)),
  classes: PropTypes.string,
  listId: PropTypes.string,
  opened: PropTypes.bool,
  setItemOpened: PropTypes.func,
  parentLink: PropTypes.shape({
    current: PropTypes.instanceOf(HTMLElement),
  }),
};

export { DropdownItem };
