/* eslint-disable react/no-danger */
// @ts-check
import PropTypes from "prop-types";
import React from "react";
import { spreadClasses } from "../../../../../components-core/src/core/utils/css-utils";
import { sanitizeDangerousMarkup } from "../../../../../components-core/src/core/utils/html-utils";
import { idGenerator } from "../../../../../components-core/src/core/utils/id-generator";

import { contentPropShape } from "../../models";
import { isHtml } from "../../utils";

/**
 *
 * @param {{
 *     contents: import("../../types/shared-types").ContentItem []
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
            dangerouslySetInnerHTML={sanitizeDangerousMarkup(content.text)}
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
