// @ts-check
import { idGenerator } from "@asu-ke/components-core";
import PropTypes from "prop-types";
import React from "react";

import { linkPropShape } from "../../../../core/models";

/**
 *
 * @param {{breadcrumbs: import("src/core/types/detail-page-types").BreadcrumbItem []}} param0
 * @returns
 */
function Breadcrumbs({ breadcrumbs }) {
  const genId = idGenerator("breadcrumb-");

  return (
    breadcrumbs && (
      <nav aria-label="breadcrumbs" data-testid="breadcrumbs">
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
  breadcrumbs: PropTypes.arrayOf(linkPropShape),
};

export { Breadcrumbs };
