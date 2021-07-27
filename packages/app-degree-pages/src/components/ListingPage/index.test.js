// @ts-check
import React from "react";
import renderer from "react-test-renderer";

import { Button } from "../../../../components-core/src/components/Button";
// import { ListingPage } from "./index";

/**
 * @typedef {import('../../core/models/listing-page-types').ListingPageProps } AppProps
 */

/** @type {AppProps} */
const defaultArgs = {
  appPathFolder: ".", // OPTIONAL
  actionUrls: {
    applyNowUrl: "https://webapp4.asu.edu/uga_admissionsapp/?partner=CORP",
    majorInfoUrl: `?path=/story/program-detail-page--default&acadPlan={ACAD_PLAN_CODE}`,
  },
  hero: null,
  introContent: {
    type: "text",
    title: {
      text: "This is introductory marketing copy. Lorem ipsum dolor sit amet",
    },
    contents: [
      {
        text: `<p>Lorem, <strong>ipsum</strong></p>`,
      },
    ],
  },
  // hasFilters: false, // OPTIONAL
  // hasSearchBar: false, // OPTIONAL
  programList: {
    dataSource: {
      program: "graduate", // graduate | undergrad
      cert: "true", // "true" | "false"
    },
    settings: {
      hideCollegeSchool: true,
    },
  },
};

test("Link changes the class when hovered", () => {
  const component = renderer.create(
    <Button />
    // <ListingPage
    //   appPathFolder={defaultArgs.appPathFolder}
    //   actionUrls={defaultArgs.actionUrls}
    //   hero={defaultArgs.hero}
    //   introContent={defaultArgs.introContent}
    //   programList={defaultArgs.programList}
    //   hasSearchBar={defaultArgs.hasSearchBar}
    //   hasFilters={defaultArgs.hasFilters}
    // />
  );

  const page = component.toJSON();
  expect(page).toMatchSnapshot();
});
