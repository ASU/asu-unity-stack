import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";

import { idGenerator, trackGAEvent } from "../../../../../../../shared";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useAppContext } from "../../../../core/context/app-context";
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
  text: "",
};

const HeadingItem = ({ text }) => <h3 className="ul-heading">{text}</h3>;

HeadingItem.propTypes = {
  text: PropTypes.string,
};

const ButtonItem = ({ link, dropdownName, handleLinkEvent }) => (
  <li className="nav-button">
    <Button
      text={link.text}
      color={link.color || "dark"}
      href={link.href}
      onClick={e => handleLinkEvent(e, link)}
      onKeyDown={handleLinkEvent}
      onFocus={() => trackGAEvent({ text: link.text, component: dropdownName })}
    />
  </li>
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
  <li className="nav-link">
    <a
      {...(!link.href ? { tabIndex: 0 } : {})}
      href={link.href}
      onClick={e => handleLinkEvent(e, link)}
      onKeyDown={e => handleLinkEvent(e, link)}
      onFocus={() => trackGAEvent({ text: link.text, component: dropdownName })}
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
 *  items: [object][]
 *  buttons: Button[]
 *  classes?: string,
 *  listId: string
 *  setItemOpened: Function
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
  setItemOpened,
  parentLink,
}) => {
  const { breakpoint } = useAppContext();
  const isMega = items?.length > 2;
  const dropdownRef = useRef(null);
  const [alignedRight, setAlignedRight] = useState(false);
  const MULTIPLE_SUBMENUS = items?.length > 1;

  useEffect(() => {
    if (window && dropdownRef.current) {
      const elPosition = dropdownRef.current.getBoundingClientRect().left;
      const breakpointPosition = window.innerWidth * 0.55;
      setAlignedRight(elPosition > breakpointPosition);
    }
  }, []);

  const stopPropagation = e => e.stopPropagation();

  const handleLinkEvent = (e, link) => {
    const { key, type, target } = e;
    const { parentElement } = target;

    const focusNextLink = () => {
      const nextLink = parentElement.nextElementSibling?.firstChild;
      if (nextLink) nextLink.focus();
    };

    const focusPrevLink = () => {
      const prevLink = parentElement.previousElementSibling?.firstChild;
      if (prevLink) prevLink.focus();
    };

    stopPropagation(e);

    if (key === "ArrowDown") {
      e.preventDefault();
      focusNextLink();
    } else if (key === "ArrowUp") {
      e.preventDefault();
      focusPrevLink();
    } else if (key === "Escape") {
      setItemOpened();
      if (parentLink) parentLink.focus();
    } else if (key === "Enter" || key === " " || type === "click") {
      link?.onClick?.(e);
      trackGAEvent({ ...LINK_DEFAULT_PROPS, text: link.text });
    }
  };

  const renderItem = (link, index) => {
    const key = `${link.text}-${link.href || index}`;
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
    >
      <div
        id={MULTIPLE_SUBMENUS ? listId : null}
        className="dropdown-container"
      >
        {items?.map((item, index0) => {
          const genKey = idGenerator(`dropdown-item-${index0}-`);
          const key = genKey.next().value;
          return (
            <ul id={MULTIPLE_SUBMENUS ? `${listId}-${key}` : listId} key={key}>
              {item.map((link, index) => renderItem(link, index))}
            </ul>
          );
        })}
      </div>
      {buttons && (
        <div className="dropdown-button-container">
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
    PropTypes.shape({
      text: PropTypes.string,
      selected: PropTypes.bool,
      onClick: PropTypes.func,
      href: PropTypes.string,
    })
  ),
  buttons: PropTypes.arrayOf(PropTypes.shape(ButtonPropTypes)),
  classes: PropTypes.string,
  listId: PropTypes.string,
  setItemOpened: PropTypes.func,
  parentLink: PropTypes.shape({
    focus: PropTypes.func,
  }),
};

export { DropdownItem };
