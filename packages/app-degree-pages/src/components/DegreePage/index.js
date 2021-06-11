// @ts-check
import { Hero } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import {
  IntroContent,
  Filters,
  Loader,
  SearchBar,
  DegreeList,
} from "../../core/components";
import { useFetch } from "../../core/hooks/use-fetch";
import {
  GRID_PROGRAMS_ID,
  LIST_VIEW_ID,
} from "../../core/models";
import { dataSourcePropType } from "../../core/models/app-prop-types";
import { degreeDataPropResolverService } from "../../core/services";
import { urlResolver } from "../../core/utils/data-path-resolver";
import { DataViewSwitch } from "./components/DataViewSwitch";
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
  const [{ data, loading, error }, doFetchPrograms] = useFetch();
  const [searchLoading, setSearchLoading] = useState(false);
  const [tableView, setTableView] = useState([]);
  const [dataViewComponent, setDataViewComponent] = useState(LIST_VIEW_ID);
  const url = urlResolver(degreeList.dataSource);

  useEffect(() => {
    doFetchPrograms(url);
  }, [url]);

  useEffect(() => {
    setTableView(data?.programs || []);
  }, [data]);

  const scrollIntoGrid = () => {
    // document.querySelector(`#${GRID_PROGRAMS_ID}`).scrollIntoView({
    //   behavior: "smooth",
    // });
  };
  /**
   * @param {{
   *    location: string[]
   *    acceleratedConcurrent: "acceleratedConcurrent" | "concurrentDegrees"
   * }} data
   */
  const onDegreeApplyFilters = async ({
    acceleratedConcurrent,
    location: locations,
  }) => {
    // prevent search
    if (!data?.programs) return;

    if (acceleratedConcurrent || locations.length > 0) {
      setSearchLoading(true);

      await doFetchPrograms(url);
      if (data?.programs?.length > 0) {
        scrollIntoGrid();
      }

      /** @param {Object.<string, []>} row  */
      const isValidCampus = (row = {}) => {
        const resolver = degreeDataPropResolverService(row);
        const campusList = resolver.getCampusList();
        return locations.length > 0
          ? campusList?.some(campus => locations.includes(campus))
          : true;
      };

      /** @param {Object.<string, []>} row  */
      const isValidAcceleratedConcurrent = (row = {}) => {
        const acceleratedConcurrentList = row[acceleratedConcurrent];
        return acceleratedConcurrent
          ? acceleratedConcurrentList?.length > 0
          : true;
      };

      /** @param {Object.<string, any>} row  */
      const doFilter = row =>
        isValidCampus(row) && isValidAcceleratedConcurrent(row);

      setTableView(data.programs.filter(doFilter));

      scrollIntoGrid();

      setSearchLoading(false);
    }
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
      scrollIntoGrid();
    }
    setSearchLoading(false);
  };

  return (
    <>
      <Hero image={hero.image} title={hero.title} contents={hero.contents} />

      <main className="container" data-is-loading={loading}>
        <IntroContent
          type={introContent.type}
          header={introContent.header}
          title={introContent.title}
          contents={introContent.contents}
          image={introContent.image}
          photoGrid={introContent.photoGrid}
        />
        <SearchBar onSearch={onDegreeSearch} />
        <Filters
          onApplyFilters={onDegreeApplyFilters}
          onCleanFilters={onDegreeCleanFilters}
        />
        {error && <div>Something went wrong ...</div>}
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

        {loading || searchLoading ? (
          <Loader />
        ) : (
          <DegreeList
            dataViewComponent={dataViewComponent}
            loading={loading || searchLoading}
            programms={tableView}
          />
        )}
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
