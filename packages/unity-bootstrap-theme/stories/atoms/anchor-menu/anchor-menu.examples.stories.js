import React from "react";

import { imageName } from "../../../../../shared/assets";
import { htmlRootDecorator } from "../../../../../shared/components/Layout";
import {getLoremSentences} from "../../../../../shared/constants/strings";

export default {
  title: "Atoms/Anchor Menu",
  parameters: {
    initFunc: {
      disable: false,
    },
    header: {
      forced: true,
    },
    controls: { disable: true },
  },
  decorators: [htmlRootDecorator],
};
let loremOffset = 0;
export const AnchorMenu = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="uds-hero-lg has-btn-row">
          <img
            className="hero"
            src={imageName.hero02}
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
            <div className="py-2">
              <p>{getLoremSentences(40, loremOffset++ * 3)}</p>
              <p>{getLoremSentences(30, loremOffset++ * 3)}</p>
              <p>{getLoremSentences(20, loremOffset++ * 3)}</p>
              <p>{getLoremSentences(40, loremOffset++ * 3)}</p>
            </div>
            <div className="py-2">
              <h2  id="first" >     first    </h2>
              <p>First. {getLoremSentences(40, loremOffset++ * 3)}</p>
              <p>First. {getLoremSentences(50, loremOffset++ * 3)}</p>
              <p>First. {getLoremSentences(10, loremOffset++ * 3)}</p>
            </div>
            <div  className="py-2">
              <h2  id="second">     second   </h2>
              <p>Second. {getLoremSentences(20, loremOffset++ * 3)}</p>
              <p>Second. {getLoremSentences(50, loremOffset++ * 3)}</p>
              <p>Second. {getLoremSentences(60, loremOffset++ * 3)}</p>
            </div>
            <div className="py-2">
              <h2  id="third" >     third     </h2>
              <p>Third. {getLoremSentences(20, loremOffset++ * 3)}</p>
              <p>Third. {getLoremSentences(10, loremOffset++ * 3)}</p>
              <p>Third. {getLoremSentences(40, loremOffset++ * 3)}</p>
              <p>Third. {getLoremSentences(10, loremOffset++ * 3)}</p>
            </div>
            <div  className="py-2">
              <h2  id="fourth">     fourth   </h2>
              <p>Fourth. {getLoremSentences(70, loremOffset++ * 3)}</p>
              <p>Fourth. {getLoremSentences(40, loremOffset++ * 3)}</p>
            </div>
            <div className="py-2">
              <h2  id="fifth" >     fifth    </h2>
              <p>Fifth. {getLoremSentences(40, loremOffset++ * 3)}</p>
              <p>Fifth. {getLoremSentences(10, loremOffset++ * 3)}</p>
              <p>Fifth. {getLoremSentences(30, loremOffset++ * 3)}</p>
              <p>Fifth. {getLoremSentences(20, loremOffset++ * 3)}</p>
            </div>
          </div>
          <div className="py-2"></div>
        </div>
      </div>
      <div style={{ height: "1000px" }}></div>
    </>
  );
};
