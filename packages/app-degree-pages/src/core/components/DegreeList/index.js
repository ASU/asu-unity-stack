/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// @ts-check
import PropTypes from "prop-types";
import React, { useState } from "react";

// import { dataPathResolver } from "../../utils/data-path-resolver";
import { idGenerator } from "../../utils/id-generator";
import { toTitleCase } from "../../utils/string-utils";
import { InfoButton, FavButton, ApplyNow, RequestInfo } from "./components";
import { BoxPreview, Table } from "./index.style";

/** @typedef {import("../../models/app-props").GridColumn}  GridColumn */
/**
 *  @typedef {{
 *    programms: Object[]
 * }} GridListingProps
 */

function majorInfoLink(AcadPlan) {
  return `https://webapp4.asu.edu/programs/t5/majorinfo/ASU00/${AcadPlan}/undergrad/false`;
}

function mapTooltipLink(location) {
  return `https://webapp4.asu.edu/programs/tooltipcampus?campus=${location}&amp;program=undergrad`;
}

function saveFav(AcadPlan) {
  const url = `https://webapp4.asu.edu/programs/save?acadPlan=ASU00,${AcadPlan}&program=undergrad&cert=false`;
  fetch(url).then();
}

// https://asudev.jira.com/wiki/spaces/eadvisor/pages/887324850/Apply%2BNow%2BButton%2Band%2BModal%2BDisplay%2BLogic
function applyNow() {
  // todo
}

/**
 *
Descr100
Degree
CollegeUrlJoioint
CollegeUrl
CampusWueInfo:
AcadPlan // major info
CampusStringArray
managedOnlineCampus
concurrentDegreeMajorMaps
onlineMajorMapURL
AsuCritTrackUrl
DescrlongExtns
AsuProgramFee
AsuLangReqFlag
additionalMathReqCourse
MinMathReq
MathIntensity
asuAcadpMrfText

 */

/** @type {GridColumn []} */
const defaultColumns = [
  {
    dataKey: "Descr100",
    dataKeyLink: "AcadPlan",
    label: "Major",
    ariaLabel: "Major (Concentration): activate to sort column",
    className: "major",
    sortable: true,
    renderTemplate: ({ col, row }) => (
      <a href={majorInfoLink(row[col.dataKeyLink])} target="blank">
        {row[col.dataKey]}
      </a>
    ),
  },
  {
    dataKey: "Degree",
    label: "Degree",
    ariaLabel: "Degree: activate to sort column",
    className: "degree",
    renderTemplate: ({ col, row }) => (
      <div className="cell-container">
        <span>{row[col.dataKey]}</span>
        <InfoButton />
      </div>
    ),
  },
  {
    dataKey: "concurrentDegreeMajorMaps",
    dataKeyLink: "AsuCritTrackUrl",
    label: "Required Courses",
    ariaLabel: "Required Courses",
    className: "required-course",
    renderTemplate: ({ col, row }) => (
      <a href={row[col.dataKeyLink]} target="blank">
        Major Map
      </a>
    ),
  },
  {
    dataKey: "CampusStringArray",
    label: "Location",
    ariaLabel: "Location: activate to sort column",
    className: "location",
    sortable: true,
    renderTemplate: ({ col, row, onMouseOver, onMouseOut }) => (
      <div className="cell-container">
        {row[col.dataKey]?.map(location => (
          <a
            key={location}
            href={mapTooltipLink(location)}
            target="blank"
            onMouseOver={() => onMouseOver(mapTooltipLink(location))}
            onFocus={() => null}
            onMouseOut={() => onMouseOut()}
            onBlur={() => null}
          >{`${toTitleCase(location)}, `}</a>
        ))}
        <InfoButton />
      </div>
    ),
  },
  {
    dataKey: "accelerateDegrees",
    label: "Accelerated/ Concurrent",
    ariaLabel: "Accelerated/ Concurrent: activate to sort column",
    className: "accelerated-concurrent",
    sortable: true,
    renderTemplate: () => (
      <div className="cell-container">
        <a href="/">4+1 years</a>
        <InfoButton />
      </div>
    ),
  },
  {
    dataKey: "CollegeDescr100",
    dataKeyLink: "CollegeUrl",
    label: "College/School",
    ariaLabel: "College/School: activate to sort column",
    className: "college",
    sortable: true,
    renderTemplate: ({ col, row }) => (
      <a href={row[col.dataKeyLink]} target="_blank" rel="noreferrer">
        {row[col.dataKey]}
      </a>
    ),
  },
  {
    dataKey: "compFav",
    dataKeyLink: "AcadPlan",
    label: "Compare and favorite",
    className: "compare-fav",
    renderTemplate: ({ col, row, rowIndex }) => (
      <form className="uds-form cell-container">
        <div className="form-check m-0">
          <input
            className="form-check-input"
            type="checkbox"
            id={`fav-button-${rowIndex}`}
            value="option1"
          />
          <label
            className="form-check-label"
            htmlFor={`fav-button-${rowIndex}`}
          >
            &nbsp;
          </label>
        </div>
        <FavButton onClick={() => saveFav(row[col.dataKeyLink])} />
      </form>
    ),
  },
  {
    dataKey: "info",
    label: "",
    hasInfo: true,
    ariaLabel: "Apply Now or Request Info",
    className: "apply-info",
    renderTemplate: () => (
      <div className="cell-container">
        <ApplyNow />
        <RequestInfo />
      </div>
    ),
  },
];

const genRowId = idGenerator(`row-`);
/**
 *
 * @param {GridListingProps} props
 * @returns {JSX.Element}
 */
const DegreeList = ({ programms }) => {
  /** @type {GridColumn []} */
  const columns = defaultColumns;
  const [preview, setPreview] = useState({
    isOpen: false,
    url: "",
    posTop: 0,
    posLeft: 0,
  });

  return (
    <section className="container">
      <BoxPreview className="box-preview">
        <iframe
          src={preview.url}
          width="500px"
          height="500px"
          title="preview"
          style={{
            display: preview.isOpen ? "block" : "none",
            position: "absolute",
            top: preview.posTop,
            left: preview.posLeft,
          }}
        />
      </BoxPreview>

      <Table>
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
                <span>{col.label}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {programms.slice(0, 10).map((row, rowIndex) => {
            const rowId = genRowId.next().value;

            return (
              <tr key={rowId} id="refine-N-13-0 -0-false-BMUS" role="row">
                {columns.map(col => (
                  <td
                    key={`${rowId}-${col.dataKey}`}
                    className={`${col.className}`}
                  >
                    {col.renderTemplate?.({
                      col,
                      row,
                      rowIndex,
                      // onMouseOver: url =>
                      //   setPreview({
                      //     isOpen: true,
                      //     url,
                      //     posTop: 1,
                      //     posLeft: 1,
                      //   }),
                      // onMouseOut: () =>
                      //   setPreview({
                      //     isOpen: false,
                      //   }),
                    })}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={columns.length}>todo: pagination...</td>
          </tr>
        </tfoot>
      </Table>
    </section>
  );
};

DegreeList.propTypes = {
  programms: PropTypes.arrayOf(PropTypes.object),
};
export { DegreeList };
