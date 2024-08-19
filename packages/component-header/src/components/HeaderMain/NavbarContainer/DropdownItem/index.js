import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";

import { idGenerator, trackGAEvent } from "../../../../../../../shared";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useAppContext } from "../../../../core/context/app-context";
import { ButtonPropTypes } from "../../../../core/models/app-prop-types";
import { Button } from "../../../Button";
import { DropdownWrapper } from "./index.styles";

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
 *
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

  const stopPropagation = e => {
    e.stopPropagation();
  };

  const handleLinkFocus = e => {
    stopPropagation(e);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextLink = e.target.parentElement.nextElementSibling?.firstChild;
      if (nextLink) {
        nextLink.focus();
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevLink =
        e.target.parentElement.previousElementSibling?.firstChild;
      if (prevLink) {
        prevLink.focus();
      }
    } else if (e.key === "Escape") {
      setItemOpened();
      if (parentLink) {
        parentLink.focus();
      }
    }
  };

  const renderItem = (link, index) => {
    const key = `${link.text}-${link.href || index}`;
    if (link.type === "heading") {
      return (
        <h3 key={key} className="ul-heading">
          {link.text}
        </h3>
      );
    }
    if (link.type === "button") {
      return (
        <li key={key} className="nav-button">
          <Button
            text={link.text}
            color={link.color || "dark"}
            href={link.href}
            onClick={stopPropagation}
            onFocus={() =>
              trackGAEvent({ text: link.text, component: dropdownName })
            }
          />
        </li>
      );
    }
    return (
      <li key={key} className="nav-link">
        <a
          href={link.href}
          onClick={stopPropagation}
          onKeyDown={handleLinkFocus}
          onFocus={() =>
            trackGAEvent({ text: link.text, component: dropdownName })
          }
        >
          {link.text}
        </a>
      </li>
    );
  };

  return (
    <DropdownWrapper
      ref={dropdownRef}
      className={`${classes}${alignedRight ? " aligned-right" : ""}${
        isMega ? " mega" : ""
      }`}
      // @ts-ignore
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
  items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
  buttons: PropTypes.arrayOf(PropTypes.shape(ButtonPropTypes)),
  classes: PropTypes.string,
  listId: PropTypes.string,
  setItemOpened: PropTypes.func,
  parentLink: PropTypes.shape({
    focus: PropTypes.func,
  }),
};

export { DropdownItem };
