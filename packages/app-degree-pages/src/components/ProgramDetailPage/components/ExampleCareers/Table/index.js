// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { exampleCareersTableDataPropTypes } from "../../../../../core/models/app-prop-types";
import { SunIcon, LeafIcon } from "../index.style";

/**
 * @typedef {import('../../../../../core/models/shared-types').TableProps} TableProps
 */

/**
 *
 * @param {{ data: TableProps[] }} props
 * @returns {JSX.Element}
 */

function Table({ data }) {
  return (
    <div className="uds-table mb-1">
      <table>
        <thead>
          <tr>
            <th scope="col">Career</th>
            <th scope="col" className="text-end">
              Growth*
            </th>
            <th scope="col" className="text-end">
              Median Salary*
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map(field => (
            <tr key={field.career.url}>
              <td>
                <a href={field.career.url} target="_blank" rel="noreferrer">
                  {field.career.text}
                </a>
                {field.greenOccupation && (
                  <LeafIcon className="fas fa-leaf ml-1" />
                )}
                {field.brightOutlook && <SunIcon className="fas fa-sun ml-1" />}
              </td>
              <td className="text-end">{field.growth}%</td>
              <td className="text-end">{field.medianSalary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(exampleCareersTableDataPropTypes),
};

export { Table };
