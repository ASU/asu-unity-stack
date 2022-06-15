import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { engineNames, engines } from "../helpers/search";
import { SortPicker } from "../SearchPage/components/sort";
import { ASUSearchResultsList } from "../SearchResultsList";
import { WebDirLayout } from "./index.styles";

function WebDirectory({
  searchType,
  ids,
  deptIds,
  API_URL,
  searchApiVersion,
  profileURLBase,
  display,
  filters,
}) {
  const engineParams = {
    filters,
    API_URL,
    searchApiVersion,
    profileURLBase: profileURLBase || "https://isearch.asu.edu",
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
  };
  const sortParamName = "sort-by";
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState();
  const [requestFilters, setRequestFilters] = useState();

  const setNewSort = newSort => {
    setSearchParams({ [sortParamName]: newSort });
  };

  const RES_PER_PAGE = 6;

  const departmentDefinedOption =
    searchType === "departments"
      ? { value: "department_defined", label: "Department defined" }
      : { value: "", label: "Choose Sort" };

  const customSortOptions = [
    departmentDefinedOption,
    { value: "last_name_asc", label: "Last Name (ascending)" },
    { value: "last_name_desc", label: "Last Name (descending)" },
  ];

  const defaultCMSOptions = {
    last_name: "last_name_asc",
    webdir_customized: "employee_weight",
  };

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
    if (defaultCMSOptions[display.defaultSort]) {
      setSearchParams({
        [sortParamName]: defaultCMSOptions[display.defaultSort],
      });
    }
  }, []);

  useEffect(() => {
    if ((searchType === "departments" && deptIds) || ids) {
      doSearch();
    }
  }, [searchParams]);

  return (
      <WebDirLayout>
        <div className="sort">
          <SortPicker
            customSortOptions={customSortOptions}
            sort={searchParams.get(sortParamName)}
            onChange={val => setNewSort(val)}
            defaultValue
          />
        </div>
        <div className="results">
          <ASUSearchResultsList
            engine={enginesWithParams[searchTypeEngineMap[searchType]]}
            itemsPerPage={parseInt(display.profilesPerPage, 10) || RES_PER_PAGE}
            onPageChange={page => doSearch(page)}
            size="large"
            sort={searchParams.get(sortParamName)}
            hidePaginator={display.usePager !== "1"}
            filters={requestFilters}
            profilesToFilterOut={display.doNotDisplayProfiles}
            display={display}
          />
        </div>
      </WebDirLayout>
  );
}

WebDirectory.propTypes = {
  deptIds: PropTypes.string,
  API_URL: PropTypes.string,
  searchApiVersion: PropTypes.string,
  searchType: PropTypes.string,
  ids: PropTypes.string,
  profileURLBase: PropTypes.string,
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
  }),
};

export { WebDirectory };
