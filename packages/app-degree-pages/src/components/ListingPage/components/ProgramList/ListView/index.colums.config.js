/* eslint-disable no-unused-vars */
// @ts-check
import React from "react";

import {
  ChevronIconButton,
  InfoButtonIcon,
  //  FavButton
} from "../../../../../core/components/icons";
import {
  parseMajorInfoLink,
  accellerateDegreeTooltipLink, // TODO: this link needs a double check
  mapTooltipLink,
  accellerateDegreeLink,
  // requestInfoLink, // TODO: this contains the old page request info
  // saveFav, // TODO: this should handle the save to favorite
} from "../../../../../core/services/degree-http-service";
import { idGenerator, toTitleCase } from "../../../../../core/utils";
/** @typedef {import("../../../../../core/models/listing-page-types").GridColumn}  GridColumn */

/* eslint-disable react/prop-types, no-alert, no-console */
/** @type {GridColumn []} */
const columns = [
  {
    dataKey: "Major",
    label: "Major",
    className: "major",
    sortable: true,
    contentTemplate: ({ resolver, rowIndex, actionUrls, onClick }) => (
      <div className="cell-container">
        <a href={parseMajorInfoLink(resolver, actionUrls?.majorInfoUrl)}>
          {resolver.getMajorDesc()}
        </a>
        <ChevronIconButton
          ariaLabel={`${resolver.getMajorDesc()} arrow`}
          ariaControls={`row-info-${rowIndex}`}
          onClick={selected => onClick(rowIndex, selected)}
        />
      </div>
    ),
  },
  {
    dataKey: "Degree",
    label: "Degree",
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
    dataKey: "RequiredCourses",
    label: "Required Courses",
    className: "required-course",
    contentTemplate: ({ resolver }) => {
      const isOnline = resolver.isOnline();
      const directUrl = isOnline
        ? resolver.getOnlineMajorMapURL()
        : resolver.getAsuCritTrackUrl();

      const directMapLink = <a href={directUrl}>Major Map</a>;

      return directMapLink;
    },
  },
  {
    dataKey: "Location",
    label: "Campus or location",
    className: "campus-location",
    sortable: true,
    contentTemplate: ({ resolver }) => {
      const genCampusId = idGenerator(`campus-`);
      return (
        <div>
          {/* TODO: it maybe necessary {resolver.getAsuOfficeLoc()} */}

          {resolver.getCampusList().map((location, index, campusList) => (
            <div key={genCampusId.next().value} className="cell-container">
              {/*  TODO: This link is currently deferred till we discover which URL to link */}
              <span key={location}>{`${toTitleCase(location)}${
                index < campusList.length - 1 ? ", " : ""
              }`}</span>
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

  // TODO: THIS COMPONENT IS CURRENTLY DEFERRED
  {
    dataKey: "AcceleratedConcurrent",
    label: "Accelerated/ Concurrent",
    className: "accelerated-concurrent",
    sortable: true,
    contentTemplate: ({ resolver, actionUrls }) => (
      <div>
        {resolver.getConcurrentDegrees().lenght > 0 && (
          <div className="cell-container">concurrent</div>
        )}
        {resolver.getAccelerateDegrees().length > 0 && (
          <div className="cell-container">
            <a href={accellerateDegreeLink(resolver, actionUrls.majorInfoUrl)}>
              4+1 years
            </a>
            <InfoButtonIcon
              popover={{
                title: "4+1 years",
                body: () =>
                  fetch(accellerateDegreeTooltipLink(resolver.getAcadPlan())),
                withAuto: false,
              }}
            />
          </div>
        )}
      </div>
    ),
  },
  {
    dataKey: "CollegeSchool",
    label: "College/School",
    className: "college",
    sortable: true,
    contentTemplate: ({ resolver }) => (
      <a href={resolver.getCollegeUrl()}>{resolver.getCollegeDesc()}</a>
    ),
  },

  // TODO: THIS COMPONENT IS CURRENTLY DEFERRED
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

  // TODO: THIS COMPONENT IS CURRENTLY DEFERRED
  // {
  //   dataKey: "compare-apply-info",
  //   label: "",
  //   hasInfo: true,
  //   ariaLabel: "Apply Now or Request Info",
  //   className: "apply-info",
  //   contentTemplate: ({ resolver }) => (
  //     <div className="row flex-column  align-items-end p-1">
  //       <ApplyNow
  //         onClick={() =>
  //           // todo: refactor this solution
  //           alert("APPLY NOW: TODO...")
  //         }
  //       />
  //       <RequestInfo
  //         href={requestInfoLink(
  //           resolver.getAcadPlan(),
  //           resolver.getMajorDesc(),
  //           resolver.getEmailAddress()
  //         )}
  //       />
  //     </div>
  //   ),
  // },
];
/* eslint-enable react/prop-types, no-alert, no-console */

export { columns };
