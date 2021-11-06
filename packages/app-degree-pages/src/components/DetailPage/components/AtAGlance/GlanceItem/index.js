// @ts-check
import { idGenerator } from "@asu-ke/components-core";
import PropTypes from "prop-types";
import React, { Fragment } from "react";

import {
  glanceItemPropShape,
  glanceItemsMap,
} from "../../../../../core/models";

/**
 * @typedef {import('../../../../../core/types/shared-types').LinkItem} AtAGlanceItem
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
  const genId = idGenerator("glance-");

  const renderContent = () => {
    if (typeof item === "object") {
      return item.map((loc, index) => {
        const url = ["", "#"].includes(loc.url) ? null : loc.url;
        let separator = "";
        if (index > 0 && index < item.length - 1) {
          separator = ", ";
        }
        if (index === item.length - 1 && item.length > 1) {
          separator = " or ";
        }
        return (
          <Fragment key={genId.next().value}>
            {separator}
            <a href={url} rel="noreferrer" target="_blank">
              {loc.text}
            </a>
          </Fragment>
        );
      });
    }
    return item;
  };

  return (
    <li>
      <i className={`fas fa-${glanceItemsMap[type].icon} fa-li`} />
      <strong>{glanceItemsMap[type].title}: </strong>
      {renderContent()}
    </li>
  );
};

GlanceItem.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.arrayOf(glanceItemPropShape),
    PropTypes.string,
  ]),
  type: PropTypes.string,
};
