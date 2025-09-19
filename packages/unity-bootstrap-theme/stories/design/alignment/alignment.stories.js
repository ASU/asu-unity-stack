import React from "react";
import { Container, Column, htmlRootDecorator } from "@asu/shared";
export default {
  title: "Design/Alignment",
  decorators: [htmlRootDecorator],
  parameters: { controls: { disable: true } },
};

export const TemporaryStory = () => (
  <Container>
    <Column col="0">
      <div className="bg-light" style={{ height: "300px" }}>
        &nbsp;
      </div>
    </Column>
    <Column col="0">
      <div className="bg-dark" style={{ height: "300px" }}>
        &nbsp;
      </div>
    </Column>
    <Column col="0">
      <div className="bg-light" style={{ height: "300px" }}>
        &nbsp;
      </div>
    </Column>
    <Column col="0">
      <div className="bg-dark" style={{ height: "300px" }}>
        &nbsp;
      </div>
    </Column>
  </Container>
);
