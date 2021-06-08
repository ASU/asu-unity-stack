// @ts-check
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";

import { glanceItemPropType } from "../../../models/app-prop-types";
import { glanceItemsMap } from "../../../models/constants";

/**
 * @typedef {import('../../../models/app-props').AtAGlanceItem} AtAGlanceItem
 * @typedef {{
 *  item: AtAGlanceItem[] | string
 *  type: string
 * }} GlanceItemProps
 */

/**
 * @param {GlanceItemProps} param
 * @returns {JSX.Element}
 */

export const GlanceItem = ({ item, type }) => {
  const renderContent = () => {
    if (typeof item === "object") {
      return item.map((el, key) => (
        <>
          {key === 2 && " or"}
          <a href={el.url} rel="noreferrer" target="_blank">
            {el.text}
          </a>
          {key < item.length - 1 && ","}
        </>
      ));
    }
    return item;
  };

  return (
    <li>
      <FontAwesomeIcon icon={glanceItemsMap[type].icon} className="fa-li" />
      <strong>{glanceItemsMap[type].title}: </strong>
      {renderContent()}
    </li>
  );
};

GlanceItem.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.arrayOf(glanceItemPropType),
    PropTypes.string,
  ]),
  type: PropTypes.string,
};
