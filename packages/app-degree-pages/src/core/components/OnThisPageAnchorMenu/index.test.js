// @ts-check
import { AnchorMenu } from "@asu-design-system/components-core";
import { render } from "@testing-library/react";
import React from "react";

import { OnThisPageAnchorMenu } from ".";

import { progDetailSectionIds } from "../../models";

describe("#OnThisPageAnchorMenu", () => {
  it("should define the component", () => {
    const targetIdName = "dummyId";
    const text = "dummy link";

    /** @type {import("src/core/types/detail-page-types").AnchorMenuProps} */
    const anchorMenu = {
      affordingCollege: true,
      externalAnchors: [
        {
          text,
          targetIdName,
        },
      ],
    };

    const items = [
      { targetIdName: "affording-college", text: "Affording College" },
      { icon: null, targetIdName: "dummyId", text: "dummy link" },
    ];

    const component = render(<OnThisPageAnchorMenu anchorMenu={anchorMenu} />);
    expect(component).toBeDefined();
    expect(AnchorMenu).toHaveBeenCalledWith(
      expect.objectContaining({
        items: expect.arrayContaining(items),
        firstElementId: expect.stringContaining(
          progDetailSectionIds.affordingCollege.targetIdName
        ),
        focusFirstFocusableElement: true,
      }),
      expect.anything()
    );
  });
});
