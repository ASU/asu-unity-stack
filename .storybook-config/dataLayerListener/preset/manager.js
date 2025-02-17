
import { addons, types } from "@storybook/addons";
import { useAddonState } from "@storybook/api";
import { ADDON_ID, PANEL_ID } from "../constants";
import { Panel } from "../Panel";

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: function title(){
      const [{ dataLayer }] = useAddonState(ADDON_ID, {
        dataLayer: [],
        filter: "!gtm.",
      });
      return `Data Layer${dataLayer.length ? ` (${dataLayer.length})`: ``}`;
    },
    match: ({ viewMode }) => viewMode === "story",
    render: Panel,
  });
});
