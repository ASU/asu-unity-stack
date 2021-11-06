/* eslint-disable react/no-danger */
// @ts-check
import {
  spreadClasses,
  sanitizeDangerousMarkup,
  idGenerator,
} from "@asu-ke/components-core";
import PropTypes from "prop-types";
import React from "react";

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
