import { render, act, cleanup } from "@testing-library/react";
import React from "react";

import { ProfessionalLicensure } from "./index";

import { degreeDataPropResolverService } from "../../../../core/services/degree-data-prop-resolver-service";

describe("#Professional Licensure section", () => {
  afterEach(() => {
    cleanup();
  });
  const row = {
    professionalLicensureStandardText:
      "<p>Professional Licensure Standard Text</p>",
    professionalLicensureAdditionalText:
      "<p>Professional Licensure Additional Text</p>",
  };

  it("should render the Professional Licensure section", () => {
    const resolver = degreeDataPropResolverService(row);
    const returnHtml = resolver.getProfessionalLicensureText();
    const container = returnHtml
      ? render(
          <ProfessionalLicensure
            content={resolver.getProfessionalLicensureText()}
          />
        )
      : render(null);
    expect(container).toBeDefined();
    expect(container.getByTestId("professional-licensure")).toHaveTextContent(
      "Professional Licensure"
    );
  });
});
