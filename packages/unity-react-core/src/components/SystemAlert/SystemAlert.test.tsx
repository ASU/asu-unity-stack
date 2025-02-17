import { render, cleanup, fireEvent } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach } from "vitest";

import { SystemAlert, SystemAlertType } from "./SystemAlert";

const defaultProps = {
  type: SystemAlertType.INFO,
  children: "Content",
  dismissable: true,
};

const renderComponent = (props = {}) => {
  return render(<SystemAlert {...defaultProps} {...props} />);
};

describe("SystemAlert tests", () => {
  afterEach(cleanup);

  it("should render the alert with correct content", () => {
    const { getByText } = renderComponent();
    expect(getByText("Content")).toBeInTheDocument();
  });

  it("should render the warning icon", () => {
    const { container } = renderComponent({ type: SystemAlertType.WARNING });
    const icon = container.querySelector(".fa-bell");
    expect(icon).toBeInTheDocument();
  });

  it("should render the info icon", () => {
    const { container } = renderComponent({ type: SystemAlertType.INFO });
    const icon = container.querySelector(".fa-info-circle");
    expect(icon).toBeInTheDocument();
  });

  it("should render the success icon", () => {
    const { container } = renderComponent({ type: SystemAlertType.SUCCESS });
    const icon = container.querySelector(".fa-check-circle");
    expect(icon).toBeInTheDocument();
  });

  it("should render the error icon", () => {
    const { container } = renderComponent({ type: SystemAlertType.ERROR });
    const icon = container.querySelector(".fa-exclamation-triangle");
    expect(icon).toBeInTheDocument();
  });

  it("should render dismiss button if dismissable is true", () => {
    const { container } = renderComponent({ dismissable: true });
    const button = container.querySelector(".alert-close");
    expect(button).toBeInTheDocument();
  });

  it("should not render dismiss button if dismissable is false", () => {
    const { container } = renderComponent({ dismissable: false });
    const button = container.querySelector(".alert-close");
    expect(button).not.toBeInTheDocument();
  });

  it("should hide the alert when dismiss button is clicked", () => {
    const { container, queryByText } = renderComponent({ dismissable: true });
    const button = container.querySelector(".alert-close button");
    fireEvent.click(button);
    expect(queryByText("Content")).not.toBeInTheDocument();
  });
});
