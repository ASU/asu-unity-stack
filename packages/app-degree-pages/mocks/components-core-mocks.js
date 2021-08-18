/* eslint-disable react/jsx-props-no-spreading */
// @ts-check
import * as React from "react";

jest.createMockFromModule("@asu-design-system/components-core");

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

export { Accordion, AnchorMenu, Button, Card, Hero, Pagination, Video };
