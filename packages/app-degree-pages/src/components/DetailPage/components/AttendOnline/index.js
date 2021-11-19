// @ts-check
import { Button, idGenerator } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React from "react";

import { progDetailSectionIds } from "../../../../core/models";
import { imagePropShape } from "../../../../core/models/app-prop-types";

const defaultText = `
ASU offers this program in an online format
 with multiple enrollment sessions throughout
  the year. Applicants may view the program
   description and request more information.`;

/**
 *
 * @param {import("src/core/types/detail-page-types").AttendOnlineProps & {
 *  learnMoreLink: string
 * }} props
 * @returns
 */
function AttendOnline({ image, learnMoreLink, contents }) {
  const backgroundImage =
    `linear-gradient(180deg, #19191900 0%, #191919c9 100%),` +
    `url('${image.url}')`;
  const genId = idGenerator("attend-online-");
  return (
    <section
      id={progDetailSectionIds.attendOnline.targetIdName}
      className="uds-card-and-image"
      style={{
        backgroundImage,
      }}
      data-testid="attend-online"
    >
      <div className="uds-card-and-image-container">
        <div className="card card-centered">
          <i className="fas fa-wifi fa-2x card-icon-top" />
          <div className="card-header">
            <h3 className="card-title">Attend online</h3>
          </div>
          <div className="card-body">
            {contents ? (
              contents.map(content => <p key={genId.next().value}>{content}</p>)
            ) : (
              <p>{defaultText}</p>
            )}
          </div>
          <div className="card-button">
            <Button
              label="Learn about online options"
              ariaLabel="Learn about online options"
              href={learnMoreLink}
              color="maroon"
              size="small"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

AttendOnline.propTypes = {
  learnMoreLink: PropTypes.string,
  image: imagePropShape,
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
    })
  ),
};

export { AttendOnline };
