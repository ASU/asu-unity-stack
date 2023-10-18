import { TabbedPanels, Tab } from "@asu/components-core";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import { FilterComponent } from "../helpers/Filter";
import { engineNames, engines } from "../helpers/search";
import { ASUSearchResultsList } from "../SearchResultsList";

const filtersData = {
  1: "Faculty",
  2: "Academic Professionals",
  3: "Fixed-Term Faculty and Academic Professionals",
};

const FacultyRankTabPanels = ({
  filters,
  API_URL,
  searchApiVersion,
  appPathFolder,
  deptIds,
  display,
  profileURLBase,
  searchType,
  alphaFilter,
}) => {
  const [requestFilters, setRequestFilters] = useState(null);
  const [tabChange, setTabChange] = useState(null);
  const RES_PER_PAGE = 6;
  const sort = "faculty_rank";

  useEffect(() => {
    const tempFilters = { ...filters };
    tempFilters["deptIds"] = deptIds.split(",");
    setRequestFilters(tempFilters);
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

  return (
    <TabbedPanels onTabChange={setTabChange}>
      {[1, 2, 3].map(rankGroup => (
        <Tab
          key={rankGroup}
          id={`faculty-${rankGroup}`}
          title={filtersData[rankGroup]}
        >
          {alphaFilter === "true" && (
            <FilterComponent
              filterLabel="Filter by last initial"
              choices={[
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
                "M",
                "N",
                "O",
                "P",
                "Q",
                "R",
                "S",
                "T",
                "U",
                "V",
                "W",
                "X",
                "Y",
                "Z",
              ]}
              onChoose={filterLetter =>
                setRequestFilters({ ...requestFilters, lastInit: filterLetter })
              }
              resetFilters={() =>
                setRequestFilters({ ...requestFilters, lastInit: "" })
              }
            />
          )}
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
  alphaFilter: PropTypes.string,
};

export default FacultyRankTabPanels;
