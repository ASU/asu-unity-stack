import type { Preview } from "@storybook/web-components";
import { setCustomElementsManifest } from "@storybook/web-components";
import "../src/global/tokens.css";
import customElements from "../custom-elements.json";

// Feed the Custom Elements Manifest to Storybook so it auto-generates argTypes,
// controls, the props table, and the events panel from each component's public
// API. Regenerate the manifest with `yarn analyze` after any API change.
setCustomElementsManifest(customElements);

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
