import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

export const PageItem = ({
  isClickeable,
  disabled,
  pageLinkicon,
  selectedPage,
  onClick,
  children,
}) => {
  return (
    <li
      className={classNames("page-item", {
        [`disabled`]: disabled,
        [`active`]: selectedPage,
      })}
    >
      {isClickeable ? (
        <button
          className={classNames("page-link", {
            [`page-link-icon`]: pageLinkicon,
          })}
          type="button"
          onClick={onClick}
        >
          {children}
          {selectedPage && <span className="sr-only">(current)</span>}
        </button>
      ) : (
        <span className="page-link">{children}</span>
      )}
    </li>
  );
};

PageItem.propTypes = {
  isClickeable: PropTypes.bool,
  disabled: PropTypes.bool,
  pageLinkicon: PropTypes.bool,
  selectedPage: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

PageItem.defaultProps = {
  isClickeable: false,
  disabled: false,
  pageLinkicon: false,
  selectedPage: false,
  onClick: () => {},
};
