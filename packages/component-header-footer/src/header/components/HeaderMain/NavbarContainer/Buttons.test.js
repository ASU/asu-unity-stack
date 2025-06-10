/* eslint-disable jest/no-mocks-import */
// @ts-check
import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";

import { NavbarContainer, BUTTON_ERROR_MESSAGE } from ".";

import { trackGAEvent } from "../../../../../../../shared";
import { AppContextProvider } from "../../../core/context/app-context";

jest.mock("../../../../../../../shared", () => ({
  idGenerator: jest.fn().mockImplementation(function* () {
    yield "test-id";
  }),
  trackGAEvent: jest.fn(),
}));

const stateWithButtons = {
  navTree: [
    {
      href: "/",
      text: "Home",
      type: "icon-home",
      class: "home",
    },
    {
      text: "Link option 1",
      href: "#",
      items: [
        [
          {
            href: "https://www.asu.edu",
            text: "Sublink 1",
          },
          {
            href: "https://www.asu.edu",
            text: "Sublink 2",
          },
          {
            href: "https://www.asu.edu",
            text: "Sublink 3",
          },
          {
            href: "https://www.asu.edu",
            text: "Sublink 4",
          },
          {
            href: "https://www.asu.edu",
            text: "Sublink 5",
          },
          {
            href: "https://www.asu.edu",
            text: "Sublink 6",
          },
          {
            href: "https://www.asu.edu",
            text: "Sublink 7",
          },
          {
            href: "https://www.asu.edu",
            text: "Sublink 8",
          },
        ],
      ],
    },
  ],
  buttons: [
    { text: "Login", href: "/login" },
    { text: "Sign Up", onClick: jest.fn() },
    { text: "Contact", onClick: jest.fn(), href: "#" },
  ],
  breakpoint: "lg",
};

const renderNavbarContainer = props => {
  return render(
    <AppContextProvider initialValue={props}>
      <NavbarContainer />
    </AppContextProvider>
  );
};

describe("#NavbarContainer Button Tests", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    jest.clearAllMocks();
    component = renderNavbarContainer(stateWithButtons);
  });

  afterEach(cleanup);

  it("should render all buttons from context", () => {
    const buttonsContainer = component.getByTestId("buttons-container");
    expect(buttonsContainer).toBeInTheDocument();

    const buttons = component.getAllByRole("button");
    expect(buttons.length).toBe(stateWithButtons.buttons.length);

    stateWithButtons.buttons.forEach((buttonData, index) => {
      expect(buttons[index]).toHaveTextContent(buttonData.text);
    });
  });

  it("should call the onClick handler when a button is clicked", () => {
    const buttons = component.getAllByRole("button");

    fireEvent.click(buttons[1]);

    expect(stateWithButtons.buttons[1].onClick).toHaveBeenCalledTimes(1);
  });

  it("should track GA event when any button is clicked", () => {
    const buttons = component.getAllByRole("button");

    buttons.forEach((button, index) => {
      fireEvent.click(button);

      expect(trackGAEvent).toHaveBeenCalledWith({
        event: "link",
        action: "click",
        name: "onclick",
        region: "navbar",
        type: "internal link",
        section: "main navbar",
        text: stateWithButtons.buttons[index].text,
      });
    });

    expect(trackGAEvent).toHaveBeenCalledTimes(buttons.length);
  });

  it("should log an error for buttons with both onClick and href", () => {
    cleanup();

    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    renderNavbarContainer(stateWithButtons);

    expect(consoleErrorSpy).toHaveBeenCalledWith(BUTTON_ERROR_MESSAGE);

    consoleErrorSpy.mockRestore();
  });

  it("should not render buttons section when no buttons exist in context", () => {
    const stateWithoutButtons = {
      ...stateWithButtons,
      buttons: [],
    };

    cleanup();
    const noButtonsComponent = renderNavbarContainer(stateWithoutButtons);

    const buttonsContainer =
      noButtonsComponent.queryByTestId("buttons-container");
    expect(buttonsContainer).not.toBeInTheDocument();
  });
});
