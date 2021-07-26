// @ts-check
import { Hero } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React, { useEffect, useMemo, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import {
  Loader,
  Main as MainSection,
  ThemeStyle,
  ErrorAlert,
} from "../../core/components";
import { listingPageDefaultDataSource } from "../../core/constants";
import { useListingPageLogger } from "../../core/hooks";
import { useFetch } from "../../core/hooks/use-fetch";
import {
  acceleratedConcurrentValues,
  resolveDefaultProps,
  resolveListingHeroTitle,
  LIST_VIEW_ID,
} from "../../core/models";
import {
  columSettingsPropShape,
  dataSourcePropShape,
} from "../../core/models/app-prop-types";
import { degreeDataPropResolverService } from "../../core/services";
import { urlResolver } from "../../core/utils";
import { BrowseTitle } from "./components/BrowseTitle";
import { Filters } from "./components/Filters";
import { FiltersSummary } from "./components/FiltersSummary";
import { IntroContent } from "./components/IntroContent";
import { ProgramList } from "./components/ProgramList";
import { SearchBar } from "./components/SearchBar";

/**
 * @typedef {import('../../core/models/listing-page-types').ListingPageProps} ListingPageProps
 * @typedef {import("./components/Filters").FiltersState} FiltersState
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

/**
 *
 * @param {{
 * programs: Object[]
 * filters: import("src/components/ListingPage/components/Filters").FiltersState
 * }} props
 * @returns
 */
function filterData({
  programs = [],
  filters: {
    collegeAcadOrg,
    departmentCode,
    acceleratedConcurrent,
    locations = [],
  },
}) {
  // ============================================================
  /** @param {Object.<string, []>} row  */
  const isValidCollegeAcadOrg = (row = {}) => {
    const resolver = degreeDataPropResolverService(row);

    return collegeAcadOrg
      ? resolver.getCollegeAcadOrg().includes(collegeAcadOrg)
      : true;
  };
  // ============================================================
  /** @param {Object.<string, []>} row  */
  const isValidDepartmentCode = (row = {}) => {
    const resolver = degreeDataPropResolverService(row);

    return departmentCode
      ? resolver.getDepartmentCode().includes(departmentCode)
      : true;
  };
  // ============================================================
  /** @param {Object.<string, []>} row  */
  const isValidCampus = (row = {}) => {
    const resolver = degreeDataPropResolverService(row);

    return locations.length > 0
      ? resolver.getCampusList()?.some(campus => locations.includes(campus))
      : true;
  };
  // ============================================================
  /** @param {Object.<string, []>} row  */
  const isValidAcceleratedConcurrent = (row = {}) =>
    acceleratedConcurrent && acceleratedConcurrent !== "all"
      ? row[acceleratedConcurrent]?.length > 0
      : true;
  // ============================================================
  /** @param {Object.<string, any>} row  */
  const doFilter = row =>
    isValidCollegeAcadOrg(row) &&
    isValidDepartmentCode(row) &&
    isValidCampus(row) &&
    isValidAcceleratedConcurrent(row);

  return programs.filter(doFilter);
}

/**
 *
 * @param {ListingPageProps} props
 * @returns {JSX.Element}
 */
const ListingPage = ({
  appPathFolder,
  actionUrls,
  hasSearchBar = true,
  hasFilters = true,
  hero,
  introContent,
  programList,
}) => {
  /** @type {import("../../core/hooks/use-fetch").UseFetchTuple<{programs: []}>} */
  const [{ data, loading, error }, doFetchPrograms] = useFetch();
  const [searchLoading, setSearchLoading] = useState(false);
  const [tableView, setTableView] = useState([]);
  /** @type {import("../../core/models/shared-types").UseStateTuple<LIST_VIEW_ID>} */
  const [dataViewComponent] = useState(LIST_VIEW_ID);
  /* TODO: we need this to swtich between LIST_VIEW and GRID_VIEW
  const [dataViewComponent, setDataViewComponent] = useState(LIST_VIEW_ID); */
  const url = urlResolver(programList.dataSource, listingPageDefaultDataSource);
  const { listingPageDefault } = useMemo(
    () => resolveDefaultProps(appPathFolder),
    []
  );
  // These filter are input props which never change.
  const { collegeAcadOrg, departmentCode } = programList.dataSource;

  /** @type {import("../../core/models/shared-types").UseStateTuple<FiltersState>} */
  const [stateFilters, setStateFilters] = useState({
    locations: [],
    asuLocals: [],
    acceleratedConcurrent: "all",
  });
  /** @type {import("../../core/models/shared-types").UseStateTuple<string[]>} */
  const [appliedFilters, setAppliedFilters] = useState([]);

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
    if (collegeAcadOrg || departmentCode) {
      setTableView(
        filterData({
          programs: data?.programs,
          filters: {
            collegeAcadOrg,
            departmentCode,
          },
        })
      );
    } else {
      setTableView(data?.programs || []);
    }
  }, [data]);

  /**
   * @param {import("src/components/ListingPage/components/Filters").FiltersState} data
   */
  const onDegreeApplyFilters = async ({ acceleratedConcurrent, locations }) => {
    // ============================================================
    // prevent search
    // ============================================================
    if (loading || searchLoading) return;

    if (
      !acceleratedConcurrent &&
      locations.length === 0 &&
      !collegeAcadOrg &&
      !departmentCode
    ) {
      return;
    }
    // ============================================================

    setSearchLoading(true);

    await doFetchPrograms(url);

    const filteredPrograms = filterData({
      programs: data.programs,
      filters: {
        collegeAcadOrg,
        departmentCode,
        acceleratedConcurrent,
        locations,
      },
    });

    setTableView(filteredPrograms);

    setSearchLoading(false);

    // set summary filters
    const newAppliedFilterList = [...locations];
    if (acceleratedConcurrent !== "all")
      newAppliedFilterList.push(acceleratedConcurrent.replace("Degrees", ""));

    setAppliedFilters(newAppliedFilterList);
  };

  const onDegreeCleanFilters = () => setTableView(data?.programs || []);

  /**
   *
   * @param {string} keyword
   */
  const onDegreeSearch = async (keyword = "") => {
    /* TODO: this won't work since the only way to clear up
              the search is to provide an empty keyword */
    // if (!keyword.trim()) {
    //   alert("Please provide a valid keyword");
    //   return;
    // }

    setSearchLoading(true);
    await doFetchPrograms(url);

    if (data?.programs?.length > 0) {
      setTableView(
        data.programs.filter(row => {
          const resolver = degreeDataPropResolverService(row);
          return resolver.getDescrLongExtented()?.includes?.(keyword);
        })
      );
    }
    setSearchLoading(false);
  };

  const onRemoveFilterValue = filterValue => {
    // clean up: summary filters component
    const newFilters = appliedFilters.filter(f => f !== filterValue);
    setAppliedFilters(newFilters);
    // clean up: state filters component
    /** @type {FiltersState} */
    const cleanFilters = {};

    if (filterValue === "ONLNE") {
      cleanFilters["asuLocals"] = [];
      cleanFilters["locations"] = stateFilters.locations.filter(
        f => f !== filterValue
      );
    } else if (acceleratedConcurrentValues.includes(`${filterValue}Degrees`)) {
      cleanFilters["acceleratedConcurrent"] = "all";
    } else {
      cleanFilters["locations"] = stateFilters.locations.filter(
        f => f !== filterValue
      );
    }

    const newStateFilters = {
      ...stateFilters,
      ...cleanFilters,
    };

    setStateFilters({ ...newStateFilters });

    // clean up: redo query with new filters
    onDegreeApplyFilters({
      ...newStateFilters,
      // acceleratedConcurrent: newStateFilters.acceleratedConcurrent,
      // locations: newStateFilters.locations,
    });
  };

  return (
    <>
      <ThemeStyle />
      <ListingStyle />

      {error && <ErrorAlert message="Something went wrong ..." />}

      {!hero?.hide ? (
        <section>
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
            applyNowUrl={actionUrls?.applyNowUrl}
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
            {hasSearchBar ? <SearchBar onSearch={onDegreeSearch} /> : null}
            {hasFilters ? (
              <Filters
                value={stateFilters}
                onValueChange={setStateFilters}
                onApplyFilters={onDegreeApplyFilters}
                onCleanFilters={onDegreeCleanFilters}
              />
            ) : null}
          </section>
        ) : null}

        {hasFilters ? (
          <section className="container">
            <div className="d-flex justify-content-between">
              {hasFilters ? (
                <FiltersSummary
                  appliedFilters={appliedFilters}
                  onRemoveFilter={onRemoveFilterValue}
                />
              ) : null}

              {/* TODO: THIS COMPONENT IS CURRENTLY DEFERRED */}
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

export { ListingPage };
