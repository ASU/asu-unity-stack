// @ts-check
import { idGenerator } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React from "react";

import { linkPropShape } from "../../../../core/models";
import { trackGAEvent } from "../../../../core/services/google-analytics";

/**
 *
 * @param {{
 *  breadcrumbs: import("src/core/types/detail-page-types").BreadcrumbItem [],
 *  section: string
 * }} param0
 * @returns
 */
function Breadcrumbs({ breadcrumbs, section }) {
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
                <a
                  href={bread?.url}
                  onClick={() =>
                    trackGAEvent({
                      event: "link",
                      action: "click",
                      name: "onclick",
                      type: "internal link",
                      region: "main content",
                      section,
                      text: bread.text,
                    })
                  }
                >
                  {bread.text}
                </a>
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
  section: PropTypes.string,
};

export { Breadcrumbs };
