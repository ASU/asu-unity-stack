// @ts-check
import { render, act } from "@testing-library/react";
import React from "react";

import { ListingPage } from "./index";

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

describe("#ListingPage", () => {
  it("should define the component", async () => {
    await act(async () => {
      const component = await render(
        <ListingPage
          appPathFolder={defaultArgs.appPathFolder}
          actionUrls={defaultArgs.actionUrls}
          hero={defaultArgs.hero}
          introContent={defaultArgs.introContent}
          programList={defaultArgs.programList}
          hasSearchBar={defaultArgs.hasSearchBar}
          hasFilters={defaultArgs.hasFilters}
        />
      );

      expect(component).toBeDefined();
    });
  });
});
