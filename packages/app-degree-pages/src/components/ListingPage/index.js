// @ts-check
import { Hero } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import { Loader } from "../../core/components";
import { useFetch } from "../../core/hooks/use-fetch";
import { acceleratedConcurrentValues, LIST_VIEW_ID } from "../../core/models";
import { dataSourcePropType } from "../../core/models/app-prop-types";
import { degreeDataPropResolverService } from "../../core/services";
import { urlResolver } from "../../core/utils/data-path-resolver";
import { Filters } from "./components/Filters";
import { FiltersSummary } from "./components/FiltersSummary";
import { IntroContent } from "./components/IntroContent";
import { ProgramList } from "./components/ProgramList";
import { SearchBar } from "./components/SearchBar";

/**
 * @typedef {import('../../core/models/listing-page-types').ListingPageProps} ListingPageProps
 * @typedef {import("./components/Filters").FiltersState} FiltersState
 */

/**
 *
 * @param {ListingPageProps} props
 * @returns {JSX.Element}
 */
const ListingPage = ({ applyNowUrl = "", hero, introContent, programList }) => {
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

    setStateFilters({
      ...stateFilters,
      ...cleanFilters,
    });

    // clean up: redo query with new filters
    onDegreeApplyFilters({
      acceleratedConcurrent: stateFilters.acceleratedConcurrent,
      locations: stateFilters.locations,
    });
  };

  return (
    <>
      <Hero image={hero.image} title={hero.title} contents={hero.contents} />

      <main className="container" data-is-loading={loading}>
        <IntroContent
          applyNowUrl={applyNowUrl}
          type={introContent.type}
          header={introContent.header}
          title={introContent.title}
          contents={introContent.contents}
          image={introContent.image}
          photoGrid={introContent.photoGrid}
        />
        <SearchBar onSearch={onDegreeSearch} />
        <Filters
          value={stateFilters}
          onValueChange={setStateFilters}
          onApplyFilters={onDegreeApplyFilters}
          onCleanFilters={onDegreeCleanFilters}
        />
        {error && <div>Something went wrong ...</div>}
        <section className="container m-1">
          <div className="d-flex justify-content-between">
            <FiltersSummary
              appliedFilters={appliedFilters}
              onRemoveFilter={onRemoveFilterValue}
            />

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
          />
        )}
      </main>
    </>
  );
};

ListingPage.propTypes = {
  applyNowUrl: PropTypes.string,
  hero: PropTypes.shape(Hero.propTypes),
  introContent: PropTypes.shape(IntroContent.propTypes),
  programList: PropTypes.shape({
    dataSource: PropTypes.oneOfType([dataSourcePropType, PropTypes.string]),
  }),
};

export { ListingPage };
