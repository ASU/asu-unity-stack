import ListingPage from "../../src/components/ListingPage/index.stories";
import DetailPage from "../../src/components/DetailPage/index.stories";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: [ListingPage.title, DetailPage.title],
    },
  },
};
