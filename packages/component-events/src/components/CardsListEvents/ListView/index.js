// @ts-check
import React from "react";

import { useEventsContext } from "../../../core/context/events-context";
import { ListViewWrapper } from "./index.styles";

const ListView = () => {
  const { events } = useEventsContext();
  console.log(events);

  return <ListViewWrapper>List component</ListViewWrapper>;
};

export { ListView };
