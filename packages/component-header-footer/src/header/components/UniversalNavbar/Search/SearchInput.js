// @ts-check
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PropTypes from "prop-types";

import { CLASS_NAMES } from "../../../core/constants/classNames";

/**
 * Reusable search input component
 * @param {Object} props
 * @param {React.MutableRefObject<HTMLInputElement | null>} props.inputRef
 * @param {boolean} props.hasInputValue
 * @param {function} props.setHasInputValue
 * @param {boolean} props.isMobile
 * @param {React.CSSProperties} [props.style] - Additional inline styles
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.FocusEventHandler<HTMLInputElement>} [props.onBlur] - Optional blur handler
 */
const SearchInput = ({
  inputRef,
  hasInputValue,
  setHasInputValue,
  isMobile,
  style = {},
  className = "",
  onBlur,
}) => {
  /**
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  const handleInputChange = e => {
    const value = e.target.value;
    setHasInputValue(value.length > 0);
  };

  const baseInputProps = {
    ref: inputRef,
    className: `form-control ${className}`,
    type: "search",
    name: "q",
    placeholder: "Search asu.edu",
    required: true,
    onChange: handleInputChange,
    onBlur: onBlur,
    style: {
      paddingLeft: hasInputValue && isMobile ? "1rem" : undefined,
      ...style,
    },
  };

  if (isMobile) {
    return (
      <>
        {!hasInputValue && (
          <FontAwesomeIcon className={CLASS_NAMES.SEARCH_ICON} icon={faSearch} />
        )}
        <input {...baseInputProps} />
        {hasInputValue && (
          <button
            type="submit"
            aria-label="Submit search"
            className={CLASS_NAMES.SUBMIT_SEARCH}
          >
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </button>
        )}
      </>
    );
  }

  // Desktop version
  return <input {...baseInputProps} />;
};

SearchInput.propTypes = {
  inputRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
  hasInputValue: PropTypes.bool.isRequired,
  setHasInputValue: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  onBlur: PropTypes.func,
};

export { SearchInput };
