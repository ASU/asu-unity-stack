// @ts-check
import PropTypes from "prop-types";
import React, { useEffect } from "react";

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
const DegreePage = ({ introContent, degreeList }) => {
  const [{ data, isLoading, isError }, doFetchPrograms] = useFetch();
  const url = urlResolver(degreeList.dataSource);

  useEffect(() => {
    doFetchPrograms(url);
  }, [url]);

  console.log("(data.programs)", data);

  return (
    <>
      {/* <Hero image={hero.image} content={hero.content} /> */}

      <main className="container" data-is-loading={isLoading}>
        <IntroContent
          type={introContent.type}
          header={introContent.header}
          title={introContent.title}
          contents={introContent.contents}
          image={introContent.image}
          photoGrid={introContent.photoGrid}
        />
        <SearchBar />
        <Filters />
        {isError && <div>Something went wrong ...</div>}
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          <DegreeList programms={data.programs || []} />
        )}
      </main>
    </>
  );
};

DegreePage.propTypes = {
  introContent: PropTypes.shape(IntroContent.propTypes),
  degreeList: PropTypes.shape({
    dataSource: PropTypes.oneOfType([dataSourcePropType, PropTypes.string]),
  }),
};

export { DegreePage };
