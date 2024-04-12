import React from "react";

import { Container, Column, htmlRootDecorator } from "../../../../../shared/components/Layout.js";
export default {
  title: "Design/Alignment",
  decorators: [htmlRootDecorator],
  parameters: { controls: { disable: true } },
};

export const TemporaryStory = () => (
  <Container>
    <Column col="0">
      <div className="bg-gray-4" style={{ height: "300px" }}>&nbsp;</div>
    </Column>
    <Column col="0">
      <div className="bg-gray-2" style={{ height: "300px" }}>&nbsp;</div>
    </Column>
    <Column col="0">
      <div className="bg-gray-4" style={{ height: "300px" }}>&nbsp;</div>
    </Column>
    <Column col="0">
      <div className="bg-gray-2" style={{ height: "300px" }}>&nbsp;</div>
    </Column>
  </Container>
  );
