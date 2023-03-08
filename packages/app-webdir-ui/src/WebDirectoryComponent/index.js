import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import { FacultyRankTabPanels } from "../FacultyRankComponent";
import { engineNames, engines } from "../helpers/search";
import { SortPicker } from "../SearchPage/components/sort";
import { ASUSearchResultsList } from "../SearchResultsList";
import { WebDirLayout, FacultyRankLayout } from "./index.styles";

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
}) {
  const engineParams = {
    filters,
    API_URL,
    searchApiVersion,
    profileURLBase: profileURLBase || "https://search.asu.edu",
    appPathFolder,
  };

  const facultyRankParams = {
    ...engineParams,
    deptIds,
    display,
    searchType,
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
    },
  };
  const [sort, setSort] = useState(display.defaultSort);
  const [requestFilters, setRequestFilters] = useState();

  const defaultCMSOptions = {
    last_name: "last_name_asc",
    webdir_customized: "employee_weight",
    people_order: "people_order",
  };
  const setNewSort = newSort => {
    setSort(prev => newSort);
  };

  const RES_PER_PAGE = 6;
  let customSortOptions;

  if (searchType === "departments") {
    customSortOptions = [
      { value: "default", label: "Choose Sort", disabled: true },
      { value: "last_name_asc", label: "Last Name (ascending)" },
      { value: "last_name_desc", label: "Last Name (descending)" },
      { value: "employee_weight", label: "Department Defined" },
    ];
  } else {
    customSortOptions = [
      { value: "default", label: "Choose Sort", disabled: true },
      { value: "last_name_asc", label: "Last Name (ascending)" },
      { value: "last_name_desc", label: "Last Name (descending)" },
    ];
  }

  const searchTypeEngineMap = {
    departments: engineNames.WEB_DIRECTORY_DEPARTMENTS,
    people: engineNames.WEB_DIRECTORY_PEOPLE_AND_DEPS,
    people_departments: engineNames.WEB_DIRECTORY_PEOPLE_AND_DEPS,
  };
  function doSearch() {
    const tempFilters = { ...filters };
    if (searchType === "departments") {
      tempFilters["deptIds"] = deptIds.split(",");
    } else {
      tempFilters["peopleInDepts"] = ids
        .split(",")
        .filter(id => id.includes(":"))
        .map(pair => pair.split(":"))
        .map(pair => {
          return { asurite_id: pair[0], dept_id: pair[1] };
        });
    }
    setRequestFilters(tempFilters);
  }

  useEffect(() => {
    if (
      Object.prototype.hasOwnProperty.call(
        defaultCMSOptions,
        display.defaultSort
      )
    ) {
      setNewSort(defaultCMSOptions[display.defaultSort]);
    }
  }, [display.defaultSort]);

  useEffect(() => {
    if ((searchType === "departments" && deptIds) || ids) {
      doSearch();
    }
  }, [sort]);

  return (
    <>
      {searchType === "faculty_rank" ? (
        <FacultyRankLayout>
          <FacultyRankTabPanels {...facultyRankParams} />
        </FacultyRankLayout>
      ) : (
        <WebDirLayout>
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
                parseInt(display.profilesPerPage, 10) || RES_PER_PAGE
              }
              onPageChange={page => doSearch(page)}
              size="large"
              sort={sort}
              hidePaginator={display.usePager !== "1"}
              filters={requestFilters}
              profilesToFilterOut={display.doNotDisplayProfiles}
              display={display}
              appPathFolder={appPathFolder}
            />
          </div>
        </WebDirLayout>
      )}
    </>
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
};

export { WebDirectory };
