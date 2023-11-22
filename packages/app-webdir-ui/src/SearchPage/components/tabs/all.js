import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import { engineNames } from "../../../helpers/search";
import { QuickLinks } from "../../../QuickLinks/index";
import { ASUSearchResultsList } from "../../../SearchResultsList/index";
import { SearchMessage } from "../SearchMessage";
import { AllTabLayout } from "./index.styles";

/**
 * React component for displaying search results on the main tab.
 *
 * @param {Object} props - The props for configuring the AllTab component.
 * @param {string} props.term - The search term.
 * @param {Object} props.engines - The search engines for different categories.
 * @param {string} props.site - The selected site for filtering results.
 * @param {function} props.goToTab - Function to switch between tabs.
 * @param {function} props.setTotalResults - Function to set the total number of results.
 * @param {number} props.totalResults - The total number of search results.
 * @param {boolean} props.loggedIn - Indicates if the user is logged in.
 * @returns {JSX.Element} The AllTab component.
 */

const AllTab = ({
  term,
  engines,
  site,
  goToTab,
  setTotalResults,
  totalResults,
  loggedIn,
}) => {
  const [promotedProfile, setPromotedProfile] = useState(null);
  const [promotedResult, setPromotedResult] = useState(null);

  const tabIds = {
    all: "all",
    sites: "web_sites",
    faculty: "web_dir_faculty_staff",
    students: "web_dir_students",
  };

  const registerResults = num => {
    setTotalResults(prev => prev + num);
  };

  useEffect(() => {
    return () => setTotalResults(0);
  }, []);

  // Initialize Google Programmable Search Engine.
  // Targets class gcse-searchresults-only (in this file)
  // Gets search param from q url param. Relies on this useEfffect()
  // being triggered by route changes, so added the
  // key={document.location.href} to AllTabLayout component here.
  // Docs for Programmable Search Engine:
  // https://developers.google.com/custom-search/docs/element
  useEffect(() => {
    const cx = "007921449323584335659:7htbgpmmreu";
    const gcse = document.createElement("script");
    gcse.type = "text/javascript";
    gcse.async = true;
    gcse.src = `https://cse.google.com/cse.js?cx=${cx}`;
    const s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(gcse, s);
  });

  return (
    <AllTabLayout key={document.location.href}>
      <div className="all-message">
        {/*
        <SearchMessage term={term} number={totalResults} />
        */}
      </div>
      <div className="all-content">
        <div className="all-content-column">
          {(promotedResult || promotedProfile) && (
            <div className="top-results all-content-item">
              <div>{promotedResult}</div>
              <div>{promotedProfile}</div>
            </div>
          )}
          {site && (
            <div className="subdomain-results all-content-item">
              <ASUSearchResultsList
                engine={engines[engineNames.SITES_LOCAL]}
                term={term}
                type="preview"
                itemsPerPage={3}
                titleText={`All results from ${site}`}
                seeAllResultsText={`See all results from ${site}`}
                onExpandClick={() => goToTab(tabIds.sites)}
                GASource={`all results from ${site}`}
                hidePaginator
                registerResults={registerResults}
                // Turn off first item automatic promotion for local
                // setPromotedResult={site ? setPromotedResult : null}
                localSection
                loggedIn={loggedIn}
                restClientTag="asuis"
              />
            </div>
          )}
          <div className="all-results all-content-item">
            {term && (
              <>
                <div className="results-title">All asu.edu results</div>
                <div className="gcse-searchresults-only" />
              </>
            )}
            {/* Original Elastic site search for All ASU sites
            <ASUSearchResultsList
              engine={engines[engineNames.SITES]}
              term={term}
              type="full"
              itemsPerPage={6}
              titleText="All asu.edu results"
              GASource="all asu.edu results"
              setPromotedResult={!site ? setPromotedResult : null}
              registerResults={registerResults}
              localSection={false}
              loggedIn={loggedIn}
            />
            */}
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
              restClientTag="asuis"
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
              icon={["fa", "lock"]}
              restClientTag="asuis"
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
  setTotalResults: PropTypes.func,
  totalResults: PropTypes.number,
  loggedIn: PropTypes.bool,
};

export { AllTab };
