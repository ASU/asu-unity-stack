// @ts-check

import PropTypes from "prop-types";
import React from "react";

import { linkPropType } from "../../../../core/models";
import { idGenerator } from "../../../../core/utils";

/**
 *
 * @param {{breadcrumbs: import("src/core/models/program-detail-types").BreadcrumbItem []}} param0
 * @returns
 */
function Breadcrumbs({ breadcrumbs }) {
  const genId = idGenerator("breadcrumb-");

  return (
    breadcrumbs && (
      <nav aria-label="breadcrumbs">
        <ol className="breadcrumb bg-white">
          {breadcrumbs.map(bread =>
            bread?.isActive ? (
              <li
                key={genId.next().value}
                className="breadcrumb-item active"
                aria-current="page"
              >
                {bread.text}
              </li>
            ) : (
              <li key={genId.next().value} className="breadcrumb-item">
                <a href={bread?.url}>{bread.text}</a>
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
