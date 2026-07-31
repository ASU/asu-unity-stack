// @ts-check
import { render, cleanup, screen, act } from "@testing-library/react";
import React from "react";

import { ASUHeader } from ".";

import {
  defaultState,
  emptyStateHeader,
  partnersState,
  unbrandedState,
  withButtonsState,
} from "../../__mocks__/data/props-mock";

const renderHeader = props => {
  return render(<ASUHeader {...{ ...props }} />);
};

describe("#ASU Header", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderHeader(defaultState);
  });
  afterAll(cleanup);

  it("should define component", () => {
    expect(ASUHeader).toBeDefined();
  });

  const cases = [
    [`Universal Navbar(Top)`, `universal-navbar`],
    [`Logo`, `logo`],
    [`Title`, `title`],
    [`Navigation(Dropdown items)`, `navigation`],
  ];

  test.each(cases)("should %p section be defined", async (_, testId) => {
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  it("should not define Partner and Buttons section", () => {
    expect(component.queryByTestId("partner")).toBeNull();
    expect(component.queryByTestId("buttons-container")).toBeNull();
  });
});

describe("#ASU Empty Header", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderHeader(emptyStateHeader);
  });
  afterAll(cleanup);

  it("should have empty Logo and Navigation(Dropdown items) sections", async () => {
    const nav = await component.findByTestId("navigation");
    expect(nav.children.length).toBe(0);
    expect(component.queryByTestId("title")?.firstElementChild?.innerHTML).toBe(
      ""
    );
  });

  it("should define Logo section", () => {
    expect(component.queryByTestId("logo")).toBeInTheDocument();
  });
});

describe("#ASU Header with button", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  it("should define Buttons section", () => {
    component = renderHeader(withButtonsState);
    // This resolves the race condition between reading the state in the component and rendering the ui
    setTimeout(() => {
      expect(component.queryByTestId("buttons-container")).toBeInTheDocument();
    });
    cleanup();
  });
});

describe("#ASU Unbranded Header", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderHeader(unbrandedState);
  });
  afterEach(cleanup);

  it("should replace the ASU logo with the unbranded logo", () => {
    const logo = screen.getByTestId("logo");
    expect(logo).toHaveAttribute("href", "https://ke.example.edu");
    const images = component.getAllByAltText("Knowledge Enterprise logo");
    expect(images.length).toBeGreaterThan(0);
    images.forEach(img => {
      expect(img).toHaveAttribute("src", "https://example.com/ke-logo.png");
    });
    expect(
      component.queryByAltText("Arizona State University logo")
    ).toBeNull();
  });

  it("should keep only the skip-nav and accessibility links in the universal navbar", () => {
    expect(screen.getByText("Skip to main content")).toBeInTheDocument();
    expect(
      screen.getByText("Report an accessibility problem")
    ).toBeInTheDocument();
    expect(component.queryByText("ASU Home")).toBeNull();
    expect(component.queryByText("My ASU")).toBeNull();
    expect(component.queryByText("Colleges and Schools")).toBeNull();
  });

  it("should not render sign in, sign out or the ASU search input", () => {
    expect(component.queryByText("Sign In")).toBeNull();
    expect(component.queryByText("Sign Out")).toBeNull();
    expect(component.queryByTestId("universal-nav-search-form")).toBeNull();
  });

  it("should mark the universal navbar as focus-revealed", () => {
    expect(screen.getByTestId("universal-navbar")).toHaveClass(
      "uds-hdr-universal-nav-unbranded"
    );
  });

  it("should keep title and navigation menu rendering", () => {
    expect(screen.getByTestId("title")).toHaveTextContent(
      "Knowledge Enterprise"
    );
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
  });
});

describe("#ASU Partner Header", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  it("should define Partner section", () => {
    component = renderHeader(partnersState);
    expect(component.queryByTestId("partner")).toBeInTheDocument();
    cleanup();
  });
});
