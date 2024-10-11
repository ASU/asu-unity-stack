/* eslint-disable react/jsx-props-no-spreading */
// @ts-check
import { render, cleanup } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach, test, vi } from "vitest";

import { Article } from "./Article";

const defaultArgs = {
  type: "news",
  articleUrl: "https://example.com",
  headerImageUrl: "https://source.unsplash.com/random/1920x512",
  title:
    "Clarisse Machanguana takes her skill set to the next level at ASU Thunderbird",
  publicationDate: "March 18, 2021",
  authorName: "Jimena Garrison",
  authorTitle: "Media Relations and Strategic Communications",
  authorEmail: "jgarris6@asu.edu",
  authorPhone: "480-727-4058",
  breadcrumbs: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Second nav item",
      url: "/events",
    },
    {
      title: "Current page",
      url: "/events/current-article",
      active: true,
    },
  ],
  body: "<p>After 34 years in the game of basketball, Clarisse Machanguana retired. Her eponymous philanthropic foundation remains her only connection to the sport, although the effect of the global game has left imprints in many aspects of her life.</p><p>Playing basketball took her to Portugal and then the U.S., where she attended Old Dominion University in Virginia to study criminal justice. When she realized that sports could be a microcosm of life and values, she decided to create a way to coach sports while teaching life skills in her home country of Mozambique. She started the <a href='http://machanguanafoundation.rf.gd/'>Clarisse Machanguana Foundation</a> in 2014 with the goal of empowering Mozambican youth through health, education and sports programs.</p><p>Now she’s taking her leadership game to the next level at ASU’s Thunderbird School of Global Management, earning her Master of Global Management degree with a nonprofit management concentration. Machanguana is honing her skills as a global professional in and out of the classroom to propel her foundation even further.</p><p>Here she reflects on the experiences that brought her to Thunderbird and ASU.</p><p><strong>Question: Why basketball?</strong></p><p><strong>Answer:</strong> I started at age 6, and because it was popular in my area and I was tall — now 6-feet-5-inches tall, to be exact — people kept telling me I should play. Basketball took me everywhere. I had a scholarship to play in Portugal and the U.S., and later on in Spain, France, Brazil, South Korea and Italy. Basketball became a passport and a school for me, and a source of amazing friendships. I played from age 6 to 40. My foundation now partners with the Department of Education. We collaborate with teachers and teach them to coach life skills and basketball.</p><p>I advocate social causes that are challenging for youth and transform them into opportunities, giving them tools to lift themselves out of the poverty they see. They use the skills like respecting your opponent and perseverance that can be applied in life as well as sports. When you wake up and all you see is poverty, you start to believe that mindset of limitations and scarcity. We give young people something else to believe in, a vision of a better life.</p>",
};

const renderArticle = props => {
  return render(<Article {...{ ...props }} />);
};

describe("#Article", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderArticle(defaultArgs);
  });
  afterEach(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });

  const sections = [
    [`Breadcrumbs`, `breadcrumbs`],
    [`Title`, `title`],
    [`Body`, `body`],
  ];

  it.each(sections)("should define %p section", (_, testId) => {
    const element = component.queryByTestId(testId);
    expect(element).toBeInTheDocument();
  });
});

describe("#News Article", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    const props = { ...defaultArgs };
    component = renderArticle(props);
  });
  afterEach(cleanup);

  it("should render hero", () => {
    expect(component.queryByTestId("uds-hero")).toBeInTheDocument();
  });

  it('should render "AuthorInfo" section', () => {
    expect(component.queryByTestId("author-info")).toBeInTheDocument();
  });
});

describe("#Event Article", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    const props = { ...defaultArgs, type: "event" };
    component = renderArticle(props);
  });
  afterEach(cleanup);

  it("should not render hero", () => {
    expect(component.queryByTestId("uds-hero")).not.toBeInTheDocument();
  });

  it('should render "EventInfo" section', () => {
    expect(component.queryByTestId("event-info")).toBeInTheDocument();
  });
});
