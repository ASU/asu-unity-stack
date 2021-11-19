// @ts-check
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import { createRange } from "../../core/utils/numbers";
import { PageItem } from "./PageItem";

/**
 * @typedef {import('../../core/types/shared-types').PaginationProps} PaginationProps
 */

const SMALL_DEDVICE_WIDTH = 450;
const SMALL_DEDVICE_TOTAL_NUMBER = 3;

/**
 * @param {PaginationProps} props
 * @returns {JSX.Element}
 */
export const Pagination = ({
  type,
  background,
  currentPage,
  totalPages,
  totalNumbers,
  onChange,
}) => {
  const [selectedPage, setSelectedPage] = useState(null);
  const [currentTotalNumbers, setCurrentTotalNumbers] = useState(totalNumbers);

  useEffect(() => {
    setSelectedPage(currentPage);
  }, [currentPage]);

  // start small device
  const mediaQuerySmallDevice = window.matchMedia(
    `(max-width: ${SMALL_DEDVICE_WIDTH}px)`
  );

  mediaQuerySmallDevice.addEventListener("change", e => {
    if (e.matches) {
      setCurrentTotalNumbers(SMALL_DEDVICE_TOTAL_NUMBER);
    } else {
      setCurrentTotalNumbers(totalNumbers);
    }
  });

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
    // Set the ranges to be shown in the pagination
    const lowerRange = createRange(
      selectedPage - Math.floor(currentTotalNumbers / 2),
      selectedPage,
      totalPages
    );
    const upperRange = createRange(
      selectedPage,
      selectedPage + 1 + Math.floor(currentTotalNumbers / 2),
      totalPages
    );
    const renderedPages = [...lowerRange, ...upperRange];
    const showFirstElements = renderedPages[0] !== 1;
    const showLastElements =
      renderedPages[renderedPages.length - 1] !== totalPages;

    return (
      <>
        {showFirstElements && (
          <PageItem
            isClickeable
            selectedPage={selectedPage === 1}
            onClick={e => handleChangePage(e, "first")}
          >
            1
          </PageItem>
        )}
        {showFirstElements && <PageItem>...</PageItem>}
        {renderedPages.map(page => (
          <PageItem
            isClickeable
            key={page}
            selectedPage={selectedPage === page}
            onClick={e => handleChangePage(e, page)}
          >
            {page}
          </PageItem>
        ))}
        {showLastElements && <PageItem>...</PageItem>}
        {showLastElements && (
          <PageItem
            isClickeable
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
        <PageItem
          isClickeable
          disabled={selectedPage === 1}
          pageLinkIcon
          onClick={e => handleChangePage(e, "prev")}
        />
        {renderPages()}
        <PageItem
          isClickeable
          disabled={selectedPage === totalPages}
          pageLinkIcon
          onClick={e => handleChangePage(e, "next")}
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
  totalNumbers: 3,
};
