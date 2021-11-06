/* eslint-disable react/jsx-props-no-spreading */
// @ts-check
import * as React from "react";

const mockComponent = jest.fn(props => <>{props?.children}</>);

const CardCarousel = mockComponent;

jest.doMock("@asu-ke/component-carousel", () => ({
  CardCarousel,
}));
