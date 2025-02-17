import {
  render,
  cleanup,
  RenderResult,
  fireEvent,
} from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach } from "vitest";

import {
  NotificationBanner,
  NotificationBannerProps,
} from "./NotificationBanner";

const defaultProps: NotificationBannerProps = {
  title: "Header",
  children: "Content",
  color: "orange",
};

const renderComponent = (props: NotificationBannerProps) => {
  return render(<NotificationBanner {...props} />);
};

describe("NotificationBanner tests", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = renderComponent(defaultProps);
  });

  afterEach(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });

  it("should render title", () => {
    const { getByText } = component;
    expect(getByText("Header")).toBeInTheDocument();
  });

  it("should render children", () => {
    const { getByText } = component;
    expect(getByText("Content")).toBeInTheDocument();
  });

  it("should render with default color", () => {
    const { container } = component;
    expect(container.firstChild).toHaveClass("banner-orange");
  });

  it("should render buttons if provided", () => {
    const props: NotificationBannerProps = {
      ...defaultProps,
      buttons: [{ href: "#", label: "Click me" }],
    };
    const { getByText } = renderComponent(props);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("should close the banner when close button is clicked", () => {
    const { getByLabelText, queryByRole } = component;
    const closeButton = getByLabelText("Close");
    fireEvent.click(closeButton);
    expect(queryByRole("alert")).not.toBeInTheDocument();
  });
});
