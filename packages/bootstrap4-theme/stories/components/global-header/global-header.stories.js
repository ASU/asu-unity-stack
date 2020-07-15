import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import horizlogo from './arizona-state-university-logo.png';
import vertlogo from './arizona-state-university-logo-vertical.png';

import '../../../src/js/global-header.js';

storiesOf('Components/Global Header', module)
  .addParameters({
    happo: false,
  })

  .add('Global Header', () => `
<header id="asu-header" class="fixed-top">

  <div id="wrapper-header-top">
    <div class="container-lg">
      <div class="row">
        <div id="header-top" class="col-12">
          <nav class="nav" aria-label="Top">
            <a class="nav-link" href="#" >ASU Home</a>
            <a class="nav-link" href="#" >My ASU</a>
            <a class="nav-link" href="#" >Colleges and Schools</a>
            <a class="nav-link" href="#" >Sign in</a>
            <form class="form-inline" action="https://search.asu.edu/search" method="get" name="gs">
              <input class="form-control" type="search" name="q" placeholder="Search ASU" aria-label="Search">
              <input name="site" value="default_collection" type="hidden">
              <input name="sort" value="date:D:L:d1" type="hidden">
              <input name="output" value="xml_no_dtd" type="hidden">
              <input name="ie" value="UTF-8" type="hidden">
              <input name="oe" value="UTF-8" type="hidden">
              <input name="client" value="asu_frontend" type="hidden">
              <input name="proxystylesheet" value="asu_frontend" type="hidden">
            </form>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <div id="wrapper-header-main">
    <div class="container-lg">
      <div class="row">
        <div id="header-main" class="col-12">
          <nav class="navbar navbar-expand-lg" aria-label="Main" >

            <a class="navbar-brand" href="#">
              <img class="vert" src="${vertlogo}" alt="Arizona State University" />
              <img class="horiz" src="${horizlogo}" alt="Arizona State University" />
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menubar" aria-controls="menubar" aria-expanded="false" aria-label="Toggle navigation">
              <span title="Hamburger menu" class="fa fa-bars"></span>
            </button>

            <div class="navbar-container">
              <div class="title">
                <span class="unit-name">Ira A. Fulton Schools of Engineering</span>
                <span class="subdomain-name">School of Computing, Informatics, and Decisions Systems Engineering</span>
                <!-- <span class="subdomain-name">Sub Domain Name</span> -->
              </div>

              <!-- markup for just a subdomain name
              <div class="title subdomain-name">
                School of Computing, Informatics, and Decisions Systems
              </div>
              -->

              <div class="collapse navbar-collapse w-100 justify-content-between" id="menubar">
                <div class="navbar-nav">

                  <a class="nav-link nav-link-home active" href="#">
                    <span class="d-lg-none">Home</span>
                    <span title="Home" class="fas fa-fw fa-home"></span>
                  </a>

                  <!-- <a class="nav-link" href="#">Contact</a> -->

                  <div class="nav-item dropdown">
                    <a class="nav-link" href="#" id="dropdown-one-col" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Drop (1 Col)
                      <span class="fa fa-chevron-down"></span>
                    </a>
                    <div class="dropdown-menu dropdown-columns" aria-labelledby="dropdown-one-col">
                      <div class="dropdown-col">
                        <a class="dropdown-item" href="#">Navigation Link</a>
                        <a class="dropdown-item" href="#">Another Link</a>
                        <a class="dropdown-item" href="#">Does this dropdown menu have a maximum width or will it go on forever?</a>
                        <a href="#" class="btn btn-sm btn-dark">CTA Action 2</a>
                      </div>
                    </div>
                  </div>

                  <div class="nav-item dropdown">
                    <a class="nav-link" href="#" id="dropdown-two-col" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Drop (2 col)
                      <span class="fa fa-chevron-down"></span>
                    </a>
                    <div class="dropdown-menu dropdown-columns" aria-labelledby="dropdown-two-col">
                      <div class="dropdown-col">
                        <h3>Brady Header</h3>
                        <a class="dropdown-item" href="#">Here's the story</a>
                        <a class="dropdown-item" href="#">Of a man named Brady</a>
                        <a class="dropdown-item" href="#">Who was busy with three</a>
                        <a class="dropdown-item" href="#">Boys of his own</a>
                      </div>
                      <div class="dropdown-col">
                        <h3>Last Call 'Em</h3>
                        <a class="dropdown-item" href="#">Navigation Link</a>
                        <a class="dropdown-item" href="#">Another Link as an example of when something wraps</a>
                        <a class="dropdown-item" href="#">You Win A Prize</a>
                        <a href="#" class="btn btn-sm btn-dark">CTA Action 2</a>
                      </div>
                    </div>
                  </div>

                  <div class="nav-item dropdown megamenu">
                    <a class="nav-link" href="#" id="megamenu-three-col" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Mega Menu (3 col)
                      <span class="fa fa-chevron-down"></span>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="megamenu-three-col">
                      <div class="container">
                        <div class="row">
                          <div class="col-lg-4">
                            <h3>Column Header</h3>
                            <a class="dropdown-item" href="#">Navigation Link</a>
                            <a class="dropdown-item" href="#">Another Link</a>
                            <a class="dropdown-item" href="#">The Batman Link</a>
                            <a href="#" class="btn btn-sm btn-dark">CTA Action 2</a>
                          </div>
                          <div class="col-lg-4">
                            <h3>Brady Header</h3>
                            <a class="dropdown-item" href="#">Here's the story</a>
                            <a class="dropdown-item" href="#">Of a man named Brady</a>
                            <a class="dropdown-item" href="#">Who was busy with three</a>
                            <a class="dropdown-item" href="#">Boys of his own</a>
                          </div>
                          <div class="col-lg-4">
                            <h3>Last Call 'Em</h3>
                            <a class="dropdown-item" href="#">Navigation Link</a>
                            <a class="dropdown-item" href="#">Another Link as an example of when something wraps</a>
                            <a class="dropdown-item" href="#">You Win A Prize</a>
                            <a href="#" class="btn btn-sm btn-dark">CTA Action 2</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div class="nav-item dropdown megamenu">
                    <a class="nav-link" href="#" id="megamenu-four-col" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Mega Menu (4 col)
                      <span class="fa fa-chevron-down"></span>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="megamenu-four-col">
                      <div class="container">
                        <div class="row">
                          <div class="col-lg-3">
                            <h3>Column One</h3>
                            <a class="dropdown-item" href="#">Navigation Link</a>
                            <a class="dropdown-item" href="#">Another Link</a>
                            <a class="dropdown-item" href="#">will it go on forever?</a>
                          </div>
                          <div class="col-lg-3">
                            <h3>Column Two</h3>
                            <a class="dropdown-item" href="#">Navigation Link</a>
                            <a class="dropdown-item" href="#">Another Link</a>
                            <a class="dropdown-item" href="#">Does this dropdown menu</a>
                          </div>
                          <div class="col-lg-3">
                            <h3>Column Two</h3>
                            <a class="dropdown-item" href="#">Navigation Link</a>
                            <a class="dropdown-item" href="#">Another Link</a>
                            <a class="dropdown-item" href="#">Navigation Link</a>
                            <a class="dropdown-item" href="#">Another Link</a>
                            <a class="dropdown-item" href="#">Navigation Link</a>
                            <a class="dropdown-item" href="#">Another Link</a>
                          </div>
                          <div class="col-lg-3">
                            <h3>Column four</h3>
                            <a class="dropdown-item" href="#">Navigation Link</a>
                            <a class="dropdown-item" href="#">Another Link</a>
                            <a class="dropdown-item" href="#">Does this dropdown menu</a>
                            <a class="dropdown-item" href="#">Make my content shine</a>
                          </div>
                        </div>
                        <div class="row with-buttons">
                          <div class="col-lg-12">
                            <a href="#" class="btn btn-sm btn-maroon">Mega Menu CTA 1</a>
                            <a href="#" class="btn btn-sm btn-dark">Mega Menu CTA 2</a>
                          </div>
                        </div>

                      </div><!-- end .container -->
                    </div>

                  </div>

                  <div class="nav-item dropdown megamenu">
                    <a class="nav-link" href="#" id="megamenu-five-col" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Mega Menu (5 col)
                      <span class="fa fa-chevron-down"></span>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="megamenu-five-col">

                      <div class="container">
                        <div class="row">
                          <div class="col-lg">
                            <h3>Column One</h3>
                            <a class="dropdown-item" href="#">Navigation Link</a>
                            <a class="dropdown-item" href="#">Another Link</a>
                            <a class="dropdown-item" href="#">will it go on forever?</a>
                            <a href="#" class="btn btn-sm btn-dark">CTA in Column</a>
                          </div>
                          <div class="col-lg">
                            <h3>Column Two</h3>
                            <a class="dropdown-item" href="#">Navigation Link</a>
                            <a class="dropdown-item" href="#">Another Link</a>
                            <a class="dropdown-item" href="#">Does this dropdown menu</a>
                            <a href="#" class="btn btn-sm btn-dark">CTA in Column</a>
                          </div>
                          <div class="col-lg">
                            <h3>Column Two</h3>
                            <a class="dropdown-item" href="#">Navigation Link</a>
                            <a class="dropdown-item" href="#">Another Link</a>
                            <a class="dropdown-item" href="#">Does this dropdown menu</a>
                            <a class="dropdown-item" href="#">Navigation Link</a>
                            <a class="dropdown-item" href="#">Another Link</a>
                            <a href="#" class="btn btn-sm btn-dark">CTA in Column</a>
                          </div>
                          <div class="col-lg">
                            <h3>Column four</h3>
                            <a class="dropdown-item" href="#">Navigation Link</a>
                            <a class="dropdown-item" href="#">Another Link</a>
                            <a class="dropdown-item" href="#">Does this dropdown menu</a>
                            <a href="#" class="btn btn-sm btn-dark">CTA in Column</a>
                          </div>
                          <div class="col-lg">
                            <h3>Mambo #5</h3>
                            <a class="dropdown-item" href="#">Jump up and down and</a>
                            <a class="dropdown-item" href="#">Shake your head to the sound</a>
                            <a class="dropdown-item" href="#">Put your hand on the ground</a>
                            <a class="dropdown-item" href="#">Take one step left and one step right</a>
                            <a class="dropdown-item" href="#">If it looks like this</a>
                            <a class="dropdown-item" href="#">Then you doing it right</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div><!-- end .navbar-nav -->

                <form class="navbar-site-buttons form-inline">
                  <a href="#" class="btn btn-sm btn-maroon">End Navbar CTA</a>
                  <a href="#" class="btn btn-sm btn-dark">End Navbar CTA</a>
                </form>

                <div class="navbar-mobile-footer">
                  <form class="navbar-mobile-search">
                    <input class="form-control" type="search" placeholder="Search ASU" aria-label="Search">
                  </form>
                  <div class="nav-grid">
                    <a class="nav-link" href="#">ASU Home</a>
                    <a class="nav-link" href="#">My ASU</a>
                    <a class="nav-link" href="#">Colleges and Schools</a>
                    <a class="nav-link" href="#">Sign in</a>
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
<div class="bg-gray-4" style="width:100%; height:50vh;"></div>
<div class="bg-gray-6" style="width:100%; height:50vh;"></div>
<div class="bg-info" style="width:100%; height:50vh;"></div>
<div class="bg-success" style="width:100%; height:50vh;"></div>
<div class="bg-maroon" style="width:100%; height:50vh;"></div>
<div class="bg-gold" style="width:100%; height:50vh;"></div>

  `)
