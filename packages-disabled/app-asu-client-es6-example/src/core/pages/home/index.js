// @ts-check
import React from "react";
import styled from "styled-components";

const HomeSection = styled.main``;

const Home = () => {
  const image = {
    url: "",
    altText: "Hero image",
    size: "small",
  };
  const title = {
    text: "Heading with a long title 1",
    highlightColor: "gold",
  };
  const contentsColor = "white";
  const contents = [
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
  ];

  return (
    <HomeSection className="main">
      <div className="row g-0">
        <div id="html-root" className="col uds-full-width">
          <div className="uds-hero-sm has-btn-row">
            <div className="hero-overlay"></div>
            <img
              className="hero"
              src="https://source.unsplash.com/WLUHO9A_xik/2000x1200?a=1"
              alt="Sample placeholder image."
              width="2560"
              height="512"
              loading="lazy"
              decoding="async"
              fetchpriority="high"
            />
            <h1>
              <span className="highlight-white">
                Lorem ipsum dolor sit amet, consectetur adip
              </span>
            </h1>
            <div className="btn-row">
              <a
                href="#"
                className="btn btn-maroon"
                data-ga="Call to action"
                data-ga-name="onclick"
                data-ga-event="link"
                data-ga-action="click"
                data-ga-type="internal link"
                data-ga-region="main content"
                data-ga-secion="the new american university"
              >
                First Call to Action
              </a>
            </div>
          </div>
        </div>
      </div>
    </HomeSection>
  );
};

export {Home};
