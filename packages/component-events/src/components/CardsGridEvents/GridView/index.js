// @ts-check
import React from "react";

import { useEventsContext } from "../../../core/context/events-context";
import { GridViewWrapper } from "./index.styles";

const GridView = () => {
  const { events } = useEventsContext();

  return <GridViewWrapper>Grid component</GridViewWrapper>;
};

export { GridView };
