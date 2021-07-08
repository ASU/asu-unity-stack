import PropTypes from "prop-types";
import React from "react";

import { useAppContext } from "../../../../core/context/app-context";
import { ButtonPropTypes } from "../../../../core/models/app-prop-types";
import { idGenerator } from "../../../../utils/id-generator";
import { Button } from "../../../Button";
import { DropdownWrapper } from "./index.styles";

/**
 * @typedef { import("../../../../core/models/types").Button } Button
 * @typedef {{
 *  buttons: Button[]
 *  items: [object][]
 * }} DropdownItemProps
 */

/**
 *
 * @param {DropdownItemProps} props
 * @returns {JSX.Element}
 */

const DropdownItem = ({ items, buttons }) => {
  const { breakpoint } = useAppContext();
  const isMega = items?.length > 2;

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
          />
        </li>
      );
    }
    return (
      <li key={key} className="nav-link">
        <a href={link.href} onClick={stopPropagation}>
          {link.text}
        </a>
      </li>
    );
  };

  return (
    <DropdownWrapper
      className={`${isMega ? "mega" : ""}`}
      // @ts-ignore
      breakpoint={breakpoint}
    >
      <div className="dropdown-container">
        {items?.map((item, index0) => {
          const genKey = idGenerator(`dropdown-item-${index0}`);
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
  items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
  buttons: PropTypes.arrayOf(PropTypes.shape(ButtonPropTypes)),
};

export { DropdownItem };
