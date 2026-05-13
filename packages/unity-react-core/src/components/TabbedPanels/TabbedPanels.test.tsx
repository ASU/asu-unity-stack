import { render, cleanup } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach } from "vitest";

import { TabbedPanels, Tab } from "./TabbedPanels";

const tabbedPanelsDefaultArgs = {
  bgColor: "bg-dark",
};

const renderTabbedPanels = (props: typeof tabbedPanelsDefaultArgs) => {
  return render(
    <TabbedPanels {...props}>
      <Tab id="one" title="One">
        <div>One</div>
      </Tab>
      <Tab id="two" title="Two">
        <div>Two</div>
      </Tab>
    </TabbedPanels>
  );
};

describe("#TabbedPanels", () => {
  let component: ReturnType<typeof renderTabbedPanels>;

  beforeEach(() => {
    component = renderTabbedPanels(tabbedPanelsDefaultArgs);
  });
  afterEach(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });
});
