import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

import { Form, formBackground } from "./Form";

describe("Form Component", () => {
  it("renders without crashing", () => {
    const { container } = render(<Form />);
    expect(container.firstChild).toHaveClass("uds-form");
  });

  it("applies the correct background class", () => {
    formBackground
      .filter(x => x.length)
      .forEach(background => {
        const { container } = render(<Form background={background} />);
        expect(container.firstChild).toHaveClass(background);
      });
  });

  it("renders children correctly", () => {
    const { getByText } = render(
      <Form>
        <div>Child Element</div>
      </Form>
    );
    expect(getByText("Child Element")).toBeInTheDocument();
  });

  it("passes additional props to the form element", () => {
    const { container } = render(<Form id="test-form" />);
    expect(container.firstChild).toHaveAttribute("id", "test-form");
  });
});
