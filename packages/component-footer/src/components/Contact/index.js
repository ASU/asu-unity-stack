// @ts-check
import PropTypes, { shape, arrayOf } from "prop-types";
import React from "react";

import { ColumnSection } from "../ColumnSection";

/**
 * @param {{
 *  contact: import('../../core/models/types').Contact
 * }} props
 * @returns {JSX.Element}
 */
const Contact = ({
  contact: { title, contactLink, contributionLink, columns },
}) => {
  return (
    <div className="wrapper" id="wrapper-footer-columns" data-testid="contact">
      <div className="container" id="footer-columns">
        <div className="row" data-testid="columns-container">
          <div className="col-xl-3" id="info-column">
            <h5>{title}</h5>
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
                <a href={contributionLink} className="btn btn-small btn-gold">
                  Contribute
                </a>
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

Contact.propTypes = {
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

Contact.defaultProps = {
  contact: {
    title: "",
    contactLink: "",
    contributionLink: "",
  },
};

export { Contact };
