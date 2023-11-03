import React from "react";
import { useAddonState, useChannel } from "@storybook/api";
import { styled } from "@storybook/theming";
import { AddonPanel, Source, Button } from "@storybook/components";
import { ADDON_ID, EVENTS } from "./constants.js";

const SourceWrapper = styled(Source)({
  margin: 0,
  backgroundColor: "#f8f8f8",
  zIndex: 1
})

export const Panel = (props) => {
  const [{dataLayer}, setState] = useAddonState(ADDON_ID, {
    dataLayer: []
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

  return (
    <AddonPanel {...props}>
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
      <SourceWrapper code={`${JSON.stringify(dataLayer, " ", 2)}`} language='json' format={true} />
    </AddonPanel>
  );
};
