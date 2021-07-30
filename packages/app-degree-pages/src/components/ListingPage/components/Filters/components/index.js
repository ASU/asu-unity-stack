/* eslint-disable react/prop-types */
// @ts-check
import React from "react";

/**
 * @typedef {{
 *  id: string
 *  label: string
 *  selected: string | string[]
 *  multiple?: boolean
 *  options: any[]
 *  onChange: (id: string, event: React.ChangeEvent<HTMLSelectElement>) => void
 * }} SelectFormGroupProps
 */

/**
 *
 * @param {SelectFormGroupProps} props
 * @returns {JSX.Element}
 */

const SelectFormGroup = ({
  id,
  label,
  selected,
  multiple,
  options,
  onChange,
}) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <select
      className="form-control"
      id={id}
      multiple={multiple}
      onChange={event => onChange(id, event)}
      value={selected}
    >
      {options?.map(option => (
        <option key={option.id} id={option.id} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  </div>
);

export { SelectFormGroup };
