// @ts-check
import { render } from "@testing-library/react";
import React from "react";

import { ErrorAlert, InfoAlert } from ".";

describe("#MessageAlert", () => {
  test.each([
    [ErrorAlert, "dummy Error"],
    [InfoAlert, "dummy info"],
  ])(`should define the component $message`, (TypeAlert, message) => {
    const component = render(<TypeAlert message={message} />);

    expect(component).toBeDefined();
    expect(component.getByText(message)).toBeInTheDocument();
  });
});
