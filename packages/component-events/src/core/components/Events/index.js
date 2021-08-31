// @ts-check
import { useFetch } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React, { useEffect, useState, Children, cloneElement } from "react";

import { dataSourcePropTypes } from "../../models/prop-types";
import { EventsWrapper } from "./index.styles";

/**
 * @param {{
 *  children: JSX.Element
 *  dataSource: import('../../models/types').DataSource
 * }} props
 * @returns {JSX.Element}
 */

const Events = ({ children, dataSource }) => {
  const [{ data: rawData, loading, error }, doFetching] = useFetch();
  const [events, setEvents] = useState([]);
  const childrens = Children.map(children, child =>
    cloneElement(child, { events })
  );

  useEffect(() => {
    doFetching(dataSource?.url);
  }, [dataSource?.url]);

  useEffect(() => {
    // TODO: transform the data
    setEvents(rawData?.nodes.slice(0, 3));
    // TODO: filter the data
  }, [rawData]);

  return (
    <EventsWrapper className="row">
      <div className="col">
        {error ? (
          <span>Error, try again!</span>
        ) : (
          <>{loading && !events ? "Loading..." : childrens}</>
        )}
      </div>
    </EventsWrapper>
  );
};

Events.propTypes = {
  children: PropTypes.element,
  dataSource: dataSourcePropTypes,
};

export { Events };
