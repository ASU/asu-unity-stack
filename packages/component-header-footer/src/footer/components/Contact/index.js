// @ts-check
import PropTypes, { shape, arrayOf } from "prop-types";
import React from "react";

import { Button } from "../../../header/components/Button";
import { ColumnSection } from "../ColumnSection";

/**
 * @typedef {import("../../core/models/types").Contact} Contact
 *
 * @param {{contact: Contact}} props
 */

const ContactComponent = ({
  contact: { title = "", contactLink = "", contributionLink = "", columns },
}) => {
  return (
    <div className="wrapper" id="wrapper-footer-columns" data-testid="contact">
      <div className="container" id="footer-columns">
        <div className="row" data-testid="columns-container">
          <div className="col-xl-3" id="info-column">
            <div className="h5">{title}</div>
            {contactLink && (
              <p className="contact-link">
                <a href={contactLink}>Contact Us</a>
              </p>
            )}
            {contributionLink && (
              <p
                className="contribute-button"
                data-testid="contact-contribution-link"
              >
                <Button
                  color="gold"
                  href={contributionLink}
                  text="Support ASU"
                  classes="btn"
                />
              </p>
            )}
          </div>
          {columns && columns.length && (
            <>
              {columns.map((column, columnIndex) => (
                <ColumnSection
                  key={`footlink-${column.title}`}
                  columnIndex={columnIndex}
                  column={column}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

ContactComponent.propTypes = {
  contact: shape({
    title: PropTypes.string.isRequired,
    contactLink: PropTypes.string.isRequired,
    contributionLink: PropTypes.string,
    columns: arrayOf(
      shape({
        title: PropTypes.string,
        links: arrayOf(
          shape({
            url: PropTypes.string.isRequired,
            title: PropTypes.string,
            text: PropTypes.string.isRequired,
          })
        ),
      })
    ),
  }),
};

export { ContactComponent };
