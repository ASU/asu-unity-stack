// @ts-check
/* eslint no-use-before-define: 0 */
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import trackReactComponent from "../../../../shared/services/componentDatalayer";
import FacultyRankTabPanels from "../FacultyRankComponent";
import { FILTER_CHOICES } from "../helpers/constants";
import { FilterComponent } from "../helpers/Filter";
import { engineNames, engines } from "../helpers/search";
import { SortPicker } from "../SearchPage/components/sort";
import { ASUSearchResultsList } from "../SearchResultsList";
import { WebDirLayout, FacultyRankLayout } from "./index.styles";

/**
 * React component for displaying web directory search results.
 *
 * @param {Object} props - The props for configuring the WebDirectory component.
 * @param {"departments" | "faculty_rank" | "people" | "people_departments"} props.searchType - The type of web directory search (e.g., 'departments', 'people').
 * @param {string} props.ids - The IDs used for searching (e.g., department IDs, ASURITE IDs).
 * @param {string} props.deptIds - The department IDs for searching.
 * @param {string} props.API_URL - The API URL for performing the search.
 * @param {string} props.searchApiVersion - The version of the search API to use.
 * @param {string} props.profileURLBase - The base URL for profile links.
 * @param {string} props.appPathFolder - The base path for the application folder.
 * @param {object} props.display - Display options for the search results.
 * @param {Object} props.filters - Filters for the search.
 * @param {string} props.alphaFilter - Indicates whether to enable alpha filtering.
 * @returns {JSX.Element} The WebDirectory component.
 */

function WebDirectory({
  searchType,
  ids,
  deptIds,
  API_URL,
  searchApiVersion,
  profileURLBase,
  appPathFolder,
  display,
  filters,
  alphaFilter = "false",
}) {
  const [sort, setSort] = useState(defaultSortSetter);
  const [requestFilters, setRequestFilters] = useState(doSearch);
  const RES_PER_PAGE = 6;

  useEffect(() => {
    if (typeof window !== "undefined") {
      trackReactComponent({
        packageName: "app-webdir-ui",
        component: "WebDirectory",
        type: searchType,
        configuration: {
          ...filters,
          ...display,
        },
      });
    }
  }, []);

  // Initializer functions for requestFilters and sort. Only runs on first render.
  function doSearch() {
    const tempFilters = filters ? { ...filters } : {};
    if (searchType === "departments" || searchType === "faculty_rank") {
      tempFilters["deptIds"] = deptIds.split(",");
      return tempFilters;
    }
    tempFilters["peopleInDepts"] = ids
      .split(",")
      .filter(id => id.includes(":"))
      .map(pair => pair.split(":"))
      .map(pair => {
        return { asurite_id: pair[0], dept_id: pair[1] };
      });
    return tempFilters;
  }

  function defaultSortSetter() {
    const defaultCMSOptions = {
      last_name: "last_name_asc",
      webdir_customized: "employee_weight",
      people_order: "people_order",
    };
    if (
      Object.prototype.hasOwnProperty.call(
        defaultCMSOptions,
        display?.defaultSort
      )
    ) {
      return defaultCMSOptions[display?.defaultSort];
    }
    return "last_name_asc"; // defaults to last_name_asc if no default sort is set in CMS
  }

  // Function returns an array of custom sort options based on the webDirSearchType and departmentIds parameters.
  function sortOptionsFunc(webDirSearchType, departmentIds) {
    if (
      webDirSearchType === "departments" &&
      departmentIds?.split(",")?.length < 2
    ) {
      return [
        { value: "default", label: "Choose Sort", disabled: true },
        { value: "last_name_asc", label: "Last Name (ascending)" },
        { value: "last_name_desc", label: "Last Name (descending)" },
        { value: "employee_weight", label: "Department Defined" },
      ];
    }
    return [
      { value: "default", label: "Choose Sort", disabled: true },
      { value: "last_name_asc", label: "Last Name (ascending)" },
      { value: "last_name_desc", label: "Last Name (descending)" },
    ];
  }

  const customSortOptions = sortOptionsFunc(searchType, deptIds);

  const engineParams = {
    filters,
    API_URL,
    searchApiVersion,
    profileURLBase: profileURLBase || "https://search.asu.edu",
    appPathFolder,
  };

  const enginesWithParams = {
    [engineNames.WEB_DIRECTORY_DEPARTMENTS]: {
      ...engines[engineNames.WEB_DIRECTORY_DEPARTMENTS],
      ...engineParams,
    },
    [engineNames.WEB_DIRECTORY_PEOPLE_AND_DEPS]: {
      ...engines[engineNames.WEB_DIRECTORY_PEOPLE_AND_DEPS],
      ...engineParams,
    },
    [engineNames.WEB_DIRECTORY_PEOPLE_AND_DEPS]: {
      ...engines[engineNames.WEB_DIRECTORY_PEOPLE_AND_DEPS],
      ...engineParams,
    },
    [engineNames.WEB_DIRECTORY_FACULTY_RANK]: {
      ...engines[engineNames.WEB_DIRECTORY_FACULTY__RANK],
      ...engineParams,
      deptIds,
      display,
      searchType,
    },
  };

  const setNewSort = newSort => {
    setSort(newSort);
  };

  const searchTypeEngineMap = {
    departments: engineNames.WEB_DIRECTORY_DEPARTMENTS,
    people: engineNames.WEB_DIRECTORY_PEOPLE_AND_DEPS,
    people_departments: engineNames.WEB_DIRECTORY_PEOPLE_AND_DEPS,
    faculty_rank: engineNames.WEB_DIRECTORY_FACULTY_RANK,
  };

  if (searchType !== "faculty_rank") {
    return (
      <>
        <WebDirLayout>
          {alphaFilter === "true" && (
            <FilterComponent
              filterLabel="Filter By Last Initial"
              choices={FILTER_CHOICES}
              onChoose={filterLetter =>
                setRequestFilters({ ...requestFilters, lastInit: filterLetter })
              }
              resetFilters={() =>
                setRequestFilters({ ...requestFilters, lastInit: "" })
              }
            />
          )}
          <div className="sort">
            <SortPicker
              customSortOptions={customSortOptions}
              sort={sort}
              onChange={val => setNewSort(val)}
            />
          </div>
          <div className="results">
            <ASUSearchResultsList
              engine={enginesWithParams[searchTypeEngineMap[searchType]]}
              itemsPerPage={
                parseInt(display?.profilesPerPage, 10) || RES_PER_PAGE
              }
              sort={sort}
              hidePaginator={display?.usePager !== "1"}
              filters={requestFilters}
              profilesToFilterOut={display?.doNotDisplayProfiles}
              display={display}
              appPathFolder={appPathFolder}
              restClientTag="webdir"
            />
          </div>
        </WebDirLayout>
      </>
    );
  }
  return (
    <FacultyRankLayout>
      <FacultyRankTabPanels
        {...enginesWithParams[searchTypeEngineMap[searchType]]}
        alphaFilter={alphaFilter}
        filters={requestFilters}
      />
    </FacultyRankLayout>
  );
}

WebDirectory.propTypes = {
  deptIds: PropTypes.string,
  API_URL: PropTypes.string,
  searchApiVersion: PropTypes.string,
  searchType: PropTypes.string,
  ids: PropTypes.string,
  profileURLBase: PropTypes.string,
  appPathFolder: PropTypes.string,
  display: PropTypes.shape({
    defaultSort: PropTypes.string,
    doNotDisplayProfiles: PropTypes.string,
    profilesPerPage: PropTypes.string,
    usePager: PropTypes.string,
  }),
  filters: PropTypes.shape({
    employee: PropTypes.string,
    expertise: PropTypes.string,
    title: PropTypes.string,
    campuses: PropTypes.string,
  }),
  alphaFilter: PropTypes.string,
};

export { WebDirectory };
