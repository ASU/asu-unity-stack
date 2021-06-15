// @ts-check

import React from "react";
import PropTypes from "prop-types";

import { linkPropType } from "../../../../core/models";

/**
 *
 * @param {{breadcrumbs: import("src/core/models/shared-types").LinkItem []}} param0
 * @returns
 */
function Breadcrumbs({ breadcrumbs }) {
  return (
    breadcrumbs && (
      <nav aria-label="breadcrumbs">
        <ol className="breadcrumb bg-white">
          {breadcrumbs.map(bread =>
            bread.isActive ? (
              <li className="breadcrumb-item active" aria-current="page">
                {bread.text}
              </li>
            ) : (
              <li className="breadcrumb-item">
                <a href={bread.url}>{bread.text}</a>
              </li>
            )
          )}
        </ol>
      </nav>
    )
  );
}

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.arrayOf(linkPropType),
};

export { Breadcrumbs };
