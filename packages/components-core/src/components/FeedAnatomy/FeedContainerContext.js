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
  maxItems = 3,
}) => {
  const [{ data: rawData, loading, error }, doFetching] = useFetch();
  const [feeds, setFeeds] = useState([]);

  const dataSource = { ...defaultProps.dataSource, ...pDataSource };

  useEffect(() => {
    doFetching(dataSource?.url);
  }, [dataSource?.url]);

  useEffect(() => {
    // TODO: transform the data
    setFeeds(rawData?.nodes?.slice(0, maxItems));
    // TODO: filter the data
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
};

export { FeedContainerProvider, FeedContext };
