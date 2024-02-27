import ListingPage from "../src/components/ListingPage/index.stories";
import DetailPage from "../src/components/DetailPage/index.stories";
import "@asu/unity-bootstrap-theme/src/scss/unity-bootstrap-theme.bundle.scss";

const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: [`${ListingPage.title}`, `${DetailPage.title}`],
    },
  },
};

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters
};

export default preview;
