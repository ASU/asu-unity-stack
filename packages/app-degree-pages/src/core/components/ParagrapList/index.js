/* eslint-disable react/no-danger */
// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { contentPropShape } from "../../models";
import { idGenerator, isHtml, sanitizeHTML, spreadClasses } from "../../utils";

/**
 *
 * @param {{
 *     contents: import("../../models/shared-types").ContentItem []
 * }} props
 * @returns {JSX.Element}
 */
function ParagrapList({ contents = [] }) {
  const genId = idGenerator("paragrap-");

  return (
    <>
      {contents.map(content =>
        isHtml(content.text) ? (
          <div
            key={genId.next().value}
            dangerouslySetInnerHTML={sanitizeHTML(content.text)}
          />
        ) : (
          <p
            key={genId.next().value}
            className={`${spreadClasses(content.cssClass)}`}
          >
            {content.text}
          </p>
        )
      )}
    </>
  );
}

ParagrapList.propTypes = {
  contents: PropTypes.arrayOf(contentPropShape),
};

export { ParagrapList };
