// @ts-check
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import { createRange, iff, trackGAEvent } from "../../../../../shared";
import { PageItem } from "./PageItem";

const defaultGAEvent = {
  event: "select",
  action: "click",
  name: "onclick",
  type: "pagination",
  region: "main content",
};

/**
 * @typedef {import('../../core/types/shared-types').PaginationProps} PaginationProps
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
  onChange,
}) => {
  const [selectedPage, setSelectedPage] = useState(null);

  useEffect(() => {
    setSelectedPage(currentPage);
  }, [currentPage]);

  const trackEvent = page => {
    trackGAEvent({ ...defaultGAEvent, text: `page ${page}` });
  };

  const handleChangePage = (e, page) => {
    const actions = {
      first: 1,
      prev: selectedPage === 1 ? 1 : selectedPage - 1,
      next: selectedPage === totalPages ? totalPages : selectedPage + 1,
      last: totalPages,
    };
    const action = actions[page] ?? page;
    setSelectedPage(action);
    trackEvent(action);
    onChange?.(e, action);
  };

  const renderPages = () => {
    // Set the ranges to be shown in the pagination
    const lowerRangeLimit = iff(
      selectedPage === totalPages - 1,
      2,
      selectedPage === totalPages ? 3 : 1
    );
    const upperRangeLimit = iff(
      selectedPage === 1,
      3,
      selectedPage === 2 ? 2 : 1
    );
    const lowerRange = createRange(
      selectedPage - lowerRangeLimit,
      selectedPage,
      totalPages
    );
    const upperRange = createRange(
      selectedPage,
      selectedPage + 1 + upperRangeLimit,
      totalPages
    );
    const renderedPages = [...lowerRange, ...upperRange];

    return (
      <>
        {renderedPages[0] !== 1 && (
          <PageItem
            ariaLabel={`Page 1 of ${totalPages}`}
            isClickeable
            selectedPage={selectedPage === 1}
            onClick={e => handleChangePage(e, "first")}
          >
            1
          </PageItem>
        )}
        {renderedPages[0] > 2 && <PageItem ellipses>...</PageItem>}
        {renderedPages.map(page => (
          <PageItem
            ariaLabel={`Page ${page} of ${totalPages}`}
            isClickeable
            key={page}
            selectedPage={selectedPage === page}
            onClick={e => handleChangePage(e, page)}
          >
            {page}
          </PageItem>
        ))}
        {renderedPages[renderedPages.length - 1] < totalPages - 1 && (
          <PageItem ellipses>...</PageItem>
        )}
        {renderedPages[renderedPages.length - 1] !== totalPages && (
          <PageItem
            isClickeable
            ariaLabel={`Page ${totalPages} of ${totalPages}`}
            selectedPage={selectedPage === totalPages}
            onClick={e => handleChangePage(e, "last")}
          >
            {totalPages}
          </PageItem>
        )}
      </>
    );
  };

  return (
    <nav aria-label="Pagination" data-testid="pagination">
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
        <PageItem
          dataId="prev"
          isClickeable
          disabled={selectedPage === 1}
          pageLinkIcon
          onClick={e => handleChangePage(e, "prev")}
          ariaDisabled={selectedPage === 1}
          ariaLabel="Previous Page"
        />
        {renderPages()}
        <PageItem
          dataId="next"
          isClickeable
          ariaDisabled={selectedPage === totalPages}
          disabled={selectedPage === totalPages}
          pageLinkIcon
          onClick={e => handleChangePage(e, "next")}
          ariaLabel="Next Page"
        />
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
   * Callback fired when the page is changed.
   */
  onChange: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  currentPage: 1,
  totalPages: 10,
};
