/* eslint-disable react/jsx-props-no-spreading */
// @ts-check
import { render, cleanup, act } from "@testing-library/react";
import React from "react";

import { FeedContainerProvider, FeedHeader, FeedBody } from ".";

/** @type {import("./feed-types").FeedType} */
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
const dataTransformerMock = jest.fn(item => item);
const dataFilterMock = jest.fn(() => true);
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
    ["Body", "feed-body"],
  ];

  test.each(sections)("should define %p section", (_, testId) =>
    expect(component.queryByTestId(testId)).toBeInTheDocument()
  );
});
