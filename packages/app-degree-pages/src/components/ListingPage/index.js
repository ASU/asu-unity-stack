// @ts-check
import { Hero, useFetch } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React, { useEffect, useState, useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";

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
import { BrowseTitle } from "./components/BrowseTitle";
import { Filters, INITIAL_FILTER_STATE } from "./components/Filters";
import { FiltersSummary } from "./components/FiltersSummary";
import { IntroContent } from "./components/IntroContent";
import { ProgramList } from "./components/ProgramList";
import { DataViewSwitch } from "./components/ProgramList/DataViewSwitch";
import { SearchBar } from "./components/SearchBar";

/**
 * @typedef {import('../../core/types/listing-page-types').ListingPageProps} ListingPageProps
 * @typedef {import("../../core/types/shared-local-types").FiltersState} FiltersState
 * @typedef {import("../../core/types/shared-local-types").FilterOption} FilterOption
 * @typedef {import("../../core/types/shared-local-types").UseStateTuple<LIST_VIEW_ID | GRID_VIEW_ID>} UseDataViewState
 * @typedef {import("../../core/types/shared-local-types").UseStateTuple<FiltersState>} UseFiltersState
 */

const Main = styled(MainSection)`
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
}) => {
  const [{ data, loading, error }, doFetchPrograms] = useFetch();
  const [searchLoading, setSearchLoading] = useState(false);
  const [tableView, setTableView] = useState([]);
  const [dataInitView, setDataInitView] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  /** @type {UseDataViewState} */
  const [dataViewComponent, setDataViewComponent] = useState(LIST_VIEW_ID);
  const url = urlResolver(programList.dataSource, listingPageDefaultDataSource);
  const { defaultState } = useContext(AppContext);
  const { listingPageDefault } = defaultState;
  // These filter are input props which never change.
  const { collegeAcadOrg, departmentCode, showInactivePrograms } =
    programList.dataSource;

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
    programs: data?.programs,
    stateFilters,
  });

  useEffect(() => {
    doFetchPrograms(url);
  }, [url]);

  useEffect(() => {
    let dataInit = sortPrograms(data?.programs || []);
    // apply buil-in filters
    dataInit = filterData({
      programs: dataInit,
      filters: {
        collegeAcadOrg,
        departmentCode,
        showInactivePrograms: showInactivePrograms ?? false,
      },
    });

    setDataInitView(dataInit);
    setTableView(dataInit);
  }, [data]);

  /**
   * @param {FiltersState} activeFilters
   * @ignore
   */
  const applyFilters = async activeFilters => {
    const { acceleratedConcurrent, locations, asuLocals, keyword } =
      activeFilters;

    setSearchLoading(true);

    await doFetchPrograms(url);

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
    // TODO: consider to remove
    // const { acceleratedConcurrent, locations, asuLocals } = activeFilters;
    // ============================================================
    // prevent search
    // ============================================================
    if (loading || searchLoading) return;
    // TODO: consider to remove
    // TODO:I comment this block since does look to be ever called
    // TODO: The filter acceleratedConcurrent?.value is always st least  "all"
    // if (
    //   !acceleratedConcurrent &&
    //   acceleratedConcurrent?.value === "all" &&
    //   locations.length === 0 &&
    //   asuLocals.length === 0 &&
    //   !collegeAcadOrg &&
    //   !departmentCode
    // ) {
    //   return;
    // }
    // ============================================================
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

        {hasFilters ? (
          <section className="container">
            <div className="d-flex justify-content-between">
              <FiltersSummary
                value={appliedFilters}
                onRemove={onFilterSummaryRemove}
              />

              <DataViewSwitch
                onChange={selectedViewId => {
                  setSearchLoading(true);
                  setDataViewComponent(selectedViewId);
                  setSearchLoading(false);
                }}
                checkedId={dataViewComponent}
              />
            </div>
          </section>
        ) : null}

        {loading || searchLoading ? (
          <Loader />
        ) : (
          <ProgramList
            dataViewComponent={dataViewComponent}
            loading={loading || searchLoading}
            programs={tableView}
            columSettings={programList.settings}
            actionUrls={actionUrls}
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
