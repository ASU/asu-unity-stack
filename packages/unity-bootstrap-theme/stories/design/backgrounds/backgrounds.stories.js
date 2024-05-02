import React from "react";

import { htmlRootDecorator, Container, Column } from "../../../../../shared/components/Layout.js";
export default {
  title: "Design/Backgrounds",
  decorators: [htmlRootDecorator],
  parameters: { controls: { disable: true } },
};

export const approvedBackgroundColors = () => (
  <Container>
    <Column>
      <h3>
        <span className="highlight-black">Approved Background Colors</span>
      </h3>
    </Column>
    <Column col="6">
      <div className="background-panel gray-7-bg mb-3"></div>
    </Column>
    <Column col="6">
      <div className="background-panel gray-2-bg mb-3"></div>
    </Column>
    <Column col="6">
      <div className="background-panel gray-1-bg mb-3"></div>
    </Column>
    <Column col="6">
      <div className="background-panel white-bg mb-3"></div>
    </Column>
  </Container>
);

export const approvedBackgroundPatterns = () => (
  <Container>
      <Column>
        <h3>
          <span className="highlight-black">Approved Background Patterns</span>
        </h3>
      </Column>

      <Column>
        <h3>Learn to thrive morse code</h3>
      </Column>
      <Column col="6">
        <div className="background-panel bg morse-code-white mb-3"></div>
      </Column>
      <Column col="6">
        <div className="background-panel bg morse-code-black mb-3"></div>
      </Column>

      <Column>
        <h3>Network</h3>
      </Column>
      <Column col="6">
        <div className="background-panel bg network-white mb-3"></div>
      </Column>
      <Column col="6">
        <div className="background-panel bg network-black mb-3"></div>
      </Column>

      <Column>
        <h3>A Mountain topographical map</h3>
      </Column>
      <Column col="6">
        <div className="background-panel bg topo-white mb-3"></div>
      </Column>
      <Column col="6">
        <div className="background-panel bg topo-black mb-3"></div>
      </Column>

      <Column>
        <h3>Semiconductor</h3>
      </Column>
      <Column col="6">
        <div className="background-panel bg semiconductor-light mb-3"></div>
      </Column>
      <Column col="6">
        <div className="background-panel bg semiconductor-dark mb-3"></div>
      </Column>

      <Column>
        <h3>Plus</h3>
      </Column>
      <Column col="6">
        <div className="background-panel bg plus-light mb-3"></div>
      </Column>
      <Column col="6">
        <div className="background-panel bg plus-dark mb-3"></div>
      </Column>

      <Column>
        <h3>Arrows</h3>
      </Column>
      <Column col="6">
        <div className="background-panel bg arrows-light mb-3"></div>
      </Column>
      <Column col="6">
        <div className="background-panel bg arrows-dark mb-3"></div>
      </Column>
  </Container>
);

export const imageBackgrounds = () => (
  <Container>
    <Column>
      <h3>
        <span className="highlight-black">Image Backgrounds</span>
      </h3>
    </Column>
    <Column col="6">
      <div className="background-panel image-bg mb-3"></div>
    </Column>
  </Container>
);

export const backgroundsScaling = () => (
  <div className="container-fluid max-size-container scaling-container">
    <span className="content-description">1920px max width</span>
    <div className="section-line"></div>
    <div className="content-description-container scaling-container">
      <div className="container scaling-container">
        <span className="content-description">1200px margin width</span>
        <div className="section-line"></div>
        <div className="container content-container">Section Content</div>
      </div>
    </div>
  </div>
);

export const PatternDividersAndBackgroundPatterns = () => (
  <div>
    <div className="container p-5">
      <h2>
        <span className="highlight-gold">
          Pattern dividers and background patterns
        </span>
      </h2>
    </div>
    <div
      style={{ height: "250px" }}
      className="container-fluid bg morse-code-white"
    ></div>
    <div
      style={{ height: "250px" }}
      className="container-fluid bg morse-code-black"
    ></div>
    <div
      style={{ height: "250px" }}
      className="container-fluid bg topo-white"
    ></div>
    <div
      style={{ height: "250px" }}
      className="container-fluid bg topo-black"
    ></div>
    <div
      style={{ height: "250px" }}
      className="container-fluid bg network-white"
    ></div>
    <div
      style={{ height: "250px" }}
      className="container-fluid bg network-black"
    ></div>
    <div
      style={{ height: "250px" }}
      className="container-fluid bg semiconductor-light"
    ></div>
    <div
      style={{ height: "250px" }}
      className="container-fluid bg semiconductor-dark"
    ></div>
    <div
      style={{ height: "250px" }}
      className="container-fluid bg plus-light"
    ></div>
    <div
      style={{ height: "250px" }}
      className="container-fluid bg plus-dark"
    ></div>
    <div
      style={{ height: "250px" }}
      className="container-fluid bg arrows-light"
    ></div>
    <div
      style={{ height: "250px" }}
      className="container-fluid bg arrows-dark"
    ></div>
  </div>
);
