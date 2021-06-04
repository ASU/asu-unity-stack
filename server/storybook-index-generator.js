const path = require("path");

const generateRow = (package, index) => `
  <div class="col-md-6 pb-8">
    <h2>${package.name}</h2>
    <p class="description">${package.description}</p>
    <p><a class="btn btn-maroon btn-medium" href="${path.join(
      package.name,
      "index.html"
    )}">Launch</a></p>
  </div>
`;

module.exports = generateHTML = packages => `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./@asu-design-system/bootstrap4-theme/css/bootstrap-asu.css">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
    <script type="text/javascript" src="./@asu-design-system/bootstrap4-theme/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="./@asu-design-system/bootstrap4-theme/js/global-header.js"></script>
    <script type="text/javascript" src="./@asu-design-system/bootstrap4-theme/assets/fontawesome/js/all.js"></script>

    <style>
    #header-top input[type='search'] {
      background: url(/bootstrap4-theme/src/img/font-awesome-svg/search-gray-6.svg) no-repeat 10px 50%;
      background-size: 12px;
    }

    #header-top input[type='search']:focus {
      background: url(/bootstrap4-theme/src/img/font-awesome-svg/search-gray-5.svg) no-repeat 10px 50%;
      background-size: 12px;
      background-color: #ffffff;
    }
    </style>

    <title>Unity Design Kit</title>
  </head>
  <body>

  <!-- ******************* Google Tag Manager ASU Universal ******************* -->
  <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-KDWN8Z"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-KDWN8Z');</script>
  <!-- End Google Tag Manager ASU Universal -->

  <header id="asu-header" class="fixed-top">

    <div id="wrapper-header-top">
      <div class="container-xl">
        <div class="row">
          <div id="header-top" class="col-12">
            <nav class="nav" aria-label="Top">
              <a class="nav-link sr-only sr-only-focusable" href="#skip-to-content">Skip to Content</a>
              <a class="nav-link sr-only sr-only-focusable" href="http://asu.edu/accessibility/feedback?a11yref=unity-design-system">Report an accessibility problem</a>
              <a class="nav-link" href="https://asu.edu">ASU home</a>
              <a class="nav-link" href="https://my.asu.edu">My ASU</a>
              <a class="nav-link" href="https://asu.edu/about/colleges-and-schools">Colleges and schools</a>
              <!-- <div class="nav-link login-status">
                <a class="signin" href="https://weblogin.asu.edu/cgi-bin/login">Sign in</a>
              </div> -->
              <form class="form-inline" action="https://search.asu.edu/search" method="get" name="gs">
                <input class="form-control" type="search" name="q" aria-labelledby="header-top-search" required>
                <label id="header-top-search">Search ASU</label>
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
      <div class="container-xl">
        <div class="row">
          <div id="header-main" class="col-12">
            <nav class="navbar navbar-expand-xl" aria-label="Main">

              <a class="navbar-brand" href="#">
                <img class="vert" src="./@asu-design-system/bootstrap4-theme/img/asu-logo/arizona-state-university-logo-vertical.png" alt="Arizona State University" />
                <img class="horiz" src="./@asu-design-system/bootstrap4-theme/img/asu-logo/arizona-state-university-logo.png" alt="Arizona State University" />
              </a>

              <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#menubar" aria-controls="menubar" aria-expanded="false" aria-label="Toggle navigation">
                <span title="Open mobile menu" class="fa fa-bars"></span>
                <span title="Close mobile menu" class="fa-stack">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-times fa-stack-1x"></i>
                </span>
              </button>

              <div class="navbar-container no-links">

                <div class="title subdomain-name">
                  Unity Design
                </div>

                <div class="collapse navbar-collapse w-100 justify-content-between" id="menubar">

                  <!-- <form class="navbar-site-buttons form-inline">
                    <a href="#" class="btn btn-md btn-maroon">CTA Button 1</a>
                    <a href="#" class="btn btn-md btn-dark">CTA Button 2</a>
                  </form> -->

                  <div class="navbar-mobile-footer">
                    <form class="form-inline navbar-mobile-search" action="https://search.asu.edu/search" method="get" name="gs">
                      <input class="form-control" type="search" name="q" aria-label="Search" placeholder="Search ASU">
                      <input name="site" value="default_collection" type="hidden">
                      <input name="sort" value="date:D:L:d1" type="hidden">
                      <input name="output" value="xml_no_dtd" type="hidden">
                      <input name="ie" value="UTF-8" type="hidden">
                      <input name="oe" value="UTF-8" type="hidden">
                      <input name="client" value="asu_frontend" type="hidden">
                      <input name="proxystylesheet" value="asu_frontend" type="hidden">
                    </form>
                    <div class="nav-grid">
                      <a class="nav-link" href="https://asu.edu">ASU home</a>
                      <a class="nav-link" href="https://my.asu.edu">My ASU</a>
                      <a class="nav-link" href="https://asu.edu/about/colleges-and-schools">Colleges and schools</a>
                      <a class="nav-link" href="https://weblogin.asu.edu/cgi-bin/login">Sign in</a>
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

    <div class="uds-hero uds-hero-sm" style="background-image: linear-gradient(180deg, #19191900 0%, #191919c9 100%), url('https://uto.asu.edu/sites/default/files/general/clay-banks-ljqarjajotc-unsplash.jpg');">
      <div class="container uds-hero-container">
        <h1 class="heading heading-one col-md-8"><span class="highlight highlight-gold highlight-heading-one">Unity Component Explorer</span></h1>
      </div>
    </div>

    <div class="container">
      <div class="row my-6">
        <div class="col-md-8">
          <p class="lead">A design system enables your product teams to share learnings across silos, avoid duplicate work and focus more on user experience problems rather than UI problems, complete with guidelines, principles, philosophies and code.</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row my-6">

        <div class="col-md-6 pb-8">
          <h2>Unity Design Kit</h2>
          <p>A community-built design system built with Adobe XD.</p>
          <p><a class="btn btn-maroon btn-medium" href="https://xd.adobe.com/view/56f6cb78-9af5-4b12-b4ce-ef319f71113f-03a5/">View the document</a></p>
        </div>

        <div class="col-md-6 pb-8">
          <h2>ASU Header</h2>
          <p>Guidelines, requirements and best practices for using the ASU Branded Header in your site.</p>
          <p><a class="btn btn-maroon btn-medium" href="asuheader">View the guide</a></p>
        </div>

        <div class="col-md-6 pb-8">
          <h2>Unity Design System Package Registry</h2>
          <p>Learn how to install and use the packages listed below in your ASU projects. On your first visit, follow steps 1 and 3, skipping 2. Users cannot publish packages.
          If you receive errors attempting to install packages from the registry, please ensure the line <pre>@asu-design-system:registry=https://registry.web.asu.edu</pre> is in your <pre>~/.npmrc</pre> file.</p>
          <p><a class="btn btn-maroon btn-medium" href="https://registry.web.asu.edu/">Visit package registry</a></p>
        </div>

        ${packages.map(generateRow).join("")}

      </div>
    </div>

  </main>

  <footer role="contentinfo">
    <!-- <div class="wrapper" id="wrapper-endorsed-footer">
      <div class="container" id="endorsed-footer">
        <div class="row">

          <div class="col-md" id="endorsed-logo">
            <img src="./@asu-design-system/bootstrap4-theme/img/endorsed-logo/asu_universitytechoffice_horiz_white.png" alt="ASU University Technology Office Arizona State University."/>
          </div>

          <div class="col-md" id="social-media">
            <nav class="nav" aria-label="Social Media">
              <a class="nav-link" href="#"><span title="Facebook Social Media Icon" class="fab fa-facebook-square"></span></a>
              <a class="nav-link" href="#"><span title="Twitter Social Media Icon" class="fab fa-twitter-square"></span></a>
              <a class="nav-link" href="#"><span title="LinkedIn Social Media Icon" class="fab fa-linkedin"></span></a>
              <a class="nav-link" href="#"><span title="Instagram Social Media Icon" class="fab fa-instagram-square"></span></a>
              <a class="nav-link" href="#"><span title="YouTube Social Media Icon" class="fab fa-youtube-square"></span></a>
            </nav>
          </div>

        </div>
      </div>
    </div> -->

    <div class="wrapper" id="wrapper-footer-innovation">
      <div class="container" id="footer-innovation">
        <div class="row">
          <div class="col">
            <div class="d-flex footer-innovation-links">
              <img src="./@asu-design-system/bootstrap4-theme/img/innovation-lockup/on-gold/200420-GlobalFooter-No1InnovationLockup@2x.png" alt="Number one in the U.S. for innovation. #1 ASU, #2 Stanford, #3 MIT. - U.S. News and World Report, 5 years, 2016-2020">
              <nav class="nav" aria-label="University Services">
                <a class="nav-link" href="https://www.asu.edu/map/">Maps and Locations</a>
                <a class="nav-link" href="https://www.asu.edu/asujobs">Jobs</a>
                <a class="nav-link" href="https://isearch.asu.edu/">Directory</a>
                <a class="nav-link" href="https://www.asu.edu/contactasu/">Contact ASU</a>
                <a class="nav-link" href="https://my.asu.edu/">My ASU</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-colophon">
      <div class="container" id="footer-colophon">
        <div class="row">
          <div class="col">
            <nav class="nav colophon" aria-label="University legal and compliance">
              <a class="nav-link" href="https://www.asu.edu/copyright/">Copyright and trademark</a>
              <a class="nav-link" href="https://www.asu.edu/accessibility/">Accessibility</a>
              <a class="nav-link" href="https://www.asu.edu/privacy/">Privacy</a>
              <a class="nav-link" href="https://www.asu.edu/tou/">Terms of use</a>
              <a class="nav-link" href="https://www.asu.edu/emergency/">Emergency</a>
            </nav>
          </div>
        </div>
      </div>
    </div>

  </footer>

  </body>

</html>
`;
