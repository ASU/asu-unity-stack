import { TabbedPanels, Tab } from "@asu/components-core";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import { engineNames, engines } from "../helpers/search";
import { ASUSearchResultsList } from "../SearchResultsList";

/**
 * Data object representing the filters for faculty rank.
 * @typedef {Object} FiltersData
 * @property {string} 1 - Filter for Faculty.
 * @property {string} 2 - Filter for Academic Professionals.
 * @property {string} 3 - Filter for Fixed-Term Faculty and Academic Professionals.
 */

const filtersData = {
  1: "Faculty",
  2: "Academic Professionals",
  3: "Fixed-Term Faculty and Academic Professionals",
};

/**
 * Prop types for FacultyRankTabPanels component.
 * @type {Object}
 * @property {string} deptIds - The department IDs.
 * @property {string} API_URL - The API URL.
 * @property {string} searchApiVersion - The search API version.
 * @property {string} searchType - The type of search.
 * @property {string} appPathFolder - The application path folder.
 * @property {Object} display - Display settings.
 * @property {string} display.defaultSort - The default sorting option.
 * @property {string} display.doNotDisplayProfiles - Profiles not to display.
 * @property {string} display.profilesPerPage - Number of profiles to display.
 * @property {string} display.usePager - Whether to use pagination.
 * @property {Object} filters - Filters for the search.
 * @property {string} filters.employee - Employee filter.
 * @property {string} filters.expertise - Expertise filter.
 * @property {string} filters.title - Title filter.
 * @property {string} filters.campuses - Campuses filter.
 */

const FacultyRankTabPanels = ({
  filters,
  API_URL,
  searchApiVersion,
  appPathFolder,
  deptIds,
  display,
  profileURLBase,
  searchType,
}) => {
  const [requestFilters, setRequestFilters] = useState({});
  const [tabChange, setTabChange] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tabs, setTabs] = useState({});
  const RES_PER_PAGE = 6;
  const sort = "faculty_rank";

  const searchUrl = new URL(
    `${API_URL}${searchApiVersion}${
      engines[engineNames.WEB_DIRECTORY_FACULTY_RANK].url
    }`
  );
  searchUrl.searchParams.append("sort_by", searchType);
  searchUrl.searchParams.append("dept_ids", deptIds);
  searchUrl.searchParams.append("page", "1");
  searchUrl.searchParams.append("size", "1");

  const fetchRankGroupData = async rankGroup => {
    const url = `${searchUrl}&rank_group=${rankGroup}`;
    const response = await fetch(url);
    const data = await response.json();
    return { rankGroup, length: data.results?.length };
  };

  useEffect(() => {
    const tempFilters = { ...filters };
    tempFilters["deptIds"] = deptIds.split(",");
    setRequestFilters(tempFilters);

    const promises = Object.keys(filtersData).map(fetchRankGroupData);
    Promise.all(promises).then(results => {
      const newTabs = results.reduce((acc, { rankGroup, length }) => {
        if (length > 0) {
          acc[rankGroup] = filtersData[rankGroup];
        }
        return acc;
      }, {});
      setTabs(newTabs);
      setLoading(false);
    });
  }, [deptIds, tabChange]);

  const engineParams = {
    filters,
    API_URL,
    searchApiVersion,
    profileURLBase: profileURLBase || "https://search.asu.edu",
    appPathFolder,
  };

  const enginesWithParams = {
    [engineNames.WEB_DIRECTORY_FACULTY_RANK]: {
      ...engines[engineNames.WEB_DIRECTORY_FACULTY_RANK],
      ...engineParams,
    },
  };

  const searchTypeEngineMap = {
    faculty_rank: engineNames.WEB_DIRECTORY_FACULTY_RANK,
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Object.keys(tabs).length) {
    return <div>No faculty rank data found for department {deptIds}</div>;
  }

  return (
    <TabbedPanels onTabChange={setTabChange}>
      {Object.keys(tabs).map(rankGroup => (
        <Tab
          key={rankGroup}
          id={`faculty-${rankGroup}`}
          title={filtersData[rankGroup]}
        >
          <ASUSearchResultsList
            engine={enginesWithParams[searchTypeEngineMap[searchType]]}
            itemsPerPage={parseInt(display.profilesPerPage, 10) || RES_PER_PAGE}
            size="large"
            sort={sort}
            hidePaginator={display.usePager !== "1"}
            filters={requestFilters}
            profilesToFilterOut={display.doNotDisplayProfiles}
            display={display}
            rankGroup={rankGroup.toString()}
            restClientTag="asuis"
          />
        </Tab>
      ))}
    </TabbedPanels>
  );
};

FacultyRankTabPanels.propTypes = {
  deptIds: PropTypes.string,
  API_URL: PropTypes.string,
  searchApiVersion: PropTypes.string,
  searchType: PropTypes.string,
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

export default FacultyRankTabPanels;
