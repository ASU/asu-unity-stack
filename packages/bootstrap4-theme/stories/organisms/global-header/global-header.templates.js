import React from 'react';
import horizlogo from './arizona-state-university-logo.png';
import vertlogo from './arizona-state-university-logo-vertical.png';
import starbucksLogo from './asu-starbucks.png';

export const Basic = (
  <>
    <header id="asu-header" class="fixed-top">
      <div id="wrapper-header-top">
        <div class="container-xl">
          <div class="row">
            <div id="header-top" class="col-12">
              <nav class="nav" aria-label="Top">
                <a
                  class="nav-link sr-only sr-only-focusable"
                  href="#skip-to-content"
                >
                  Skip to main content
                </a>
                <a
                  class="nav-link sr-only sr-only-focusable"
                  href="http://asu.edu/accessibility/feedback?a11yref=unity-design-system"
                >
                  Report an accessibility problem
                </a>
                <a
                  class="nav-link"
                  href="https://asu.edu"
                  data-ga-header-section="topbar"
                  data-ga-header="asu home"
                >
                  ASU Home
                </a>
                <a
                  class="nav-link"
                  href="https://my.asu.edu"
                  data-ga-header-section="topbar"
                  data-ga-header="my asu"
                >
                  My ASU
                </a>
                <a
                  class="nav-link"
                  href="https://www.asu.edu/academics/colleges-schools"
                  data-ga-header-section="topbar"
                  data-ga-header="colleges and schools"
                >
                  Colleges and Schools
                </a>
                <div class="nav-link login-status">
                  <a class="name" href="#">
                    Sparky
                  </a>
                  <a
                    class="signout"
                    href="#"
                    data-ga-header-section="topbar"
                    data-ga-header="sign out"
                  >
                    Sign Out
                  </a>
                </div>
                <form
                  class="form-inline"
                  action="https://search.asu.edu/search"
                  method="get"
                  name="gs"
                >
                  <input
                    class="form-control"
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
        <div class="container-xl">
          <div class="row">
            <div id="header-main" class="col-12">
              <nav class="navbar navbar-expand-xl" aria-label="Main">
                <a class="navbar-brand" href="#" data-ga-header="asu logo">
                  <img
                    class="vert"
                    src={vertlogo}
                    alt="Arizona State University"
                  />
                  <img
                    class="horiz"
                    src={horizlogo}
                    alt="Arizona State University"
                  />
                </a>
                <button
                  class="navbar-toggler collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#menubar"
                  aria-controls="menubar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  data-ga-header-event="collapse"
                  data-ga-header-type="click"
                  data-ga-header="menu button label"
                >
                  <span title="Open mobile menu" class="fa fa-bars"></span>
                  <span title="Close mobile menu" class="fa-stack">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-times fa-stack-1x"></i>
                  </span>
                </button>
                <div class="navbar-container">
                  <div
                    class="title subdomain-name"
                    data-ga-header="Subdomain name"
                  >
                    Subdomain name
                  </div>
                  <div
                    class="collapse navbar-collapse w-100 justify-content-between"
                    id="menubar"
                  >
                    <div class="navbar-nav">
                      <a
                        class="nav-link nav-link-home active"
                        href="/"
                        data-ga-header="home button"
                      >
                        <span class="d-xl-none">Home</span>
                        <span title="Home" class="fas fa-fw fa-home"></span>
                      </a>
                      <a
                        class="nav-link"
                        href="#"
                        data-ga-header="Link option 1"
                      >
                        Link option 1
                      </a>
                      <a
                        class="nav-link"
                        href="#"
                        data-ga-header="Link option 2"
                      >
                        Link option 2
                      </a>
                      <div class="nav-item dropdown header-dropdown-1">
                        <a
                          class="nav-link"
                          href="#"
                          id="dropdown-one-col"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-ga-header="Link option 3"
                          data-ga-header-event="collapse"
                          data-ga-header-type="click"
                        >
                          Link option 3<span class="fa fa-chevron-down"></span>
                        </a>
                        <div
                          class="dropdown-menu dropdown-columns"
                          aria-labelledby="dropdown-one-col"
                        >
                          <div class="dropdown-col">
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="Sublink 1"
                              data-ga-header-component="link option 3"
                            >
                              Sublink 1
                            </a>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="Sublink 2"
                              data-ga-header-component="link option 3"
                            >
                              Sublink 2
                            </a>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="Sublink 3"
                              data-ga-header-component="link option 3"
                            >
                              Sublink 3
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end .navbar-nav */}
                    <form class="navbar-site-buttons form-inline">
                      <a
                        href="#"
                        class="btn btn-md btn-maroon"
                        data-ga-header="call to action"
                      >
                        Call to action
                      </a>
                    </form>
                    <div class="navbar-mobile-footer pinned">
                      <form
                        class="form-inline navbar-mobile-search"
                        action="https://search.asu.edu/search"
                        method="get"
                        name="gs"
                      >
                        <input
                          class="form-control"
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
                      <div class="nav-grid">
                        <a
                          class="nav-link"
                          href="https://asu.edu"
                          data-ga-header-section="topbar"
                          data-ga-header="asu home"
                        >
                          ASU Home
                        </a>
                        <a
                          class="nav-link"
                          href="https://my.asu.edu"
                          data-ga-header-section="topbar"
                          data-ga-header="my asu"
                        >
                          My ASU
                        </a>
                        <a
                          class="nav-link"
                          href="https://www.asu.edu/academics/colleges-schools"
                          data-ga-header-section="topbar"
                          data-ga-header="colleges and schools"
                        >
                          Colleges and Schools
                        </a>
                        <div class="nav-link login-status">
                          Sparky
                          <a
                            class="signout"
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
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="wrapper" id="page-wrapper">
      <div id="skip-to-content" class="sr-only"></div>
      {/* Page content starts here */}
    </div>
  </>
);

export const DropDownMenus = (
  <>
    <header id="asu-header" class="fixed-top">
      <div id="wrapper-header-top">
        <div class="container-xl">
          <div class="row">
            <div id="header-top" class="col-12">
              <nav class="nav" aria-label="Top">
                <a
                  class="nav-link sr-only sr-only-focusable"
                  href="#skip-to-content"
                >
                  Skip to main content
                </a>
                <a
                  class="nav-link sr-only sr-only-focusable"
                  href="http://asu.edu/accessibility/feedback?a11yref=unity-design-system"
                >
                  Report an accessibility problem
                </a>
                <a
                  class="nav-link"
                  href="https://asu.edu"
                  data-ga-header-section="topbar"
                  data-ga-header="asu home"
                >
                  ASU Home
                </a>
                <a
                  class="nav-link"
                  href="https://my.asu.edu"
                  data-ga-header-section="topbar"
                  data-ga-header="my asu"
                >
                  My ASU
                </a>
                <a
                  class="nav-link"
                  href="https://www.asu.edu/academics/colleges-schools"
                  data-ga-header-section="topbar"
                  data-ga-header="colleges and schools"
                >
                  Colleges and Schools
                </a>
                <div class="nav-link login-status">
                  <a
                    class="signin"
                    href="#"
                    data-ga-header-section="topbar"
                    data-ga-header="sign in"
                  >
                    Sign In
                  </a>
                </div>
                <form
                  class="form-inline"
                  action="https://search.asu.edu/search"
                  method="get"
                  name="gs"
                >
                  <input
                    class="form-control"
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
        <div class="container-xl">
          <div class="row">
            <div id="header-main" class="col-12">
              <nav class="navbar navbar-expand-xl" aria-label="Main">
                <a class="navbar-brand" href="#" data-ga-header="asu logo">
                  <img
                    class="vert"
                    src={vertlogo}
                    alt="Arizona State University"
                  />
                  <img
                    class="horiz"
                    src={horizlogo}
                    alt="Arizona State University"
                  />
                </a>
                <button
                  class="navbar-toggler collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#menubar"
                  aria-controls="menubar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  data-ga-header-event="collapse"
                  data-ga-header-type="click"
                  data-ga-header="menu button label"
                >
                  <span title="Open mobile menu" class="fa fa-bars"></span>
                  <span title="Close mobile menu" class="fa-stack">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-times fa-stack-1x"></i>
                  </span>
                </button>
                <div class="navbar-container">
                  <div class="title">
                    <a
                      href="#"
                      class="unit-name"
                      data-ga-header="Parent unit name"
                    >
                      Parent unit name
                    </a>
                    <span
                      class="subdomain-name"
                      data-ga-header="Subdomain name"
                    >
                      Subdomain name
                    </span>
                  </div>
                  <div
                    class="collapse navbar-collapse w-100 justify-content-between"
                    id="menubar"
                  >
                    <div class="navbar-nav">
                      <a
                        class="nav-link nav-link-home"
                        href="/"
                        data-ga-header="home button"
                      >
                        <span class="d-xl-none">Home</span>
                        <span title="Home" class="fas fa-fw fa-home"></span>
                      </a>
                      <div class="nav-item dropdown header-dropdown-1">
                        <a
                          class="nav-link"
                          href="#"
                          id="dropdown-one-col"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-ga-header="Link option 1"
                          data-ga-header-event="collapse"
                          data-ga-header-type="click"
                        >
                          Link option 1<span class="fa fa-chevron-down"></span>
                        </a>
                        <div
                          class="dropdown-menu dropdown-columns"
                          aria-labelledby="dropdown-one-col"
                        >
                          <div class="dropdown-col">
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="massa nunc dictum nan venenatis"
                              data-ga-header-component="link option 1"
                            >
                              Massa nunc dictum nam venenatis
                            </a>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="dis quam quis nisi ligula"
                              data-ga-header-component="link option 1"
                            >
                              Dis quam quis nisi ligula
                            </a>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="dapibus lorem"
                              data-ga-header-component="link option 1"
                            >
                              Dapibus lorem
                            </a>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="nisi ligula eget orci"
                              data-ga-header-component="link option 1"
                            >
                              Nisi ligula eget orci
                            </a>
                            <a
                              href="#"
                              class="btn btn-sm btn-dark col-btn"
                              data-ga-header="cta action 2"
                              data-ga-header-component="link option 2"
                            >
                              CTA action 2
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="nav-item dropdown header-dropdown-2">
                        <a
                          class="nav-link"
                          href="#"
                          id="dropdown-two-col"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-ga-header="Link option 2"
                          data-ga-header-event="collapse"
                          data-ga-header-type="click"
                        >
                          Link option 2<span class="fa fa-chevron-down"></span>
                        </a>
                        <div
                          class="dropdown-menu dropdown-columns"
                          aria-labelledby="dropdown-two-col"
                        >
                          <div class="dropdown-col">
                            <h3>Column One</h3>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="dis quam quis nisi ligula"
                              data-ga-header-component="link option 2"
                            >
                              Dis quam quis nisi ligula
                            </a>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="nisi ligula eget orci"
                              data-ga-header-component="link option 2"
                            >
                              Nisi ligula eget orci
                            </a>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="massa nunc dictum nam venenatis"
                              data-ga-header-component="link option 2"
                            >
                              Massa nunc dictum nam venenatis
                            </a>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="dapibus lorem"
                              data-ga-header-component="link option 2"
                            >
                              Dapibus lorem
                            </a>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="ultricies tellus eu"
                              data-ga-header-component="link option 2"
                            >
                              Ultricies tellus eu
                            </a>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="pretium massa quis vitae pede quisque nulla
                              ultricies sit"
                              data-ga-header-component="link option 2"
                            >
                              Pretium massa quis vitae pede quisque nulla
                              ultricies sit
                            </a>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="quis tempus aliquam semper imperdiet"
                              data-ga-header-component="link option 2"
                            >
                              Quis tempus aliquam semper imperdiet
                            </a>
                          </div>
                          <div class="dropdown-col">
                            <h3>Brady Header</h3>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="here's the story"
                              data-ga-header-component="link option 2"
                            >
                              Here's the story
                            </a>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="of a man named Brady"
                              data-ga-header-component="link option 2"
                            >
                              Of a man named Brady
                            </a>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="who was busy with three"
                              data-ga-header-component="link option 2"
                            >
                              Who was busy with three
                            </a>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="boys of his own"
                              data-ga-header-component="link option 2"
                            >
                              Boys of his own
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="nav-item dropdown megamenu active header-dropdown-3">
                        <a
                          class="nav-link"
                          href="#"
                          id="megamenu-three-col"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-ga-header="Link option 3"
                          data-ga-header-event="collapse"
                          data-ga-header-type="click"
                        >
                          Link option 3<span class="fa fa-chevron-down"></span>
                        </a>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="megamenu-three-col"
                        >
                          <div class="container">
                            <div class="row">
                              <div class="col-lg">
                                <h3>Column one</h3>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="recommended max of ten links"
                                  data-ga-header-component="link option 3"
                                >
                                  Recommended max of ten links
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="second link in the list"
                                  data-ga-header-component="link option 3"
                                >
                                  Second link in the list
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="here is link number three"
                                  data-ga-header-component="link option 3"
                                >
                                  Here is link number three
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="dapibus lorem"
                                  data-ga-header-component="link option 3"
                                >
                                  Dapibus lorem
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="ultricies tellus eu"
                                  data-ga-header-component="link option 3"
                                >
                                  Ultricies tellus eu
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="quis tempus aliquam semper imperdiet"
                                  data-ga-header-component="link option 3"
                                >
                                  Quis tempus aliquam semper imperdiet
                                </a>
                              </div>
                              <div class="col-lg">
                                <h3>Column two</h3>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="dis quam quis nisi ligula"
                                  data-ga-header-component="link option 3"
                                >
                                  Dis quam quis nisi ligula
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="nisi ligula eget orci"
                                  data-ga-header-component="link option 3"
                                >
                                  Nisi ligula eget orci
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="massa nunc dictum nam venenatis"
                                  data-ga-header-component="link option 3"
                                >
                                  Massa nunc dictum nam venenatis
                                </a>
                              </div>
                              <div class="col-lg-4">
                                <h3>Last call 'em</h3>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="navigation link"
                                  data-ga-header-component="link option 3"
                                >
                                  Navigation link
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="another link as an example of when something
                                  wraps"
                                  data-ga-header-component="link option 3"
                                >
                                  Another link as an example of when something
                                  wraps
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="culture of inclusion"
                                  data-ga-header-component="link option 3"
                                >
                                  Culture of inclusion
                                </a>
                                <a
                                  class="dropdown-item"
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
                      <div class="nav-item dropdown megamenu header-dropdown-4">
                        <a
                          class="nav-link"
                          href="#"
                          id="megamenu-four-col"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-ga-header="Link option 4"
                          data-ga-header-event="collapse"
                          data-ga-header-type="click"
                        >
                          Link option 4<span class="fa fa-chevron-down"></span>
                        </a>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="megamenu-four-col"
                        >
                          <div class="container">
                            <div class="row">
                              <div class="col-lg">
                                <h3>Column one</h3>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="navigation link"
                                  data-ga-header-component="link option 4"
                                >
                                  Navigation link
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="second link in the list"
                                  data-ga-header-component="link option 4"
                                >
                                  Second link in the list
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="here is link number three"
                                  data-ga-header-component="link option 4"
                                >
                                  Here is link number three
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="dapibus lorem"
                                  data-ga-header-component="link option 4"
                                >
                                  Dapibus lorem
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="ultricies tellus eu"
                                  data-ga-header-component="link option 4"
                                >
                                  Ultricies tellus eu
                                </a>
                              </div>
                              <div class="col-lg">
                                <h3>Column two</h3>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="nisi eget orci"
                                  data-ga-header-component="link option 4"
                                >
                                  Nisi eget orci
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="dis quam quis nisi ligula"
                                  data-ga-header-component="link option 4"
                                >
                                  Dis quam quis nisi ligula
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="massa nunc venenatis"
                                  data-ga-header-component="link option 4"
                                >
                                  Massa nunc venenatis
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="pede quisque nulla ultricies sit"
                                  data-ga-header-component="link option 4"
                                >
                                  Pede quisque nulla ultricies sit
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="dapibus lorem"
                                  data-ga-header-component="link option 4"
                                >
                                  Dapibus lorem
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="ultricies tellus eu"
                                  data-ga-header-component="link option 4"
                                >
                                  Ultricies tellus eu
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="quis tempus aliquam semper imperdiet"
                                  data-ga-header-component="link option 4"
                                >
                                  Quis tempus aliquam semper imperdiet
                                </a>
                              </div>
                              <div class="col-lg">
                                <h3>Column three</h3>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="dis quam quis nisi ligula"
                                  data-ga-header-component="link option 4"
                                >
                                  Dis quam quis nisi ligula
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="nisi ligula eget orci"
                                  data-ga-header-component="link option 4"
                                >
                                  Nisi ligula eget orci
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="massa nunc dictum nam venenatis"
                                  data-ga-header-component="link option 4"
                                >
                                  Massa nunc dictum nam venenatis
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="dapibus lorem"
                                  data-ga-header-component="link option 4"
                                >
                                  Dapibus lorem
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="ultricies tellus eu"
                                  data-ga-header-component="link option 4"
                                >
                                  Ultricies tellus eu
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="pretium massa quis vitae pede quisque nulla
                                  ultricies sit"
                                  data-ga-header-component="link option 4"
                                >
                                  Pretium massa quis vitae pede quisque nulla
                                  ultricies sit
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="semper imperdiet"
                                  data-ga-header-component="link option 4"
                                >
                                  Semper imperdiet
                                </a>
                              </div>
                              <div class="col-lg">
                                <h3>Column four</h3>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="dis quam quis nisi ligula"
                                  data-ga-header-component="link option 4"
                                >
                                  Dis quam quis nisi ligula
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="nisi ligula eget orci"
                                  data-ga-header-component="link option 4"
                                >
                                  Nisi ligula eget orci
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="dapibus lorem"
                                  data-ga-header-component="link option 4"
                                >
                                  Dapibus lorem
                                </a>
                              </div>
                            </div>
                            <div class="row with-buttons">
                              <div class="col-lg-12">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-gold"
                                  data-ga-header="mega menu cta 1"
                                  data-ga-header-component="link option 34"
                                >
                                  Mega menu CTA 1
                                </a>
                                <a
                                  href="#"
                                  class="btn btn-sm btn-maroon"
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
                      <div class="nav-item dropdown megamenu header-dropdown-5">
                        <a
                          class="nav-link"
                          href="#"
                          id="megamenu-five-col"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-ga-header="Link option 5"
                          data-ga-header-event="collapse"
                          data-ga-header-type="click"
                        >
                          Link option 5<span class="fa fa-chevron-down"></span>
                        </a>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="megamenu-five-col"
                        >
                          <div class="container">
                            <div class="row">
                              <div class="col-lg">
                                <h3>Column One</h3>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="navigation link"
                                  data-ga-header-component="link option 5"
                                >
                                  Navigation link
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="second link in the list"
                                  data-ga-header-component="link option 5"
                                >
                                  Second link in the list
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="here is link number three"
                                  data-ga-header-component="link option 5"
                                >
                                  Here is link number three
                                </a>
                                <div class="btns-row">
                                  <a
                                    href="#"
                                    class="btn btn-sm btn-dark col-btn"
                                    data-ga-header="cta in column"
                                    data-ga-header-component="link option 5"
                                  >
                                    CTA in column
                                  </a>
                                  <a
                                    href="#"
                                    class="btn btn-sm btn-dark col-btn"
                                    data-ga-header="cta in column"
                                    data-ga-header-component="link option 5"
                                  >
                                    CTA in column
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg">
                                <h3>Column Two</h3>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="pretium massa quis vitae pede quisque nulla
                                  ultricies sit"
                                  data-ga-header-component="link option 5"
                                >
                                  Pretium massa quis vitae pede quisque nulla
                                  ultricies sit
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="quis tempus aliquam semper imperdiet"
                                  data-ga-header-component="link option 5"
                                >
                                  Quis tempus aliquam semper imperdiet
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="pretium massa quis vitae pede quisque nulla
                                  ultricies sit"
                                  data-ga-header-component="link option 5"
                                >
                                  Pretium massa quis vitae pede quisque nulla
                                  ultricies sit
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="quis tempus aliquam semper imperdiet"
                                  data-ga-header-component="link option 5"
                                >
                                  Quis tempus aliquam semper imperdiet
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="nisi ligula eget orci"
                                  data-ga-header-component="link option 5"
                                >
                                  Nisi ligula eget orci
                                </a>
                              </div>
                              <div class="col-lg">
                                <h3>Column Three</h3>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="pretium massa quis vitae pede quisque nulla
                                  ultricies sit"
                                  data-ga-header-component="link option 5"
                                >
                                  Pretium massa quis vitae pede quisque nulla
                                  ultricies sit
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="quis tempus aliquam semper imperdiet"
                                  data-ga-header-component="link option 5"
                                >
                                  Quis tempus aliquam semper imperdiet
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="pretium massa quis vitae pede quisque nulla
                                  ultricies sit"
                                  data-ga-header-component="link option 5"
                                >
                                  Pretium massa quis vitae pede quisque nulla
                                  ultricies sit
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="quis tempus aliquam semper imperdiet"
                                  data-ga-header-component="link option 5"
                                >
                                  Quis tempus aliquam semper imperdiet
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="nisi ligula eget orci"
                                  data-ga-header-component="link option 5"
                                >
                                  Nisi ligula eget orci
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="dapibus lorem"
                                  data-ga-header-component="link option 5"
                                >
                                  Dapibus lorem
                                </a>
                                <a
                                  href="#"
                                  class="btn btn-sm btn-dark col-btn"
                                  data-ga-header="cta in column"
                                  data-ga-header-component="link option 5"
                                >
                                  CTA in Column
                                </a>
                              </div>
                              <div class="col-lg">
                                <h3>Column Four</h3>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="dis quam quis nisi ligula"
                                  data-ga-header-component="link option 5"
                                >
                                  Dis quam quis nisi ligula
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="nisi ligula eget orci"
                                  data-ga-header-component="link option 5"
                                >
                                  Nisi ligula eget orci
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="dapibus lorem"
                                  data-ga-header-component="link option 5"
                                >
                                  Dapibus lorem
                                </a>
                                <a
                                  href="#"
                                  class="btn btn-sm btn-dark col-btn"
                                  data-ga-header="cta in column"
                                  data-ga-header-component="link option 5"
                                >
                                  CTA in Column
                                </a>
                              </div>
                              <div class="col-lg">
                                <h3>Mambo #5</h3>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="jump up and down and"
                                  data-ga-header-component="link option 5"
                                >
                                  Jump up and down and
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="shake your head to the sound"
                                  data-ga-header-component="link option 5"
                                >
                                  Shake your head to the sound
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="put your hand on the ground"
                                  data-ga-header-component="link option 5"
                                >
                                  Put your hand on the ground
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="take one step left and one step right"
                                  data-ga-header-component="link option 5"
                                >
                                  Take one step left and one step right
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-ga-header="if it looks like this"
                                  data-ga-header-component="link option 5"
                                >
                                  If it looks like this
                                </a>
                                <a
                                  class="dropdown-item"
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
                    </div>
                    {/* end .navbar-nav */}
                    <div class="navbar-mobile-footer pinned">
                      <form
                        class="form-inline navbar-mobile-search"
                        action="https://search.asu.edu/search"
                        method="get"
                        name="gs"
                      >
                        <input
                          class="form-control"
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
                      <div class="nav-grid">
                        <a
                          class="nav-link"
                          href="https://asu.edu"
                          data-ga-header-section="topbar"
                          data-ga-header="asu home"
                        >
                          ASU Home
                        </a>
                        <a
                          class="nav-link"
                          href="https://my.asu.edu"
                          data-ga-header-section="topbar"
                          data-ga-header="my asu"
                        >
                          My ASU
                        </a>
                        <a
                          class="nav-link"
                          href="https://www.asu.edu/academics/colleges-schools"
                          data-ga-header-section="topbar"
                          data-ga-header="colleges and schools"
                        >
                          Colleges and Schools
                        </a>
                        <a
                          class="nav-link"
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
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="wrapper" id="page-wrapper">
      <div id="skip-to-content" class="sr-only"></div>
      {/* Page content starts here */}
    </div>
  </>
);

export const NoNavigation = (
  <>
    <header id="asu-header" class="fixed-top">
      <div id="wrapper-header-top">
        <div class="container-xl">
          <div class="row">
            <div id="header-top" class="col-12">
              <nav class="nav" aria-label="Top">
                <a
                  class="nav-link sr-only sr-only-focusable"
                  href="#skip-to-content"
                >
                  Skip to main content
                </a>
                <a
                  class="nav-link sr-only sr-only-focusable"
                  href="http://asu.edu/accessibility/feedback?a11yref=unity-design-system"
                >
                  Report an accessibility problem
                </a>
                <a
                  class="nav-link"
                  href="https://asu.edu"
                  data-ga-header-section="topbar"
                  data-ga-header="asu home"
                >
                  ASU Home
                </a>
                <a
                  class="nav-link"
                  href="https://my.asu.edu"
                  data-ga-header-section="topbar"
                  data-ga-header="my asu"
                >
                  My ASU
                </a>
                <a
                  class="nav-link"
                  href="https://www.asu.edu/academics/colleges-schools"
                  data-ga-header-section="topbar"
                  data-ga-header="colleges and schools"
                >
                  Colleges and Schools
                </a>
                <div class="nav-link login-status">
                  <a class="name" href="#">
                    Sparky
                  </a>
                  <a
                    class="signout"
                    href="#"
                    data-ga-header-section="topbar"
                    data-ga-header="sign out"
                  >
                    Sign Out
                  </a>
                </div>
                <form
                  class="form-inline"
                  action="https://search.asu.edu/search"
                  method="get"
                  name="gs"
                >
                  <input
                    class="form-control"
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
        <div class="container-xl">
          <div class="row">
            <div id="header-main" class="col-12">
              <nav class="navbar navbar-expand-xl" aria-label="Main">
                <a class="navbar-brand" href="#" data-ga-header="asu logo">
                  <img
                    class="vert"
                    src={vertlogo}
                    alt="Arizona State University"
                  />
                  <img
                    class="horiz"
                    src={horizlogo}
                    alt="Arizona State University"
                  />
                </a>
                <button
                  class="navbar-toggler collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#menubar"
                  aria-controls="menubar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  data-ga-header-event="collapse"
                  data-ga-header-type="click"
                  data-ga-header="menu button label"
                >
                  <span title="Open mobile menu" class="fa fa-bars"></span>
                  <span title="Close mobile menu" class="fa-stack">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-times fa-stack-1x"></i>
                  </span>
                </button>
                <div class="navbar-container no-links">
                  <div class="title subdomain-name">
                    <a href="#" data-ga-header="Subdomain name">
                      Subdomain name
                    </a>
                  </div>
                  <div
                    class="collapse navbar-collapse w-100 justify-content-between"
                    id="menubar"
                  >
                    <div class="navbar-mobile-footer pinned">
                      <form
                        class="form-inline navbar-mobile-search"
                        action="https://search.asu.edu/search"
                        method="get"
                        name="gs"
                      >
                        <input
                          class="form-control"
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
                      <div class="nav-grid">
                        <a
                          class="nav-link"
                          href="https://asu.edu"
                          data-ga-header-section="topbar"
                          data-ga-header="asu home"
                        >
                          ASU Home
                        </a>
                        <a
                          class="nav-link"
                          href="https://my.asu.edu"
                          data-ga-header-section="topbar"
                          data-ga-header="my asu"
                        >
                          My ASU
                        </a>
                        <a
                          class="nav-link"
                          href="https://www.asu.edu/academics/colleges-schools"
                          data-ga-header-section="topbar"
                          data-ga-header="colleges and schools"
                        >
                          Colleges and Schools
                        </a>
                        <a
                          class="nav-link"
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
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="wrapper" id="page-wrapper">
      <div id="skip-to-content" class="sr-only"></div>
      {/* Page content starts here */}
    </div>
  </>
);

export const NoNavigationAndWithButtons = (
  <>
    <header id="asu-header" class="fixed-top">
      <div id="wrapper-header-top">
        <div class="container-xl">
          <div class="row">
            <div id="header-top" class="col-12">
              <nav class="nav" aria-label="Top">
                <a
                  class="nav-link sr-only sr-only-focusable"
                  href="#skip-to-content"
                >
                  Skip to main content
                </a>
                <a
                  class="nav-link sr-only sr-only-focusable"
                  href="http://asu.edu/accessibility/feedback?a11yref=unity-design-system"
                >
                  Report an accessibility problem
                </a>
                <a
                  class="nav-link"
                  href="https://asu.edu"
                  data-ga-header-section="topbar"
                  data-ga-header="asu home"
                >
                  ASU Home
                </a>
                <a
                  class="nav-link"
                  href="https://my.asu.edu"
                  data-ga-header-section="topbar"
                  data-ga-header="my asu"
                >
                  My ASU
                </a>
                <a
                  class="nav-link"
                  href="https://www.asu.edu/academics/colleges-schools"
                  data-ga-header-section="topbar"
                  data-ga-header="colleges and schools"
                >
                  Colleges and Schools
                </a>
                <div class="nav-link login-status">
                  <a
                    class="signin"
                    href="#"
                    data-ga-header-section="topbar"
                    data-ga-header="sign in"
                  >
                    Sign In
                  </a>
                </div>
                <form
                  class="form-inline"
                  action="https://search.asu.edu/search"
                  method="get"
                  name="gs"
                >
                  <input
                    class="form-control"
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
        <div class="container-xl">
          <div class="row">
            <div id="header-main" class="col-12">
              <nav class="navbar navbar-expand-xl" aria-label="Main">
                <a class="navbar-brand" href="#" data-ga-header="asu logo">
                  <img
                    class="vert"
                    src={vertlogo}
                    alt="Arizona State University"
                  />
                  <img
                    class="horiz"
                    src={horizlogo}
                    alt="Arizona State University"
                  />
                </a>
                <button
                  class="navbar-toggler collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#menubar"
                  aria-controls="menubar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  data-ga-header-event="collapse"
                  data-ga-header-type="click"
                  data-ga-header="menu button label"
                >
                  <span title="Open mobile menu" class="fa fa-bars"></span>
                  <span title="Close mobile menu" class="fa-stack">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-times fa-stack-1x"></i>
                  </span>
                </button>
                <div class="navbar-container no-links">
                  <div class="title subdomain-name">
                    <a href="#" data-ga-header="Subdomain name">
                      Subdomain name
                    </a>
                  </div>
                  <div
                    class="collapse navbar-collapse w-100 justify-content-between"
                    id="menubar"
                  >
                    <form class="navbar-site-buttons form-inline">
                      <a
                        href="#"
                        class="btn btn-md btn-maroon"
                        data-ga-header="cta button 1"
                      >
                        CTA button 1
                      </a>
                      <a
                        href="#"
                        class="btn btn-md btn-dark"
                        data-ga-header="cta button 2"
                      >
                        CTA button 2
                      </a>
                    </form>
                    <div class="navbar-mobile-footer pinned">
                      <form
                        class="form-inline navbar-mobile-search"
                        action="https://search.asu.edu/search"
                        method="get"
                        name="gs"
                      >
                        <input
                          class="form-control"
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
                      <div class="nav-grid">
                        <a
                          class="nav-link"
                          href="https://asu.edu"
                          data-ga-header-section="topbar"
                          data-ga-header="asu home"
                        >
                          ASU Home
                        </a>
                        <a
                          class="nav-link"
                          href="https://my.asu.edu"
                          data-ga-header-section="topbar"
                          data-ga-header="my asu"
                        >
                          My ASU
                        </a>
                        <a
                          class="nav-link"
                          href="https://www.asu.edu/academics/colleges-schools"
                          data-ga-header-section="topbar"
                          data-ga-header="colleges and schools"
                        >
                          Colleges and Schools
                        </a>
                        <a
                          class="nav-link"
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
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="wrapper" id="page-wrapper">
      <div id="skip-to-content" class="sr-only"></div>
      {/* Page content starts here */}
    </div>
  </>
);

export const ScrolledState = (
  <>
    <header id="asu-header" class="fixed-top">
      <div id="wrapper-header-top">
        <div class="container-xl">
          <div class="row">
            <div id="header-top" class="col-12">
              <nav class="nav" aria-label="Top">
                <a
                  class="nav-link sr-only sr-only-focusable"
                  href="#skip-to-content"
                >
                  Skip to main content
                </a>
                <a
                  class="nav-link sr-only sr-only-focusable"
                  href="http://asu.edu/accessibility/feedback?a11yref=unity-design-system"
                >
                  Report an accessibility problem
                </a>
                <a
                  class="nav-link"
                  href="https://asu.edu"
                  data-ga-header-section="topbar"
                  data-ga-header="asu home"
                >
                  ASU Home
                </a>
                <a
                  class="nav-link"
                  href="https://my.asu.edu"
                  data-ga-header-section="topbar"
                  data-ga-header="my asu"
                >
                  My ASU
                </a>
                <a
                  class="nav-link"
                  href="https://www.asu.edu/academics/colleges-schools"
                  data-ga-header-section="topbar"
                  data-ga-header="colleges and schools"
                >
                  Colleges and Schools
                </a>
                <div class="nav-link login-status">
                  <a class="name" href="#">
                    Sparky
                  </a>
                  <a
                    class="signout"
                    href="#"
                    data-ga-header-section="topbar"
                    data-ga-header="sign out"
                  >
                    Sign Out
                  </a>
                </div>
                <form
                  class="form-inline"
                  action="https://search.asu.edu/search"
                  method="get"
                  name="gs"
                >
                  <input
                    class="form-control"
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
        <div class="container-xl">
          <div class="row">
            <div id="header-main" class="col-12">
              <nav class="navbar navbar-expand-xl" aria-label="Main">
                <a class="navbar-brand" href="#" asu-ga="asu logo">
                  <img
                    class="vert"
                    src={vertlogo}
                    alt="Arizona State University"
                  />
                  <img
                    class="horiz"
                    src={horizlogo}
                    alt="Arizona State University"
                  />
                </a>
                <button
                  class="navbar-toggler collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#menubar"
                  aria-controls="menubar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  data-ga-header-event="collapse"
                  data-ga-header-type="click"
                  data-ga-header="menu button label"
                >
                  <span title="Open mobile menu" class="fa fa-bars"></span>
                  <span title="Close mobile menu" class="fa-stack">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-times fa-stack-1x"></i>
                  </span>
                </button>
                <div class="navbar-container">
                  <div
                    class="title subdomain-name"
                    data-ga-header="Subdomain name"
                  >
                    Subdomain name
                  </div>
                  <div
                    class="collapse navbar-collapse w-100 justify-content-between"
                    id="menubar"
                  >
                    <div class="navbar-nav">
                      <a
                        class="nav-link nav-link-home active"
                        href="/"
                        data-ga-header="home button"
                      >
                        <span class="d-xl-none">Home</span>
                        <span title="Home" class="fas fa-fw fa-home"></span>
                      </a>
                      <a
                        class="nav-link"
                        href="#"
                        data-ga-header="Link option 1"
                      >
                        Link option 1
                      </a>
                      <a
                        class="nav-link"
                        href="#"
                        data-ga-header="Link option 2"
                      >
                        Link option 2
                      </a>
                      <a
                        class="nav-link"
                        href="#"
                        data-ga-header="Link option 3"
                      >
                        Link option 3
                      </a>
                      <a
                        class="nav-link"
                        href="#"
                        data-ga-header="Link option 4"
                      >
                        Link option 4
                      </a>
                      <a
                        class="nav-link"
                        href="#"
                        data-ga-header="Link option 5"
                      >
                        Link option 5
                      </a>
                      <div class="nav-item dropdown header-dropdown-1">
                        <a
                          class="nav-link"
                          href="#"
                          id="dropdown-one-col"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-ga-header="Link option 6"
                          data-ga-header-event="collapse"
                          data-ga-header-type="click"
                        >
                          Link option 6<span class="fa fa-chevron-down"></span>
                        </a>
                        <div
                          class="dropdown-menu dropdown-columns"
                          aria-labelledby="dropdown-one-col"
                        >
                          <div class="dropdown-col">
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="Sublink 1"
                              data-ga-header-component="link option 6"
                            >
                              Sublink 1
                            </a>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="Sublink 2"
                              data-ga-header-component="link option 6"
                            >
                              Sublink 2
                            </a>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="Sublink 3"
                              data-ga-header-component="link option 6"
                            >
                              Sublink 3
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="nav-item dropdown aligned-right header-dropdown-2">
                        <a
                          class="nav-link"
                          href="#"
                          id="dropdown-one-col"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-ga-header="link option 7"
                          data-ga-header-event="collapse"
                          data-ga-header-type="click"
                        >
                          Link option 7<span class="fa fa-chevron-down"></span>
                        </a>
                        <div
                          class="dropdown-menu dropdown-columns"
                          aria-labelledby="dropdown-one-col"
                        >
                          <div class="dropdown-col">
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="Sublink 1"
                              data-ga-header-component="link option 7"
                            >
                              Sublink 1
                            </a>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="Sublink 2"
                              data-ga-header-component="link option 7"
                            >
                              Sublink 2
                            </a>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="Sublink 3"
                              data-ga-header-component="link option 7"
                            >
                              Sublink 3
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="nav-item dropdown aligned-right header-dropdown-3">
                        <a
                          class="nav-link"
                          href="#"
                          id="dropdown-one-col"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-ga-header="Link option 8"
                          data-ga-header-event="collapse"
                          data-ga-header-type="click"
                        >
                          Link option 8<span class="fa fa-chevron-down"></span>
                        </a>
                        <div
                          class="dropdown-menu dropdown-columns"
                          aria-labelledby="dropdown-one-col"
                        >
                          <div class="dropdown-col">
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="Sublink 1"
                              data-ga-header-component="link option 8"
                            >
                              Sublink 1
                            </a>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="Sublink 2"
                              data-ga-header-component="link option 8"
                            >
                              Sublink 2
                            </a>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="Sublink 3"
                              data-ga-header-component="link option 8"
                            >
                              Sublink 3
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end .navbar-nav */}
                    <div class="navbar-mobile-footer pinned">
                      <form
                        class="form-inline navbar-mobile-search"
                        action="https://search.asu.edu/search"
                        method="get"
                        name="gs"
                      >
                        <input
                          class="form-control"
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
                      <div class="nav-grid">
                        <a
                          class="nav-link"
                          href="https://asu.edu"
                          data-ga-header-section="topbar"
                          data-ga-header="asu home"
                        >
                          ASU Home
                        </a>
                        <a
                          class="nav-link"
                          href="https://my.asu.edu"
                          data-ga-header-section="topbar"
                          data-ga-header="my asu"
                        >
                          My ASU
                        </a>
                        <a
                          class="nav-link"
                          href="https://www.asu.edu/academics/colleges-schools"
                          data-ga-header-section="topbar"
                          data-ga-header="colleges and schoold"
                        >
                          Colleges and Schools
                        </a>
                        <a
                          class="nav-link"
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
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div id="skip-to-content" class="sr-only"></div>
      <div
        style={{
          background: "url('https://picsum.photos/id/1035/1900/500')",
          height: '500px',
        }}
      ></div>
      <div class="bg-gray-6" style={{ height: '70vh' }}></div>
      <div class="bg-gray-5" style={{ height: '70vh' }}></div>
      <div class="bg-gray-4" style={{ height: '70vh' }}></div>
    </main>
  </>
);

export const Partner = (
  <>
    <header id="asu-header" class="fixed-top">
      <div id="wrapper-header-top">
        <div class="container-xl">
          <div class="row">
            <div id="header-top" class="col-12">
              <nav class="nav" aria-label="Top">
                <a
                  class="nav-link sr-only sr-only-focusable"
                  href="#skip-to-content"
                >
                  Skip to main content
                </a>
                <a
                  class="nav-link sr-only sr-only-focusable"
                  href="http://asu.edu/accessibility/feedback?a11yref=unity-design-system"
                >
                  Report an accessibility problem
                </a>
                <a
                  class="nav-link"
                  href="https://asu.edu"
                  data-ga-header-section="topbar"
                  data-ga-header="asu home"
                >
                  ASU Home
                </a>
                <a
                  class="nav-link"
                  href="https://my.asu.edu"
                  data-ga-header-section="topbar"
                  data-ga-header="my asu"
                >
                  My ASU
                </a>
                <a
                  class="nav-link"
                  href="https://www.asu.edu/academics/colleges-schools"
                  data-ga-header-section="topbar"
                  data-ga-header="colleges and schools"
                >
                  Colleges and Schools
                </a>
                <div class="nav-link login-status">
                  <a class="name" href="#">
                    Sparky
                  </a>
                  <a
                    class="signout"
                    href="#"
                    data-ga-header-section="topbar"
                    data-ga-header="sign out"
                  >
                    Sign Out
                  </a>
                </div>
                <form
                  class="form-inline"
                  action="https://search.asu.edu/search"
                  method="get"
                  name="gs"
                >
                  <input
                    class="form-control"
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
        <div class="container-xl">
          <div class="row">
            <div id="header-main" class="col-12">
              <nav class="navbar-expand-xl" aria-label="Main">
                <div class="partner">
                  <div class="partners-logos">
                    <a href="#" data-ga-header="starbucks logo">
                      <img src={starbucksLogo} alt="Asu Starbucks logo" />
                    </a>
                    <a href="#" data-ga-header="asu logo">
                      <img
                        class="vert"
                        src={vertlogo}
                        alt="Arizona State University"
                      />
                      <img
                        class="horiz"
                        src={horizlogo}
                        alt="Arizona State University"
                      />
                    </a>
                  </div>
                  <button
                    class="navbar-toggler collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#menubar"
                    aria-controls="menubar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    data-ga-header-event="collapse"
                    data-ga-header-type="click"
                    data-ga-header="menu button label"
                  >
                    <span title="Open mobile menu" class="fa fa-bars"></span>
                    <span title="Close mobile menu" class="fa-stack">
                      <i class="fa fa-circle fa-stack-2x"></i>
                      <i class="fa fa-times fa-stack-1x"></i>
                    </span>
                  </button>
                </div>
                <div class="navbar-container">
                  <div
                    class="collapse navbar-collapse w-100 justify-content-between"
                    id="menubar"
                  >
                    <div class="navbar-nav">
                      <a
                        class="nav-link nav-link-home active"
                        href="/"
                        data-ga-header="home button"
                      >
                        <span class="d-xl-none">Home</span>
                        <span title="Home" class="fas fa-fw fa-home"></span>
                      </a>
                      <a
                        class="nav-link"
                        href="#"
                        data-ga-header="Link option 1"
                      >
                        Link option 1
                      </a>
                      <a
                        class="nav-link"
                        href="#"
                        data-ga-header="Link option 2"
                      >
                        Link option 2
                      </a>
                      <a
                        class="nav-link"
                        href="#"
                        data-ga-header="Link option 3"
                      >
                        Link option 3
                      </a>
                      <a
                        class="nav-link"
                        href="#"
                        data-ga-header="Link option 4"
                      >
                        Link option 4
                      </a>
                      <a
                        class="nav-link"
                        href="#"
                        data-ga-header="Link option 5"
                      >
                        Link option 5
                      </a>
                      <div class="nav-item dropdown header-dropdown-1">
                        <a
                          class="nav-link"
                          href="#"
                          id="dropdown-one-col"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-ga-header="Link option 6"
                          data-ga-header-event="collapse"
                          data-ga-header-type="click"
                        >
                          Link option 6<span class="fa fa-chevron-down"></span>
                        </a>
                        <div
                          class="dropdown-menu dropdown-columns"
                          aria-labelledby="dropdown-one-col"
                        >
                          <div class="dropdown-col">
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="Sublink 1"
                              data-ga-header-component="link option 6"
                            >
                              Sublink 1
                            </a>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="Sublink 2"
                              data-ga-header-component="link option 6"
                            >
                              Sublink 2
                            </a>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-ga-header="Sublink 3"
                              data-ga-header-component="link option 6"
                            >
                              Sublink 3
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end .navbar-nav */}
                    <form class="navbar-site-buttons form-inline">
                      <a
                        href="#"
                        class="btn btn-md btn-maroon"
                        data-ga-header="cta button 1"
                      >
                        CTA Button 1
                      </a>
                      <a
                        href="#"
                        class="btn btn-md btn-dark"
                        data-ga-header="cta button 2"
                      >
                        CTA Button 2
                      </a>
                    </form>
                    <div class="navbar-mobile-footer pinned">
                      <form
                        class="form-inline navbar-mobile-search"
                        action="https://search.asu.edu/search"
                        method="get"
                        name="gs"
                      >
                        <input
                          class="form-control"
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
                      <div class="nav-grid">
                        <a
                          class="nav-link"
                          href="https://asu.edu"
                          data-ga-header-section="topbar"
                          data-ga-header="asu home"
                        >
                          ASU Home
                        </a>
                        <a
                          class="nav-link"
                          href="https://my.asu.edu"
                          data-ga-header-section="topbar"
                          data-ga-header="my asu"
                        >
                          My ASU
                        </a>
                        <a
                          class="nav-link"
                          href="https://www.asu.edu/academics/colleges-schools"
                          data-ga-header-section="topbar"
                          data-ga-header="colleges and schools"
                        >
                          Colleges and Schools
                        </a>
                        <a
                          class="nav-link"
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
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="wrapper" id="page-wrapper">
      <div id="skip-to-content" class="sr-only"></div>
      {/* Page content starts here */}
    </div>
  </>
);
