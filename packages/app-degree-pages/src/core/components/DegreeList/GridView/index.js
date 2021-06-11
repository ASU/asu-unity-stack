// @ts-check
import { sanitize } from "dompurify";
// import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";

import { GRID_PROGRAMS_ID } from "../../../models";
import { degreeDataPropResolverService } from "../../../services";
import {
  accellerateDegreeLink,
  accellerateDegreeDynamicLink,
  majorInfoLink,
  mapTooltipLink,
  requestInfoLink,
  // saveFav,
} from "../../../services/degree-http-service";
import { idGenerator, toTitleCase } from "../../../utils";
import {
  ChevronIconButton,
  InfoButtonIcon,
  //  FavButton
} from "../../icons";
import { ApplyNow } from "../components/ApplyNow";
import { RequestInfo } from "../components/RequestInfo";
import { degreeListPropTypes } from "../programs-prop-types";
import { Table } from "./index.style";

/** @typedef {import("../../../models/app-props").GridColumn}  GridColumn */
/** @typedef {import("../../../models/app-props").DegreeDataPropResolver}  DegreeDataPropResolver */

/**
 *
 * @param {{
 *  resolver: DegreeDataPropResolver
 *  id: string
 * }} props
 */
const renderInfo = ({ resolver, id }) => (
  <div>
    <header>
      <strong>Program Description:</strong>
    </header>
    <input className="togle-more-text" type="checkbox" id={`#${id}`} />
    <p
      className="desc-long"
      id={id}
      dangerouslySetInnerHTML={{
        __html: sanitize(resolver.getDescrLongExtented()),
      }}
    />
    <label htmlFor={`#${id}`}>[ more ]</label>
  </div>
);

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
              dangerouslySetInnerHTML={{
                __html: sanitize(resolver.getOtherMathReqCourse()),
              }}
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

/* eslint-disable react/prop-types, no-alert, no-console */
/** @type {GridColumn []} */
const columns = [
  {
    dataKey: "Descr100",
    label: "Major",
    ariaLabel: "Major (Concentration): activate to sort column",
    className: "major",
    sortable: true,
    contentTemplate: ({ resolver, rowIndex, onClick }) => (
      <div className="cell-container">
        <a
          href={majorInfoLink(
            resolver.getInstitution(),
            resolver.getAcadPlan()
          )}
          target="blank"
        >
          {resolver.getMajorDesc()}
        </a>
        <ChevronIconButton onClick={selected => onClick(rowIndex, selected)} />
      </div>
    ),
  },
  {
    dataKey: "Degree",
    label: "Degree",
    ariaLabel: "Degree: activate to sort column",
    className: "degree",
    contentTemplate: ({ resolver }) => (
      <div className="cell-container">
        <span>{resolver.getDegree()}</span>
        <InfoButtonIcon
          popover={{
            title: resolver.getDegreeDesc(),
            body: resolver.getDegreeDescLong(),
            withAuto: false,
          }}
        />
      </div>
    ),
  },
  {
    dataKey: "concurrentDegreeMajorMaps",
    label: "Required Courses",
    ariaLabel: "Required Courses",
    className: "required-course",
    contentTemplate: ({ resolver }) => {
      const isOnline = resolver.isOnline();
      const directUrl = isOnline
        ? resolver.getOnlineMajorMapURL()
        : resolver.getAsuCritTrackUrl();

      const directMapLink = (
        <a href={directUrl} target="blank">
          Major Map
        </a>
      );

      return directMapLink;
    },
  },
  {
    dataKey: "Location",
    label: "Location",
    ariaLabel: "Location: activate to sort column",
    className: "campus-location",
    sortable: true,
    contentTemplate: ({ resolver }) => {
      const genCampusId = idGenerator(`campus-`);
      return (
        <div>
          {resolver.getCampusList().map(location => (
            <div key={genCampusId.next().value} className="cell-container">
              <a
                key={location}
                href={mapTooltipLink(location)}
                target="blank"
              >{`${toTitleCase(location)}, `}</a>
              <span>
                <InfoButtonIcon
                  popover={{
                    title: toTitleCase(location),
                    body: () => fetch(mapTooltipLink(location)),
                    withAuto: true,
                  }}
                />
              </span>
            </div>
          ))}
        </div>
      );
    },
  },
  {
    dataKey: "accelerateDegrees",
    label: "Accelerated/ Concurrent",
    ariaLabel: "Accelerated/ Concurrent: activate to sort column",
    className: "accelerated-concurrent",
    sortable: true,
    contentTemplate: ({ resolver }) => (
      <div>
        {resolver.getAccelerateDegrees().length > 0 && (
          <div className="cell-container">
            <a
              href={accellerateDegreeLink(resolver.getAcadPlan())}
              rel="noreferrer"
              target="_blank"
            >
              4+1 years
            </a>
            <InfoButtonIcon
              popover={{
                title: "4+1 years",
                body: () =>
                  fetch(accellerateDegreeDynamicLink(resolver.getAcadPlan())),
                withAuto: false,
              }}
            />
          </div>
        )}
      </div>
    ),
  },
  {
    dataKey: "CollegeDescr100",
    label: "College/School",
    ariaLabel: "College/School: activate to sort column",
    className: "college",
    sortable: true,
    contentTemplate: ({ resolver }) => (
      <a href={resolver.getCollegeUrl()} target="_blank" rel="noreferrer">
        {resolver.getCollegeDesc()}
      </a>
    ),
  },
  // {
  //   dataKey: "compare-fav",
  //   label: "Compare and favorite",
  //   className: "compare-fav",
  //   // todo: refactor this solution
  //   headerTemplate: () => (
  //     <div>
  //       <InfoButtonIcon
  //         onMouseOver={null}
  //         onClick={() => alert("Compare and favorite: info....")}
  //       />
  //     </div>
  //   ),
  //   contentTemplate: ({ row, rowIndex }) => (
  //     <form className="uds-form cell-container">
  //       <div className="form-check m-0">
  //         <input
  //           className="form-check-input"
  //           type="checkbox"
  //           id={`fav-button-${rowIndex}`}
  //           value="option1"
  //         />
  //         <label
  //           className="form-check-label"
  //           htmlFor={`fav-button-${rowIndex}`}
  //         >
  //           &nbsp;
  //         </label>
  //       </div>
  //       <FavButton onClick={() => saveFav(row["AcadPlan"])} />
  //     </form>
  //   ),
  // },
  {
    dataKey: "compare-apply-info",
    label: "",
    hasInfo: true,
    ariaLabel: "Apply Now or Request Info",
    className: "apply-info",
    contentTemplate: ({ resolver }) => (
      <div className="row flex-column  align-items-end p-1">
        <ApplyNow
          onClick={() =>
            // todo: refactor this solution
            alert("APPLY NOW: TODO...")
          }
        />
        <RequestInfo
          href={requestInfoLink(
            resolver.getAcadPlan(),
            resolver.getMajorDesc(),
            resolver.getEmailAddress()
          )}
        />
      </div>
    ),
  },
];
/* eslint-enable react/prop-types, no-alert, no-console */

const genRowId = idGenerator(`row-`);
// * @param {import("react").Ref<HTMLTableElement>} ?ref

/**
 *
 * @param {import("..").GridListingProps} props
 * @returns {JSX.Element}
 */
const DegreeGridView = ({ programms, loading }) => {
  /** @type {{current: HTMLTableElement}} */
  const tableRef = React.useRef(null);
  /** @type {{current: HTMLTableSectionElement}} */
  const tbodyRef = React.useRef(null);

  const setOpenRowIndex = (rowIndex, selected) => {
    const rows = tbodyRef.current.children;
    Array.prototype.forEach.call(
      rows,
      (r, i) => i !== rowIndex && r.setAttribute("data-is-open", "false")
    );

    const currentRow = tbodyRef.current.children[rowIndex];
    currentRow.setAttribute("data-is-open", String(selected));
  };

  // useEffect(
  //   () =>
  //     tableRef.current.scrollIntoView({
  //       behavior: "smooth",
  //     }),
  //   [programms]
  // );

  return (
    <section className="container">
      <Table id={GRID_PROGRAMS_ID} ref={tableRef} data-loading={loading}>
        <thead>
          <tr role="row">
            {columns.map(col => (
              <th
                key={col.dataKey}
                tabIndex={0}
                className={`${col.className}`}
                aria-controls="programsTable"
                aria-label={col.ariaLabel}
              >
                {col.headerTemplate?.() || <span>{col.label}</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody ref={tbodyRef}>
          {
            // programms
            programms.map((row, rowCurrentIndex) => {
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
                        })}
                      </td>
                    ))}
                  </tr>

                  <tr key={`${rowId}-row-info`} className="row-info">
                    <td key={`${rowId}-info`} colSpan={4}>
                      {renderInfo({ resolver, id: `${rowId}-more-text` })}
                    </td>
                    <td key={`${rowId}-extra-info`} colSpan={3}>
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

DegreeGridView.propTypes = degreeListPropTypes;

export { DegreeGridView };
