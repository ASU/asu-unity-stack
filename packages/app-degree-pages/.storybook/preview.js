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
  percy: {
    include: [
      "Program Listing Page: Default\$",
      "Program Detail Page: Default\$",
    ],
    waitForTimeout: 5000,
  },
};

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters
};

export default preview;
