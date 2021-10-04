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
 * @param {{
 *  renderHeader: JSX.Element
 *  renderBody: JSX.Element
 *  dataSource: import("./feed-types").DataSource
 *  maxItems: number
 *  dataTransformer?: (data: object) => object
 *  dataFilter?: (data: object, filters: string) => object
 *  defaultProps: import("./feed-types").FeedType
 * }} props
 * @returns {JSX.Element}
 *
 */
const FeedContainerProvider = ({
  defaultProps,
  dataSource: pDataSource,
  renderHeader,
  renderBody,
  dataTransformer = item => item,
  dataFilter = item => item,
  maxItems = 3,
}) => {
  const [{ data: rawData, loading, error }, doFetching] = useFetch();
  const [feeds, setFeeds] = useState([]);

  const dataSource = { ...defaultProps.dataSource, ...pDataSource };

  useEffect(() => {
    doFetching(dataSource?.url);
  }, [dataSource?.url]);

  useEffect(() => {
    const transformedData = rawData?.nodes.map(dataTransformer);
    const filteredData = transformedData?.filter(item =>
      dataFilter(item, pDataSource?.filters)
    );
    setFeeds(filteredData?.slice(0, maxItems));
  }, [rawData]);

  return (
    <FeedContext.Provider value={{ feeds }}>
      <Container>
        {renderHeader}
        {error ? (
          <span>Error, try again!</span>
        ) : (
          <>
            {loading && !feeds && (
              <div className="text-center mt-4">
                <Loader />
              </div>
            )}
            {feeds?.length ? (
              renderBody
            ) : (
              <p className="text-center">No news to show.</p>
            )}
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
};

export { FeedContainerProvider, FeedContext };
