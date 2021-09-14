// @ts-check
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes, { shape, arrayOf } from "prop-types";
import React, { useState } from "react";

/**
 * @param {{
 *  columnIndex: number
 *  column?: import("../../core/models/types").Column
 * }} props
 * @returns {JSX.Element}
 */
const ColumnSection = ({ columnIndex, column: { title, links } }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="col-xl flex-footer">
      <div className="card card-foldable desktop-disable-xl">
        <div
          className="card-header"
          role="button"
          onClick={() => setShow(!show)}
          onKeyDown={() => setShow(!show)}
          tabIndex={0}
        >
          <h5>
            <a
              id={`footlink-header-${columnIndex}`}
              className="collapsed"
              href={`#footlink-${columnIndex}`}
              role="button"
            >
              {title}
              <FontAwesomeIcon icon={faChevronUp} />
            </a>
          </h5>
        </div>
        <div
          id={`footlink-${columnIndex}`}
          className={`collapse card-body ${show ? "show" : ""}`}
        >
          {links.map(link => (
            <a
              key={`footlink-${title}-link-${link.text}`}
              className="nav-link"
              href={link.url}
              title={link.title}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

ColumnSection.propTypes = {
  columnIndex: PropTypes.number.isRequired,
  column: shape({
    title: PropTypes.string,
    links: arrayOf(
      shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string,
        text: PropTypes.string.isRequired,
      })
    ),
  }),
};

export { ColumnSection };
