// @ts-check
import { useFetch } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import { EventsContextProvider } from "../../context/events-context";
import { dataSourcePropTypes } from "../../models/prop-types";
import { EventsWrapper } from "./index.styles";

/**
 * @param {{
 *  children: JSX.Element
 *  dataSource: import('../../models/types').DataSource
 * }} props
 * @returns {JSX.Element}
 */

const EventsFeedProvider = ({ children, dataSource }) => {
  const [{ data: rawData, loading, error }, doFetching] = useFetch();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    doFetching(dataSource?.url);
  }, [dataSource?.url]);

  useEffect(() => {
    // TODO: transform the data
    setEvents(rawData?.nodes.slice(0, 3));
    // TODO: filter the data
  }, [rawData]);

  return (
    <EventsContextProvider initialValue={{ events }}>
      <EventsWrapper className="row">
        <div className="col">
          {error ? (
            <span>
              Error!{" "}
              {process.env.NODE_ENV !== "production" && (
                <>
                  Try requesting temporary access to cors server{" "}
                  <a
                    href="https://cors-anywhere.herokuapp.com/corsdemo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here
                  </a>
                </>
              )}
            </span>
          ) : (
            <>{loading && !events ? "Loading..." : children}</>
          )}
        </div>
      </EventsWrapper>
    </EventsContextProvider>
  );
};

EventsFeedProvider.propTypes = {
  children: PropTypes.element,
  dataSource: dataSourcePropTypes,
};

export { EventsFeedProvider };
