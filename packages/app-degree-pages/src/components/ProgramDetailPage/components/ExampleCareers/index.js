// @ts-check

import PropTypes from "prop-types";
import React from "react";

import { exampleCareersTableDataPropTypes } from "../../../../core/models/app-prop-types";
import { SunIcon, LeafIcon } from "./index.style";
import { Table } from "./Table";

/**
 * @typedef {import("../../../../core/models/program-detail-types").ExampleCareersProps} ExampleCareersProps
 */

/**
 *
 * @param {ExampleCareersProps} props
 * @returns {JSX.Element}
 */
function ExampleCareers({ tableData }) {
  return (
    <section className="pt-6 pb-6">
      <h2>Example careers</h2>
      <p>
        Students who complete this degree program may be prepared for the
        following careers. Advanced degrees or certifications may be required
        for academic or clincal positions. Career examples include but are not
        limited to:
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
        <p className="mr-3">
          <SunIcon className="fas fa-sun mr-1" />
          Bright outlook
        </p>
        <p>
          <LeafIcon className="fas fa-leaf mr-1" />
          Green occupation
        </p>
      </div>
    </section>
  );
}

ExampleCareers.propTypes = {
  tableData: PropTypes.arrayOf(exampleCareersTableDataPropTypes),
};

export { ExampleCareers };
