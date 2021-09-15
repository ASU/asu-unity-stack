// @ts-check
import { Hero } from "@asu-design-system/components-core";
import {
  render,
  act,
  waitFor,
  fireEvent,
  cleanup,
} from "@testing-library/react";
import React from "react";

import { ListingPage } from "./index";

import {
  locationOptions,
  asuLocalOptions,
  acceleratedConcurrentOptions,
  ERROR_MESSAGE,
} from "../../core/models";
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

const mockfilterData = jest.spyOn(service, "filterData");
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
      // expect(component.getByTestId("loader")).toBeInTheDocument();
    });
  }

  describe("#With loading spinner", () => {
    beforeEach(async () => {
      globalThis.doDelay = true;
      await renderListingPage(defaultArgs);
    });

    // eslint-disable-next-line no-return-assign
    afterAll(() => (globalThis.doDelay = false));

    it("should define Loading component", async () => {
      await waitFor(() => {
        expect(component.getByTestId("loader")).toBeInTheDocument();
      });
    });
  });

  describe("#With default props", () => {
    beforeEach(async () => {
      await renderListingPage(defaultArgs);
    });

    it("should call useEffect", () => {
      expect(mockSortPrograms).toHaveBeenCalled();
      expect(mockfilterData).toHaveBeenCalled();
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

  describe("#With hidden sections", () => {
    beforeEach(async () => {
      /** @type {AppProps} */
      const customProps = {
        ...defaultArgs,
        actionUrls: null,
        introContent: null,
        hasSearchBar: false,
        hasFilters: false,
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
            collegeAcadOrg: "CES",
            // departmentCode: "CGRAPHINFO",
          },
        },
      };
      await renderListingPage(customProps);
    });

    it("should call useEffect functions and `sortPrograms()`", () => {
      expect(mockSortPrograms).toHaveBeenCalled();
      expect(mockfilterData).toHaveBeenCalled();
    });
  });

  describe("#With user who applies filters", () => {
    beforeEach(async () => {
      await renderListingPage(defaultArgs);
    });

    const selectOptionFilters = () => {
      const locations = component.getByTestId("locations");
      const asuLocals = component.getByTestId("asuLocals");
      const acceleratedConcurrent = component.getByTestId(
        "acceleratedConcurrent"
      );
      const btnApplyfilter = component.getByTestId("btn-apply-filter");

      fireEvent.change(locations, {
        target: { value: locationOptions[0].value },
      });
      fireEvent.change(asuLocals, {
        target: { value: asuLocalOptions[0].value },
      });
      fireEvent.change(acceleratedConcurrent, {
        target: {
          value: acceleratedConcurrentOptions[1].value,
        },
      });

      fireEvent.click(btnApplyfilter);
    };

    it("should trigger apply a filter when the user type a keyword", async () => {
      const searchField = component.getByTestId("search-field");
      const searchBarForm = component.getByTestId("search-bar-form");
      const programRows = component.getByTestId("program-rows");

      // await waitFor(() => {
      //   expect(programRows.children.length).toBe(16);
      // });

      fireEvent.change(searchField, {
        target: {
          value: "nonsense",
        },
      });

      fireEvent.submit(searchBarForm);

      await waitFor(() => {
        expect(programRows.children.length).toBe(1);
        expect(mockfilterData).toHaveBeenCalled();
      });
    });

    it("should apply filters when you select options and click the button", async () => {
      await waitFor(() => {
        selectOptionFilters();
        expect(mockfilterData).toHaveBeenCalled();
      });
    });

    it("should remove one filter when the you click a summary tag", async () => {
      selectOptionFilters();
      const bthTags = component.getByTestId("summary-filter-tags");

      await waitFor(() => {
        expect(bthTags.children.length).toBe(3);
        fireEvent.click(bthTags.children[1]);
        expect(mockfilterData).toHaveBeenCalled();
      });

      await waitFor(() => {
        const programRows = component.getByTestId("program-rows");
        expect(programRows.children.length).toBeLessThan(16);
        expect(bthTags.children.length).toBe(2);
      });
    });

    it("should clear all filter when you click `Clear` button", async () => {
      selectOptionFilters();
      const bthTags = component.getByTestId("summary-filter-tags");

      const btnClearFilter = component.getByTestId("btn-clear-filters");
      await waitFor(() => {
        expect(bthTags.children.length).toBe(3);
        fireEvent.click(btnClearFilter);
        expect(mockfilterData).toHaveBeenCalled();
      });

      await waitFor(() => {
        // the only element will be the <span> No filter applied place holder</span>
        expect(bthTags.children.length).toBe(1);
      });
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

    it("should display an error message and no result message", () => {
      const errorMessage = component.getByText(ERROR_MESSAGE);
      const noResultMessage = component.getByText(
        "No result found for the filters applied"
      );
      expect(errorMessage).toBeInTheDocument();
      expect(noResultMessage).toBeInTheDocument();
    });
  });
});
