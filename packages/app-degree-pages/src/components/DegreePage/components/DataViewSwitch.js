// @ts-check

import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const InputState = styled.input.attrs({
  type: "radio",
  className: "btn-check",
  name: "program-view",
  autoComplete: "off",
})`
  & + label {
    padding: 3px 15px;
    font-size: 75%;
  }
`;

const GRID_VIEW_ID = "grid-view";
const LIST_VIEW_ID = "list-view";

/**
 *
 * @param {{
 *    checkedId: GRID_VIEW_ID | LIST_VIEW_ID | string
 *    onChange: (selectedViewId) => void
 * }} props
 * @returns
 */
function DataViewSwitch({ onChange = () => null, checkedId = GRID_VIEW_ID }) {
  return (
    <div>
      <header>
        <strong>View</strong>
      </header>

      <div>
        <InputState
          id={LIST_VIEW_ID}
          onChange={() => onChange(LIST_VIEW_ID)}
          checked={checkedId === LIST_VIEW_ID}
        />
        <label className="btn btn-secondary" htmlFor={LIST_VIEW_ID}>
          List
        </label>
        <InputState
          id={GRID_VIEW_ID}
          onChange={() => onChange(GRID_VIEW_ID)}
          checked={checkedId === GRID_VIEW_ID}
        />
        <label className="btn btn-secondary" htmlFor={GRID_VIEW_ID}>
          Grid
        </label>
      </div>
    </div>
  );
}

DataViewSwitch.propTypes = {
  checkedId: PropTypes.oneOf([GRID_VIEW_ID, LIST_VIEW_ID]),
  onChange: PropTypes.func,
};

export { DataViewSwitch, GRID_VIEW_ID, LIST_VIEW_ID };
