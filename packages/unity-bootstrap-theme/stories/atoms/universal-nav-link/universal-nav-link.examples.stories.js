import React from "react";

import { htmlRootDecorator } from "../../../../../shared/components/Layout.js";

export default {
  title: "Atoms/Navigation Link/Examples",
  parameters: {
    header: {
      disable: true,
    },
    footer: {
      disable: true,
    },
    controls: { disable: true },
  },
};

const Template = ({ children }) => <div id="html-root">{children}</div>;

const NavigationLink = () => (
  <>
    <div
      id="header-main"
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Template>
        <nav className="navbar-nav">
          <a className="nav-link" href="#" data-ga-header="Link option 1">
            Link option 1
          </a>
        </nav>
      </Template>
    </div>
  </>
);
const DropdownLink = () => (
  <>
    <div
      id="header-main"
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Template>
        <div className="nav-item dropdown header-dropdown-1">
          <a
            className="nav-link"
            href="#"
            id="dropdown-one-col"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            data-ga-header="Link option 1"
            data-ga-header-event="collapse"
            data-ga-header-type="click"
          >
            Link option 1<span className="fa fa-chevron-down" alt=""></span>
          </a>
          <div
            className="dropdown-menu dropdown-columns"
            aria-labelledby="dropdown-one-col"
          >
            <div className="dropdown-col">
              <a
                className="dropdown-item"
                href="#"
                data-ga-header="massa nunc dictum nan venenatis"
                data-ga-header-component="link option 1"
              >
                Massa nunc dictum nam venenatis
              </a>
              <a
                className="dropdown-item"
                href="#"
                data-ga-header="dis quam quis nisi ligula"
                data-ga-header-component="link option 1"
              >
                Dis quam quis nisi ligula
              </a>
              <a
                className="dropdown-item"
                href="#"
                data-ga-header="dapibus lorem"
                data-ga-header-component="link option 1"
              >
                Dapibus lorem
              </a>
              <a
                className="dropdown-item"
                href="#"
                data-ga-header="nisi ligula eget orci"
                data-ga-header-component="link option 1"
              >
                Nisi ligula eget orci
              </a>
              <a
                href="#"
                className="btn btn-sm btn-dark col-btn"
                data-ga-header="cta action 2"
                data-ga-header-component="link option 2"
              >
                CTA action 2
              </a>
            </div>
          </div>
        </div>
      </Template>
    </div>
  </>
);
export const NavigationLinkExample = NavigationLink.bind({});

export const DropdownLinkExample = DropdownLink.bind({});
