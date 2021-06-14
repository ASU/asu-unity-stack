// @ts-check
import { Hero } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import {
  IntroContent,
  Filters,
  FiltersSummary,
  Loader,
  SearchBar,
  ProgramList,
} from "../../core/components";
// import { DataViewSwitch } from "../../core/components/ProgramList/DataViewSwitch";
import { useFetch } from "../../core/hooks/use-fetch";
import { LIST_VIEW_ID } from "../../core/models";
import { dataSourcePropType } from "../../core/models/app-prop-types";
import { degreeDataPropResolverService } from "../../core/services";
import { urlResolver } from "../../core/utils/data-path-resolver";

/**
 * @typedef {import('../../core/models/app-props').AppProps} AppProps
 */

/**
 *
 * @param {AppProps} props
 * @returns {JSX.Element}
 */
const ListingPage = ({ hero, introContent, programList }) => {
  /** @type {import("../../core/hooks/use-fetch").UseFetchTuple<{programs: []}>} */
  const [{ data, loading, error }, doFetchPrograms] = useFetch();
  const [searchLoading, setSearchLoading] = useState(false);
  const [tableView, setTableView] = useState([]);
  /** @type {import("../../core/models").UseStateTuple<LIST_VIEW_ID>} */
  const [dataViewComponent] = useState(LIST_VIEW_ID);
  // const [dataViewComponent, setDataViewComponent] = useState(LIST_VIEW_ID);
  const url = urlResolver(programList.dataSource);

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
  const onDegreeApplyFilters = async ({
    acceleratedConcurrent,
    location: locations,
  }) => {
    // prevent search
    if (!data?.programs) return;

    if (acceleratedConcurrent || locations.length > 0) {
      setSearchLoading(true);

      await doFetchPrograms(url);

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
            <FiltersSummary
              appliedFilters={["lorem ipsum", "tempe", "online"]}
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
  hero: PropTypes.shape(Hero.propTypes),
  introContent: PropTypes.shape(IntroContent.propTypes),
  programList: PropTypes.shape({
    dataSource: PropTypes.oneOfType([dataSourcePropType, PropTypes.string]),
  }),
};

export { ListingPage };
