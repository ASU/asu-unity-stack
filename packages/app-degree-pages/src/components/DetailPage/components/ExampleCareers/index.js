// @ts-check

import PropTypes from "prop-types";
import React from "react";

import { progDetailSectionIds } from "../../../../core/models";
import { exampleCareersTableDataPropShape } from "../../../../core/models/app-prop-types";
import { SunIcon, LeafIcon } from "./index.style";
import { Table } from "./Table";

/**
 * @typedef {import("../../../../core/types/detail-page-types").ExampleCareersProps} ExampleCareersProps
 */

/**
 *
 * @param {ExampleCareersProps} props
 * @returns {JSX.Element}
 */
function ExampleCareers({ tableData }) {
  return (
    <section
      id={progDetailSectionIds.exampleCareers.targetIdName}
      className="container"
      data-testid="example-careers"
    >
      <h3>Example careers</h3>
      <p>
        Career example titles and salaries listed below are not
        necessarily entry level, and students should take into
        consideration how years of experience, geographical location,
        and required advanced degrees or certifications may affect pay scales.
      </p>
      <div className="mt-4 mb-4">
        <Table data={tableData} />
        <p>
          <small>
            * Data obtained from the Occupational Information Network (O*NET)
            under sponsorship of the U.S. Department of Labor/Employment and
            Training Administration (USDOL/ETA).
          </small>
        </p>
      </div>
      <div className="d-flex">
        <p className="me-3">
          <SunIcon className="fas fa-sun me-1" />
          Bright outlook
        </p>
        <p>
          <LeafIcon className="fas fa-leaf me-1" />
          Green occupation
        </p>
      </div>
    </section>
  );
}

ExampleCareers.propTypes = {
  tableData: PropTypes.arrayOf(exampleCareersTableDataPropShape),
};

export { ExampleCareers };
