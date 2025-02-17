import React from "react";

import vertlogo from "./arizona-state-university-logo-vertical.png";
import horizlogo from "./arizona-state-university-logo.png";
import starbucksLogo from "./asu-starbucks.png";

export const Basic = () => (
  <>
    <header
      id="asu-header"
      className="fixed-top"
      data-elastic-exclude="data-elastic-exclude"
    >
      <div id="wrapper-header-top">
        <div className="container-xl">
          <div className="row">
            <div id="header-top" className="col-12">
              <nav className="nav" aria-label="ASU Global">
                <a
                  className="nav-link visually-hidden-focusable"
                  href="#skip-to-content"
                >
                  Skip to main content
                </a>
                <a
                  className="nav-link visually-hidden-focusable"
                  href="http://asu.edu/accessibility/feedback?a11yref=unity-design-system"
                >
                  Report an accessibility problem
                </a>
                <a
                  className="nav-link"
                  href="https://asu.edu"
                  data-ga-header-section="topbar"
                  data-ga-header="asu home"
                >
                  ASU Home
                </a>
                <a
                  className="nav-link"
                  href="https://my.asu.edu"
                  data-ga-header-section="topbar"
                  data-ga-header="my asu"
                >
                  My ASU
                </a>
                <a
                  className="nav-link"
                  href="https://www.asu.edu/academics/colleges-schools"
                  data-ga-header-section="topbar"
                  data-ga-header="colleges and schools"
                >
                  Colleges and Schools
                </a>
                <div className="nav-link login-status">
                  <a className="name" href="#">
                    Sparky
                  </a>
                  <a
                    className="signout"
                    href="#"
                    data-ga-header-section="topbar"
                    data-ga-header="sign out"
                  >
                    Sign Out
                  </a>
                </div>
                <form
                  className="form-inline"
                  action="https://search.asu.edu/search"
                  method="get"
                  name="gs"
                >
                  <input
                    className="form-control"
                    type="search"
                    name="q"
                    aria-labelledby="header-top-search"
                    required
                    data-ga-input-header-event="search"
                  />
                  <label id="header-top-search">Search asu.edu</label>
                  <input name="site" value="default_collection" type="hidden" />
                  <input name="sort" value="date:D:L:d1" type="hidden" />
                  <input name="output" value="xml_no_dtd" type="hidden" />
                  <input name="ie" value="UTF-8" type="hidden" />
                  <input name="oe" value="UTF-8" type="hidden" />
                  <input name="client" value="asu_frontend" type="hidden" />
                  <input
                    name="proxystylesheet"
                    value="asu_frontend"
                    type="hidden"
                  />
                </form>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div id="wrapper-header-main">
        <div className="container-xl">
          <div className="row">
            <div id="header-main" className="col-12">
              <div className="navbar navbar-expand-xl">
                <div className="container-fluid">
                <a className="navbar-brand" href="#" data-ga-header="asu logo">
                  <img
                    className="vert"
                    src={vertlogo}
                    alt="Arizona State University"
                    width="303"
                    height="234"
                    decoding="async"
                    fetchpriority="high"
                  />
                  <img
                    className="horiz"
                    src={horizlogo}
                    alt="Arizona State University"
                    width="400"
                    height="72"
                    decoding="async"
                    fetchpriority="high"
                  />
                </a>
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#menubar"
                  aria-controls="menubar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  data-ga-header-event="collapse"
                  data-ga-header-type="click"
                  data-ga-header="menu button label"
                >
                  <span
                    title="Open mobile menu"
                    className="fa fa-bars"
                    alt=""
                  ></span>
                  <span title="Close mobile menu" className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" alt=""></i>
                    <i className="fa fa-times fa-stack-1x" alt=""></i>
                  </span>
                </button>
                <div className="navbar-container">
                  <div
                    className="title subdomain-name"
                    data-ga-header="Subdomain name"
                  >
                    Subdomain name
                  </div>
                  <div
                    className="collapse navbar-collapse w-100 justify-content-between"
                    id="menubar"
                  >
                    <div className="header-content-container">
                      <nav className="navbar-nav" aria-label="Site">
                        <a
                          className="nav-link nav-link-home active"
                          href="/"
                          data-ga-header="home button"
                          title="Subdomain name home page"
                        >
                          <span
                            className="d-xl-none"
                            title="Subdomain name home page"
                          >
                            Home
                          </span>
                          <span
                            title="Subdomain name home page"
                            className="fas fa-fw fa-home"
                            alt=""
                          ></span>
                        </a>
                        <a
                          className="nav-link"
                          href="#"
                          data-ga-header="Link option 1"
                        >
                          Link option 1
                        </a>
                        <a
                          className="nav-link"
                          href="#"
                          data-ga-header="Link option 2"
                        >
                          Link option 2
                        </a>
                        <div className="nav-item dropdown header-dropdown-1">
                          <a
                            className="nav-link"
                            href="#"
                            id="dropdown-one-col"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-ga-header="Link option 3"
                            data-ga-header-event="collapse"
                            data-ga-header-type="click"
                          >
                            Link option 3
                            <span className="fa fa-chevron-down" alt=""></span>
                          </a>
                          <div
                            className="dropdown-menu dropdown-columns"
                            aria-labelledby="dropdown-one-col"
                          >
                            <div className="dropdown-col">
                              <a
                                className="dropdown-item"
                                href="#"
                                data-ga-header="Sublink 1"
                                data-ga-header-component="link option 3"
                              >
                                Sublink 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-ga-header="Sublink 2"
                                data-ga-header-component="link option 3"
                              >
                                Sublink 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-ga-header="Sublink 3"
                                data-ga-header-component="link option 3"
                              >
                                Sublink 3
                              </a>
                            </div>
                          </div>
                        </div>
                      </nav>
                      {/* end .navbar-nav */}
                      <form className="navbar-site-buttons form-inline">
                        <a
                          href="#"
                          className="btn btn-md btn-maroon"
                          data-ga-header="call to action"
                        >
                          Call to action
                        </a>
                      </form>
                    </div>
                    <div className="navbar-mobile-footer pinned">
                      <form
                        className="form-inline navbar-mobile-search"
                        action="https://search.asu.edu/search"
                        method="get"
                        name="gs"
                      >
                        <input
                          className="form-control"
                          type="search"
                          name="q"
                          aria-label="Search"
                          placeholder="Search asu.edu"
                        />
                        <input
                          name="site"
                          value="default_collection"
                          type="hidden"
                        />
                        <input name="sort" value="date:D:L:d1" type="hidden" />
                        <input name="output" value="xml_no_dtd" type="hidden" />
                        <input name="ie" value="UTF-8" type="hidden" />
                        <input name="oe" value="UTF-8" type="hidden" />
                        <input
                          name="client"
                          value="asu_frontend"
                          type="hidden"
                        />
                        <input
                          name="proxystylesheet"
                          value="asu_frontend"
                          type="hidden"
                        />
                      </form>
                      <div className="nav-grid">
                        <a
                          className="nav-link"
                          href="https://asu.edu"
                          data-ga-header-section="topbar"
                          data-ga-header="asu home"
                        >
                          ASU Home
                        </a>
                        <a
                          className="nav-link"
                          href="https://my.asu.edu"
                          data-ga-header-section="topbar"
                          data-ga-header="my asu"
                        >
                          My ASU
                        </a>
                        <a
                          className="nav-link"
                          href="https://www.asu.edu/academics/colleges-schools"
                          data-ga-header-section="topbar"
                          data-ga-header="colleges and schools"
                        >
                          Colleges and Schools
                        </a>
                        <div className="nav-link login-status">
                          Sparky
                          <a
                            className="signout"
                            href="https://webapp4.asu.edu/myasu/Signout"
                            data-ga-header-section="topbar"
                            data-ga-header="sign out"
                          >
                            Sign Out
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="wrapper" id="page-wrapper">
      <div
        id="skip-to-content"
        className="visually-hidden"
        data-elastic-exclude="data-elastic-exclude"
      ></div>
      {/* Page content starts here */}
    </div>
  </>
);

export const DropDownMenus = () => (
  <>
    <header
      id="asu-header"
      className="fixed-top"
      data-elastic-exclude="data-elastic-exclude"
    >
      <div id="wrapper-header-top">
        <div className="container-xl">
          <div className="row">
            <div id="header-top" className="col-12">
              <nav className="nav" aria-label="Asu Global">
                <a
                  className="nav-link visually-hidden-focusable"
                  href="#skip-to-content"
                >
                  Skip to main content
                </a>
                <a
                  className="nav-link visually-hidden-focusable"
                  href="http://asu.edu/accessibility/feedback?a11yref=unity-design-system"
                >
                  Report an accessibility problem
                </a>
                <a
                  className="nav-link"
                  href="https://asu.edu"
                  data-ga-header-section="topbar"
                  data-ga-header="asu home"
                >
                  ASU Home
                </a>
                <a
                  className="nav-link"
                  href="https://my.asu.edu"
                  data-ga-header-section="topbar"
                  data-ga-header="my asu"
                >
                  My ASU
                </a>
                <a
                  className="nav-link"
                  href="https://www.asu.edu/academics/colleges-schools"
                  data-ga-header-section="topbar"
                  data-ga-header="colleges and schools"
                >
                  Colleges and Schools
                </a>
                <div className="nav-link login-status">
                  <a
                    className="signin"
                    href="#"
                    data-ga-header-section="topbar"
                    data-ga-header="sign in"
                  >
                    Sign In
                  </a>
                </div>
                <form
                  className="form-inline"
                  action="https://search.asu.edu/search"
                  method="get"
                  name="gs"
                >
                  <input
                    className="form-control"
                    type="search"
                    name="q"
                    aria-labelledby="header-top-search"
                    required
                    data-ga-input-header-event="search"
                  />
                  <label id="header-top-search">Search asu.edu</label>
                  <input name="site" value="default_collection" type="hidden" />
                  <input name="sort" value="date:D:L:d1" type="hidden" />
                  <input name="output" value="xml_no_dtd" type="hidden" />
                  <input name="ie" value="UTF-8" type="hidden" />
                  <input name="oe" value="UTF-8" type="hidden" />
                  <input name="client" value="asu_frontend" type="hidden" />
                  <input
                    name="proxystylesheet"
                    value="asu_frontend"
                    type="hidden"
                  />
                </form>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div id="wrapper-header-main">
        <div className="container-xl">
          <div className="row">
            <div id="header-main" className="col-12">
              <div className="navbar navbar-expand-xl">
                <div className="container-fluid">
                <a className="navbar-brand" href="#" data-ga-header="asu logo">
                  <img
                    className="vert"
                    src={vertlogo}
                    alt="Arizona State University"
                    width="303"
                    height="234"
                    decoding="async"
                    fetchpriority="high"
                  />
                  <img
                    className="horiz"
                    src={horizlogo}
                    alt="Arizona State University"
                    width="400"
                    height="72"
                    decoding="async"
                    fetchpriority="high"
                  />
                </a>
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#menubar"
                  aria-controls="menubar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  data-ga-header-event="collapse"
                  data-ga-header-type="click"
                  data-ga-header="menu button label"
                >
                  <span
                    title="Open mobile menu"
                    className="fa fa-bars"
                    alt=""
                  ></span>
                  <span title="Close mobile menu" className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" alt=""></i>
                    <i className="fa fa-times fa-stack-1x" alt=""></i>
                  </span>
                </button>
                <div className="navbar-container">
                  <div className="title">
                    <a
                      href="#"
                      className="unit-name"
                      data-ga-header="Parent unit name"
                      title="Parent unit name home page"
                    >
                      Parent unit name
                    </a>
                    <span
                      className="subdomain-name"
                      data-ga-header="Subdomain name"
                    >
                      Subdomain name
                    </span>
                  </div>
                  <div className="collapse navbar-collapse w-100" id="menubar">
                    <div className="header-content-container">
                      <nav className="navbar-nav" aria-label="Site">
                        <a
                          className="nav-link nav-link-home"
                          href="/"
                          data-ga-header="home button"
                          title="Subdomain name home page"
                        >
                          <span
                            className="d-xl-none"
                            title="Subdomain name home page"
                          >
                            Home
                          </span>
                          <span
                            title="Subdomain name home page"
                            className="fas fa-fw fa-home"
                            alt=""
                          ></span>
                        </a>
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
                            Link option 1
                            <span className="fa fa-chevron-down" alt=""></span>
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
                        <div className="nav-item dropdown header-dropdown-2">
                          <a
                            className="nav-link"
                            href="#"
                            id="dropdown-two-col"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-ga-header="Link option 2"
                            data-ga-header-event="collapse"
                            data-ga-header-type="click"
                          >
                            Link option 2
                            <span className="fa fa-chevron-down" alt=""></span>
                          </a>
                          <div
                            className="dropdown-menu dropdown-columns"
                            aria-labelledby="dropdown-two-col"
                          >
                            <div className="dropdown-col">
                              <h3>Column One</h3>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-ga-header="dis quam quis nisi ligula"
                                data-ga-header-component="link option 2"
                              >
                                Dis quam quis nisi ligula
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-ga-header="nisi ligula eget orci"
                                data-ga-header-component="link option 2"
                              >
                                Nisi ligula eget orci
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-ga-header="massa nunc dictum nam venenatis"
                                data-ga-header-component="link option 2"
                              >
                                Massa nunc dictum nam venenatis
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-ga-header="dapibus lorem"
                                data-ga-header-component="link option 2"
                              >
                                Dapibus lorem
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-ga-header="ultricies tellus eu"
                                data-ga-header-component="link option 2"
                              >
                                Ultricies tellus eu
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-ga-header="pretium massa quis vitae pede quisque nulla
                              ultricies sit"
                                data-ga-header-component="link option 2"
                              >
                                Pretium massa quis vitae pede quisque nulla
                                ultricies sit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-ga-header="quis tempus aliquam semper imperdiet"
                                data-ga-header-component="link option 2"
                              >
                                Quis tempus aliquam semper imperdiet
                              </a>
                            </div>
                            <div className="dropdown-col">
                              <h3>Brady Header</h3>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-ga-header="here's the story"
                                data-ga-header-component="link option 2"
                              >
                                Here's the story
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-ga-header="of a man named Brady"
                                data-ga-header-component="link option 2"
                              >
                                Of a man named Brady
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-ga-header="who was busy with three"
                                data-ga-header-component="link option 2"
                              >
                                Who was busy with three
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-ga-header="boys of his own"
                                data-ga-header-component="link option 2"
                              >
                                Boys of his own
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="nav-item dropdown megamenu header-dropdown-3">
                          <a
                            className="nav-link"
                            href="#"
                            id="megamenu-three-col"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-ga-header="Link option 3"
                            data-ga-header-event="collapse"
                            data-ga-header-type="click"
                          >
                            Link option 3
                            <span className="fa fa-chevron-down" alt=""></span>
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="megamenu-three-col"
                          >
                            <div className="container">
                              <div className="row">
                                <div className="col-lg">
                                  <h3>Column one</h3>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="recommended max of ten links"
                                    data-ga-header-component="link option 3"
                                  >
                                    Recommended max of ten links
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="second link in the list"
                                    data-ga-header-component="link option 3"
                                  >
                                    Second link in the list
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="here is link number three"
                                    data-ga-header-component="link option 3"
                                  >
                                    Here is link number three
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="dapibus lorem"
                                    data-ga-header-component="link option 3"
                                  >
                                    Dapibus lorem
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="ultricies tellus eu"
                                    data-ga-header-component="link option 3"
                                  >
                                    Ultricies tellus eu
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="quis tempus aliquam semper imperdiet"
                                    data-ga-header-component="link option 3"
                                  >
                                    Quis tempus aliquam semper imperdiet
                                  </a>
                                </div>
                                <div className="col-lg">
                                  <h3>Column two</h3>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="dis quam quis nisi ligula"
                                    data-ga-header-component="link option 3"
                                  >
                                    Dis quam quis nisi ligula
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="nisi ligula eget orci"
                                    data-ga-header-component="link option 3"
                                  >
                                    Nisi ligula eget orci
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="massa nunc dictum nam venenatis"
                                    data-ga-header-component="link option 3"
                                  >
                                    Massa nunc dictum nam venenatis
                                  </a>
                                </div>
                                <div className="col-lg-4">
                                  <h3>Last call 'em</h3>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="navigation link"
                                    data-ga-header-component="link option 3"
                                  >
                                    Navigation link
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="another link as an example of when something
                                  wraps"
                                    data-ga-header-component="link option 3"
                                  >
                                    Another link as an example of when something
                                    wraps
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="culture of inclusion"
                                    data-ga-header-component="link option 3"
                                  >
                                    Culture of inclusion
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="public research university"
                                    data-ga-header-component="link option 3"
                                  >
                                    Public research university
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="nav-item dropdown megamenu header-dropdown-4">
                          <a
                            className="nav-link"
                            href="#"
                            id="megamenu-four-col"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-ga-header="Link option 4"
                            data-ga-header-event="collapse"
                            data-ga-header-type="click"
                          >
                            Link option 4
                            <span className="fa fa-chevron-down" alt=""></span>
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="megamenu-four-col"
                          >
                            <div className="container">
                              <div className="row">
                                <div className="col-lg">
                                  <h3>Column one</h3>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="navigation link"
                                    data-ga-header-component="link option 4"
                                  >
                                    Navigation link
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="second link in the list"
                                    data-ga-header-component="link option 4"
                                  >
                                    Second link in the list
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="here is link number three"
                                    data-ga-header-component="link option 4"
                                  >
                                    Here is link number three
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="dapibus lorem"
                                    data-ga-header-component="link option 4"
                                  >
                                    Dapibus lorem
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="ultricies tellus eu"
                                    data-ga-header-component="link option 4"
                                  >
                                    Ultricies tellus eu
                                  </a>
                                </div>
                                <div className="col-lg">
                                  <h3>Column two</h3>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="nisi eget orci"
                                    data-ga-header-component="link option 4"
                                  >
                                    Nisi eget orci
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="dis quam quis nisi ligula"
                                    data-ga-header-component="link option 4"
                                  >
                                    Dis quam quis nisi ligula
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="massa nunc venenatis"
                                    data-ga-header-component="link option 4"
                                  >
                                    Massa nunc venenatis
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="pede quisque nulla ultricies sit"
                                    data-ga-header-component="link option 4"
                                  >
                                    Pede quisque nulla ultricies sit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="dapibus lorem"
                                    data-ga-header-component="link option 4"
                                  >
                                    Dapibus lorem
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="ultricies tellus eu"
                                    data-ga-header-component="link option 4"
                                  >
                                    Ultricies tellus eu
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="quis tempus aliquam semper imperdiet"
                                    data-ga-header-component="link option 4"
                                  >
                                    Quis tempus aliquam semper imperdiet
                                  </a>
                                </div>
                                <div className="col-lg">
                                  <h3>Column three</h3>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="dis quam quis nisi ligula"
                                    data-ga-header-component="link option 4"
                                  >
                                    Dis quam quis nisi ligula
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="nisi ligula eget orci"
                                    data-ga-header-component="link option 4"
                                  >
                                    Nisi ligula eget orci
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="massa nunc dictum nam venenatis"
                                    data-ga-header-component="link option 4"
                                  >
                                    Massa nunc dictum nam venenatis
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="dapibus lorem"
                                    data-ga-header-component="link option 4"
                                  >
                                    Dapibus lorem
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="ultricies tellus eu"
                                    data-ga-header-component="link option 4"
                                  >
                                    Ultricies tellus eu
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="pretium massa quis vitae pede quisque nulla
                                  ultricies sit"
                                    data-ga-header-component="link option 4"
                                  >
                                    Pretium massa quis vitae pede quisque nulla
                                    ultricies sit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="semper imperdiet"
                                    data-ga-header-component="link option 4"
                                  >
                                    Semper imperdiet
                                  </a>
                                </div>
                                <div className="col-lg">
                                  <h3>Column four</h3>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="dis quam quis nisi ligula"
                                    data-ga-header-component="link option 4"
                                  >
                                    Dis quam quis nisi ligula
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="nisi ligula eget orci"
                                    data-ga-header-component="link option 4"
                                  >
                                    Nisi ligula eget orci
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="dapibus lorem"
                                    data-ga-header-component="link option 4"
                                  >
                                    Dapibus lorem
                                  </a>
                                </div>
                              </div>
                              <div className="row with-buttons">
                                <div className="col-lg-12">
                                  <a
                                    href="#"
                                    className="btn btn-sm btn-gold"
                                    data-ga-header="mega menu cta 1"
                                    data-ga-header-component="link option 34"
                                  >
                                    Mega menu CTA 1
                                  </a>
                                  <a
                                    href="#"
                                    className="btn btn-sm btn-maroon"
                                    data-ga-header="mega menu cta 2"
                                    data-ga-header-component="link option 4"
                                  >
                                    Mega menu CTA 2
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="nav-item dropdown megamenu header-dropdown-5">
                          <a
                            className="nav-link"
                            href="#"
                            id="megamenu-five-col"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-ga-header="Link option 5"
                            data-ga-header-event="collapse"
                            data-ga-header-type="click"
                          >
                            Link option 5
                            <span className="fa fa-chevron-down" alt=""></span>
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="megamenu-five-col"
                          >
                            <div className="container">
                              <div className="row">
                                <div className="col-lg">
                                  <h3>Column One</h3>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="navigation link"
                                    data-ga-header-component="link option 5"
                                  >
                                    Navigation link
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="second link in the list"
                                    data-ga-header-component="link option 5"
                                  >
                                    Second link in the list
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="here is link number three"
                                    data-ga-header-component="link option 5"
                                  >
                                    Here is link number three
                                  </a>
                                  <div className="btns-row">
                                    <a
                                      href="#"
                                      className="btn btn-sm btn-dark col-btn"
                                      data-ga-header="cta in column"
                                      data-ga-header-component="link option 5"
                                    >
                                      CTA in column
                                    </a>
                                    <a
                                      href="#"
                                      className="btn btn-sm btn-dark col-btn"
                                      data-ga-header="cta in column"
                                      data-ga-header-component="link option 5"
                                    >
                                      CTA in column
                                    </a>
                                  </div>
                                </div>
                                <div className="col-lg">
                                  <h3>Column Two</h3>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="pretium massa quis vitae pede quisque nulla
                                  ultricies sit"
                                    data-ga-header-component="link option 5"
                                  >
                                    Pretium massa quis vitae pede quisque nulla
                                    ultricies sit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="quis tempus aliquam semper imperdiet"
                                    data-ga-header-component="link option 5"
                                  >
                                    Quis tempus aliquam semper imperdiet
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="pretium massa quis vitae pede quisque nulla
                                  ultricies sit"
                                    data-ga-header-component="link option 5"
                                  >
                                    Pretium massa quis vitae pede quisque nulla
                                    ultricies sit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="quis tempus aliquam semper imperdiet"
                                    data-ga-header-component="link option 5"
                                  >
                                    Quis tempus aliquam semper imperdiet
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="nisi ligula eget orci"
                                    data-ga-header-component="link option 5"
                                  >
                                    Nisi ligula eget orci
                                  </a>
                                </div>
                                <div className="col-lg">
                                  <h3>Column Three</h3>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="pretium massa quis vitae pede quisque nulla
                                  ultricies sit"
                                    data-ga-header-component="link option 5"
                                  >
                                    Pretium massa quis vitae pede quisque nulla
                                    ultricies sit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="quis tempus aliquam semper imperdiet"
                                    data-ga-header-component="link option 5"
                                  >
                                    Quis tempus aliquam semper imperdiet
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="pretium massa quis vitae pede quisque nulla
                                  ultricies sit"
                                    data-ga-header-component="link option 5"
                                  >
                                    Pretium massa quis vitae pede quisque nulla
                                    ultricies sit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="quis tempus aliquam semper imperdiet"
                                    data-ga-header-component="link option 5"
                                  >
                                    Quis tempus aliquam semper imperdiet
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="nisi ligula eget orci"
                                    data-ga-header-component="link option 5"
                                  >
                                    Nisi ligula eget orci
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="dapibus lorem"
                                    data-ga-header-component="link option 5"
                                  >
                                    Dapibus lorem
                                  </a>
                                  <a
                                    href="#"
                                    className="btn btn-sm btn-dark col-btn"
                                    data-ga-header="cta in column"
                                    data-ga-header-component="link option 5"
                                  >
                                    CTA in Column
                                  </a>
                                </div>
                                <div className="col-lg">
                                  <h3>Column Four</h3>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="dis quam quis nisi ligula"
                                    data-ga-header-component="link option 5"
                                  >
                                    Dis quam quis nisi ligula
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="nisi ligula eget orci"
                                    data-ga-header-component="link option 5"
                                  >
                                    Nisi ligula eget orci
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="dapibus lorem"
                                    data-ga-header-component="link option 5"
                                  >
                                    Dapibus lorem
                                  </a>
                                  <a
                                    href="#"
                                    className="btn btn-sm btn-dark col-btn"
                                    data-ga-header="cta in column"
                                    data-ga-header-component="link option 5"
                                  >
                                    CTA in Column
                                  </a>
                                </div>
                                <div className="col-lg">
                                  <h3>Mambo #5</h3>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="jump up and down and"
                                    data-ga-header-component="link option 5"
                                  >
                                    Jump up and down and
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="shake your head to the sound"
                                    data-ga-header-component="link option 5"
                                  >
                                    Shake your head to the sound
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="put your hand on the ground"
                                    data-ga-header-component="link option 5"
                                  >
                                    Put your hand on the ground
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="take one step left and one step right"
                                    data-ga-header-component="link option 5"
                                  >
                                    Take one step left and one step right
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="if it looks like this"
                                    data-ga-header-component="link option 5"
                                  >
                                    If it looks like this
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-ga-header="then you doing it right"
                                    data-ga-header-component="link option 5"
                                  >
                                    Then you doing it right
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </nav>
                      {/* end .navbar-nav */}
                    </div>
                    <div className="navbar-mobile-footer pinned">
                      <form
                        className="form-inline navbar-mobile-search"
                        action="https://search.asu.edu/search"
                        method="get"
                        name="gs"
                      >
                        <input
                          className="form-control"
                          type="search"
                          name="q"
                          aria-label="Search asu.edu"
                          placeholder="Search asu.edu"
                        />
                        <input
                          name="site"
                          value="default_collection"
                          type="hidden"
                        />
                        <input name="sort" value="date:D:L:d1" type="hidden" />
                        <input name="output" value="xml_no_dtd" type="hidden" />
                        <input name="ie" value="UTF-8" type="hidden" />
                        <input name="oe" value="UTF-8" type="hidden" />
                        <input
                          name="client"
                          value="asu_frontend"
                          type="hidden"
                        />
                        <input
                          name="proxystylesheet"
                          value="asu_frontend"
                          type="hidden"
                        />
                      </form>
                      <div className="nav-grid">
                        <a
                          className="nav-link"
                          href="https://asu.edu"
                          data-ga-header-section="topbar"
                          data-ga-header="asu home"
                        >
                          ASU Home
                        </a>
                        <a
                          className="nav-link"
                          href="https://my.asu.edu"
                          data-ga-header-section="topbar"
                          data-ga-header="my asu"
                        >
                          My ASU
                        </a>
                        <a
                          className="nav-link"
                          href="https://www.asu.edu/academics/colleges-schools"
                          data-ga-header-section="topbar"
                          data-ga-header="colleges and schools"
                        >
                          Colleges and Schools
                        </a>
                        <a
                          className="nav-link"
                          href="https://weblogin.asu.edu/cgi-bin/login"
                          data-ga-header-section="topbar"
                          data-ga-header="sign in"
                        >
                          Sign In
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="wrapper" id="page-wrapper">
      <div id="skip-to-content" className="visually-hidden"></div>
      {/* Page content starts here */}
    </div>
  </>
);

export const NoNavigation = () => (
  <>
    <header
      id="asu-header"
      className="fixed-top"
      data-elastic-exclude="data-elastic-exclude"
    >
      <div id="wrapper-header-top">
        <div className="container-xl">
          <div className="row">
            <div id="header-top" className="col-12">
              <nav className="nav" aria-label="Asu Global">
                <a
                  className="nav-link visually-hidden-focusable"
                  href="#skip-to-content"
                >
                  Skip to main content
                </a>
                <a
                  className="nav-link visually-hidden-focusable"
                  href="http://asu.edu/accessibility/feedback?a11yref=unity-design-system"
                >
                  Report an accessibility problem
                </a>
                <a
                  className="nav-link"
                  href="https://asu.edu"
                  data-ga-header-section="topbar"
                  data-ga-header="asu home"
                >
                  ASU Home
                </a>
                <a
                  className="nav-link"
                  href="https://my.asu.edu"
                  data-ga-header-section="topbar"
                  data-ga-header="my asu"
                >
                  My ASU
                </a>
                <a
                  className="nav-link"
                  href="https://www.asu.edu/academics/colleges-schools"
                  data-ga-header-section="topbar"
                  data-ga-header="colleges and schools"
                >
                  Colleges and Schools
                </a>
                <div className="nav-link login-status">
                  <a className="name" href="#">
                    Sparky
                  </a>
                  <a
                    className="signout"
                    href="#"
                    data-ga-header-section="topbar"
                    data-ga-header="sign out"
                  >
                    Sign Out
                  </a>
                </div>
                <form
                  className="form-inline"
                  action="https://search.asu.edu/search"
                  method="get"
                  name="gs"
                >
                  <input
                    className="form-control"
                    type="search"
                    name="q"
                    aria-labelledby="header-top-search"
                    required
                    data-ga-input-header-event="search"
                  />
                  <label id="header-top-search">Search asu.edu</label>
                  <input name="site" value="default_collection" type="hidden" />
                  <input name="sort" value="date:D:L:d1" type="hidden" />
                  <input name="output" value="xml_no_dtd" type="hidden" />
                  <input name="ie" value="UTF-8" type="hidden" />
                  <input name="oe" value="UTF-8" type="hidden" />
                  <input name="client" value="asu_frontend" type="hidden" />
                  <input
                    name="proxystylesheet"
                    value="asu_frontend"
                    type="hidden"
                  />
                </form>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div id="wrapper-header-main">
        <div className="container-xl">
          <div className="row">
            <div id="header-main" className="col-12">
              <div className="navbar navbar-expand-xl">
                <div className="container-fluid">
                <a className="navbar-brand" href="#" data-ga-header="asu logo">
                  <img
                    className="vert"
                    src={vertlogo}
                    alt="Arizona State University"
                    width="303"
                    height="234"
                    decoding="async"
                    fetchpriority="high"
                  />
                  <img
                    className="horiz"
                    src={horizlogo}
                    alt="Arizona State University"
                    width="400"
                    height="72"
                    decoding="async"
                    fetchpriority="high"
                  />
                </a>
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#menubar"
                  aria-controls="menubar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  data-ga-header-event="collapse"
                  data-ga-header-type="click"
                  data-ga-header="menu button label"
                >
                  <span
                    title="Open mobile menu"
                    className="fa fa-bars"
                    alt=""
                  ></span>
                  <span title="Close mobile menu" className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" alt=""></i>
                    <i className="fa fa-times fa-stack-1x" alt=""></i>
                  </span>
                </button>
                <div className="navbar-container no-links">
                  <div className="title subdomain-name">
                    <a
                      href="#"
                      data-ga-header="Subdomain name"
                      title="Subdomain name home page"
                    >
                      Subdomain name
                    </a>
                  </div>
                  <div
                    className="collapse navbar-collapse w-100 justify-content-between"
                    id="menubar"
                  >
                    <div className="navbar-mobile-footer pinned">
                      <form
                        className="form-inline navbar-mobile-search"
                        action="https://search.asu.edu/search"
                        method="get"
                        name="gs"
                      >
                        <input
                          className="form-control"
                          type="search"
                          name="q"
                          aria-label="Search"
                          placeholder="Search asu.edu"
                        />
                        <input
                          name="site"
                          value="default_collection"
                          type="hidden"
                        />
                        <input name="sort" value="date:D:L:d1" type="hidden" />
                        <input name="output" value="xml_no_dtd" type="hidden" />
                        <input name="ie" value="UTF-8" type="hidden" />
                        <input name="oe" value="UTF-8" type="hidden" />
                        <input
                          name="client"
                          value="asu_frontend"
                          type="hidden"
                        />
                        <input
                          name="proxystylesheet"
                          value="asu_frontend"
                          type="hidden"
                        />
                      </form>
                      <div className="nav-grid">
                        <a
                          className="nav-link"
                          href="https://asu.edu"
                          data-ga-header-section="topbar"
                          data-ga-header="asu home"
                        >
                          ASU Home
                        </a>
                        <a
                          className="nav-link"
                          href="https://my.asu.edu"
                          data-ga-header-section="topbar"
                          data-ga-header="my asu"
                        >
                          My ASU
                        </a>
                        <a
                          className="nav-link"
                          href="https://www.asu.edu/academics/colleges-schools"
                          data-ga-header-section="topbar"
                          data-ga-header="colleges and schools"
                        >
                          Colleges and Schools
                        </a>
                        <a
                          className="nav-link"
                          href="https://weblogin.asu.edu/cgi-bin/login"
                          data-ga-header-section="topbar"
                          data-ga-header="sign in"
                        >
                          Sign In
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="wrapper" id="page-wrapper">
      <div id="skip-to-content" className="visually-hidden"></div>
      {/* Page content starts here */}
    </div>
  </>
);

export const NoNavigationAndWithButtons = () => (
  <>
    <header
      id="asu-header"
      className="fixed-top"
      data-elastic-exclude="data-elastic-exclude"
    >
      <div id="wrapper-header-top">
        <div className="container-xl">
          <div className="row">
            <div id="header-top" className="col-12">
              <nav className="nav" aria-label="Asu Global">
                <a
                  className="nav-link visually-hidden-focusable"
                  href="#skip-to-content"
                >
                  Skip to main content
                </a>
                <a
                  className="nav-link visually-hidden-focusable"
                  href="http://asu.edu/accessibility/feedback?a11yref=unity-design-system"
                >
                  Report an accessibility problem
                </a>
                <a
                  className="nav-link"
                  href="https://asu.edu"
                  data-ga-header-section="topbar"
                  data-ga-header="asu home"
                >
                  ASU Home
                </a>
                <a
                  className="nav-link"
                  href="https://my.asu.edu"
                  data-ga-header-section="topbar"
                  data-ga-header="my asu"
                >
                  My ASU
                </a>
                <a
                  className="nav-link"
                  href="https://www.asu.edu/academics/colleges-schools"
                  data-ga-header-section="topbar"
                  data-ga-header="colleges and schools"
                >
                  Colleges and Schools
                </a>
                <div className="nav-link login-status">
                  <a
                    className="signin"
                    href="#"
                    data-ga-header-section="topbar"
                    data-ga-header="sign in"
                  >
                    Sign In
                  </a>
                </div>
                <form
                  className="form-inline"
                  action="https://search.asu.edu/search"
                  method="get"
                  name="gs"
                >
                  <input
                    className="form-control"
                    type="search"
                    name="q"
                    aria-labelledby="header-top-search"
                    required
                    data-ga-input-header-event="search"
                  />
                  <label id="header-top-search">Search asu.edu</label>
                  <input name="site" value="default_collection" type="hidden" />
                  <input name="sort" value="date:D:L:d1" type="hidden" />
                  <input name="output" value="xml_no_dtd" type="hidden" />
                  <input name="ie" value="UTF-8" type="hidden" />
                  <input name="oe" value="UTF-8" type="hidden" />
                  <input name="client" value="asu_frontend" type="hidden" />
                  <input
                    name="proxystylesheet"
                    value="asu_frontend"
                    type="hidden"
                  />
                </form>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div id="wrapper-header-main">
        <div className="container-xl">
          <div className="row">
            <div id="header-main" className="col-12">
              <div className="navbar navbar-expand-xl">
                <div className="container-fluid">
                <a className="navbar-brand" href="#" data-ga-header="asu logo">
                  <img
                    className="vert"
                    src={vertlogo}
                    alt="Arizona State University"
                    width="303"
                    height="234"
                    decoding="async"
                    fetchpriority="high"
                  />
                  <img
                    className="horiz"
                    src={horizlogo}
                    alt="Arizona State University"
                    width="400"
                    height="72"
                    decoding="async"
                    fetchpriority="high"
                  />
                </a>
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#menubar"
                  aria-controls="menubar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  data-ga-header-event="collapse"
                  data-ga-header-type="click"
                  data-ga-header="menu button label"
                >
                  <span
                    title="Open mobile menu"
                    className="fa fa-bars"
                    alt=""
                  ></span>
                  <span title="Close mobile menu" className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" alt=""></i>
                    <i className="fa fa-times fa-stack-1x" alt=""></i>
                  </span>
                </button>
                <div className="navbar-container no-links">
                  <div className="title subdomain-name">
                    <a
                      href="#"
                      data-ga-header="Subdomain name"
                      title="Subdomain name home page"
                    >
                      Subdomain name
                    </a>
                  </div>
                  <div
                    className="collapse navbar-collapse w-100 justify-content-between"
                    id="menubar"
                  >
                    <div className="header-content-container">
                      <form className="navbar-site-buttons form-inline">
                        <a
                          href="#"
                          className="btn btn-md btn-maroon"
                          data-ga-header="cta button 1"
                        >
                          CTA button 1
                        </a>
                        <a
                          href="#"
                          className="btn btn-md btn-dark"
                          data-ga-header="cta button 2"
                        >
                          CTA button 2
                        </a>
                      </form>
                    </div>
                    <div className="navbar-mobile-footer pinned">
                      <form
                        className="form-inline navbar-mobile-search"
                        action="https://search.asu.edu/search"
                        method="get"
                        name="gs"
                      >
                        <input
                          className="form-control"
                          type="search"
                          name="q"
                          aria-label="Search"
                          placeholder="Search asu.edu"
                        />
                        <input
                          name="site"
                          value="default_collection"
                          type="hidden"
                        />
                        <input name="sort" value="date:D:L:d1" type="hidden" />
                        <input name="output" value="xml_no_dtd" type="hidden" />
                        <input name="ie" value="UTF-8" type="hidden" />
                        <input name="oe" value="UTF-8" type="hidden" />
                        <input
                          name="client"
                          value="asu_frontend"
                          type="hidden"
                        />
                        <input
                          name="proxystylesheet"
                          value="asu_frontend"
                          type="hidden"
                        />
                      </form>
                      <div className="nav-grid">
                        <a
                          className="nav-link"
                          href="https://asu.edu"
                          data-ga-header-section="topbar"
                          data-ga-header="asu home"
                        >
                          ASU Home
                        </a>
                        <a
                          className="nav-link"
                          href="https://my.asu.edu"
                          data-ga-header-section="topbar"
                          data-ga-header="my asu"
                        >
                          My ASU
                        </a>
                        <a
                          className="nav-link"
                          href="https://www.asu.edu/academics/colleges-schools"
                          data-ga-header-section="topbar"
                          data-ga-header="colleges and schools"
                        >
                          Colleges and Schools
                        </a>
                        <a
                          className="nav-link"
                          href="https://weblogin.asu.edu/cgi-bin/login"
                          data-ga-header-section="topbar"
                          data-ga-header="sign in"
                        >
                          Sign In
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="wrapper" id="page-wrapper">
      <div id="skip-to-content" className="visually-hidden"></div>
      {/* Page content starts here */}
    </div>
  </>
);

export const ScrolledState = () => (
  <>
    <header
      id="asu-header"
      className="fixed-top"
      data-elastic-exclude="data-elastic-exclude"
    >
      <div id="wrapper-header-top">
        <div className="container-xl">
          <div className="row">
            <div id="header-top" className="col-12">
              <nav className="nav" aria-label="Asu Global">
                <a
                  className="nav-link visually-hidden-focusable"
                  href="#skip-to-content"
                >
                  Skip to main content
                </a>
                <a
                  className="nav-link visually-hidden-focusable"
                  href="http://asu.edu/accessibility/feedback?a11yref=unity-design-system"
                >
                  Report an accessibility problem
                </a>
                <a
                  className="nav-link"
                  href="https://asu.edu"
                  data-ga-header-section="topbar"
                  data-ga-header="asu home"
                >
                  ASU Home
                </a>
                <a
                  className="nav-link"
                  href="https://my.asu.edu"
                  data-ga-header-section="topbar"
                  data-ga-header="my asu"
                >
                  My ASU
                </a>
                <a
                  className="nav-link"
                  href="https://www.asu.edu/academics/colleges-schools"
                  data-ga-header-section="topbar"
                  data-ga-header="colleges and schools"
                >
                  Colleges and Schools
                </a>
                <div className="nav-link login-status">
                  <a className="name" href="#">
                    Sparky
                  </a>
                  <a
                    className="signout"
                    href="#"
                    data-ga-header-section="topbar"
                    data-ga-header="sign out"
                  >
                    Sign Out
                  </a>
                </div>
                <form
                  className="form-inline"
                  action="https://search.asu.edu/search"
                  method="get"
                  name="gs"
                >
                  <input
                    className="form-control"
                    type="search"
                    name="q"
                    aria-labelledby="header-top-search"
                    required
                    data-ga-input-header-event="search"
                  />
                  <label id="header-top-search">Search asu.edu</label>
                  <input name="site" value="default_collection" type="hidden" />
                  <input name="sort" value="date:D:L:d1" type="hidden" />
                  <input name="output" value="xml_no_dtd" type="hidden" />
                  <input name="ie" value="UTF-8" type="hidden" />
                  <input name="oe" value="UTF-8" type="hidden" />
                  <input name="client" value="asu_frontend" type="hidden" />
                  <input
                    name="proxystylesheet"
                    value="asu_frontend"
                    type="hidden"
                  />
                </form>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div id="wrapper-header-main">
        <div className="container-xl">
          <div className="row">
            <div id="header-main" className="col-12">
              <div className="navbar navbar-expand-xl">
                <div className="container-fluid">
                <a className="navbar-brand" href="#" asu-ga="asu logo">
                  <img
                    className="vert"
                    src={vertlogo}
                    alt="Arizona State University"
                    width="303"
                    height="234"
                    decoding="async"
                    fetchpriority="high"
                  />
                  <img
                    className="horiz"
                    src={horizlogo}
                    alt="Arizona State University"
                    width="400"
                    height="72"
                    decoding="async"
                    fetchpriority="high"
                  />
                </a>
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#menubar"
                  aria-controls="menubar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  data-ga-header-event="collapse"
                  data-ga-header-type="click"
                  data-ga-header="menu button label"
                >
                  <span
                    title="Open mobile menu"
                    className="fa fa-bars"
                    alt=""
                  ></span>
                  <span title="Close mobile menu" className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" alt=""></i>
                    <i className="fa fa-times fa-stack-1x" alt=""></i>
                  </span>
                </button>
                <div className="navbar-container">
                  <div
                    className="title subdomain-name"
                    data-ga-header="Subdomain name"
                  >
                    Subdomain name
                  </div>
                  <div
                    className="collapse navbar-collapse w-100 justify-content-between"
                    id="menubar"
                  >
                    <div className="header-content-container">
                      <nav className="navbar-nav" aria-label="Site">
                        <a
                          className="nav-link nav-link-home active"
                          href="/"
                          data-ga-header="home button"
                          title="Subdomain name home page"
                        >
                          <span
                            className="d-xl-none"
                            title="Subdomain name home page"
                          >
                            Home
                          </span>
                          <span
                            title="Subdomain name home page"
                            className="fas fa-fw fa-home"
                            alt=""
                          ></span>
                        </a>
                        <a
                          className="nav-link"
                          href="#"
                          data-ga-header="Link option 1"
                        >
                          Link option 1
                        </a>
                        <a
                          className="nav-link"
                          href="#"
                          data-ga-header="Link option 2"
                        >
                          Link option 2
                        </a>
                        <a
                          className="nav-link"
                          href="#"
                          data-ga-header="Link option 3"
                        >
                          Link option 3
                        </a>
                        <a
                          className="nav-link"
                          href="#"
                          data-ga-header="Link option 4"
                        >
                          Link option 4
                        </a>
                        <a
                          className="nav-link"
                          href="#"
                          data-ga-header="Link option 5"
                        >
                          Link option 5
                        </a>
                        <div className="nav-item dropdown header-dropdown-1">
                          <a
                            className="nav-link"
                            href="#"
                            id="dropdown-one-col"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-ga-header="Link option 6"
                            data-ga-header-event="collapse"
                            data-ga-header-type="click"
                          >
                            Link option 6
                            <span className="fa fa-chevron-down" alt=""></span>
                          </a>
                          <div
                            className="dropdown-menu dropdown-columns"
                            aria-labelledby="dropdown-one-col"
                          >
                            <div className="dropdown-col">
                              <a
                                className="dropdown-item"
                                href="#"
                                data-ga-header="Sublink 1"
                                data-ga-header-component="link option 6"
                              >
                                Sublink 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-ga-header="Sublink 2"
                                data-ga-header-component="link option 6"
                              >
                                Sublink 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-ga-header="Sublink 3"
                                data-ga-header-component="link option 6"
                              >
                                Sublink 3
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="nav-item dropdown aligned-right header-dropdown-2">
                          <a
                            className="nav-link"
                            href="#"
                            id="dropdown-one-col"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-ga-header="link option 7"
                            data-ga-header-event="collapse"
                            data-ga-header-type="click"
                          >
                            Link option 7
                            <span className="fa fa-chevron-down" alt=""></span>
                          </a>
                          <div
                            className="dropdown-menu dropdown-columns"
                            aria-labelledby="dropdown-one-col"
                          >
                            <div className="dropdown-col">
                              <a
                                className="dropdown-item"
                                href="#"
                                data-ga-header="Sublink 1"
                                data-ga-header-component="link option 7"
                              >
                                Sublink 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-ga-header="Sublink 2"
                                data-ga-header-component="link option 7"
                              >
                                Sublink 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-ga-header="Sublink 3"
                                data-ga-header-component="link option 7"
                              >
                                Sublink 3
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="nav-item dropdown aligned-right header-dropdown-3">
                          <a
                            className="nav-link"
                            href="#"
                            id="dropdown-one-col"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-ga-header="Link option 8"
                            data-ga-header-event="collapse"
                            data-ga-header-type="click"
                          >
                            Link option 8
                            <span className="fa fa-chevron-down" alt=""></span>
                          </a>
                          <div
                            className="dropdown-menu dropdown-columns"
                            aria-labelledby="dropdown-one-col"
                          >
                            <div className="dropdown-col">
                              <a
                                className="dropdown-item"
                                href="#"
                                data-ga-header="Sublink 1"
                                data-ga-header-component="link option 8"
                              >
                                Sublink 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-ga-header="Sublink 2"
                                data-ga-header-component="link option 8"
                              >
                                Sublink 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-ga-header="Sublink 3"
                                data-ga-header-component="link option 8"
                              >
                                Sublink 3
                              </a>
                            </div>
                          </div>
                        </div>
                      </nav>
                      {/* end .navbar-nav */}
                    </div>
                    <div className="navbar-mobile-footer pinned">
                      <form
                        className="form-inline navbar-mobile-search"
                        action="https://search.asu.edu/search"
                        method="get"
                        name="gs"
                      >
                        <input
                          className="form-control"
                          type="search"
                          name="q"
                          aria-label="Search"
                          placeholder="Search asu.edu"
                        />
                        <input
                          name="site"
                          value="default_collection"
                          type="hidden"
                        />
                        <input name="sort" value="date:D:L:d1" type="hidden" />
                        <input name="output" value="xml_no_dtd" type="hidden" />
                        <input name="ie" value="UTF-8" type="hidden" />
                        <input name="oe" value="UTF-8" type="hidden" />
                        <input
                          name="client"
                          value="asu_frontend"
                          type="hidden"
                        />
                        <input
                          name="proxystylesheet"
                          value="asu_frontend"
                          type="hidden"
                        />
                      </form>
                      <div className="nav-grid">
                        <a
                          className="nav-link"
                          href="https://asu.edu"
                          data-ga-header-section="topbar"
                          data-ga-header="asu home"
                        >
                          ASU Home
                        </a>
                        <a
                          className="nav-link"
                          href="https://my.asu.edu"
                          data-ga-header-section="topbar"
                          data-ga-header="my asu"
                        >
                          My ASU
                        </a>
                        <a
                          className="nav-link"
                          href="https://www.asu.edu/academics/colleges-schools"
                          data-ga-header-section="topbar"
                          data-ga-header="colleges and schoold"
                        >
                          Colleges and Schools
                        </a>
                        <a
                          className="nav-link"
                          href="https://weblogin.asu.edu/cgi-bin/login"
                          data-ga-header-section="topbar"
                          data-ga-header="sign in"
                        >
                          Sign In
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div id="skip-to-content" className="visually-hidden"></div>
      <div
        style={{
          background: "url('https://picsum.photos/id/1035/1900/500')",
          height: "500px",
        }}
      ></div>
      <div className="bg-gray-6" style={{ height: "70vh" }}></div>
      <div className="bg-gray-5" style={{ height: "70vh" }}></div>
      <div className="bg-gray-4" style={{ height: "70vh" }}></div>
    </main>
  </>
);

export const Partner = () => (
  <>
    <header
      id="asu-header"
      className="fixed-top"
      data-elastic-exclude="data-elastic-exclude"
    >
      <div id="wrapper-header-top">
        <div className="container-xl">
          <div className="row">
            <div id="header-top" className="col-12">
              <nav className="nav" aria-label="Asu Global">
                <a
                  className="nav-link visually-hidden-focusable"
                  href="#skip-to-content"
                >
                  Skip to main content
                </a>
                <a
                  className="nav-link visually-hidden-focusable"
                  href="http://asu.edu/accessibility/feedback?a11yref=unity-design-system"
                >
                  Report an accessibility problem
                </a>
                <a
                  className="nav-link"
                  href="https://asu.edu"
                  data-ga-header-section="topbar"
                  data-ga-header="asu home"
                >
                  ASU Home
                </a>
                <a
                  className="nav-link"
                  href="https://my.asu.edu"
                  data-ga-header-section="topbar"
                  data-ga-header="my asu"
                >
                  My ASU
                </a>
                <a
                  className="nav-link"
                  href="https://www.asu.edu/academics/colleges-schools"
                  data-ga-header-section="topbar"
                  data-ga-header="colleges and schools"
                >
                  Colleges and Schools
                </a>
                <div className="nav-link login-status">
                  <a className="name" href="#">
                    Sparky
                  </a>
                  <a
                    className="signout"
                    href="#"
                    data-ga-header-section="topbar"
                    data-ga-header="sign out"
                  >
                    Sign Out
                  </a>
                </div>
                <form
                  className="form-inline"
                  action="https://search.asu.edu/search"
                  method="get"
                  name="gs"
                >
                  <input
                    className="form-control"
                    type="search"
                    name="q"
                    aria-labelledby="header-top-search"
                    required
                    data-ga-input-header-event="search"
                  />
                  <label id="header-top-search">Search asu.edu</label>
                  <input name="site" value="default_collection" type="hidden" />
                  <input name="sort" value="date:D:L:d1" type="hidden" />
                  <input name="output" value="xml_no_dtd" type="hidden" />
                  <input name="ie" value="UTF-8" type="hidden" />
                  <input name="oe" value="UTF-8" type="hidden" />
                  <input name="client" value="asu_frontend" type="hidden" />
                  <input
                    name="proxystylesheet"
                    value="asu_frontend"
                    type="hidden"
                  />
                </form>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div id="wrapper-header-main">
        <div className="container-xl">
          <div className="row">
            <div id="header-main" className="col-12">
              <div className="navbar-expand-xl">
                <div className="partner">
                  <div className="partners-logos">
                    <a href="#" data-ga-header="starbucks logo">
                      <img
                        src={starbucksLogo}
                        alt="ASU Starbucks logo"
                        width="232"
                        height="81"
                        decoding="async"
                        fetchpriority="high"
                      />
                    </a>
                    <a href="#" data-ga-header="asu logo">
                      <img
                        className="vert"
                        src={vertlogo}
                        alt="Arizona State University"
                        width="303"
                        height="234"
                        decoding="async"
                        fetchpriority="high"
                      />
                      <img
                        className="horiz"
                        src={horizlogo}
                        alt="Arizona State University"
                        width="400"
                        height="72"
                        decoding="async"
                        fetchpriority="high"
                      />
                    </a>
                  </div>
                  <button
                    className="navbar-toggler collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menubar"
                    aria-controls="menubar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    data-ga-header-event="collapse"
                    data-ga-header-type="click"
                    data-ga-header="menu button label"
                  >
                    <span
                      title="Open mobile menu"
                      className="fa fa-bars"
                      alt=""
                    ></span>
                    <span title="Close mobile menu" className="fa-stack">
                      <i className="fa fa-circle fa-stack-2x" alt=""></i>
                      <i className="fa fa-times fa-stack-1x" alt=""></i>
                    </span>
                  </button>
                </div>
                <div className="navbar-container">
                  <div
                    className="collapse navbar-collapse w-100 justify-content-between"
                    id="menubar"
                  >
                    <div className="header-content-container">
                      <nav className="navbar-nav" aria-label="Site">
                        <a
                          className="nav-link nav-link-home active"
                          href="/"
                          data-ga-header="home button"
                          title="Subdomain name home page"
                        >
                          <span
                            className="d-xl-none"
                            title="Subdomain name home page"
                          >
                            Home
                          </span>
                          <span
                            title="Subdomain name home page"
                            className="fas fa-fw fa-home"
                            alt=""
                          ></span>
                        </a>
                        <a
                          className="nav-link"
                          href="#"
                          data-ga-header="Link option 1"
                        >
                          Link option 1
                        </a>
                        <a
                          className="nav-link"
                          href="#"
                          data-ga-header="Link option 2"
                        >
                          Link option 2
                        </a>
                        <a
                          className="nav-link"
                          href="#"
                          data-ga-header="Link option 3"
                        >
                          Link option 3
                        </a>
                        <a
                          className="nav-link"
                          href="#"
                          data-ga-header="Link option 4"
                        >
                          Link option 4
                        </a>
                        <a
                          className="nav-link"
                          href="#"
                          data-ga-header="Link option 5"
                        >
                          Link option 5
                        </a>
                        <div className="nav-item dropdown header-dropdown-1">
                          <a
                            className="nav-link"
                            href="#"
                            id="dropdown-one-col"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-ga-header="Link option 6"
                            data-ga-header-event="collapse"
                            data-ga-header-type="click"
                          >
                            Link option 6
                            <span className="fa fa-chevron-down" alt=""></span>
                          </a>
                          <div
                            className="dropdown-menu dropdown-columns"
                            aria-labelledby="dropdown-one-col"
                          >
                            <div className="dropdown-col">
                              <a
                                className="dropdown-item"
                                href="#"
                                data-ga-header="Sublink 1"
                                data-ga-header-component="link option 6"
                              >
                                Sublink 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-ga-header="Sublink 2"
                                data-ga-header-component="link option 6"
                              >
                                Sublink 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-ga-header="Sublink 3"
                                data-ga-header-component="link option 6"
                              >
                                Sublink 3
                              </a>
                            </div>
                          </div>
                        </div>
                      </nav>
                      {/* end .navbar-nav */}
                      <form className="navbar-site-buttons form-inline">
                        <a
                          href="#"
                          className="btn btn-md btn-maroon"
                          data-ga-header="cta button 1"
                        >
                          CTA Button 1
                        </a>
                        <a
                          href="#"
                          className="btn btn-md btn-dark"
                          data-ga-header="cta button 2"
                        >
                          CTA Button 2
                        </a>
                      </form>
                    </div>
                    <div className="navbar-mobile-footer pinned">
                      <form
                        className="form-inline navbar-mobile-search"
                        action="https://search.asu.edu/search"
                        method="get"
                        name="gs"
                      >
                        <input
                          className="form-control"
                          type="search"
                          name="q"
                          aria-label="Search"
                          placeholder="Search asu.edu"
                        />
                        <input
                          name="site"
                          value="default_collection"
                          type="hidden"
                        />
                        <input name="sort" value="date:D:L:d1" type="hidden" />
                        <input name="output" value="xml_no_dtd" type="hidden" />
                        <input name="ie" value="UTF-8" type="hidden" />
                        <input name="oe" value="UTF-8" type="hidden" />
                        <input
                          name="client"
                          value="asu_frontend"
                          type="hidden"
                        />
                        <input
                          name="proxystylesheet"
                          value="asu_frontend"
                          type="hidden"
                        />
                      </form>
                      <div className="nav-grid">
                        <a
                          className="nav-link"
                          href="https://asu.edu"
                          data-ga-header-section="topbar"
                          data-ga-header="asu home"
                        >
                          ASU Home
                        </a>
                        <a
                          className="nav-link"
                          href="https://my.asu.edu"
                          data-ga-header-section="topbar"
                          data-ga-header="my asu"
                        >
                          My ASU
                        </a>
                        <a
                          className="nav-link"
                          href="https://www.asu.edu/academics/colleges-schools"
                          data-ga-header-section="topbar"
                          data-ga-header="colleges and schools"
                        >
                          Colleges and Schools
                        </a>
                        <a
                          className="nav-link"
                          href="https://weblogin.asu.edu/cgi-bin/login"
                          data-ga-header-section="topbar"
                          data-ga-header="sign in"
                        >
                          Sign In
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="wrapper" id="page-wrapper">
      <div id="skip-to-content" className="visually-hidden"></div>
      {/* Page content starts here */}
    </div>
  </>
);
