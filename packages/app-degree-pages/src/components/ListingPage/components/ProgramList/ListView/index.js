/* eslint-disable react/no-danger, jsx-a11y/no-noninteractive-element-to-interactive-role  */
// @ts-check
import {
  idGenerator,
  sanitizeDangerousMarkup,
} from "@asu-design-system/components-core";
import React, { Fragment, useContext, createRef } from "react";

import { AppContext } from "../../../../../core/context";
import { GRID_PROGRAMS_ID } from "../../../../../core/models";
import { degreeDataPropResolverService } from "../../../../../core/services";
import { degreeListPropTypes } from "../programs-prop-types";
import { columns as configColumns } from "./index.colums.config";
import { Table } from "./index.style";

/** @typedef {import("../../../../../core/types/grid-column-types").GridColumn}  GridColumn */
/** @typedef {import("../../../../../core/types/shared-local-types").DegreeDataPropResolver}  DegreeDataPropResolver */

/**
 *
 * @param {{
 *  resolver: DegreeDataPropResolver
 *  id: string
 * }} props
 */
const renderInfo = ({ resolver, id }) => {
  const labelRef = createRef();

  const triggerDescription = e => {
    if (e.key === "Enter") labelRef?.current.click();
  };

  return (
    <div>
      <header>
        <strong>Program Description:</strong>
      </header>
      <input className="togle-more-text" type="checkbox" id={`#${id}`} />
      <div
        className="desc-long"
        id={id}
        dangerouslySetInnerHTML={sanitizeDangerousMarkup(
          resolver.getDescrLongExtented()
        )}
      />
      <label
        ref={labelRef}
        className="label-more-less element-focus"
        htmlFor={`#${id}`}
        role="button"
        tabIndex={0}
        onKeyDown={triggerDescription}
      >
        <span className="label-more">[...more]</span>
        <span className="label-less">[...less]</span>
      </label>
    </div>
  );
};

/**
 *
 * @param {{
 *  resolver: DegreeDataPropResolver
 * }} props
 * @returns
 */
const renderExtraInfo = ({ resolver }) => (
  <div>
    <div>
      <strong>Additional Program Fee: </strong>
      {resolver.hasAsuProgramFee() && "Yes"}
    </div>
    <div>
      <strong>Second Language Requirement: </strong>
      {resolver.hasAsuLangReqFlag()
        ? resolver.getAcadPlanText() || "Yes"
        : "No"}
    </div>

    <div>
      {resolver.hasMathReqFlag() && (
        <div>
          <strong>First Required Math Course:</strong>
          <span>{resolver.getAdditionalMathReqCourse()}</span>
          {resolver.getOtherMathReqCourse() && (
            <span
              dangerouslySetInnerHTML={sanitizeDangerousMarkup(
                resolver.getOtherMathReqCourse()
              )}
            />
          )}
        </div>
      )}
    </div>

    <div>
      <strong>Math Intensity:</strong>
      {resolver.getMathIntensity()}
    </div>
  </div>
);

const genRowId = idGenerator(`row-`);

/**
 *
 * @param {import("..").GridListingProps} props
 * @returns {JSX.Element}
 */
const ListView = ({ programs, totalRows, loading, actionUrls }) => {
  /** @type {{current: HTMLTableElement}} */
  const tableRef = React.useRef(null);
  /** @type {{current: HTMLTableSectionElement}} */
  const tbodyRef = React.useRef(null);

  const { state } = useContext(AppContext);
  const columSettings = state?.listPageProps?.programList?.settings;
  const columns = columSettings?.hideCollegeSchool
    ? configColumns.filter(c => c.dataKey !== "CollegeSchool")
    : configColumns;

  const setOpenRowIndex = (rowIndex, selected) => {
    const rows = tbodyRef.current.children;
    Array.prototype.forEach.call(
      rows,
      (r, i) => i !== rowIndex && r.setAttribute("data-is-open", "false")
    );

    const currentRow = tbodyRef.current.children[rowIndex];
    currentRow.setAttribute("data-is-open", String(selected));
  };

  return (
    <section className="container mb-4" data-testid="list-view">
      <Table
        id={GRID_PROGRAMS_ID}
        ref={tableRef}
        data-loading={loading}
        title={`${totalRows} program found`}
      >
        <thead>
          <tr role="row">
            {columns.map(col => (
              <th
                key={col.dataKey}
                tabIndex={0}
                className={`${col.className}`}
                scope="col"
                aria-label={col.ariaLabel}
              >
                {col.headerTemplate?.() || <span>{col.label}</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody ref={tbodyRef} data-testid="program-rows">
          {programs.length === 0 ? (
            <tr role="presentation">
              <td
                colSpan={columns.length}
                aria-label="No result found for the filters applied"
              >
                &nbsp;
              </td>
            </tr>
          ) : null}
          {
            // programs
            programs.map((row, rowCurrentIndex) => {
              const rowId = genRowId.next().value;
              const rowIndex = rowCurrentIndex * 2;
              const resolver = degreeDataPropResolverService(row);

              return (
                <Fragment key={rowId}>
                  <tr key={rowId} role="row">
                    {columns.map(col => (
                      <td
                        key={`${rowId}-${col.dataKey}`}
                        className={`${col.className}`}
                      >
                        {col.contentTemplate?.({
                          resolver,
                          col,
                          row,
                          rowIndex,
                          onClick: setOpenRowIndex,
                          actionUrls,
                        })}
                      </td>
                    ))}
                  </tr>

                  <tr
                    key={`${rowId}-row-info`}
                    id={`row-info-${rowIndex}`}
                    className="row-info"
                  >
                    <td key={`${rowId}-info`} colSpan={3}>
                      {renderInfo({ resolver, id: `${rowId}-more-text` })}
                    </td>
                    <td key={`${rowId}-extra-info`} colSpan={2}>
                      {renderExtraInfo({ resolver })}
                    </td>
                  </tr>
                </Fragment>
              );
            })
          }
        </tbody>
      </Table>
    </section>
  );
};

ListView.propTypes = {
  ...degreeListPropTypes,
};

export { ListView };
