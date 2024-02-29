import ListingPage from "../src/components/ListingPage/index.stories";
import DetailPage from "../src/components/DetailPage/index.stories";
import "@asu/unity-bootstrap-theme/src/scss/unity-bootstrap-theme.bundle.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: [ListingPage.title, DetailPage.title],
    },
  },
  percy: {
    include: [
      "Program Listing Page: Default\$",
      "Program Detail Page: Default\$",
    ],
  },
};
