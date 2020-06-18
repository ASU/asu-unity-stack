import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ASUDropdownNav from "./AsuDropdownNav";

const titems = [
  {
    text: "Item 0",
    href: "https://asu.edu",
  },
  {
    text: "Item 1",
    href: "https://asu.edu",
  },
  {
    text: "Item 2",
    href: "https://asu.edu",
  },
  {
    text: "Item 3",
    href: "https://asu.edu",
  },
  {
    text: "Item 4",
    href: "https://asu.edu",
  },
  {
    text: "Item 5",
    href: "https://asu.edu",
  },
  {
    text: "Item 6",
    href: "https://asu.edu",
  },
  {
    text: "Item 7",
    href: "https://asu.edu",
  },
  {
    text: "Item 8",
    href: "https://asu.edu",
  },
  {
    text: "Item 9",
    href: "https://asu.edu",
  },
];

describe("The AsuDropdownMenu", () => {
  it("renders the component", () => {
    const { container } = render(
      <ASUDropdownNav {...{ text: "ASU Home", items: titems }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("drops down when button clicked", async () => {
    const { getByText, findAllByText } = render(
      <ASUDropdownNav {...{ text: "ASU Home", items: titems }} />
    );
    // Click button
    fireEvent.click(getByText("ASU Home"));

    // Wait for page to update with query text
    const items = await findAllByText(/Item [0-9]/);
    expect(items).toHaveLength(10);
  });
});
