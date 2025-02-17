/* eslint-disable react/jsx-props-no-spreading */
// @ts-check
import { render, cleanup, act, screen } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach, test, vi } from "vitest";

import { FeedContainerProvider, FeedHeader, FeedBody } from ".";

/** @type {import("../../core/types/feed-types").FeedType} */
const defaultProps = {
  header: {
    color: "dark",
    text: "Knowledge and enterprise news",
  },
  ctaButton: {
    color: "gold",
    text: "More stories and videos",
    url: "https://news.asu.edu",
  },
  dataSource: {
    url: "https://asunow.asu.edu/feeds-json",
  },
};
const dataTransformerMock = vi.fn(item => item);
const dataFilterMock = vi.fn(() => true);
const renderHeaderMock = (
  <FeedHeader
    defaultProps={defaultProps}
    header={defaultProps.header}
    ctaButton={defaultProps.ctaButton}
  />
);
const renderBodyMock = (
  <FeedBody>
    <></>
  </FeedBody>
);

const defaulArgs = {
  defaultProps,
  dataSource: {},
  renderHeader: renderHeaderMock,
  renderBody: renderBodyMock,
  dataTransformer: dataTransformerMock,
  dataFilter: dataFilterMock,
};

describe("#FeedContainerContext", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  const renderFeedContainer = async props => {
    await act(async () => {
      component = await render(<FeedContainerProvider {...{ ...props }} />);
    });
  };

  beforeEach(async () => {
    await renderFeedContainer(defaulArgs);
  });
  afterEach(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });

  const sections = [
    ["Header", "feed-header"],
    // TODO
    // ["Body", "feed-body"],
  ];

  test.each(sections)("should define %p section", (_, testId) => {
    const elem = screen.getByTestId(testId);
    expect(elem).toBeInTheDocument();
  });
});
