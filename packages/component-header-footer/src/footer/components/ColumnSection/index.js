// @ts-check
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes, { shape, arrayOf } from "prop-types";
import React, { useState, useEffect, useRef } from "react";

/**
 * @typedef {import("../../core/models/types").Column} Column
 */

/**
 * @param {Object} props - The component props
 * @param {number} props.columnIndex - The index of the column
 * @param {Column} props.column - The column data object
 * @param {boolean} [props.isOpen=false] - Whether the column is initially open
 * @param {Function} [props.onToggle] - Optional callback function for toggle events
 * @returns {JSX.Element}
 */

const ColumnSection = ({
  columnIndex,
  column: { title, links },
  isOpen = false,
  onToggle,
}) => {
  const [show, setShow] = useState(isOpen);
  const isWindowDefined = typeof window !== "undefined";
  const initialMatches = isWindowDefined ? window.innerWidth >= 1260 : false;
  const [isLgDesktop, setIsLgDesktop] = useState(initialMatches);

  /** @type {React.RefObject<HTMLDivElement> | null} */
  const accordionBodyRef = useRef(null);

  // Update local state when prop changes
  useEffect(() => {
    if (!isLgDesktop && onToggle) {
      handleAnimation(isOpen);
    }
    setShow(isOpen);
  }, [isOpen, isLgDesktop, onToggle]);

  useEffect(() => {
    const mediaWatcher = window.matchMedia("screen and (min-width: 1260px)");
    const handleMediaChange = e => setIsLgDesktop(e.matches);

    mediaWatcher.addEventListener("change", handleMediaChange);
    handleMediaChange(mediaWatcher);
    return () => mediaWatcher.removeEventListener("change", handleMediaChange);
  }, []);

  const handleAnimation = showingContent => {
    const accordionBody = accordionBodyRef?.current;
    if (!accordionBody || !accordionBody.animate) return;
    accordionBody.classList.add("footer-collapsing");
    const animation = accordionBody.animate(
      [
        {
          maxHeight: showingContent ? `${accordionBody.scrollHeight}px` : "0px",
        },
      ],
      {
        duration: 250,
        easing: "ease-in-out",
        fill: "forwards",
      }
    );

    animation.onfinish = () => {
      accordionBody.classList.remove("footer-collapsing");
      if (showingContent) {
        accordionBody.classList.add("footer-column-show");
      } else {
        accordionBody.classList.remove("footer-column-show");
      }
    };
  };

  const handleToggle = () => {
    if (isLgDesktop) {
      setShow(true);
      return;
    }

    if (onToggle) {
      onToggle();
    } else {
      // Fallback for backward compatibility
      setShow(prev => {
        const showingContent = !prev;
        handleAnimation(showingContent);
        return showingContent;
      });
    }
  };

  return (
    <div className="col-xl flex-footer testname-column">
      <div className="card accordion-item desktop-disable-xl">
        <div className="footer-accordion-header">
          <div className="h5">
            {isLgDesktop ? (
              <p className="accordion-button">{title}</p>
            ) : (
              <button
                id={`footlink-header-${columnIndex}`}
                className="footer-accordion-button"
                aria-expanded={show || isLgDesktop}
                aria-controls={`footlink-${columnIndex}`}
                onClick={handleToggle}
                type="button"
                disabled={isLgDesktop}
              >
                {title}
                <FontAwesomeIcon
                  className={show || isLgDesktop ? "column-open" : ""}
                  icon={faChevronDown}
                />
              </button>
            )}
          </div>
        </div>
        <div
          id={`footlink-${columnIndex}`}
          className="footer-accordion-body"
          role="region"
          ref={accordionBodyRef}
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
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
};

export { ColumnSection };
