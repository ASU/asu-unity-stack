// @ts-check
import { Hero } from "@asu/components-core";
import PropTypes from "prop-types";
import React, { useEffect, useState, useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";

import { useFetch } from "../../../../../shared";
import trackReactComponent from "../../../../../shared/services/componentDatalayer";
import {
  Loader,
  Main as MainSection,
  ThemeStyle,
  ErrorAlert,
} from "../../core/components";
import { listingPageDefaultDataSource } from "../../core/constants";
import { AppContext, AppProvider } from "../../core/context";
import { useListingPageLogger } from "../../core/hooks";
import {
  resolveListingHeroTitle,
  LIST_VIEW_ID,
  GRID_VIEW_ID,
  defaultAccelConcOption,
  onlneOption,
  ERROR_MESSAGE,
} from "../../core/models";
import {
  columSettingsPropShape,
  dataSourcePropShape,
} from "../../core/models/app-prop-types";
import { filterData, sortPrograms } from "../../core/services";
import { urlResolver } from "../../core/utils";
import { Breadcrumbs } from "../DetailPage/components/Breadcrumbs";
import { BrowseTitle } from "./components/BrowseTitle";
import { Filters, INITIAL_FILTER_STATE } from "./components/Filters";
import { FiltersSummary } from "./components/FiltersSummary";
import { IntroContent } from "./components/IntroContent";
import { ProgramList } from "./components/ProgramList";
// import { DataViewSwitch } from "./components/ProgramList/DataViewSwitch";
import { SearchBar } from "./components/SearchBar";

/**
 * @typedef {import('../../core/types/listing-page-types').ListingPageProps} ListingPageProps
 * @typedef {import("../../core/types/shared-local-types").FiltersState} FiltersState
 * @typedef {import("../../core/types/shared-local-types").FilterOption} FilterOption
 * @typedef {import("../../core/types/shared-local-types").UseStateTuple<LIST_VIEW_ID | GRID_VIEW_ID>} UseDataViewState
 * @typedef {import("../../core/types/shared-local-types").UseStateTuple<FiltersState>} UseFiltersState
 */

const Main = styled(MainSection)`
  .filter-switch-container {
    gap: 1rem;
  }
  @media (max-width: 768px) {
    & {
      font-size: 0.9rem;
    }
  }
`;

const ListingStyle = createGlobalStyle`
  @media (max-width: 480px) {
      div[class^=uds-hero] {
        grid-template-rows: 1fr auto auto 1.5rem auto;
    }
  }
`;

const FilterSeparator = styled.div.attrs({ className: "container" })`
  border-bottom: 1px solid #d0d0d0;
  margin-bottom: calc(var(--uds-dp-section-margin) / 2);
  padding-bottom: calc(var(--uds-dp-section-margin) / 2);
`;

/**
 * @param {ListingPageProps} props
 * @returns {JSX.Element}
 */
const ListingPage = ({
  appPathFolder: _,
  actionUrls,
  hasSearchBar = true,
  hasFilters = true,
  hero,
  introContent,
  programList,
  degreesPerPage,
}) => {
  const [{ data, loading, error }, doFetchPrograms] = useFetch();
  const [searchLoading, setSearchLoading] = useState(false);
  const [tableView, setTableView] = useState([]);
  const [dataInitView, setDataInitView] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  // start set default data view
  const settingDefaultView = programList.settings?.defaultView;
  const defaultView = [LIST_VIEW_ID, GRID_VIEW_ID].includes(settingDefaultView)
    ? settingDefaultView
    : LIST_VIEW_ID;
  /** @type {UseDataViewState} */
  const [dataViewComponent, setDataViewComponent] = useState(defaultView);
  // end set default data view
  const url = urlResolver(programList.dataSource, listingPageDefaultDataSource);
  const { defaultState } = useContext(AppContext);
  const { listingPageDefault } = defaultState;
  // These filter are input props which never change.
  const {
    collegeAcadOrg,
    departmentCode,
    showInactivePrograms,
    blacklistAcadPlans,
    program,
    cert: showCerts,
  } = programList.dataSource;

  /** @type {UseFiltersState} */
  const [stateFilters, setStateFilters] = useState({
    ...INITIAL_FILTER_STATE,
  });

  /**
   * @type {UseFiltersState}
   * @ignore
   * */
  const [appliedFilters, setAppliedFilters] = useState({
    ...INITIAL_FILTER_STATE,
  });

  useListingPageLogger({
    dataSource: programList.dataSource,
    tableView,
    programs: data,
    stateFilters,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      trackReactComponent({
        packageName: "app-degree-pages",
        component: "ListingPage",
        type: "NA",
        configuration: {
          programList,
          degreesPerPage,
        },
      });
    }
  }, []);

  useEffect(() => {
    doFetchPrograms(url);
  }, [url]);

  useEffect(() => {
    let dataInit = sortPrograms(data || []);
    // apply built-in filters
    dataInit = filterData({
      programs: dataInit,
      filters: {
        collegeAcadOrg,
        departmentCode,
        blacklistAcadPlans,
        program,
        showCerts,
      },
    });

    setDataInitView(dataInit);
    setTableView(dataInit);
  }, [data, degreesPerPage]);

  /**
   * @param {FiltersState} activeFilters
   * @ignore
   */
  const applyFilters = async activeFilters => {
    const { acceleratedConcurrent, locations, asuLocals, keyword } =
      activeFilters;

    setSearchLoading(true);

    doFetchPrograms(url);

    const filteredPrograms = filterData({
      programs: dataInitView,
      filters: {
        collegeAcadOrg,
        departmentCode,
        acceleratedConcurrent,
        locations:
          asuLocals.length > 0 ? locations.concat(onlneOption) : locations,
        keyword,
        showInactivePrograms: showInactivePrograms ?? false,
        blacklistAcadPlans,
        program,
      },
    });

    setStateFilters({ ...activeFilters });
    setAppliedFilters({ ...activeFilters });
    setTableView(filteredPrograms);
    setSearchLoading(false);
  };

  const onSearchByKeyword = async () => {
    const newFilters = {
      ...appliedFilters,
      keyword: searchKeyword,
    };

    applyFilters(newFilters);
  };

  /**
   * @param {FiltersState} activeFilters
   * @ignore
   */
  const onFilterApply = activeFilters => {
    if (loading || searchLoading) return;
    applyFilters(activeFilters);
  };

  /**
   * @ignore
   * @param {FiltersState} filters
   */
  const onFilterChange = async filters => {
    setStateFilters(filters);
  };

  const onFilterClean = () => {
    setStateFilters(INITIAL_FILTER_STATE);
    setAppliedFilters(INITIAL_FILTER_STATE);
    setTableView(dataInitView);
    setSearchKeyword("");
  };

  const onFilterSummaryRemove = (filterName, { value }) => {
    const updatedFilters =
      filterName === "acceleratedConcurrent"
        ? defaultAccelConcOption
        : appliedFilters[filterName].filter(f => f.value !== value);

    const newFilters = {
      ...appliedFilters,
      [filterName]: updatedFilters,
    };

    applyFilters(newFilters);
  };

  return (
    <>
      <ThemeStyle />
      <ListingStyle />

      {error && <ErrorAlert message={ERROR_MESSAGE} />}

      {!hero?.hide ? (
        <section data-testid="hero">
          <Hero
            image={hero?.image || listingPageDefault.hero.image}
            title={{
              text: resolveListingHeroTitle(programList.dataSource),
              highlightColor: "gold",
              ...hero?.title,
              maxWidth: "100%",
            }}
            contents={hero?.contents}
          />
        </section>
      ) : null}

      <Main data-is-loading={loading} className="main-section dg-margin-top">
        {introContent?.breadcrumbs && (
          <div className="container mt-4 mb-0">
            <Breadcrumbs
              breadcrumbs={introContent.breadcrumbs}
              section={hero ? hero.title.text : ""}
            />
          </div>
        )}
        {introContent ? (
          <IntroContent
            applyNowUrl={
              actionUrls?.applyNowUrl ||
              listingPageDefault.actionUrls.applyNowUrl
            }
            type={introContent.type}
            header={introContent.header}
            title={introContent.title}
            contents={introContent.contents}
            image={introContent.image}
            video={introContent.video}
            photoGrid={introContent.photoGrid}
          />
        ) : null}

        {hasSearchBar || hasFilters ? (
          <section className="no-space">
            <BrowseTitle />
            {hasSearchBar ? (
              <SearchBar
                value={searchKeyword}
                onChange={setSearchKeyword}
                onSearch={onSearchByKeyword}
              />
            ) : null}
            {hasFilters ? (
              <Filters
                value={stateFilters}
                onChange={onFilterChange}
                onApply={onFilterApply}
                onClean={onFilterClean}
              />
            ) : null}
            <FilterSeparator />
          </section>
        ) : null}

        <section className="container">
          <div className="d-flex justify-content-between filter-switch-container">
            {hasFilters ? (
              <FiltersSummary
                value={appliedFilters}
                onRemove={onFilterSummaryRemove}
              />
            ) : null}
            {/* <DataViewSwitch
              onChange={selectedViewId => {
                setSearchLoading(true);
                setDataViewComponent(selectedViewId);
                setSearchLoading(false);
              }}
              checkedId={dataViewComponent}
            /> */}
          </div>
        </section>

        {loading || searchLoading ? (
          <Loader />
        ) : (
          <ProgramList
            dataViewComponent={dataViewComponent}
            loading={loading || searchLoading}
            programs={tableView}
            actionUrls={actionUrls}
            degreesPerPage={degreesPerPage}
          />
        )}
      </Main>
    </>
  );
};

ListingPage.propTypes = {
  appPathFolder: PropTypes.string,
  actionUrls: PropTypes.shape({
    applyNowUrl: PropTypes.string,
  }),
  hasSearchBar: PropTypes.bool,
  hasFilters: PropTypes.bool,
  hero: PropTypes.shape(Hero.propTypes),
  introContent: PropTypes.shape(IntroContent.propTypes),
  programList: PropTypes.shape({
    dataSource: dataSourcePropShape,
    settings: columSettingsPropShape,
  }),
  degreesPerPage: PropTypes.number,
};

/**
 * @param {ListingPageProps} props
 * @returns {JSX.Element}
 */
const AppComponent = props => (
  <AppProvider listPageProps={props}>
    <ListingPage {...props} />
  </AppProvider>
);

AppComponent.propTypes = ListingPage.propTypes;

export { AppComponent as ListingPage };
