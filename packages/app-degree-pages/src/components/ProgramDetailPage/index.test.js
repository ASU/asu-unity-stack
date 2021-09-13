// @ts-check
import { Hero } from "@asu-design-system/components-core";
import * as componentsCore from "@asu-design-system/components-core";
import { render, act, waitFor, cleanup } from "@testing-library/react";
import React from "react";

import { ProgramDetailPage } from "./index";

import * as service from "../../core/services/degree-data-prop-resolver-service";

/**
 * @typedef {import('../../core/models/program-detail-types').ProgramDetailPageProps} AppProps
 */

/** @type {AppProps} */
const defaultArgs = {
  dataSource: {
    // endpoint: "https://degreesearch-proxy.apps.asu.edu/degreesearch/", // OPTIONAL
    // method: "findDegreeByAcadPlan", // OPTIONAL
    // init: "false", // OPTIONAL
    acadPlan: "BABUSGLBA",
    // acadPlan: "LSBISBIS", // this has marketText
    // acadPlan: "ESBMEMDBSE", // this does not have required courses
  },
  hero: null,
  anchorMenu: null,
  introContent: null,
  nextSteps: null,
  globalOpportunity: null,
  atAGlance: null,
  attendOnline: null,
  programContactInfo: null,
};

const mockDegreeDataPropResolverService = jest.spyOn(
  service,
  "degreeDataPropResolverService"
);
const mockUseFetch = jest.spyOn(componentsCore, "useFetch");

const sectionCases = [
  ["Market Text", "market-text"],
  ["Program Description", "program-description"],
  ["Required Course", "required-course"],
  ["At Glance", "at-aglance"],
  ["Application Requirements", "application-requirements"],
  ["Change Your-major", "change-your-major"],
  ["Next Steps", "next-steps"],
  ["Affording College", "affording-college"],
  ["Flexible Degree Options", "flexible-degree-options"],
  ["Career Outlook", "career-outlook"],
  ["Example Careers", "example-careers"],
  ["Global Opportunity", "global-opportunity"],
  ["AttendOnline", "attend-online"],
  ["Program Contact Info", "program-contact-info"],
];

describe("#DetailPage", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component = null;
  // /** @type {HTMLElement} */
  // let container = null;

  /** @param {AppProps} props  */
  async function renderListingPage(props) {
    await act(async () => {
      // eslint-disable-next-line react/jsx-props-no-spreading
      component = await render(<ProgramDetailPage {...props} />);
      // container = component.container;
    });
  }

  describe("#With default props", () => {
    beforeEach(async () => {
      await renderListingPage(defaultArgs);
    });

    afterAll(() => cleanup());

    it("should call useEffect", () => {
      expect(mockDegreeDataPropResolverService).toHaveBeenCalled();
      waitFor(() => {
        expect(mockUseFetch).toHaveBeenCalled();
      });
    });

    it("should define the component", () => {
      expect(component).toBeDefined();
    });

    it("should define `Hero` section", async () => {
      expect(Hero).toHaveBeenCalled();
    });

    test.each(sectionCases)("should define `%p` section", (_, testId) =>
      waitFor(() => expect(component.getByTestId(testId)).toBeInTheDocument())
    );
  });

  describe("#With props", () => {
    beforeEach(async () => {
      const customProps = {
        ...defaultArgs,
        introContent: {
          breadcrumbs: [
            {
              text: "Academic programs",
              url: "#parent",
            },
            {
              text: "Undergraduate degrees",
              url: "#child",
            },
            {
              text: "Degree title",
              isActive: true,
            },
          ],
        },
      };

      await renderListingPage(customProps);
    });

    it("should define `breadcrumbs` section", () =>
      expect(component.getByTestId("breadcrumbs")).toBeInTheDocument());
  });
});
