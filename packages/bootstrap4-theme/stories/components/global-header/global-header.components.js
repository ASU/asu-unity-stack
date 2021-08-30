import React from 'react';
import horizlogo from './arizona-state-university-logo.png';
import vertlogo from './arizona-state-university-logo-vertical.png';
import starbucksLogo from './asu-starbucks.png';

export const Basic = (
  <div>
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
                <a class="nav-link" href="https://asu.edu">
                  ASU Home
                </a>
                <a class="nav-link" href="https://my.asu.edu">
                  My ASU
                </a>
                <a
                  class="nav-link"
                  href="https://www.asu.edu/academics/colleges-schools"
                >
                  Colleges and Schools
                </a>
                <div class="nav-link login-status">
                  <a class="name" href="#">
                    Sparky
                  </a>
                  <a class="signout" href="#">
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
                <a class="navbar-brand" href="#">
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
                >
                  <span title="Open mobile menu" class="fa fa-bars"></span>
                  <span title="Close mobile menu" class="fa-stack">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-times fa-stack-1x"></i>
                  </span>
                </button>
                <div class="navbar-container">
                  <div class="title subdomain-name">
                    University Technology Office
                  </div>
                  <div
                    class="collapse navbar-collapse w-100 justify-content-between"
                    id="menubar"
                  >
                    <div class="navbar-nav">
                      <a class="nav-link nav-link-home active" href="/">
                        <span class="d-xl-none">Home</span>
                        <span title="Home" class="fas fa-fw fa-home"></span>
                      </a>
                      <a class="nav-link" href="#">
                        Tour
                      </a>
                      <a class="nav-link" href="#">
                        Research
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
                        >
                          Dropdown
                          <span class="fa fa-chevron-down"></span>
                        </a>
                        <div
                          class="dropdown-menu dropdown-columns"
                          aria-labelledby="dropdown-one-col"
                        >
                          <div class="dropdown-col">
                            <a class="dropdown-item" href="#">
                              Navigation link
                            </a>
                            <a class="dropdown-item" href="#">
                              Another link
                            </a>
                            <a class="dropdown-item" href="#">
                              This dropdown menu has a maximum width
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end .navbar-nav */}
                    <form class="navbar-site-buttons form-inline">
                      <a href="#" class="btn btn-md btn-maroon">
                        Call to action
                      </a>
                    </form>
                    <div class="navbar-mobile-footer">
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
                        <a class="nav-link" href="https://asu.edu">
                          ASU Home
                        </a>
                        <a class="nav-link" href="https://my.asu.edu">
                          My ASU
                        </a>
                        <a
                          class="nav-link"
                          href="https://www.asu.edu/academics/colleges-schools"
                        >
                          Colleges and Schools
                        </a>
                        <div class="nav-link login-status">
                          Sparky
                          <a
                            class="signout"
                            href="https://webapp4.asu.edu/myasu/Signout"
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
  </div>
);

export const DropDownMenus = (
  <div>
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
                <a class="nav-link" href="https://asu.edu">
                  ASU Home
                </a>
                <a class="nav-link" href="https://my.asu.edu">
                  My ASU
                </a>
                <a
                  class="nav-link"
                  href="https://www.asu.edu/academics/colleges-schools"
                >
                  Colleges and Schools
                </a>
                <div class="nav-link login-status">
                  <a class="signin" href="#">
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
                <a class="navbar-brand" href="#">
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
                >
                  <span title="Open mobile menu" class="fa fa-bars"></span>
                  <span title="Close mobile menu" class="fa-stack">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-times fa-stack-1x"></i>
                  </span>
                </button>
                <div class="navbar-container">
                  <div class="title">
                    <a href="#" class="unit-name">
                      Ira A. Fulton Schools of Engineering
                    </a>
                    <span class="subdomain-name">
                      School of Computing, Informatics, and Decisions Systems
                      Engineering
                    </span>
                  </div>
                  <div
                    class="collapse navbar-collapse w-100 justify-content-between"
                    id="menubar"
                  >
                    <div class="navbar-nav">
                      <a class="nav-link nav-link-home" href="/">
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
                        >
                          Drop (1 Col)
                          <span class="fa fa-chevron-down"></span>
                        </a>
                        <div
                          class="dropdown-menu dropdown-columns"
                          aria-labelledby="dropdown-one-col"
                        >
                          <div class="dropdown-col">
                            <a class="dropdown-item" href="#">
                              Massa nunc dictum nam venenatis
                            </a>
                            <a class="dropdown-item" href="#">
                              Dis quam quis nisi ligula
                            </a>
                            <a class="dropdown-item" href="#">
                              Dapibus lorem
                            </a>
                            <a class="dropdown-item" href="#">
                              Nisi ligula eget orci
                            </a>
                            <a href="#" class="btn btn-sm btn-dark col-btn">
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
                        >
                          Drop (2 col)
                          <span class="fa fa-chevron-down"></span>
                        </a>
                        <div
                          class="dropdown-menu dropdown-columns"
                          aria-labelledby="dropdown-two-col"
                        >
                          <div class="dropdown-col">
                            <h3>Column One</h3>
                            <a class="dropdown-item" href="#">
                              Dis quam quis nisi ligula
                            </a>
                            <a class="dropdown-item" href="#">
                              Nisi ligula eget orci
                            </a>
                            <a class="dropdown-item" href="#">
                              Massa nunc dictum nam venenatis
                            </a>
                            <a class="dropdown-item" href="#">
                              Dapibus lorem
                            </a>
                            <a class="dropdown-item" href="#">
                              Ultricies tellus eu
                            </a>
                            <a class="dropdown-item" href="#">
                              Pretium massa quis vitae pede quisque nulla
                              ultricies sit
                            </a>
                            <a class="dropdown-item" href="#">
                              Quis tempus aliquam semper imperdiet
                            </a>
                          </div>
                          <div class="dropdown-col">
                            <h3>Brady Header</h3>
                            <a class="dropdown-item" href="#">
                              Here's the story
                            </a>
                            <a class="dropdown-item" href="#">
                              Of a man named Brady
                            </a>
                            <a class="dropdown-item" href="#">
                              Who was busy with three
                            </a>
                            <a class="dropdown-item" href="#">
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
                        >
                          Mega Menu (3 col)
                          <span class="fa fa-chevron-down"></span>
                        </a>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="megamenu-three-col"
                        >
                          <div class="container">
                            <div class="row">
                              <div class="col-lg">
                                <h3>Column one</h3>
                                <a class="dropdown-item" href="#">
                                  Recommended max of ten links
                                </a>
                                <a class="dropdown-item" href="#">
                                  Second link in the list
                                </a>
                                <a class="dropdown-item" href="#">
                                  Here is link number three
                                </a>
                                <a class="dropdown-item" href="#">
                                  Dapibus lorem
                                </a>
                                <a class="dropdown-item" href="#">
                                  Ultricies tellus eu
                                </a>
                                <a class="dropdown-item" href="#">
                                  Quis tempus aliquam semper imperdiet
                                </a>
                              </div>
                              <div class="col-lg">
                                <h3>Column two</h3>
                                <a class="dropdown-item" href="#">
                                  Dis quam quis nisi ligula
                                </a>
                                <a class="dropdown-item" href="#">
                                  Nisi ligula eget orci
                                </a>
                                <a class="dropdown-item" href="#">
                                  Massa nunc dictum nam venenatis
                                </a>
                              </div>
                              <div class="col-lg-4">
                                <h3>Last call 'em</h3>
                                <a class="dropdown-item" href="#">
                                  Navigation link
                                </a>
                                <a class="dropdown-item" href="#">
                                  Another link as an example of when something
                                  wraps
                                </a>
                                <a class="dropdown-item" href="#">
                                  Culture of inclusion
                                </a>
                                <a class="dropdown-item" href="#">
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
                        >
                          Mega Menu (4 col)
                          <span class="fa fa-chevron-down"></span>
                        </a>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="megamenu-four-col"
                        >
                          <div class="container">
                            <div class="row">
                              <div class="col-lg">
                                <h3>Column one</h3>
                                <a class="dropdown-item" href="#">
                                  Navigation link
                                </a>
                                <a class="dropdown-item" href="#">
                                  Second link in the list
                                </a>
                                <a class="dropdown-item" href="#">
                                  Here is link number three
                                </a>
                                <a class="dropdown-item" href="#">
                                  Dapibus lorem
                                </a>
                                <a class="dropdown-item" href="#">
                                  Ultricies tellus eu
                                </a>
                              </div>
                              <div class="col-lg">
                                <h3>Column two</h3>
                                <a class="dropdown-item" href="#">
                                  Nisi eget orci
                                </a>
                                <a class="dropdown-item" href="#">
                                  Dis quam quis nisi ligula
                                </a>
                                <a class="dropdown-item" href="#">
                                  Massa nunc venenatis
                                </a>
                                <a class="dropdown-item" href="#">
                                  Pede quisque nulla ultricies sit
                                </a>
                                <a class="dropdown-item" href="#">
                                  Dapibus lorem
                                </a>
                                <a class="dropdown-item" href="#">
                                  Ultricies tellus eu
                                </a>
                                <a class="dropdown-item" href="#">
                                  Quis tempus aliquam semper imperdiet
                                </a>
                              </div>
                              <div class="col-lg">
                                <h3>Column three</h3>
                                <a class="dropdown-item" href="#">
                                  Dis quam quis nisi ligula
                                </a>
                                <a class="dropdown-item" href="#">
                                  Nisi ligula eget orci
                                </a>
                                <a class="dropdown-item" href="#">
                                  Massa nunc dictum nam venenatis
                                </a>
                                <a class="dropdown-item" href="#">
                                  Dapibus lorem
                                </a>
                                <a class="dropdown-item" href="#">
                                  Ultricies tellus eu
                                </a>
                                <a class="dropdown-item" href="#">
                                  Pretium massa quis vitae pede quisque nulla
                                  ultricies sit
                                </a>
                                <a class="dropdown-item" href="#">
                                  Semper imperdiet
                                </a>
                              </div>
                              <div class="col-lg">
                                <h3>Column four</h3>
                                <a class="dropdown-item" href="#">
                                  Dis quam quis nisi ligula
                                </a>
                                <a class="dropdown-item" href="#">
                                  Nisi ligula eget orci
                                </a>
                                <a class="dropdown-item" href="#">
                                  Dapibus lorem
                                </a>
                              </div>
                            </div>
                            <div class="row with-buttons">
                              <div class="col-lg-12">
                                <a href="#" class="btn btn-sm btn-gold">
                                  Mega menu CTA 1
                                </a>
                                <a href="#" class="btn btn-sm btn-maroon">
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
                        >
                          Mega Menu (5 col)
                          <span class="fa fa-chevron-down"></span>
                        </a>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="megamenu-five-col"
                        >
                          <div class="container">
                            <div class="row">
                              <div class="col-lg">
                                <h3>Column One</h3>
                                <a class="dropdown-item" href="#">
                                  Navigation link
                                </a>
                                <a class="dropdown-item" href="#">
                                  Second link in the list
                                </a>
                                <a class="dropdown-item" href="#">
                                  Here is link number three
                                </a>
                                <div class="btns-row">
                                  <a
                                    href="#"
                                    class="btn btn-sm btn-dark col-btn"
                                  >
                                    CTA in column
                                  </a>
                                  <a
                                    href="#"
                                    class="btn btn-sm btn-dark col-btn"
                                  >
                                    CTA in column
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg">
                                <h3>Column Two</h3>
                                <a class="dropdown-item" href="#">
                                  Pretium massa quis vitae pede quisque nulla
                                  ultricies sit
                                </a>
                                <a class="dropdown-item" href="#">
                                  Quis tempus aliquam semper imperdiet
                                </a>
                                <a class="dropdown-item" href="#">
                                  Pretium massa quis vitae pede quisque nulla
                                  ultricies sit
                                </a>
                                <a class="dropdown-item" href="#">
                                  Quis tempus aliquam semper imperdiet
                                </a>
                                <a class="dropdown-item" href="#">
                                  Nisi ligula eget orci
                                </a>
                              </div>
                              <div class="col-lg">
                                <h3>Column Three</h3>
                                <a class="dropdown-item" href="#">
                                  Pretium massa quis vitae pede quisque nulla
                                  ultricies sit
                                </a>
                                <a class="dropdown-item" href="#">
                                  Quis tempus aliquam semper imperdiet
                                </a>
                                <a class="dropdown-item" href="#">
                                  Pretium massa quis vitae pede quisque nulla
                                  ultricies sit
                                </a>
                                <a class="dropdown-item" href="#">
                                  Quis tempus aliquam semper imperdiet
                                </a>
                                <a class="dropdown-item" href="#">
                                  Nisi ligula eget orci
                                </a>
                                <a class="dropdown-item" href="#">
                                  Dapibus lorem
                                </a>
                                <a href="#" class="btn btn-sm btn-dark col-btn">
                                  CTA in Column
                                </a>
                              </div>
                              <div class="col-lg">
                                <h3>Column Four</h3>
                                <a class="dropdown-item" href="#">
                                  Dis quam quis nisi ligula
                                </a>
                                <a class="dropdown-item" href="#">
                                  Nisi ligula eget orci
                                </a>
                                <a class="dropdown-item" href="#">
                                  Dapibus lorem
                                </a>
                                <a href="#" class="btn btn-sm btn-dark col-btn">
                                  CTA in Column
                                </a>
                              </div>
                              <div class="col-lg">
                                <h3>Mambo #5</h3>
                                <a class="dropdown-item" href="#">
                                  Jump up and down and
                                </a>
                                <a class="dropdown-item" href="#">
                                  Shake your head to the sound
                                </a>
                                <a class="dropdown-item" href="#">
                                  Put your hand on the ground
                                </a>
                                <a class="dropdown-item" href="#">
                                  Take one step left and one step right
                                </a>
                                <a class="dropdown-item" href="#">
                                  If it looks like this
                                </a>
                                <a class="dropdown-item" href="#">
                                  Then you doing it right
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end .navbar-nav */}
                    <div class="navbar-mobile-footer">
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
                        <a class="nav-link" href="https://asu.edu">
                          ASU Home
                        </a>
                        <a class="nav-link" href="https://my.asu.edu">
                          My ASU
                        </a>
                        <a
                          class="nav-link"
                          href="https://www.asu.edu/academics/colleges-schools"
                        >
                          Colleges and Schools
                        </a>
                        <a
                          class="nav-link"
                          href="https://weblogin.asu.edu/cgi-bin/login"
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
  </div>
);

export const NoNavigation = (
  <div>
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
                <a class="nav-link" href="https://asu.edu">
                  ASU Home
                </a>
                <a class="nav-link" href="https://my.asu.edu">
                  My ASU
                </a>
                <a
                  class="nav-link"
                  href="https://www.asu.edu/academics/colleges-schools"
                >
                  Colleges and Schools
                </a>
                <div class="nav-link login-status">
                  <a class="name" href="#">
                    Sparky
                  </a>
                  <a class="signout" href="#">
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
                <a class="navbar-brand" href="#">
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
                >
                  <span title="Open mobile menu" class="fa fa-bars"></span>
                  <span title="Close mobile menu" class="fa-stack">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-times fa-stack-1x"></i>
                  </span>
                </button>
                <div class="navbar-container no-links">
                  <div class="title subdomain-name">
                    <a href="#">Landing page title</a>
                  </div>
                  <div
                    class="collapse navbar-collapse w-100 justify-content-between"
                    id="menubar"
                  >
                    <div class="navbar-mobile-footer">
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
                        <a class="nav-link" href="https://asu.edu">
                          ASU Home
                        </a>
                        <a class="nav-link" href="https://my.asu.edu">
                          My ASU
                        </a>
                        <a
                          class="nav-link"
                          href="https://www.asu.edu/academics/colleges-schools"
                        >
                          Colleges and Schools
                        </a>
                        <a
                          class="nav-link"
                          href="https://weblogin.asu.edu/cgi-bin/login"
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
  </div>
);

export const NoNavigationAndWithButtons = (
  <div>
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
                <a class="nav-link" href="https://asu.edu">
                  ASU Home
                </a>
                <a class="nav-link" href="https://my.asu.edu">
                  My ASU
                </a>
                <a
                  class="nav-link"
                  href="https://www.asu.edu/academics/colleges-schools"
                >
                  Colleges and Schools
                </a>
                <div class="nav-link login-status">
                  <a class="signin" href="#">
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
                <a class="navbar-brand" href="#">
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
                >
                  <span title="Open mobile menu" class="fa fa-bars"></span>
                  <span title="Close mobile menu" class="fa-stack">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-times fa-stack-1x"></i>
                  </span>
                </button>
                <div class="navbar-container no-links">
                  <div class="title subdomain-name">
                    <a href="#">Landing page title</a>
                  </div>
                  <div
                    class="collapse navbar-collapse w-100 justify-content-between"
                    id="menubar"
                  >
                    <form class="navbar-site-buttons form-inline">
                      <a href="#" class="btn btn-md btn-maroon">
                        CTA button 1
                      </a>
                      <a href="#" class="btn btn-md btn-dark">
                        CTA button 2
                      </a>
                    </form>
                    <div class="navbar-mobile-footer">
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
                        <a class="nav-link" href="https://asu.edu">
                          ASU Home
                        </a>
                        <a class="nav-link" href="https://my.asu.edu">
                          My ASU
                        </a>
                        <a
                          class="nav-link"
                          href="https://www.asu.edu/academics/colleges-schools"
                        >
                          Colleges and Schools
                        </a>
                        <a
                          class="nav-link"
                          href="https://weblogin.asu.edu/cgi-bin/login"
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
  </div>
);

export const ScrolledState = (
  <div>
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
                <a class="nav-link" href="https://asu.edu">
                  ASU Home
                </a>
                <a class="nav-link" href="https://my.asu.edu">
                  My ASU
                </a>
                <a
                  class="nav-link"
                  href="https://www.asu.edu/academics/colleges-schools"
                >
                  Colleges and Schools
                </a>
                <div class="nav-link login-status">
                  <a class="name" href="#">
                    Sparky
                  </a>
                  <a class="signout" href="#">
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
                <a class="navbar-brand" href="#">
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
                >
                  <span title="Open mobile menu" class="fa fa-bars"></span>
                  <span title="Close mobile menu" class="fa-stack">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-times fa-stack-1x"></i>
                  </span>
                </button>
                <div class="navbar-container">
                  <div class="title subdomain-name">
                    University Technology Office
                  </div>
                  <div
                    class="collapse navbar-collapse w-100 justify-content-between"
                    id="menubar"
                  >
                    <div class="navbar-nav">
                      <a class="nav-link nav-link-home active" href="/">
                        <span class="d-xl-none">Home</span>
                        <span title="Home" class="fas fa-fw fa-home"></span>
                      </a>
                      <a class="nav-link" href="#">
                        Admission
                      </a>
                      <a class="nav-link" href="#">
                        Alumni
                      </a>
                      <a class="nav-link" href="#">
                        Giving
                      </a>
                      <a class="nav-link" href="#">
                        Contact
                      </a>
                      <a class="nav-link" href="#">
                        Tour
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
                        >
                          Dropdown
                          <span class="fa fa-chevron-down"></span>
                        </a>
                        <div
                          class="dropdown-menu dropdown-columns"
                          aria-labelledby="dropdown-one-col"
                        >
                          <div class="dropdown-col">
                            <a class="dropdown-item" href="#">
                              Navigation link
                            </a>
                            <a class="dropdown-item" href="#">
                              Another link
                            </a>
                            <a class="dropdown-item" href="#">
                              This dropdown menu has a maximum width
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
                        >
                          Dropdown 2<span class="fa fa-chevron-down"></span>
                        </a>
                        <div
                          class="dropdown-menu dropdown-columns"
                          aria-labelledby="dropdown-one-col"
                        >
                          <div class="dropdown-col">
                            <a class="dropdown-item" href="#">
                              Navigation link
                            </a>
                            <a class="dropdown-item" href="#">
                              Another link
                            </a>
                            <a class="dropdown-item" href="#">
                              This dropdown menu has a maximum width
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
                        >
                          Dropdown 3<span class="fa fa-chevron-down"></span>
                        </a>
                        <div
                          class="dropdown-menu dropdown-columns"
                          aria-labelledby="dropdown-one-col"
                        >
                          <div class="dropdown-col">
                            <a class="dropdown-item" href="#">
                              Navigation link
                            </a>
                            <a class="dropdown-item" href="#">
                              Another link
                            </a>
                            <a class="dropdown-item" href="#">
                              This dropdown menu has a maximum width
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end .navbar-nav */}
                    <div class="navbar-mobile-footer">
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
                        <a class="nav-link" href="https://asu.edu">
                          ASU Home
                        </a>
                        <a class="nav-link" href="https://my.asu.edu">
                          My ASU
                        </a>
                        <a
                          class="nav-link"
                          href="https://www.asu.edu/academics/colleges-schools"
                        >
                          Colleges and Schools
                        </a>
                        <a
                          class="nav-link"
                          href="https://weblogin.asu.edu/cgi-bin/login"
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
  </div>
);

export const Partner = (
  <div>
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
                <a class="nav-link" href="https://asu.edu">
                  ASU Home
                </a>
                <a class="nav-link" href="https://my.asu.edu">
                  My ASU
                </a>
                <a
                  class="nav-link"
                  href="https://www.asu.edu/academics/colleges-schools"
                >
                  Colleges and Schools
                </a>
                <div class="nav-link login-status">
                  <a class="name" href="#">
                    Sparky
                  </a>
                  <a class="signout" href="#">
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
                    <a href="#">
                      <img src={starbucksLogo} alt="Asu Starbucks logo" />
                    </a>
                    <a href="#">
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
                      <a class="nav-link nav-link-home active" href="/">
                        <span class="d-xl-none">Home</span>
                        <span title="Home" class="fas fa-fw fa-home"></span>
                      </a>
                      <a class="nav-link" href="#">
                        Admission
                      </a>
                      <a class="nav-link" href="#">
                        Alumni
                      </a>
                      <a class="nav-link" href="#">
                        Giving
                      </a>
                      <a class="nav-link" href="#">
                        Contact
                      </a>
                      <a class="nav-link" href="#">
                        Tour
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
                        >
                          Dropdown
                          <span class="fa fa-chevron-down"></span>
                        </a>
                        <div
                          class="dropdown-menu dropdown-columns"
                          aria-labelledby="dropdown-one-col"
                        >
                          <div class="dropdown-col">
                            <a class="dropdown-item" href="#">
                              Navigation link
                            </a>
                            <a class="dropdown-item" href="#">
                              Another link
                            </a>
                            <a class="dropdown-item" href="#">
                              This dropdown menu has a maximum width
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end .navbar-nav */}
                    <form class="navbar-site-buttons form-inline">
                      <a href="#" class="btn btn-md btn-maroon">
                        CTA Button 1
                      </a>
                      <a href="#" class="btn btn-md btn-dark">
                        CTA Button 2
                      </a>
                    </form>
                    <div class="navbar-mobile-footer">
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
                        <a class="nav-link" href="https://asu.edu">
                          ASU Home
                        </a>
                        <a class="nav-link" href="https://my.asu.edu">
                          My ASU
                        </a>
                        <a
                          class="nav-link"
                          href="https://www.asu.edu/academics/colleges-schools"
                        >
                          Colleges and Schools
                        </a>
                        <a
                          class="nav-link"
                          href="https://weblogin.asu.edu/cgi-bin/login"
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
  </div>
);
