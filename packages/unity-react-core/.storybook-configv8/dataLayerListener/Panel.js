import React from "react";
import { useAddonState, useChannel } from "@storybook/manager-api";
import { styled } from "@storybook/theming";
import { AddonPanel, Button, Form } from "@storybook/components";
import { Source } from '@storybook/blocks';
import { ADDON_ID, EVENTS } from "./constants.js";

const SourceWrapper = styled(Source)({
  margin: 0,
  backgroundColor: "#f8f8f8",
  zIndex: 1
})

export const Panel = (props) => {
  const [{dataLayer, filter}, setState] = useAddonState(ADDON_ID, {
    dataLayer: [],
    filter: "!gtm.",
  });

  // useChannel({
  //   [EVENTS.CODE_UPDATE]: ({ dataLayer }) =>
  //     setState((state) => ({ ...state, dataLayer })),
  // });

  useChannel({
    [EVENTS.ADD_EVENT]: ({ event }) =>
      setState((state) => ({ ...state, dataLayer: [event, ...state.dataLayer] })),
  });

  const handleClear = () => {
    setState((state) => ({ ...state, dataLayer: [] }));
  }

  const handleChange= (e) => {
    const {target: {value = ""}} = e;
    setState((state) => ({ ...state, filter: value }));
  }

  const filteredData = dataLayer.filter(({event}) => {
    /**
     * A lot of events are logged with prefix "gtm." and creates a lot of noise,
     * most of the time we just want to see the events we are triggering.
     * Leaving the option to not filter out gtm events.
     */
    if (filter.slice(0,1) === "") {
      return true;
    } else if (filter.slice(0,1) === "!" && filter.slice(1).length > 0) {
      return event.indexOf(filter.slice(1)) === -1;
    } else if (filter.length > 0) {
      return event.indexOf(filter) > -1;
    }
  });

  return (
    <AddonPanel {...props}>
      <Form.Field label="Event filter">
        <Form.Input id="filter" placeholder="filter" value={filter} onChange={handleChange}/>
      </Form.Field>
      <Button
        small
        primary
        onClick={()=>handleClear()}
        style={{
          margin: "8px",
          position: "sticky",
          top: "8px",
          left: "100%",
          zIndex: 2,
      }}
      >
        Clear
      </Button>
      <SourceWrapper code={`${JSON.stringify(filteredData, " ", 2)}`} language='json' format={true} />
    </AddonPanel>
  );
};
