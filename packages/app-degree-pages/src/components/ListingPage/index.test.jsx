// @ts-check
import { render, act, fireEvent, cleanup } from "@testing-library/react";
import React from "react";
import { vi } from "vitest";

import { ListingPage } from "./index";

import { DOMAIN_URL } from "../../core/constants";
import {
  locationOptions,
  asuLocalOptions,
  acceleratedConcurrentOptions,
  ERROR_MESSAGE,
} from "../../core/models";
import * as service from "../../core/services/degree-data-manager-service";

/** @type {import("../../core/types/listing-page-types").ActionUrlProps} */
const actionUrls = {
  applyNowUrl: `${DOMAIN_URL}/uga_admissionsapp/?partner=CORP`,
  majorInfoUrl: `?path=/story/program-detail-page--default&acadPlan={ACAD_PLAN_CODE}`,
};

/** @type {import("../../core/types/listing-page-types").ProgramListDataSource} */
const dataSource = {
  program: "undergrad",
};

/**
 * @typedef {import('../../core/types/listing-page-types').ListingPageProps } AppProps
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

const mockfilterData = vi.spyOn(service, "filterData");
const mockSortPrograms = vi.spyOn(service, "sortPrograms");

describe("#ListingPage", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component = null;
  /** @type {HTMLElement} */
  let container = null;

  /** @param {AppProps} props  */
  async function renderListingPage(props) {
    await act(async () => {
      component = render(
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

  describe("#With loading spinner", () => {
    beforeEach(async () => {
      globalThis.doDelay = true;
      await renderListingPage(defaultArgs);
    });

    // eslint-disable-next-line no-return-assign
    afterEach(() => (globalThis.doDelay = false));

    it("should define Loading component", async () => {
      expect(await component.findByTestId("loader")).toBeInTheDocument();
    });
  });

  describe("#With various intro content", () => {
    const sectionCases = [
      ["text-photo-grid", "text-photo-grid"],
      ["text-media", "text-media"],
      ["text", "text"],
      ["text-image-overlay", "text-image-overlay"],
    ];

    test.each(sectionCases)(
      "should define intro Content of type `%p`",
      async (_, introType) => {
        /** @type {AppProps} */
        const customProps = {
          ...defaultArgs,
          introContent: {
            type: introType,
            title: {
              text: `Dummy title of type ${introType}`,
            },
            contents: [
              {
                text: `<p>dummy text </p>`,
              },
            ],
            image: {
              url: "https://source.unsplash.com/random/800x600?a=1",
            },
            photoGrid: {
              images: [
                {
                  url: "examples/assets/img/demo-phot-1.jpeg",
                },
                {
                  url: "examples/assets/img/demo-phot-2.jpeg",
                },
                {
                  url: "examples/assets/img/demo-phot-3.jpeg",
                },
              ],
            },
          },
        };

        await renderListingPage(customProps);

        const introComponent = await component.findByTestId("intro-content");
        expect(introComponent).toBeInTheDocument();
        expect(introComponent).toHaveAttribute("data-type", introType);
      }
    );
  });

  describe("#With default props", () => {
    beforeEach(async () => {
      // Add these lines to call real implementations
      await renderListingPage(defaultArgs);
    });

    it("should call useEffect", () => {
      expect(mockSortPrograms).toHaveBeenCalled();
      expect(mockfilterData).toHaveBeenCalled();
    });

    it("should define the component", () => {
      expect(component).toBeDefined();
    });

    it("Should have 16 items in the program list", async () => {
      const programRows = await component.findByTestId("program-rows");
      expect(programRows.children.length).toBe(16);
    });

    const sectionCases = [
      [`Intro content`, `intro-content`],
      [`Browse Title`, `browse-title`],
      [`Search bar`, `search-bar`],
      [`Filters`, `filters`],
      [`Filters Summary`, `filters-summary`],
      [`Program List`, `program-list`],
    ];

    test.each(sectionCases)("should define `%p` section", async (_, testId) =>
      expect(await component.findByTestId(testId)).toBeInTheDocument()
    );
  });

  describe("#With hidden sections", () => {
    beforeEach(async () => {
      /** @type {AppProps} */
      const customProps = {
        ...defaultArgs,
        introContent: null,
        hasSearchBar: false,
        hasFilters: false,
        hero: {
          hide: true,
        },
      };
      await renderListingPage(customProps);
    });

    it("`Hero` section should be undefined", async () => {
      expect(
        container.querySelector("[data-testid='hero']")
      ).not.toBeInTheDocument();
    });

    const cases = [
      [`Intro content`, `intro-content`],
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
            collegeAcadOrg: "CHI",
            departmentCode: "CARCH",
          },
        },
      };
      await renderListingPage(customProps);
    });

    it("should call useEffect functions and `sortPrograms()`", () => {
      expect(mockSortPrograms).toHaveBeenCalled();
      expect(mockfilterData).toHaveBeenCalled();
    });

    it("should include only programs that match the `collegeAcadOrg` and `departmentCode`", async () => {
      const programRows = await component.findByTestId("program-rows");
      expect(programRows.children.length).toBe(10); // Only 5 degrees match both the `collegeAcadOrg` and `departmentCode` in our mock data
      expect(programRows.children[0]).toHaveTextContent(
        "Architectural Studies"
      );
      expect(programRows.children[2]).toHaveTextContent("Graphic Design");
    });
  });

  describe("#With user who applies filters", () => {
    beforeEach(async () => {
      await renderListingPage(defaultArgs);
    });

    const selectOptionFilters = async () => {
      const locations = await component.findByTestId("locations");
      const asuLocals = await component.findByTestId("asuLocals");
      const acceleratedConcurrent = await component.findByTestId(
        "acceleratedConcurrent"
      );
      const btnApplyfilter = await component.findByTestId("btn-apply-filter");

      fireEvent.change(locations, {
        target: { value: locationOptions[1].value },
      });
      fireEvent.change(asuLocals, {
        target: { value: asuLocalOptions[9].value },
      });
      fireEvent.change(acceleratedConcurrent, {
        target: {
          value: acceleratedConcurrentOptions[2].value,
        },
      });
      fireEvent.click(btnApplyfilter);
    };

    it("should trigger apply a filter when the user type a keyword", async () => {
      const searchField = await component.findByTestId("search-field");
      const searchBarForm = await component.findByTestId("search-bar-form");
      const programRows = await component.findByTestId("program-rows");

      expect(programRows.children.length).toBe(16);

      fireEvent.change(searchField, { target: { value: "nonsense" } });

      fireEvent.submit(searchBarForm);

      const updatedProgramRows = await component.findByTestId("program-rows");
      expect(updatedProgramRows.children.length).toBe(1);
    });

    it("should apply filters when you select options and click the button", async () => {
      const programRows = await component.findByTestId("program-rows");
      expect(programRows.children.length).toBe(16);
      await selectOptionFilters();
      expect(mockfilterData).toHaveBeenCalled();
      const programRows1 = await component.findByTestId("program-rows");
      expect(programRows1.children.length).toBeLessThan(16);
    });

    it("should remove one filter when you click a summary tag", async () => {
      await selectOptionFilters();
      const bthTags = await component.findByTestId("summary-filter-tags");
      expect(bthTags.children.length).toBe(3);
      fireEvent.click(bthTags.children[1]);
      expect(mockfilterData).toHaveBeenCalled();
      const updatedBtnTags = await component.findByTestId(
        "summary-filter-tags"
      );
      expect(updatedBtnTags.children.length).toBe(2);
    });

    it("should clear all filter when you click `Clear` button", async () => {
      await selectOptionFilters();
      const btnClearFilter = await component.findByTestId("btn-clear-filters");
      // We wrap this in an act because of a computation-heavy operation in filterData
      act(() => {
        fireEvent.click(btnClearFilter);
      });
      const bthTags = await component.findByTestId("summary-filter-tags");
      expect(mockfilterData).toHaveBeenCalled();
      // the only element will be the <span> No filter applied place holder</span>
      expect(bthTags.children.length).toBe(1);
    });
  });

  describe("#With error", () => {
    beforeEach(async () => {
      /** @type {AppProps} */
      const customProps = {
        ...defaultArgs,
        programList: {
          dataSource: {
            endpoint: "dummy-error-url",
            ...defaultArgs.programList.dataSource,
          },
        },
      };

      await renderListingPage(customProps);
    });
    afterEach(cleanup);

    it("should display an error message and no result message", async () => {
      const errorMessage = await component.findByText(ERROR_MESSAGE);
      const noResultMessage = await component.findByText(
        "No result found for the filters applied"
      );
      expect(errorMessage).toBeInTheDocument();
      expect(noResultMessage).toBeInTheDocument();
    });
  });

  describe("#With Accordion mobile view", () => {
    beforeEach(async () => {
      await renderListingPage(defaultArgs);
    });

    it("should define Accordion view when view port is smaller", async () => {
      const accordion = await component.findByTestId("accordion-view");
      const list = await component.findByTestId("list-view");
      expect(list).toBeVisible();
      expect(accordion).toBeVisible();
    });
  });
});
