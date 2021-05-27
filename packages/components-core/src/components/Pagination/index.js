import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import "./pagination.css";

import { PageItem } from "./PageItem";

export const Pagination = ({
  type,
  background,
  currentPage,
  totalPages,
  showFirstButton,
  showLastButton,
  onChange,
}) => {
  const [selectedPage, setSelectedPage] = useState(null);

  useEffect(() => {
    setSelectedPage(currentPage);
  }, [currentPage]);

  const handleChangePage = (e, page) => {
    const actions = {
      first: 1,
      prev: selectedPage - 1,
      next: selectedPage + 1,
      last: totalPages,
    };
    setSelectedPage(actions[page] ? actions[page] : page);
    if (onChange) onChange(e, actions[page] ? actions[page] : page);
  };

  const renderPages = () => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    const renderedPages = [
      ...pages.slice(selectedPage - 2, selectedPage - 1),
      ...pages.slice(selectedPage - 1, selectedPage + 1),
    ];

    return (
      <>
        {renderedPages[0] !== 1 && <PageItem>...</PageItem>}
        {renderedPages.map(
          page =>
            page && (
              <PageItem
                isClickeable
                key={page}
                selectedPage={selectedPage === page}
                onClick={e => handleChangePage(e, page)}
              >
                {page}
              </PageItem>
            )
        )}
        {renderedPages[renderedPages.length - 1] !== totalPages && (
          <PageItem>...</PageItem>
        )}
      </>
    );
  };

  return (
    <nav aria-label="Pagination">
      <ul
        className={classNames(
          "pagination",
          "justify-content-center",
          "pt-2",
          "pb-2",
          {
            [`border`]: type === "bordered",
            [`uds-bg-gray1`]: background === "gray1",
            [`uds-bg-gray`]: background === "gray2",
            [`uds-bg-dark`]: background === "gray7",
          }
        )}
      >
        {showFirstButton && (
          <PageItem
            isClickeable
            disabled={selectedPage === 1}
            onClick={e => handleChangePage(e, "first")}
          >
            First
          </PageItem>
        )}
        <PageItem
          isClickeable
          disabled={selectedPage === 1}
          pageLinkicon={!showFirstButton}
          onClick={e => handleChangePage(e, "prev")}
        >
          Prev
        </PageItem>
        {renderPages()}
        <PageItem
          isClickeable
          disabled={selectedPage === totalPages}
          pageLinkicon={!showLastButton}
          onClick={e => handleChangePage(e, "next")}
        >
          Next
        </PageItem>
        {showLastButton && (
          <PageItem
            isClickeable
            disabled={selectedPage === totalPages}
            onClick={e => handleChangePage(e, "last")}
          >
            Last
          </PageItem>
        )}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  /**
   * Type of pagination
   */
  type: PropTypes.oneOf(["default", "bordered"]).isRequired,
  /**
   * Background of pagination
   */
  background: PropTypes.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired,
  /**
   * Current page
   */
  currentPage: PropTypes.number,
  /**
   * Total number of pages
   */
  totalPages: PropTypes.number,
  /**
   * Show first page button
   */
  showFirstButton: PropTypes.bool,
  /**
   * Show last page button
   */
  showLastButton: PropTypes.bool,
  /**
   * Callback fired when the page is changed.
   */
  onChange: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  currentPage: 1,
  totalPages: 10,
  showFirstButton: false,
  showLastButton: false,
};
