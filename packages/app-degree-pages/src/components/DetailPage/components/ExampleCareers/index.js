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
  tableData: PropTypes.arrayOf(exampleCareersTableDataPropShape),
};

export { ExampleCareers };
