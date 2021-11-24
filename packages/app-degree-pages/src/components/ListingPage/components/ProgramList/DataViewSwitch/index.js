// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { GRID_VIEW_ID, LIST_VIEW_ID } from "../../../../../core/models";

const InputGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const InputState = styled.input.attrs({
  type: "radio",
  className: "btn-check",
  name: "program-view",
  autoComplete: "off",
})`
  display: none;

  & + label {
    font-size: 0.75rem;
    padding: 0.25rem 0.75rem;
    margin-top: 8px;
    line-height: 1.5;
    color: #212529;
    background-color: #e8e8e8;
  }

  &:checked + label {
    background-color: #191919;
    color: #fafafa !important;
  }
`;

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

      <InputGroup>
        <div>
          <InputState
            id={LIST_VIEW_ID}
            onChange={() => onChange(LIST_VIEW_ID)}
            checked={checkedId === LIST_VIEW_ID}
          />
          <label className="btn btn-secondary" htmlFor={LIST_VIEW_ID}>
            List
          </label>
        </div>
        <div>
          <InputState
            id={GRID_VIEW_ID}
            onChange={() => onChange(GRID_VIEW_ID)}
            checked={checkedId === GRID_VIEW_ID}
          />
          <label className="btn btn-secondary" htmlFor={GRID_VIEW_ID}>
            Grid
          </label>
        </div>
      </InputGroup>
    </div>
  );
}

DataViewSwitch.propTypes = {
  checkedId: PropTypes.oneOf([GRID_VIEW_ID, LIST_VIEW_ID]),
  onChange: PropTypes.func,
};

export { DataViewSwitch };
