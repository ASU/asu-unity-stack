/* eslint-disable react/jsx-props-no-spreading */
// @ts-check
import { render, cleanup } from "@testing-library/react";
import React from "react";

import { Card } from ".";

const defaultArgs = {
  type: "default",
  horizontal: false,
  clickable: false,
  image: "https://picsum.photos/300/200",
  imageAltText: "An example image",
  title: "Default title",
  body: "<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
  buttons: [
    {
      color: "maroon",
      size: "default",
      label: "CTA button",
    },
    {
      color: "gold",
      size: "small",
      label: "Link Button",
      href: "/",
      target: "_top",
    },
  ],
  tags: [
    { color: "gray", label: "tag1", href: "/#example-link" },
    { color: "gray", label: "tag2", href: "/#example-link" },
    { color: "gray", label: "tag3", href: "/#example-link" },
  ],
  linkUrl: "/#",
  linkLabel: "Link",
};

const renderCard = props => {
  return render(<Card {...{ ...props }} />);
};

describe("#Card", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderCard(defaultArgs);
  });
  afterEach(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });

  const sections = [
    [`Image`, `card-image`],
    [`Title`, `card-title`],
    [`Body`, `card-body`],
    [`Button`, `card-button`],
    [`Link`, `card-link`],
    [`Tags`, `card-tags`],
  ];

  test.each(sections)("should define %p element", (_, testId) =>
    expect(component.queryByTestId(testId)).toBeInTheDocument()
  );
});

describe("#Card options", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;
  /** @type {ChildNode} */
  let element;

  afterEach(cleanup);

  describe("#Clickable card", () => {
    const clickableProps = {
      ...defaultArgs,
      clickable: true,
      clickHref: "/",
    };

    beforeEach(() => {
      component = renderCard(clickableProps);
      element = component.container.firstChild;
    });

    it("should render anchor element", () => {
      expect(component).toBeDefined();
      expect(element.nodeName.toLowerCase()).toBe("a");
    });
  });
  describe("#Icon card", () => {
    const iconProps = {
      ...defaultArgs,
      image: "",
      icon: ["fas", "newspaper"],
    };

    beforeEach(() => {
      component = renderCard(iconProps);
    });

    it("should render icon element", () => {
      expect(component.queryByTestId("card-icon")).toBeInTheDocument();
    });
  });
  const types = [
    [`degree`, `card-degree`],
    [`event`, `card-event`],
    [`story`, `card-story`],
  ];

  test.each(types)("should define %p type of card", (type, className) => {
    const customProps = { ...defaultArgs, type };
    component = renderCard(customProps);
    expect(component.queryByTestId("card-container").className).toContain(
      className
    );
  });
});
