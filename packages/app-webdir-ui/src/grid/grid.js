// @ts-check
import PropTypes from "prop-types";
import React from "react";

/**
 * @param {object} props
 * @param {React.ReactNode[]} [props.children] - Grid items
 * @param {object[]} [props.items] - Array of items to render
 * @param {Function} [props.renderItem] - Render function for items
 * @param {number|object} props.columns - Number of columns or responsive columns object
 * @param {0|1|2|3|4|5} props.gap - Bootstrap spacing (0-5)
 * @param {string} [props.className] - Additional class name
 * @param {string} [props.rowClassName] - Additional class name for row
 * @param {string} [props.colClassName] - Additional class name for column
 * @returns {React.ReactNode} Grid component
 */

const Grid = ({
  children,
  items = [],
  renderItem,
  columns = 3,
  gap = 3,
  className,
  rowClassName,
  colClassName,
}) => {
  const getColClass = () => {
    if (typeof columns === "number") {
      return `col-12 col-md-${Math.floor(12 / columns)}`;
    }

    if (typeof columns === "object") {
      return Object.entries(columns)
        .map(([breakpoint, cols]) => {
          const prefix = breakpoint === "xs" ? "col" : `col-${breakpoint}`;
          return `${prefix}-${Math.floor(12 / cols)}`;
        })
        .join(" ");
    }
    return "col-12 col-md-4";
  };

  const renderContent = () => {
    const content = renderItem
      ? items.map((item, index) => renderItem(item, index))
      : React.Children.toArray(children);

    return content.map((item, index) => (
      <div
        key={item.id ? item.id : index}
        className={`${getColClass()} ${colClassName || ""} mb-${gap}`}
      >
        {item}
      </div>
    ));
  };

  return (
    <div className={`uds-grid ${className || ""}`}>
      <div className={`row ${rowClassName || ""}`}>{renderContent()}</div>
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.shape({})),
  renderItem: PropTypes.func,
  columns: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      xs: PropTypes.number,
      sm: PropTypes.number,
      md: PropTypes.number,
      lg: PropTypes.number,
      xl: PropTypes.number,
    }),
  ]),
  gap: PropTypes.number,
  className: PropTypes.string,
  rowClassName: PropTypes.string,
  colClassName: PropTypes.string,
};

export default Grid;
