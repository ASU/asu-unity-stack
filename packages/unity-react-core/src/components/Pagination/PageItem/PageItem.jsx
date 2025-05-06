// @ts-check
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

/**
 * @typedef {import('../../../core/types/shared-types').PageItemProps} PageItemProps
 */

/**
 * Generic page item component to render each pagination item
 * @param {PageItemProps} props
 * @ignore
 */
export const PageItem = ({
  dataId,
  isClickeable = false,
  disabled = false,
  pageLinkIcon = false,
  selectedPage = false,
  onClick = () => {},
  ellipses,
  ariaLabel,
  children,
  ariaDisabled,
}) => {
  return (
    <li
      className={classNames("page-item", {
        [`disabled`]: disabled,
        [`active`]: selectedPage,
        [`elipses`]: ellipses,
      })}
    >
      {isClickeable ? (
        <button
          type="button"
          aria-label={ariaLabel}
          className={classNames("page-link", {
            [`page-link-icon`]: pageLinkIcon,
          })}
          onClick={onClick}
          data-testid={dataId ? `pagination-${dataId}` : "page-link"}
          data-id={dataId}
          aria-current={selectedPage ? "page" : null}
          aria-disabled={ariaDisabled}
        >
          {children}
          {selectedPage && <span className="visually-hidden">(current)</span>}
        </button>
      ) : (
        <span className="page-link" data-testid="page-link">
          {children}
        </span>
      )}
    </li>
  );
};

PageItem.propTypes = {
  isClickeable: PropTypes.bool,
  disabled: PropTypes.bool,
  pageLinkIcon: PropTypes.bool,
  selectedPage: PropTypes.bool,
  dataId: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  ellipses: PropTypes.bool,
  ariaLabel: PropTypes.string,
  ariaDisabled: PropTypes.bool,
};
