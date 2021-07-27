// @ts-check
import React from "react";
import renderer from "react-test-renderer";

import { OnThisPageAnchorMenu } from ".";

describe("#OnThisPageAnchorMenu", () => {
  it("should define the component", () => {
    const component = renderer.create(<OnThisPageAnchorMenu anchorMenu={{}} />);

    const page = component.toJSON();
    expect(page).toBeDefined();
  });
});
