/* eslint-disable react/jsx-props-no-spreading */
// @ts-check
import React from "react";
import { vi } from "vitest"

const mockComponent = vi.fn(props => <>{props?.children}</>);

const Accordion = mockComponent;
const AnchorMenu = mockComponent;
const Button = vi.fn(({ ariaLabel: _, ...props }) => (
  <button type="button" {...props}>
    {props?.label}
  </button>
));
const Card = mockComponent;
const Hero = mockComponent;
const Pagination = mockComponent;
const Video = mockComponent;
const Divider = mockComponent;
const Image = mockComponent;
const List = mockComponent;

// Mock all the components we might need
vi.doMock("@asu/unity-react-core", () => ({
  Accordion,
  AnchorMenu,
  Button,
  Card,
  Hero,
  Pagination,
  Video,
  Divider,
  Image,
  List,
}));
