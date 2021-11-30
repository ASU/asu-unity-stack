// eslint-disable-next-line import/no-extraneous-dependencies
import { idGenerator } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";

import { useAppContext } from "../../../../core/context/app-context";
import { ButtonPropTypes } from "../../../../core/models/app-prop-types";
import { trackGAEvent } from "../../../../core/services/googleAnalytics";
import { Button } from "../../../Button";
import { DropdownWrapper } from "./index.styles";

/**
 * @typedef { import("../../../../core/models/types").Button } Button
 * @typedef {{
 *  dropdownName: string
 *  items: [object][]
 *  buttons: Button[]
 *  classes?: string,
 * }} DropdownItemProps
 */

/**
 *
 * @param {DropdownItemProps} props
 * @returns {JSX.Element}
 */

const DropdownItem = ({ dropdownName, items, buttons, classes }) => {
  const { breakpoint } = useAppContext();
  const isMega = items?.length > 2;
  const dropdownRef = useRef(null);
  const [alignedRight, setAlignedRight] = useState(false);

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
      <div className="dropdown-container">
        {items?.map((item, index0) => {
          const genKey = idGenerator(`dropdown-item-${index0}-`);
          const key = genKey.next().value;
          return (
            <ul key={key}>
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
};

export { DropdownItem };
