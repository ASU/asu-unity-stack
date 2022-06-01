import PropTypes from "prop-types";
import React, { useState } from "react";

import { engineNames } from "../../../helpers/search";
import { QuickLinks } from "../../../QuickLinks/index";
import { ASUSearchResultsList } from "../../../SearchResultsList/index";
import { SearchMessage } from "../SearchMessage";
import { AllTabLayout } from "./index.styles";

const AllTab = ({ term, engines, site, goToTab }) => {
  const [promotedProfile, setPromotedProfile] = useState(null);
  const [promotedResult, setPromotedResult] = useState(null);
  const [totalResults, setTotalResults] = useState(0);

  const tabIds = {
    all: "all",
    sites: "web_sites",
    faculty: "web_dir_faculty_staff",
    students: "web_dir_students",
  };

  const registerResults = num => {
    setTotalResults(num);
  };

  return (
    <AllTabLayout>
      <div className="all-message">
        <SearchMessage term={term} number={totalResults} />
      </div>
      <div className="all-content">
        <div className="all-content-column">
          <div className="top-results all-content-item">
            <div>{promotedResult}</div>
            <div>{promotedProfile}</div>
          </div>
          {site && (
            <div className="subdomain-results all-content-item">
              <ASUSearchResultsList
                engine={engines[engineNames.SITES_LOCAL]}
                term={term}
                type="preview"
                itemsPerPage={6}
                titleText={`All results from ${site}`}
                seeAllResultsText={`See all results from ${site}`}
                onExpandClick={() => goToTab(tabIds.sites)}
                GASource={`all results from ${site}`}
                hidePaginator
                registerResults={registerResults}
                setPromotedResult={site ? setPromotedResult : null}
              />
            </div>
          )}
          <div className="all-results all-content-item">
            <ASUSearchResultsList
              engine={engines[engineNames.SITES]}
              term={term}
              type="full"
              itemsPerPage={6}
              titleText="All asu.edu results"
              GASource="all asu.edu results"
              setPromotedResult={!site ? setPromotedResult : null}
              registerResults={registerResults}
            />
          </div>
        </div>
        <div className="all-content-column">
          <div className="faculty-and-staff all-content-item">
            <ASUSearchResultsList
              engine={engines[engineNames.FACULTY]}
              term={term}
              itemsPerPage={3}
              titleText="Faculty and staff"
              type="micro"
              seeAllResultsText="See all results"
              onExpandClick={() => goToTab(tabIds.faculty)}
              GASource="faculty and staff"
              setPromotedResult={setPromotedProfile}
              hidePaginator
              registerResults={registerResults}
            />
          </div>
          <div className="students all-content-item">
            <ASUSearchResultsList
              engine={engines[engineNames.STUDENTS]}
              term={term}
              itemsPerPage={3}
              titleText="Students"
              type="micro"
              seeAllResultsText="See all results"
              onExpandClick={() => goToTab(tabIds.students)}
              GASource="students"
              hidePaginator
              registerResults={registerResults}
            />
          </div>
          <div className="quick-links all-content-item">
            <QuickLinks />
          </div>
        </div>
      </div>
    </AllTabLayout>
  );
};

AllTab.propTypes = {
  term: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  engines: PropTypes.object,
  site: PropTypes.string,
  goToTab: PropTypes.func,
};

export { AllTab };
