// @ts-check
import PropTypes from "prop-types";
import React, { Fragment } from "react";

import { glanceItemPropType, glanceItemsMap } from "../../../models";
import { idGenerator } from "../../../utils/id-generator";

/**
 * @typedef {import('../../../models/shared-types').LinkItem} AtAGlanceItem
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
      return item.map((el, key) => (
        <Fragment key={genId.next().value}>
          {key === 2 && " or"}
          <a href={el.url} rel="noreferrer" target="_blank">
            {el.text}
          </a>
          {key < item.length - 1 && ","}
        </Fragment>
      ));
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
    PropTypes.arrayOf(glanceItemPropType),
    PropTypes.string,
  ]),
  type: PropTypes.string,
};
