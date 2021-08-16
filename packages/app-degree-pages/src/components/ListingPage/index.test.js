// @ts-check
import { render, act } from "@testing-library/react";
import React from "react";

import { ListingPage } from "./index";

/** @type {import("../../core/models/listing-page-types").ActionUrlProps} */
const actionUrls = {
  applyNowUrl: "https://webapp4.asu.edu/uga_admissionsapp/?partner=CORP",
  majorInfoUrl: `?path=/story/program-detail-page--default&acadPlan={ACAD_PLAN_CODE}`,
};

/** @type {import("../../core/models/listing-page-types").ProgramListDataSource} */
const dataSource = {
  program: "graduate",
  cert: "true",
};

/**
 * @typedef {import('../../core/models/listing-page-types').ListingPageProps } AppProps
 */

/** @type {AppProps} */
const defaultArgs = {
  appPathFolder: ".", // OPTIONAL
  actionUrls,
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
  programList: {
    dataSource,
    settings: {
      hideCollegeSchool: true,
    },
  },
};

describe("#ListingPage", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component = null;
  /** @type {HTMLElement} */
  let container = null;

  beforeEach(async () => {
    await act(async () => {
      component = await render(
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
      container = component.container;
    });
  });

  it("should define the component", () => {
    expect(component).toBeDefined();
  });

  it("should define `Intro content` section", async () => {
    expect(component.getByTestId("intro-content")).toBeDefined();
  });

  it("should define `Hero` section", async () => {
    expect(container.querySelector(".uds-hero")).not.toBeNull();
  });

  it("should define `Browse Title` section", async () => {
    expect(component.getByTestId("browse-title")).toBeDefined();
  });

  it("should define `Search bar` section", async () => {
    expect(component.getByTestId("search-bar")).toBeDefined();
  });

  it("should define `Filters` section", async () => {
    expect(component.getByTestId("filters")).toBeDefined();
  });

  it("should define `Filters Summary` section", async () => {
    expect(component.getByTestId("filters-summary")).toBeDefined();
  });

  it("should define `Program List` section", async () => {
    expect(component.getByTestId("program-list")).toBeDefined();
  });
});
