// @ts-check
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes, { shape, arrayOf } from "prop-types";
import React, { useState, useEffect } from "react";

import { Accordion } from "../../../../../unity-react-core/dist/esm/components/Accordion.es";

/**
 * @typedef {import("../../core/models/types").Column} Column
 */

/**
 * @param {{ columnIndex: number, column: Column }} props
 * @returns {JSX.Element}
 */

const ColumnSection = ({ columnIndex, column: { title, links } }) => {
  const [show, setShow] = useState(false);
  const isWindowDefined = typeof window !== "undefined";
  const initialMatches = isWindowDefined ? window.innerWidth >= 1260 : false;
  const [isLgDesktop, setIsLgDesktop] = useState(initialMatches);

  useEffect(() => {
    const mediaWatcher = window.matchMedia("screen and (min-width: 1260px)");
    const handleMediaChange = e => setIsLgDesktop(e.matches);

    mediaWatcher.addEventListener("change", handleMediaChange);
    handleMediaChange(mediaWatcher);
    return () => mediaWatcher.removeEventListener("change", handleMediaChange);
  }, []);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div className="col-xl flex-footer testname-column">
      <div className="card accordion-item desktop-disable-xl">
        <div className="accordion-header">
          <div className="h5">
            <button
              id={`footlink-header-${columnIndex}`}
              className="accordion-button"
              aria-expanded={show || isLgDesktop}
              aria-controls={`footlink-${columnIndex}`}
              onClick={handleToggle}
              type="button"
            >
              {title}
              <FontAwesomeIcon
                className={show || isLgDesktop ? "open" : ""}
                icon={faChevronDown}
              />
            </button>
          </div>
        </div>
        <div
          id={`footlink-${columnIndex}`}
          className={`accordion-body ${show ? "show" : ""}`}
          role="region"
          aria-labelledby={`footlink-header-${columnIndex}`}
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
