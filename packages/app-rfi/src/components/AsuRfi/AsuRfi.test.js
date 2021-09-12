// @ts-check
import { render } from "@testing-library/react";
import React from "react";

import { AsuRfi } from "./AsuRfi";

const defaultArgs = {
  props: {
    campus: "NOPREF", // ONLNE, GROUND, NOPREF
    actualCampus: undefined, // TEMPE, DTPHX, POLY, WEST, ONLNE...
    college: undefined, // e.g. CES
    department: undefined, // e.g. CINFOTECH
    studentType: "undergrad",
    areaOfInterest: undefined, // e.g. STEM
    programOfInterest: undefined, // e.g. TSIFTBS
    programOfInterestOptional: false,
    isCertMinor: false,
    country: "US",
    stateProvince: "Wyoming", // Only US states or CA provinces
    successMsg: "Success. <strong>You made it.</strong>",
    test: false,
    dataSourceDegreeSearch: undefined, // "https://degreesearch-proxy.apps.asu.edu/degreesearch/",
    dataSourceAsuOnline: undefined, // "https://asuonline.asu.edu/lead-submissions-v3.3/programs",
    dataSourceCountriesStates: undefined, // "https://api.myasuplat-dpl.asu.edu/api/codeset/countries",
    submissionUrl: "https://httpbin.org/post", // Test endpoint
  },
};

const renderAsuRfi = args => {
  // return render(<AsuRfi {...args.props} />);
  return render(<AsuRfi props={args.props} />);
};

describe("#AsuRfi", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderAsuRfi(defaultArgs);
  });

  it("should define the component", () => {
    expect(component).toBeDefined();
  });
});
