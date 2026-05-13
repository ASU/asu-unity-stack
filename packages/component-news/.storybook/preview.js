import "@asu/unity-bootstrap-theme/src/scss/unity-bootstrap-theme.bundle.scss";
import { initialize, mswLoader } from "msw-storybook-addon";

initialize({
  serviceWorker: {
    url: "./mockServiceWorker.js",
  },
});

const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters,
  loaders: [mswLoader],
};

export default preview;
