/* eslint-disable react/prop-types */
// @ts-check
import PropTypes from "prop-types";
import React, { useState, useEffect, createContext } from "react";
import styled from "styled-components";

import { useFetch } from "../../core/hooks/use-fetch";

const Container = styled.section``;

const FeedContext = createContext({});

/**
 * @param {{
 *  renderHeader: JSX.Element
 *  renderBody: JSX.Element
 *  dataSource: {url?: string }
 *  maxItems: number
 *  dataTransformer?: (data: object[]) => object[]
 *  dataFilter?: () => any
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
  dataFilter,
  maxItems = 3,
}) => {
  const [{ data: rawData, loading, error }, doFetching] = useFetch();
  const [feeds, setFeeds] = useState([]);

  const dataSource = { ...defaultProps.dataSource, ...pDataSource };

  useEffect(() => {
    doFetching(dataSource?.url);
  }, [dataSource?.url]);

  useEffect(() => {
    // TODO: filter the data
    setFeeds(rawData?.nodes.map(dataTransformer).slice(0, maxItems));
  }, [rawData]);

  return (
    <FeedContext.Provider value={{ feeds }}>
      <Container className="container">
        {renderHeader}
        {error ? (
          <span>Error, try again!</span>
        ) : (
          <>{loading && !feeds ? "Loading..." : renderBody}</>
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
