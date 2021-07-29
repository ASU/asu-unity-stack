// @ts-check
import { render } from "@testing-library/react";
import React from "react";

import { OnThisPageAnchorMenu } from ".";

describe("#OnThisPageAnchorMenu", () => {
  it("should define the component", () => {
    const targetIdName = "dummyId";
    const text = "dummy link";

    /** @type {import("src/core/models/program-detail-types").AnchorMenuProps} */
    const anchorMenu = {
      affordingCollege: true,
      externalAnchors: [
        {
          text,
          targetIdName,
        },
      ],
    };
    const component = render(<OnThisPageAnchorMenu anchorMenu={anchorMenu} />);
    expect(component).toBeDefined();
    expect(component.getByText("Affording College")).not.toBeNull();
    expect(component.getByText(text)).not.toBeNull();
  });
});
