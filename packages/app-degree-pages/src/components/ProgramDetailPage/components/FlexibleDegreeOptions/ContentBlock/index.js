// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { flexibleDegreeOptionsLinks } from "../../../../../core/models";
import { List } from "./index.style";

/**
 * @typedef {import('../../../../../core/models/program-detail-types').FlexibleDegreeOptionItem} FlexibleDegreeOptionItem
 */

/**
 * @typedef {{
 *  title: string
 *  links: FlexibleDegreeOptionItem[]
 * }} ContentBlockProps
 */

/**
 *
 * @param {ContentBlockProps} props
 * @returns
 */

const ContentBlock = ({ title, links }) => {
  return (
    <div className="mt-4">
      <h3>{title}</h3>
      <p>
        This program allows students to obtain both a bachelor&apos;s and
        master&apos;s degree in as little as five years. It is offered as an
        accelerated bachelor&apos;s and master&apos;s degree with:
      </p>
      <List className="mt-3 mb-3">
        {links.map(link => (
          <li>
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.title}
            </a>
          </li>
        ))}
      </List>
      <p>
        Acceptance to the graduate program requires a separate application.
        During their junior year, eligible students will be advised by their
        academic departments to apply.
      </p>
    </div>
  );
};

ContentBlock.propTypes = {
  title: PropTypes.string,
  links: flexibleDegreeOptionsLinks,
};

export { ContentBlock };
