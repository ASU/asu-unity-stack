// @ts-check
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import { createRange } from "../../core/utils/helpers/numbers";
import { PageItem } from "./PageItem";

/**
 * @typedef {import('../../core/shared-model-types').PaginationProps} PaginationProps
 */

/**
 * @param {PaginationProps} props
 * @returns {JSX.Element}
 */

export const Pagination = ({
  type,
  background,
  currentPage,
  totalPages,
  showFirstButton,
  showLastButton,
  totalNumbers,
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
    const action = actions[page] ? actions[page] : page;
    setSelectedPage(action);
    if (onChange) onChange(e, action);
  };

  const renderPages = () => {
    const lowerRange = createRange(
      selectedPage - Math.floor(totalNumbers / 2),
      selectedPage,
      totalPages
    );
    const upperRange = createRange(
      selectedPage,
      selectedPage + 1 + Math.floor(totalNumbers / 2),
      totalPages
    );
    const renderedPages = [...lowerRange, ...upperRange];

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
          pageLinkIcon={!showFirstButton}
          onClick={e => handleChangePage(e, "prev")}
        >
          Prev
        </PageItem>
        {renderPages()}
        <PageItem
          isClickeable
          disabled={selectedPage === totalPages}
          pageLinkIcon={!showLastButton}
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
   * Total number of pages to show. Should be an odd number to center the current page un the middle
   */
  totalNumbers: PropTypes.number,
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
  totalNumbers: 3,
};
