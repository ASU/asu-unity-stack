/* eslint-disable react/jsx-props-no-spreading */
// @ts-check
import * as asuCore from "@asu-ke/components-core";
import * as React from "react";

const {
  Accordion: _C1,
  AnchorMenu: _C2,
  Button: _C3,
  Card: _C4,
  Hero: _C5,
  Pagination: _C6,
  Video: _C7,
  ...rest
} = asuCore;

const mockComponent = jest.fn(props => <>{props?.children}</>);

const Accordion = mockComponent;
const AnchorMenu = mockComponent;
const Button = jest.fn(({ ariaLabel: _, ...props }) => (
  <button type="button" {...props}>
    {props?.label}
  </button>
));
const Card = mockComponent;
const Hero = mockComponent;
const Pagination = mockComponent;
const Video = mockComponent;

jest.doMock("@asu-ke/components-core", () => ({
  Accordion,
  AnchorMenu,
  Button,
  Card,
  Hero,
  Pagination,
  Video,
  ...rest,
}));
