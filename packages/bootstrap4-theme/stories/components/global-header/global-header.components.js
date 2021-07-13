import React from 'react';
import horizlogo from './arizona-state-university-logo.png';
import vertlogo from './arizona-state-university-logo-vertical.png';

export const Basic = (props) => {
  return (
      <div>
        <header id="asu-header" class="fixed-top">

          <div id="wrapper-header-top">
            <div class="container-xl">
              <div class="row">
                <div id="header-top" class="col-12">
                  <nav class="nav" aria-label="Top">
                    <a class="nav-link sr-only sr-only-focusable" href="#skip-to-content">Skip to main content</a>
                    <a class="nav-link sr-only sr-only-focusable" href="http://asu.edu/accessibility/feedback?a11yref=unity-design-system">Report an accessibility problem</a>
                    <a class="nav-link" href="https://asu.edu">ASU home</a>
                    <a class="nav-link" href="https://my.asu.edu">My ASU</a>
                    <a class="nav-link" href="https://asu.edu/about/colleges-and-schools">Colleges and Schools</a>
                    <div class="nav-link login-status">
                      <a class="name" href="#">Sparky</a>
                      <a class="signout" href="#">Sign Out</a>
                    </div>
                    <form class="form-inline" action="https://search.asu.edu/search" method="get" name="gs">
                      <input class="form-control" type="search" name="q" aria-labelledby="header-top-search" required />
                      <label id="header-top-search">Search asu.edu</label>
                      <input name="site" value="default_collection" type="hidden" />
                      <input name="sort" value="date:D:L:d1" type="hidden" />
                      <input name="output" value="xml_no_dtd" type="hidden" />
                      <input name="ie" value="UTF-8" type="hidden" />
                      <input name="oe" value="UTF-8" type="hidden" />
                      <input name="client" value="asu_frontend" type="hidden" />
                      <input name="proxystylesheet" value="asu_frontend" type="hidden"></input>
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
                  <nav class="navbar navbar-expand-xl" aria-label="Main" >

                    <a class="navbar-brand" href="#">
                      <img class="vert" src={vertlogo} alt="Arizona State University" />
                      <img class="horiz" src={horizlogo} alt="Arizona State University" />
                    </a>

                    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#menubar" aria-controls="menubar" aria-expanded="false" aria-label="Toggle navigation">
                      <span title="Open mobile menu" class="fa fa-bars"></span>
                      <span title="Close mobile menu" class="fa-stack">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-times fa-stack-1x"></i>
                      </span>
                    </button>

                    <div class="navbar-container">

                      <div class="title subdomain-name">University Technology Office</div>

                      <div class="collapse navbar-collapse w-100 justify-content-between" id="menubar">
                        <div class="navbar-nav">

                          <a class="nav-link nav-link-home active" href="/">
                            <span class="d-xl-none">Home</span>
                            <span title="Home" class="fas fa-fw fa-home"></span>
                          </a>

                          <a class="nav-link" href="#">Tour</a>
                          <a class="nav-link" href="#">Research</a>

                          <div class="nav-item dropdown">
                            <a class="nav-link" href="#" id="dropdown-one-col" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Dropdown
                              <span class="fa fa-chevron-down"></span>
                            </a>
                            <div class="dropdown-menu dropdown-columns" aria-labelledby="dropdown-one-col">
                              <div class="dropdown-col">
                                <a class="dropdown-item" href="#">Navigation link</a>
                                <a class="dropdown-item" href="#">Another link</a>
                                <a class="dropdown-item" href="#">This dropdown menu has a maximum width</a>
                              </div>
                            </div>
                          </div>

                        </div>{/* end .navbar-nav */}

                        <form class="navbar-site-buttons form-inline">
                          <a href="#" class="btn btn-md btn-maroon">Call to action</a>
                        </form>

                        <div class="navbar-mobile-footer">
                          <form class="form-inline navbar-mobile-search" action="https://search.asu.edu/search" method="get" name="gs">
                            <input class="form-control" type="search" name="q" aria-label="Search" placeholder="Search asu.edu" />
                            <input name="site" value="default_collection" type="hidden" />
                            <input name="sort" value="date:D:L:d1" type="hidden" />
                            <input name="output" value="xml_no_dtd" type="hidden" />
                            <input name="ie" value="UTF-8" type="hidden" />
                            <input name="oe" value="UTF-8" type="hidden" />
                            <input name="client" value="asu_frontend" type="hidden" />
                            <input name="proxystylesheet" value="asu_frontend" type="hidden" />
                          </form>
                          <div class="nav-grid">
                            <a class="nav-link" href="https://asu.edu">ASU home</a>
                            <a class="nav-link" href="https://my.asu.edu">My ASU</a>
                            <a class="nav-link" href="https://asu.edu/about/colleges-and-schools">Colleges and Schools</a>
                            <div class="nav-link login-status">
                              Sparky<a class="signout" href="https://webapp4.asu.edu/myasu/Signout">Sign Out</a>
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
    )
  };
