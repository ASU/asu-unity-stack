// @ts-check
import { Hero } from "@asu-design-system/components-core";
import { render, act } from "@testing-library/react";
import React from "react";

import { ListingPage } from "./index";

import * as service from "../../core/services/degree-data-manager-service";

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

const mockDatafilter = jest.spyOn(service, "filterData");
const mockSortPrograms = jest.spyOn(service, "sortPrograms");

describe("#ListingPage", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component = null;
  /** @type {HTMLElement} */
  let container = null;

  /** @param {AppProps} props  */
  async function renderListingPage(props) {
    await act(async () => {
      component = await render(
        <ListingPage
          appPathFolder={props.appPathFolder}
          actionUrls={props.actionUrls}
          hero={props.hero}
          introContent={props.introContent}
          programList={props.programList}
          hasSearchBar={props.hasSearchBar}
          hasFilters={props.hasFilters}
        />
      );
      container = component.container;
    });
  }

  describe("#With default props", () => {
    beforeEach(async () => {
      await renderListingPage(defaultArgs);
    });

    it("should call useEffect", () => {
      expect(mockSortPrograms).toHaveBeenCalled();
      expect(mockDatafilter).not.toHaveBeenCalled();
    });

    it("should define the component", () => {
      expect(component).toBeDefined();
    });

    it("should define `Hero` section", async () => {
      expect(Hero).toHaveBeenCalled();
    });

    const sectionCases = [
      [`Intro content`, `intro-content`],
      [`Browse Title`, `browse-title`],
      [`Search bar`, `search-bar`],
      [`Filters`, `filters`],
      [`Filters Summary`, `filters-summary`],
      [`Program List`, `program-list`],
    ];

    test.each(sectionCases)("should define `%p` section", (_, testId) =>
      expect(component.getByTestId(testId)).toBeInTheDocument()
    );
  });

  describe("#With `Filters` and `Hero` hidden", () => {
    beforeEach(async () => {
      /** @type {AppProps} */
      const customProps = {
        ...defaultArgs,
        hasFilters: false,
        hasSearchBar: false,
        hero: {
          hide: true,
        },
      };
      await renderListingPage(customProps);
    });

    it("should `Hero` section be undefined", async () => {
      expect(container.querySelector(".uds-hero")).not.toBeInTheDocument();
    });

    const cases = [
      [`Search bar`, `search-bar`],
      [`Filters`, `filters`],
      [`Filters Summary`, `filters-summary`],
    ];

    test.each(cases)("should `%p` section be undefined", (_, testId) =>
      expect(component.queryByTestId(testId)).toBeNull()
    );
  });

  describe("#With `collegeAcadOrg` and `departmentCode`", () => {
    beforeEach(async () => {
      /** @type {AppProps} */
      const customProps = {
        ...defaultArgs,
        programList: {
          ...defaultArgs.programList,
          dataSource: {
            ...defaultArgs.programList.dataSource,
            collegeAcadOrg: "CES",
            // departmentCode: "CGRAPHINFO",
          },
        },
      };
      await renderListingPage(customProps);
    });

    it("should call useEffect functions and `sortPrograms()`", () => {
      expect(mockSortPrograms).toHaveBeenCalled();
      expect(mockDatafilter).toHaveBeenCalled();
    });
  });
});
