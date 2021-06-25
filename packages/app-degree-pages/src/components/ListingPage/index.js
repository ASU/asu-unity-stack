// @ts-check
import { Hero } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Loader } from "../../core/components";
import { useFetch } from "../../core/hooks/use-fetch";
import { acceleratedConcurrentValues, LIST_VIEW_ID } from "../../core/models";
import {
  columSettingsPropType,
  dataSourcePropType,
} from "../../core/models/app-prop-types";
import { degreeDataPropResolverService } from "../../core/services";
import { urlResolver } from "../../core/utils/data-path-resolver";
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

const Main = styled.main`
  @media (max-width: 768px) {
    & {
      font-size: 0.9rem;
    }
  }
`;

/**
 *
 * @param {ListingPageProps} props
 * @returns {JSX.Element}
 */
const ListingPage = ({
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
  // const [dataViewComponent, setDataViewComponent] = useState(LIST_VIEW_ID);
  const url = urlResolver(programList.dataSource);

  /** @type {import("../../core/models/shared-types").UseStateTuple<FiltersState>} */
  const [stateFilters, setStateFilters] = useState({
    locations: [],
    asuLocals: [],
    acceleratedConcurrent: "all",
  });
  /** @type {import("../../core/models/shared-types").UseStateTuple<string[]>} */
  const [appliedFilters, setAppliedFilters] = useState([]);

  useEffect(() => {
    doFetchPrograms(url);
  }, [url]);

  useEffect(() => {
    setTableView(data?.programs || []);
  }, [data]);

  /**
   * @param {import("src/components/ListingPage/components/Filters").FiltersState} data
   */
  const onDegreeApplyFilters = async ({ acceleratedConcurrent, locations }) => {
    // ============================================================
    // prevent search
    // ============================================================
    if (loading || searchLoading) return;

    if (!acceleratedConcurrent && locations.length === 0) {
      return;
    }
    // ============================================================

    setSearchLoading(true);

    await doFetchPrograms(url);

    /** @param {Object.<string, []>} row  */
    const isValidCampus = (row = {}) => {
      const resolver = degreeDataPropResolverService(row);

      return locations.length > 0
        ? resolver.getCampusList()?.some(campus => locations.includes(campus))
        : true;
    };

    /** @param {Object.<string, []>} row  */
    const isValidAcceleratedConcurrent = (row = {}) => {
      return acceleratedConcurrent && acceleratedConcurrent !== "all"
        ? row[acceleratedConcurrent]?.length > 0
        : true;
    };

    /** @param {Object.<string, any>} row  */
    const doFilter = row =>
      isValidCampus(row) && isValidAcceleratedConcurrent(row);
    // filter program list
    setTableView(data.programs.filter(doFilter));

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
    /* todo: this won't work since the only way to clear up
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
      acceleratedConcurrent: newStateFilters.acceleratedConcurrent,
      locations: newStateFilters.locations,
    });
  };

  return (
    <>
      {hero ? (
        <Hero
          image={hero.image}
          title={{ ...hero.title, maxWidth: "100%" }}
          contents={hero.contents}
        />
      ) : null}

      <Main className="container" data-is-loading={loading}>
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

        {hasSearchBar || hasFilters ? <BrowseTitle /> : null}

        {hasSearchBar ? <SearchBar onSearch={onDegreeSearch} /> : null}
        {hasFilters ? (
          <Filters
            value={stateFilters}
            onValueChange={setStateFilters}
            onApplyFilters={onDegreeApplyFilters}
            onCleanFilters={onDegreeCleanFilters}
          />
        ) : null}

        {error && <div>Something went wrong ...</div>}

        <section className="container m-1">
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

        {loading || searchLoading ? (
          <Loader />
        ) : (
          <ProgramList
            dataViewComponent={dataViewComponent}
            loading={loading || searchLoading}
            programms={tableView}
            columSettings={programList.settings}
          />
        )}
      </Main>
    </>
  );
};

ListingPage.propTypes = {
  actionUrls: PropTypes.shape({
    applyNowUrl: PropTypes.string,
  }),
  hasSearchBar: PropTypes.bool,
  hasFilters: PropTypes.bool,
  hero: PropTypes.shape(Hero.propTypes),
  introContent: PropTypes.shape(IntroContent.propTypes),
  programList: PropTypes.shape({
    dataSource: PropTypes.oneOfType([dataSourcePropType, PropTypes.string]),
    settings: columSettingsPropType,
  }),
};

export { ListingPage };
