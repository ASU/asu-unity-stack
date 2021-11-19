/* eslint-disable react/prop-types */
// @ts-check
import PropTypes from "prop-types";
import React, { useState, useEffect, createContext } from "react";
import styled from "styled-components";

import { useFetch } from "../../core/hooks/use-fetch";
import { Loader } from "../Loader";

const Container = styled.section``;

const FeedContext = createContext(null);

/**
 * This component is the HOC(high order component) used on component-events and component-news packages
 * @param {{
 *  renderHeader: JSX.Element
 *  renderBody: JSX.Element
 *  dataSource: import("../../core/types/feed-types").DataSource
 *  maxItems: number
 *  dataTransformer?: (data: object) => object
 *  dataFilter?: (data: object, filters: string) => object
 *  defaultProps: import("../../core/types/feed-types").FeedType
 *  noFeedText: string
 * }} props
 * @returns {JSX.Element}
 * @ignore
 */
const FeedContainerProvider = ({
  defaultProps,
  dataSource: pDataSource,
  noFeedText,
  renderHeader,
  renderBody,
  dataTransformer = item => item,
  dataFilter = item => item,
  maxItems = 3,
}) => {
  const [{ data: rawData, loading, error }, doFetching] = useFetch(); // Call the fetching hook
  const [feeds, setFeeds] = useState([]);

  const dataSource = { ...defaultProps.dataSource, ...pDataSource };

  useEffect(() => {
    doFetching(dataSource?.url);
  }, [dataSource?.url]);

  useEffect(() => {
    // Work all the data and set the filterd and mapped feeds
    const transformedData = rawData?.nodes.map(dataTransformer);
    const filteredData = transformedData?.filter(item =>
      dataFilter(item, pDataSource?.filters)
    );
    setFeeds(filteredData?.slice(0, maxItems));
  }, [rawData]);

  return (
    // Init the context to be used on its childrens
    <FeedContext.Provider value={{ feeds }}>
      <Container>
        {renderHeader}
        {error ? (
          <span>Error, try again!</span>
        ) : (
          <>
            {loading && !feeds?.length && (
              <div className="text-center mt-4">
                <Loader />
              </div>
            )}
            {feeds?.length
              ? renderBody
              : !loading && <p className="text-center">{noFeedText}</p>}
          </>
        )}
      </Container>
    </FeedContext.Provider>
  );
};

FeedContainerProvider.propTypes = {
  renderHeader: PropTypes.element,
  renderBody: PropTypes.element,
  maxItems: PropTypes.number,
  dataTransformer: PropTypes.func,
  dataFilter: PropTypes.func,
  noFeedText: PropTypes.string,
};

export { FeedContainerProvider, FeedContext };
