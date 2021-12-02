// @ts-check
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import { createRange } from "../../core/utils/numbers";
import { PageItem } from "./PageItem";

/**
 * @typedef {import('../../core/types/shared-types').PaginationProps} PaginationProps
 */

const X_SMALL_DEDVICE_WIDTH = 413;
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
  showFirstButton,
  showLastButton,
  totalNumbers,
  onChange,
}) => {
  const [selectedPage, setSelectedPage] = useState(null);
  // Start small device
  const [currentTotalNumbers, setCurrentTotalNumbers] = useState(totalNumbers);
  const [isSmallDevice, setSmallDevice] = useState(
    window.innerWidth < SMALL_DEDVICE_WIDTH
  );
  const [isXSmallDevice, setXSmallDevice] = useState(
    window.innerWidth < X_SMALL_DEDVICE_WIDTH
  );
  // End small device
  const [showArrowIcons, setShowArrowIcons] = useState(!showLastButton);

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
      setSmallDevice(true);
      setShowArrowIcons(true);
    } else {
      setCurrentTotalNumbers(totalNumbers);
      setSmallDevice(false);
      setXSmallDevice(false);
      setShowArrowIcons(!showLastButton);
    }
  });

  const mediaQueryXSmallDevice = window.matchMedia(
    `(max-width: ${X_SMALL_DEDVICE_WIDTH}px)`
  );

  mediaQueryXSmallDevice.addEventListener("change", e =>
    setXSmallDevice(e.matches)
  );
  // end small device

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

    return (
      <>
        {!isSmallDevice && renderedPages[0] !== 1 && <PageItem>...</PageItem>}
        {renderedPages.map(
          page =>
            page && (
              <PageItem
                dataId="page-number"
                isClickeable
                key={page}
                selectedPage={selectedPage === page}
                onClick={e => handleChangePage(e, page)}
              >
                {page}
              </PageItem>
            )
        )}
        {!isSmallDevice &&
          renderedPages[renderedPages.length - 1] !== totalPages && (
            <PageItem>...</PageItem>
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
        {!isSmallDevice && showFirstButton && (
          <PageItem
            dataId="first"
            isClickeable
            disabled={selectedPage === 1}
            onClick={e => handleChangePage(e, "first")}
          >
            First
          </PageItem>
        )}
        <PageItem
          dataId="prev"
          isClickeable
          disabled={selectedPage === 1}
          pageLinkIcon={showArrowIcons}
          onClick={e => handleChangePage(e, "prev")}
        >
          {isXSmallDevice ? "" : "Prev"}
        </PageItem>
        {renderPages()}
        <PageItem
          dataId="next"
          isClickeable
          disabled={selectedPage === totalPages}
          pageLinkIcon={showArrowIcons}
          onClick={e => handleChangePage(e, "next")}
        >
          {isXSmallDevice ? "" : "Next"}
        </PageItem>
        {!isSmallDevice && showLastButton && (
          <PageItem
            dataId="last"
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
