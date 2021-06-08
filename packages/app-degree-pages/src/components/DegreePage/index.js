// @ts-check
import { Hero } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import {
  IntroContent,
  DegreeList,
  Filters,
  SearchBar,
} from "../../core/components";
import { useFetch } from "../../core/hooks/use-fetch";
import { dataSourcePropType } from "../../core/models/app-prop-types";
import { urlResolver } from "../../core/utils/data-path-resolver";

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
  const [tableView, setTableView] = useState([]);
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
    if (acceleratedConcurrent || locations) {
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
    }
  };

  const onDegreeCleanFilters = () => setTableView(data?.programs || []);

  /**
   *
   * @param {string} keyword
   */
  const onDegreeSeaerch = keyword => {
    setTableView(
      data.programs.filter(row => row["DescrlongExtns"].contains(keyword))
    );
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
        {isError && <div>Something went wrong ...</div>}
        {isLoading ? <div>Loading ...</div> : null}
        <DegreeList loading={isLoading} programms={tableView} />
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
