// @ts-check
import { Hero } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import {
  IntroContent,
  DegreeGridView,
  DegreeListView,
  Filters,
  Loader,
  SearchBar,
} from "../../core/components";
import { useFetch } from "../../core/hooks/use-fetch";
import { dataSourcePropType } from "../../core/models/app-prop-types";
import { urlResolver } from "../../core/utils/data-path-resolver";
import {
  DataViewSwitch,
  GRID_VIEW_ID,
  LIST_VIEW_ID,
} from "./components/DataViewSwitch";
import FilterSummary from "./components/FilterSummary";

/**
 * @typedef {import('../../core/models/app-props').AppProps} AppProps
 */

/**
 *
 * @param {AppProps} props
 * @returns {JSX.Element}
 */
const DegreePage = ({ hero, introContent, degreeList }) => {
  const [{ data, isLoading, isError }, doFetchPrograms] = useFetch();
  const [searchLoading, setSearchLoading] = useState(false);
  const [tableView, setTableView] = useState([]);
  const [dataViewComponent, setDataViewComponent] = useState(GRID_VIEW_ID);
  const url = urlResolver(degreeList.dataSource);

  useEffect(() => {
    doFetchPrograms(url);
  }, [url]);

  useEffect(() => {
    setTableView(data?.programs || []);
  }, [data]);

  /**
   * @param {{
   *    location: string[]
   *    acceleratedConcurrent: "acceleratedConcurrent" | "concurrentDegrees"
   * }} data
   */
  const onDegreeApplyFilters = ({
    acceleratedConcurrent,
    location: locations,
  }) => {
    if (acceleratedConcurrent || locations?.length > 0) {
      setSearchLoading(true);

      /** @param {Object.<string, []>} row  */
      const isValidCampus = (row = {}) => {
        const campusList = row["CampusStringArray"];
        return locations
          ? campusList?.some(campus => locations.includes(campus))
          : true;
      };

      /** @param {Object.<string, []>} row  */
      const isValidAcceleratedConcurrent = (row = {}) => {
        const acceleratedConcurrentList = row[acceleratedConcurrent];
        return locations ? acceleratedConcurrentList?.length > 0 : true;
      };

      /** @param {Object.<string, any>} row  */
      const doFilter = row =>
        isValidCampus(row) && isValidAcceleratedConcurrent(row);

      setTableView(data.programs.filter(doFilter));

      setSearchLoading(false);
    }
  };

  const onDegreeCleanFilters = () => setTableView(data?.programs || []);

  /**
   *
   * @param {string} keyword
   */
  const onDegreeSeaerch = (keyword = "") => {
    /* todo: this won't work since the only way to clear up
              the search is to provide an empty keyword */
    // if (!keyword.trim()) {
    //   alert("Please provide a valid keyword");
    //   return;
    // }

    setSearchLoading(true);
    setTableView(
      data.programs.filter(row => row["DescrlongExtns"]?.includes?.(keyword))
    );
    setSearchLoading(false);
  };

  return (
    <>
      <Hero image={hero.image} title={hero.title} contents={hero.contents} />

      <main className="container" data-is-loading={isLoading}>
        <IntroContent
          type={introContent.type}
          header={introContent.header}
          title={introContent.title}
          contents={introContent.contents}
          image={introContent.image}
          photoGrid={introContent.photoGrid}
        />
        <SearchBar onSearch={onDegreeSeaerch} />
        <Filters
          onApplyFilters={onDegreeApplyFilters}
          onCleanFilters={onDegreeCleanFilters}
        />
        {isLoading || searchLoading ? <Loader /> : null}
        {isError && <div>Something went wrong ...</div>}
        <section className="container m-1">
          <div className="d-flex justify-content-between">
            <FilterSummary
              appliedFilters={["lorem ipsum", "tempe", "online"]}
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
        {dataViewComponent === GRID_VIEW_ID ? (
          <DegreeGridView loading={isLoading} programms={tableView} />
        ) : null}
        {dataViewComponent === LIST_VIEW_ID ? (
          <DegreeListView loading={isLoading} programms={tableView} />
        ) : null}
      </main>
    </>
  );
};

DegreePage.propTypes = {
  hero: PropTypes.shape(Hero.propTypes),
  introContent: PropTypes.shape(IntroContent.propTypes),
  degreeList: PropTypes.shape({
    dataSource: PropTypes.oneOfType([dataSourcePropType, PropTypes.string]),
  }),
};

export { DegreePage };
