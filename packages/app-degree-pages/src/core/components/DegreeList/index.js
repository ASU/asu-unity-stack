// @ts-check
import { sanitize } from "dompurify";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";

import {
  accellerateDegreeLink,
  majorInfoLink,
  mapTooltipLink,
  requestInfoLink,
  saveFav,
} from "../../services/degree-http-service";
import { idGenerator, toTitleCase } from "../../utils";
import { ChevronIconButton, InfoIcon, FavButton } from "../icons";
import { ApplyNow, RequestInfo } from "./components";
import { Table } from "./index.style";

/** @typedef {import("../../models/app-props").GridColumn}  GridColumn */
/**
 *  @typedef {{
 *    programms: Object[]
 * }} GridListingProps
 */

const renderInfo = row => (
  <div>
    <header>
      <strong>Program Description:</strong>
    </header>
    <p>{row["DescrlongExtns"]}</p>
    <div className="show-more-text link">[ ... more ]</div>
  </div>
);

const renderExtraInfo = row => {
  const mathintensity = {
    G: "General",
    M: "Moderate",
    S: "Substantial",
  };
  return (
    <div>
      <div>
        <strong>Additional Program Fee: </strong>
        {row["AsuProgramFee"] === "Y" && "Yes"}
      </div>
      <div>
        <strong>Second Language Requirement: </strong>
        {row["AsuLangReqFlag"] === "Y" ? row["asuAcadpLrfText"] || "Yes" : "No"}
      </div>

      <div>
        <strong>First Required Math Course:</strong>
        {row["asuMathReqFlag"] === "Y" && (
          <div>
            <strong>First Required Math Course:</strong>
            <span>{row["additionalMathReqCourse"]}</span>
            {row["asuAcadpMrfText"] && <span>{row["asuAcadpMrfText"]}</span>}
          </div>
        )}
      </div>

      <div>
        <strong>Math Intensity:</strong>
        {mathintensity[row["MathIntensity"]]}
      </div>
    </div>
  );
};

/* eslint-disable react/prop-types */
/** @type {GridColumn []} */
const columns = [
  {
    dataKey: "Descr100",
    label: "Major",
    ariaLabel: "Major (Concentration): activate to sort column",
    className: "major",
    sortable: true,
    contentTemplate: ({ row, rowIndex, onClick }) => (
      <div className="cell-container">
        <a
          href={majorInfoLink(row["Institution"], row["AcadPlan"])}
          target="blank"
        >
          {row["Descr100"]} {}
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
    contentTemplate: ({ col, row }) => (
      <div className="cell-container">
        <span>{row[col.dataKey]}</span>
        <InfoIcon
          onClick={() =>
            // todo: refactor this solution
            alert(`${row["DegreeDescr"]}\n\n${row["DegreeDescrlong"]}`)
          }
        />
      </div>
    ),
  },
  {
    dataKey: "concurrentDegreeMajorMaps",
    label: "Required Courses",
    ariaLabel: "Required Courses",
    className: "required-course",
    contentTemplate: ({ row }) => {
      const isOnline = row["managedOnlineCampus"];
      const directUrl = isOnline
        ? row["onlineMajorMapURL"]
        : row["AsuCritTrackUrl"];

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
    contentTemplate: ({ row, onMouseOver }) => {
      const showTooltip = location =>
        // todo: refactor this solution
        fetch(mapTooltipLink(location))
          .then(res => res.text())
          .then(body => {
            onMouseOver(body);
            // alert(`Location\n\n${body}`);
          });

      return (
        <div className="container">
          {row["CampusStringArray"]?.map(location => (
            <div className="row justify-content-between">
              <a
                key={location}
                href={mapTooltipLink(location)}
                target="blank"
              >{`${toTitleCase(location)}, `}</a>
              <span
                data-tip
                data-for="registerTip"
                onMouseOver={() => showTooltip(location)}
                onFocus={() => showTooltip(location)}
              >
                <InfoIcon />
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
    contentTemplate: ({ row }) => (
      <div className="cell-container">
        {row["accelerateDegrees"]?.length > 0 && (
          <div className="row justify-content-between">
            <a
              href={accellerateDegreeLink(row["AcadPlan"])}
              rel="noreferrer"
              target="_blank"
            >
              4+1 years
            </a>
            <InfoIcon
              onClick={() =>
                // todo: refactor this solution
                fetch(accellerateDegreeLink(row["AcadPlan"]))
                  .then(res => res.text())
                  .then(body => {
                    console.log("body", body);
                    alert(`4+1 years\n\n${body}`);
                  })
              }
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
    contentTemplate: ({ row }) => (
      <a href={row["CollegeUrl"]} target="_blank" rel="noreferrer">
        {row["CollegeDescr100"]}
      </a>
    ),
  },
  {
    dataKey: "compare-fav",
    label: "Compare and favorite",
    className: "compare-fav",
    // todo: refactor this solution
    headerTemplate: () => (
      <div>
        <InfoIcon onClick={() => alert("Compare and favorite: info....")} />
      </div>
    ),
    contentTemplate: ({ row, rowIndex }) => (
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
        <FavButton onClick={() => saveFav(row["AcadPlan"])} />
      </form>
    ),
  },
  {
    dataKey: "compare-apply-info",
    label: "",
    hasInfo: true,
    ariaLabel: "Apply Now or Request Info",
    className: "apply-info",
    contentTemplate: ({ row }) => (
      <div className="row flex-column  align-items-end p-1">
        <ApplyNow
          onClick={() =>
            // todo: refactor this solution
            alert("APPLY NOW: TODO...")
          }
        />
        <RequestInfo
          href={requestInfoLink(
            row["AcadPlan"],
            row["Descr100"],
            row["EmailAddr"]
          )}
        />
      </div>
    ),
  },
];
/* eslint-enable react/prop-types */

const genRowId = idGenerator(`row-`);

/**
 *
 * @param {GridListingProps} props
 * @returns {JSX.Element}
 */
const DegreeList = ({ programms }) => {
  const [tooltip, setTooltip] = useState("");

  /** @type {{current: HTMLTableSectionElement}} */
  const valueRef = React.useRef(null);

  const setOpenRowIndex = (rowIndex, selected) => {
    const rows = valueRef.current.children;
    Array.prototype.forEach.call(
      rows,
      (r, i) => i !== rowIndex && r.setAttribute("data-is-open", "false")
    );

    const currentRow = valueRef.current.children[rowIndex];
    currentRow.setAttribute("data-is-open", String(selected));
  };

  useEffect(() => {
    ReactTooltip.rebuild();
  });

  return (
    <section className="container">
      <ReactTooltip id="registerTip" place="top" effect="solid">
        <span
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: sanitize(tooltip),
          }}
        />
      </ReactTooltip>
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
                {col.headerTemplate?.() || <span>{col.label}</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody ref={valueRef}>
          {
            // programms
            programms.slice(0, 10).map((row, rowCurrentIndex) => {
              const rowId = genRowId.next().value;
              const rowIndex = rowCurrentIndex * 2;
              return (
                <>
                  <tr key={rowId} role="row">
                    {columns.map(col => (
                      <td
                        key={`${rowId}-${col.dataKey}`}
                        className={`${col.className}`}
                      >
                        {col.contentTemplate?.({
                          col,
                          row,
                          rowIndex,
                          onClick: setOpenRowIndex,
                          onMouseOver: content => setTooltip(content),
                        })}
                      </td>
                    ))}
                  </tr>

                  <tr key={`${rowId}-row-info`} className="row-info">
                    <td key={`${rowId}-info`} colSpan={5}>
                      {renderInfo(row)}
                    </td>
                    <td key={`${rowId}-extra-info`} colSpan={2}>
                      {renderExtraInfo(row)}
                    </td>
                  </tr>
                </>
              );
            })
          }
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
