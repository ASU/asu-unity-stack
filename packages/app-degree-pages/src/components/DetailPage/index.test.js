// @ts-check
import { Hero } from "@asu-ke/components-core";
// import * as componentsCore from "@asu-ke/components-core";
import { render, act, waitFor, cleanup } from "@testing-library/react";
import React from "react";

import { DetailPage } from "./index";

import * as service from "../../core/services/degree-data-prop-resolver-service";

/**
 * @typedef {import('../../core/types/detail-page-types').DetailPageProps} AppProps
 */

/** @type {AppProps} */
const defaultArgs = {
  dataSource: {
    acadPlan: "BABUSGLBA",
  },
  hero: null,
  anchorMenu: null,
  introContent: null,
  atAGlance: null,
  applicationRequirements: null,
  changeMajorRequirements: null,
  nextSteps: null,
  affordingCollege: null,
  flexibleDegreeOptions: null,
  careerOutlook: null,
  exampleCareers: null,
  globalOpportunity: null,
  attendOnline: null,
  programContactInfo: null,
};

const mockDegreeDataPropResolverService = jest.spyOn(
  service,
  "degreeDataPropResolverService"
);
// const mockUseFetch = jest.spyOn(componentsCore, "useFetch");

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
      component = await render(<DetailPage {...props} />);
      // container = component.container;
    });
  }

  describe("#With default props", () => {
    beforeEach(async () => {
      await renderListingPage(defaultArgs);
    });

    it("should call useEffect", async () => {
      expect(mockDegreeDataPropResolverService).toHaveBeenCalled();
      // await waitFor(() => expect(mockUseFetch).toHaveBeenCalled());
      // expect(mockUseFetch).toHaveBeenCalled();
    });

    it("should define the component", () => {
      expect(component).toBeDefined();
    });

    it("should define `Hero` section", () => {
      expect(Hero).toHaveBeenCalled();
    });

    it("should define `Intro Image` section", () =>
      expect(component.getByTestId("intro-image")).toBeInTheDocument());

    it("should hide `Intro Video` section", () =>
      expect(component.queryByTestId("intro-video")).not.toBeInTheDocument());

    it("should hide `Custom text` section", () =>
      expect(component.queryByTestId("custom-text")).not.toBeInTheDocument());

    test.each(sectionCases)("should define `%p` section", async (_, testId) => {
      await waitFor(() =>
        expect(component.getByTestId(testId)).toBeInTheDocument()
      );
    });
  });

  describe("#With props", () => {
    beforeEach(async () => {
      /** @type {AppProps} */
      const customProps = {
        ...defaultArgs,
        anchorMenu: {
          applicationRequirements: true,
          nextSteps: true,
          affordingCollege: true,
          careerOutlook: true,
          globalOpportunity: true,
          externalAnchors: [
            {
              targetIdName: "my-request-form-info-id",
              // targetIdName: "#my-request-form-info-id", this stil work but is not recommended
              text: "Request Information",
            },
          ],
        },
        introContent: {
          image: undefined,
          video: {
            url: "./examples/assets/video/stock-video-person-drawing.mp4",
            title: "",
            vttUrl: "",
          },
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
    afterEach(cleanup);

    it("should define `breadcrumbs` section", () =>
      expect(component.getByTestId("breadcrumbs")).toBeInTheDocument());

    it("should hide `Intro Image` section", () =>
      expect(component.queryByTestId("intro-image")).not.toBeInTheDocument());

    it("should define `Intro Video` section", () =>
      expect(component.getByTestId("intro-video")).toBeInTheDocument());
  });

  describe("#With section hidden", () => {
    beforeEach(async () => {
      /** @type {AppProps} */
      const customProps = {
        ...defaultArgs,
        hero: {
          hide: true,
        },
        introContent: {
          hideMarketText: true,
          hideRequiredCourses: true,
          hideProgramDesc: true,
        },
        atAGlance: {
          hide: true,
        },
        applicationRequirements: {
          hide: true,
        },
        changeMajorRequirements: {
          hide: true,
        },
        nextSteps: {
          hide: true,
        },
        affordingCollege: {
          hide: true,
        },
        flexibleDegreeOptions: {
          hide: true,
        },
        careerOutlook: {
          hide: true,
        },
        exampleCareers: {
          hide: true,
        },
        globalOpportunity: {
          hide: true,
        },
        attendOnline: {
          hide: true,
        },
        programContactInfo: {
          hide: true,
        },
      };

      await renderListingPage(customProps);
    });
    afterEach(cleanup);

    test.each(sectionCases)("should hide `%p` section", (_, testId) =>
      expect(component.queryByTestId(testId)).not.toBeInTheDocument()
    );
  });

  describe("#With acadPlan which does not accept new students", () => {
    beforeEach(async () => {
      /** @type {AppProps} */
      const customProps = {
        dataSource: {
          acadPlan: "BABUSCLBA", // no New accepted ßStudent AcadPlan
        },
      };

      await renderListingPage(customProps);
    });
    afterEach(cleanup);

    it("should define `Custom text` section", async () => {
      await waitFor(() =>
        expect(component.queryByTestId("custom-text")).toBeInTheDocument()
      );
    });
  });

  describe("#With error", () => {
    beforeEach(async () => {
      /** @type {AppProps} */
      const customProps = {
        ...defaultArgs,
        dataSource: {
          endpoint: "dummy-error-url",
          ...defaultArgs.dataSource,
        },
      };

      await renderListingPage(customProps);
    });
    afterEach(cleanup);

    it("should display an error message", () => {
      expect(component.getByTestId("message-alert")).toBeInTheDocument();
    });
  });

  describe("#With JSON broken", () => {
    beforeEach(async () => {
      /** @type {AppProps} */
      const customProps = {
        ...defaultArgs,
        dataSource: {
          endpoint: "dummy-broken-json",
          ...defaultArgs.dataSource,
        },
      };

      await renderListingPage(customProps);
    });
    afterEach(cleanup);

    it("should define `Program description` section with empty body", () => {
      expect(
        component.queryByTestId("program-description-body")
      ).toBeEmptyDOMElement();
    });
  });
});
