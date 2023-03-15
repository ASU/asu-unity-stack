import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import { TabbedPanels, Tab } from "../../../components-core";
import { engineNames, engines } from "../helpers/search";
import { ASUSearchResultsList } from "../SearchResultsList";

export const FacultyRankTabPanels = ({
  filters,
  API_URL,
  searchApiVersion,
  appPathFolder,
  deptIds,
  display,
  profileURLBase,
  searchType,
}) => {
  const RES_PER_PAGE = 6;
  const sort = "faculty_rank";
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

  function doSearch(page) {

  }

  const tempFilters = { ...filters };
  tempFilters["deptIds"] = deptIds.split(",");

  return (
    <TabbedPanels onTabChange={() => true} id="faculty-rank-tabs">
      <Tab id="faculty" title="Faculty">
        <ASUSearchResultsList
          key={1}
          engine={enginesWithParams[searchTypeEngineMap[searchType]]}
          itemsPerPage={parseInt(display.profilesPerPage, 10) || RES_PER_PAGE}
          size="large"
          sort={sort}
          hidePaginator={display.usePager !== "1"}
          filters={tempFilters}
          profilesToFilterOut={display.doNotDisplayProfiles}
          display={display}
          rankGroup="1"
        />
      </Tab>
      <Tab id="acad-pro" title="Academic Professionals">
        <ASUSearchResultsList
          engine={enginesWithParams[searchTypeEngineMap[searchType]]}
          itemsPerPage={parseInt(display.profilesPerPage, 10) || RES_PER_PAGE}
          size="large"
          sort={sort}
          hidePaginator={display.usePager !== "1"}
          filters={tempFilters}
          profilesToFilterOut={display.doNotDisplayProfiles}
          display={display}
          rankGroup="2"
        />
      </Tab>
      <Tab
        id="st-acad-pro"
        title="Fixed-Term Faculty and Academic Professionals"
      >
        <ASUSearchResultsList
          engine={enginesWithParams[searchTypeEngineMap[searchType]]}
          itemsPerPage={parseInt(display.profilesPerPage, 10) || RES_PER_PAGE}
          size="large"
          sort={sort}
          hidePaginator={display.usePager !== "1"}
          filters={tempFilters}
          profilesToFilterOut={display.doNotDisplayProfiles}
          display={display}
          rankGroup="3"
        />
      </Tab>
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
