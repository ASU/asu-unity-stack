import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import horizlogo from './arizona-state-university-logo.png';
import vertlogo from './arizona-state-university-logo-vertical.png';

storiesOf('Components/Global Header', module)
  .addParameters({
    happo: false,
  })

  .add('Global Header', () => `
<header class="sticky-top">

  <div id="wrapper-header-top">
    <div class="container">
      <div class="row">
        <div id="header-top" class="col-12">
          <nav class="nav" aria-label="Top">
            <a class="nav-link">ASU Home</a>
            <a class="nav-link">My ASU</a>
            <a class="nav-link">Colleges and Schools</a>
            <a class="nav-link">Sign in</a>
            <form class="form-inline"><span class="fa fa-search"></form>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <div id="wrapper-header-main">
    <div class="container-lg">
      <div class="row">
        <div id="header-main" class="col-12">
          <nav class="navbar navbar-expand-lg static-top" aria-label="Main" >

            <a class="navbar-brand" href="#">
              <img class="vert" src="${vertlogo}" alt="ASU Logo Vertical" />
              <img class="horiz" src="${horizlogo}" alt="ASU Logo Horizontal" />
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="fa fa-bars"></span>
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

              <div class="collapse navbar-collapse w-100 justify-content-between" id="navbarResponsive">
                <ul class="navbar-nav">

                  <li class="nav-item nav-link-home active">
                    <a class="nav-link" href="#">
                      <span class="d-lg-none">Home</span>
                      <span title="Home" class="fas fa-home"></span>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                  </li>

                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Drop (1 Col)
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">Navigation Link</a>
                      <a class="dropdown-item" href="#">Another Link</a>
                      <a class="dropdown-item" href="#">Does this dropdown menu have a maximum width or will it go on forever?</a>
                      <a href="#" class="btn btn-sm btn-dark">CTA Action 2</a>
                    </div>
                  </li>

                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Drop (2 col)
                    </a>
                    <div class="dropdown-menu dropdown-columns" aria-labelledby="navbarDropdown">
                      <div class="dropdown-col">
                        <h4>Brady Header</h4>
                        <a class="dropdown-item" href="#">Here's the story</a>
                        <a class="dropdown-item" href="#">Of a man named Brady</a>
                        <a class="dropdown-item" href="#">Who was busy with three</a>
                        <a class="dropdown-item" href="#">Boys of his own</a>
                      </div>
                      <div class="dropdown-col">
                        <h4>Last Call 'Em</h4>
                        <a class="dropdown-item" href="#">Navigation Link</a>
                        <a class="dropdown-item" href="#">Another Link as an example of when something wraps</a>
                        <a class="dropdown-item" href="#">You Win A Prize</a>
                        <a href="#" class="btn btn-sm btn-dark">CTA Action 2</a>
                      </div>
                    </div>
                  </li>

                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Drop (3 col)
                    </a>
                    <div class="dropdown-menu dropdown-columns" aria-labelledby="navbarDropdown">
                      <div class="dropdown-col">
                        <h4>Column Header</h4>
                        <a class="dropdown-item" href="#">Navigation Link</a>
                        <a class="dropdown-item" href="#">Another Link</a>
                        <a class="dropdown-item" href="#">The Batman Link</a>
                        <a href="#" class="btn btn-sm btn-dark">CTA Action 2</a>
                      </div>
                      <div class="dropdown-col">
                        <h4>Brady Header</h4>
                        <a class="dropdown-item" href="#">Here's the story</a>
                        <a class="dropdown-item" href="#">Of a man named Brady</a>
                        <a class="dropdown-item" href="#">Who was busy with three</a>
                        <a class="dropdown-item" href="#">Boys of his own</a>
                      </div>
                      <div class="dropdown-col">
                        <h4>Last Call 'Em</h4>
                        <a class="dropdown-item" href="#">Navigation Link</a>
                        <a class="dropdown-item" href="#">Another Link as an example of when something wraps</a>
                        <a class="dropdown-item" href="#">You Win A Prize</a>
                        <a href="#" class="btn btn-sm btn-dark">CTA Action 2</a>
                      </div>
                    </div>
                  </li>


                  <li class="nav-item dropdown megamenu">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Mega Menu (4 col)
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
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

                        <div class="row">
                          <div class="col-lg-12">
                            <a href="#" class="btn btn-sm btn-maroon">CTA Action 2</a>
                            <a href="#" class="btn btn-sm btn-gold">CTA Action 2</a>
                          </div>
                        </div>

                      </div><!-- end .container -->
                    </div>

                  </li>

                  <li class="nav-item dropdown megamenu">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Mega Menu (5 col)
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">

                        <div class="container">
                          <div class="row">
                            <div class="col-lg">
                              <h3>Column One</h3>
                              <a class="dropdown-item" href="#">Navigation Link</a>
                              <a class="dropdown-item" href="#">Another Link</a>
                              <a class="dropdown-item" href="#">will it go on forever?</a>
                              <a href="#" class="btn btn-sm btn-dark">CTA Action 2</a>
                            </div>
                            <div class="col-lg">
                              <h3>Column Two</h3>
                              <a class="dropdown-item" href="#">Navigation Link</a>
                              <a class="dropdown-item" href="#">Another Link</a>
                              <a class="dropdown-item" href="#">Does this dropdown menu</a>
                              <a href="#" class="btn btn-sm btn-dark">CTA Action 2</a>
                            </div>
                            <div class="col-lg">
                              <h3>Column Two</h3>
                              <a class="dropdown-item" href="#">Navigation Link</a>
                              <a class="dropdown-item" href="#">Another Link</a>
                              <a class="dropdown-item" href="#">Does this dropdown menu</a>
                              <a class="dropdown-item" href="#">Navigation Link</a>
                              <a class="dropdown-item" href="#">Another Link</a>
                              <a href="#" class="btn btn-sm btn-dark">CTA Action 2</a>
                            </div>
                            <div class="col-lg">
                              <h3>Column four</h3>
                              <a class="dropdown-item" href="#">Navigation Link</a>
                              <a class="dropdown-item" href="#">Another Link</a>
                              <a class="dropdown-item" href="#">Does this dropdown menu</a>
                              <a href="#" class="btn btn-sm btn-dark">CTA Action 2</a>
                            </div>
                            <div class="col-lg">
                              <h3>Mambo #5</h3>
                              <a class="dropdown-item" href="#">Jump up and down and</a>
                              <a class="dropdown-item" href="#">Shake your head to the sound</a>
                              <a class="dropdown-item" href="#">Put your hand on the ground</a>
                              <a class="dropdown-item" href="#">Take one step left and one step right</a>
                              <a class="dropdown-item" href="#">And one step right</a>
                              <a class="dropdown-item" href="#">If it looks like this</a>
                              <a class="dropdown-item" href="#">Then you doing it right</a>
                            </div>
                          </div>
                        </div>
                      </div>

                  </li>

                </ul>

                <!-- <form class="form-inline">
                  <a href="#" class="btn btn-sm btn-gold">CTA Action 1</a>
                </form> -->

              </div>
            </div>

          </nav>
        </div>
      </div>
    </div>
  </div>

</header>
<!-- <div style="background-color:#8c1e40; width:100%; height:50vh;"></div> -->

  `)
