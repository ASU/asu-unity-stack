import React from "react";

import { imageName } from "../../../../../shared/assets";
import { htmlRootDecorator } from "../../../../../shared/components/Layout";
import { initializeAnchorMenu as initFunc } from "./anchor-menu";


export default {
  title: "Atoms/Anchor Menu",
  parameters: {
    initFunc: {
      disable: false,
      code: initFunc
    },
    header: {
      forced: true,
    },
    controls: { disable: true },
  },
  decorators: [ htmlRootDecorator ],
};


export const AnchorMenu = () => {
return (
    <>
      <div className="container-fluid">
        <div className="uds-hero-lg has-btn-row">
          <img
            className="hero"
            src={ imageName.hero02 }
            alt="Sample placeholder image."
            width="1920"
            height="1000"
            loading="lazy"
            decoding="async"
            fetchpriority="high"
          />
          <h1>
            <span className="highlight-gold">Gettysburg Address</span>
          </h1>
          <div className="content">
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="btn-row">
            <a href="#" className="btn btn-default btn-gold">
              Read the 13th Amendment
            </a>
          </div>
        </div>
        <div
          id="uds-anchor-menu"
          className="uds-anchor-menu uds-anchor-menu-expanded-lg"
        >
          <div className="container">
            <div className="uds-anchor-menu-wrapper">
              <h2
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
                data-ga-name="onclick"
                data-ga-event="collapse"
                data-ga-type="click"
                data-ga="On this page"
              >
                On This Page: <span className="fas fa-chevron-down"></span>
              </h2>
              <div id="collapseExample" className="card card-body collapse">
                <nav className="nav" aria-label="Same Page">
                  <a
                    className="nav-link"
                    href="#first"
                    data-ga-name="onclick"
                    data-ga-event="link"
                    data-ga-action="click"
                    data-ga-type="internal link"
                    data-ga-region="main content"
                    data-ga-section="gettysburg address"
                    data-ga="Anchor item"
                  >
                    <span className="fas fa-link"></span>First item
                  </a>
                  <a
                    className="nav-link"
                    href="#second"
                    data-ga-name="onclick"
                    data-ga-event="link"
                    data-ga-action="click"
                    data-ga-type="internal link"
                    data-ga-region="main content"
                    data-ga-section="gettysburg address"
                    data-ga="Anchor item"
                  >
                    <span className="fas fa-link"></span>Second item
                  </a>
                  <a
                    className="nav-link"
                    href="#third"
                    data-ga-name="onclick"
                    data-ga-event="link"
                    data-ga-action="click"
                    data-ga-type="internal link"
                    data-ga-region="main content"
                    data-ga-section="gettysburg address"
                    data-ga="Anchor item"
                  >
                    <span className="fa fa-link"></span>Third item
                  </a>
                  <a
                    className="nav-link"
                    href="#fourth"
                    data-ga-name="onclick"
                    data-ga-event="link"
                    data-ga-action="click"
                    data-ga-type="internal link"
                    data-ga-region="main content"
                    data-ga-section="gettysburg address"
                    data-ga="Anchor item"
                  >
                    <span className="fa fa-link"></span>Fourth item
                  </a>
                  <a
                    className="nav-link"
                    href="#fifth"
                    data-ga-name="onclick"
                    data-ga-event="link"
                    data-ga-action="click"
                    data-ga-type="internal link"
                    data-ga-region="main content"
                    data-ga-section="gettysburg address"
                    data-ga="Anchor item"
                  >
                    <span className="fa fa-link"></span>Fifth item
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 pb-5">
            <div className="py-2" style={{ minHeight: "80vh"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat neque magna. Suspendisse potenti. Duis
              dictum ac elit at elementum. In sit amet hendrerit lacus.
            </div>
            <div id="first"  className="py-2" style={{ minHeight: "80vh"}}>
              First. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat neque magna. Suspendisse potenti. Duis
              dictum ac elit at elementum. In sit amet hendrerit lacus.
            </div>
            <div id="second" className="py-2" style={{ minHeight: "80vh"}}>
              Second. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat neque magna. Suspendisse potenti. Duis
              dictum ac elit at elementum. In sit amet hendrerit lacus.
            </div>
            <div id="third" className="py-2" style={{ minHeight: "80vh"}}>
              Third. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat neque magna. Suspendisse potenti. Duis
              dictum ac elit at elementum. In sit amet hendrerit lacus.
            </div>
            <div id="fourth" className="py-2" style={{ minHeight: "80vh"}}>
              Fourth. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat neque magna. Suspendisse potenti. Duis
              dictum ac elit at elementum. In sit amet hendrerit lacus.
            </div>
            <div id="fifth" className="py-2" style={{ minHeight: "80vh"}}>
              Fifth. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat neque magna. Suspendisse potenti. Duis
              dictum ac elit at elementum. In sit amet hendrerit lacus.
            </div>
          </div>
          <div className="py-2">

          </div>
        </div>
      </div>
      <div style={{ height: "1000px" }}></div>
    </>
  )
};
