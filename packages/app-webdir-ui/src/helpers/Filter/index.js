import PropTypes from "prop-types";
import React, { useState, useRef, useEffect } from "react";
import {NavControls} from "../../../../components-core/src/components/TabbedPanels/components/NavControls";

import { FilterContainer } from "./index.styles";
const FilterComponent = ({
  filterLabel,
  choices = [],
  onChoose = (args) => {},
  resetFilters = () => {},
}) => {
  const [selected, setSelected] = useState(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [totalChoices, setTotalChoices] = useState(0);

  const containerRef = useRef(null);

  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollableWidth, setScrollableWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
        setScrollLeft(containerRef.current.scrollLeft);
    };
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", onScroll);
      onScroll();
    }
    return () => containerRef.current?.removeEventListener("scroll", onScroll);
  }, [scrollableWidth]);

  useEffect(() => {
    const onResize = () => {
      if (containerRef.current) {
        setScrollableWidth(
          containerRef.current.scrollWidth - containerRef.current.offsetWidth
        );
      }
    };
    if (containerRef.current) {
      containerRef.current.addEventListener("resize", onResize);
      onResize();
    }
    return () => containerRef.current?.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const totalChildren = containerRef.current.children.length;
      setTotalChoices(totalChildren);
    }
  }, []);

  const handleKeyPress = event => {
    if (!containerRef.current) return;

    if (
      event.key === "ArrowRight" &&
      focusedIndex + 1 < totalChoices
    ) {
      const focusedItem = containerRef.current?.children[focusedIndex + 1];
      setFocusedIndex(focusedIndex + 1);
      focusedItem.focus();
    } else if (
      event.key === "ArrowLeft" &&
      focusedIndex - 1 >= 0
    ) {
      const focusedItem = containerRef.current.children[focusedIndex - 1];
      setFocusedIndex(focusedIndex - 1);
      focusedItem.focus();
    }
  };

  const handleChoose = choice => {
    setSelected(choice);
    onChoose(choice);
  };

  const slideNav = direction => {
    containerRef?.current?.scrollBy({
      left: 200 * direction,
      behavior: "smooth",
    });
  };

  return (
    <FilterContainer className="filter-container">
      <legend>{filterLabel}</legend>
      <div className="choices-wrapper">
        <NavControls
          hidePrev={scrollLeft === 0}
          hideNext={scrollLeft >= (scrollableWidth - 5)} // account for offset in scrollableWidth
          clickPrev={() => {
            slideNav(-1);
          }}
          clickNext={() => {
            slideNav(1);
          }}
        />
        <div
          role="radiogroup"
          tabIndex={0}
          onKeyDown={handleKeyPress}
          className="choices-container"
          ref={containerRef}
          aria-label={`${filterLabel} filter options}`}
        >
          {resetFilters && (
            <button
              role="radio"
              type="button"
              onClick={e => {
                e.preventDefault();
                handleChoose(null);
                resetFilters();
              }}
              tabIndex={-1}
              aria-label={`Reset ${filterLabel}`}
              aria-checked={selected === null}
              className="choice"
            >
              All
            </button>
          )}
          {choices.map(choice => (
            <button
              role="radio"
              type="button"
              key={choice}
              onClick={e => {
                e.preventDefault();
                handleChoose(choice);
              }}
              aria-checked={selected === choice}
              className={`${selected === choice ? "selected" : ""} choice`}
              aria-label={`Filter by ${choice}`}
              tabIndex={-1}
            >
              {choice}
            </button>
          ))}
        </div>
      </div>
    </FilterContainer>
  );
};

FilterComponent.propTypes = {
  filterLabel: PropTypes.string.isRequired,
  choices: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChoose: PropTypes.func.isRequired,
  resetFilters: PropTypes.func,
};

export { FilterComponent };
