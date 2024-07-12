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
    <link rel="stylesheet" href="./@asu/unity-bootstrap-theme/css/unity-bootstrap-theme.bundle.css">

    <script type="text/javascript" src="./@asu/unity-bootstrap-theme/js/bootstrap.bundle.min.js"></script>
    <script type="text/javascript" src="./@asu/unity-bootstrap-theme/js/data-layer.js"></script>
    <script type="text/javascript" src="./@asu/unity-bootstrap-theme/js/global-header.js"></script>

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
            <nav class="nav" aria-label="ASU">
              <a class="nav-link visually-hidden visually-hidden-focusable" href="#skip-to-content">Skip to Content</a>
              <a class="nav-link visually-hidden visually-hidden-focusable" href="http://asu.edu/accessibility/feedback?a11yref=unity-design-system">Report an accessibility problem</a>
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
            <div class="navbar navbar-expand-xl" aria-label="Main">
              <div class="container-fluid">

                <a class="navbar-brand" href="#">
                  <img class="vert" src="./@asu/unity-bootstrap-theme/img/asu-logo/arizona-state-university-logo-vertical.png" alt="Arizona State University" />
                  <img class="horiz" src="./@asu/unity-bootstrap-theme/img/asu-logo/arizona-state-university-logo.png" alt="Arizona State University" />
                </a>

                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#menubar" aria-controls="menubar" aria-expanded="false" aria-label="Toggle navigation">
                  <span title="Open mobile menu" class="fa fa-bars"></span>
                  <span title="Close mobile menu" class="fa-stack">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-times fa-stack-1x"></i>
                  </span>
                </button>

                <div class="navbar-container no-links">

                  <div class="title subdomain-name">
                    <a data-ga-header="Subdomain name" href="#" title="Subdomain name home page">Unity Design</a>
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
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  </header>

  <main>
    <div id="skip-to-content" class="visually-hidden"></div>

    <div class="uds-hero-sm">
      <img class="hero" src="https://images.unsplash.com/photo-1454117096348-e4abbeba002c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=265&ixlib=rb-1.2.1&q=80&w=1920" alt="" />
      <h1><span class="highlight-black">Unity Component Explorer</span></h1>
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
          <h2>Unity Design System UI Kit</h2>
          <p>Guidelines, standards, and best-practices for Unity Design System across all ASU web projects.</p>
          <p><a class="btn btn-maroon btn-medium" href="https://zeroheight.com/9f0b32a56">Explore the UDS UI Kit</a></p>
        </div>

        <div class="col-md-6 pb-8">
          <h2>Unity Design System Styles Library</h2>
          <p>A community-built design system built with Adobe XD.</p>
          <p><a class="btn btn-maroon btn-medium" href="https://shared-assets.adobe.com/link/fb14b288-bf63-47e0-5d30-384de5560455">View the document</a></p>
        </div>

        <div class="col-md-6 pb-8">
          <h2>ASU Header</h2>
          <p>Guidelines, requirements and best practices for using the ASU Branded Header in your site.</p>
          <p><a class="btn btn-maroon btn-medium" href="asuheader/index.html">View the guide</a></p>
        </div>

        <div class="col-md-6 pb-8">
          <h2>Google Tag Manager and data layer</h2>
          <p>Ensure your site or application has the necessary analytics integrations.</p>
          <p><a class="btn btn-maroon btn-medium" href="gtm-datalayer/index.html">GTM and data layer guide</a></p>
        </div>

        <div class="col-md-6 pb-8">
          <h2>Unity Design System Package Registry</h2>
          <p><a href="https://github.com/ASU/asu-unity-stack#-how-to-use-the-private-package-registry">
            Learn how to use the private package registry</a> to incorporate
            Unity packages in your site or application. Note: You must belong to the ASU GitHub organization
            to access these packages. <a href="https://asu.edu/webservices">Request access to the Unity Design System GitHub Repo</a> if you need that.</p>
          <p><a class="btn btn-maroon btn-medium" href="https://github.com/orgs/ASU/packages?repo_name=asu-unity-stack">Visit package registry</a></p>
        </div>

        ${packages.map(generateRow).join("")}

      </div>
    </div>

  </main>

  <footer id="asu-footer" role="contentinfo" data-elastic-exclude="data-elastic-exclude">
    <div class="wrapper" id="wrapper-footer-innovation">
      <div class="container" id="footer-innovation">
        <div class="row">
          <div class="col">
            <div class="d-flex footer-innovation-links">
              <a
                class="img-link"
                href="https://www.asu.edu/rankings"
              >
                <img
                  src="./@asu/unity-bootstrap-theme/img/innovation-lockup/on-gold/200420-GlobalFooter-No1InnovationLockup.png"
                  alt="Number one in the U.S. for innovation. #1 ASU, #2 Stanford, #3 MIT. - U.S. News and World Report, 5 years, 2016-2020"
                />
              </a>
              <nav class="nav" aria-label="University Services">
                <a
                  class="nav-link"
                  href="https://www.asu.edu/about/locations-maps"
                >
                  Maps and Locations
                </a>
                <a
                  class="nav-link"
                  href="https://www.asu.edu/asujobs"
                >
                  Jobs
                </a>
                <a
                  class="nav-link"
                  href="https://isearch.asu.edu/"
                >
                  Directory
                </a>
                <a
                  class="nav-link"
                  href="https://www.asu.edu/about/contact"
                >
                  Contact ASU
                </a>
                <a
                  class="nav-link"
                  href="https://my.asu.edu/"
                >
                  My ASU
                </a>
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
            <nav
              class="nav colophon"
              aria-label="University Legal and Compliance"
            >
              <a
                class="nav-link"
                href="https://www.asu.edu/about/copyright-trademark"
              >
                Copyright and Trademark
              </a>
              <a
                class="nav-link"
                href="https://www.asu.edu/accessibility/"
              >
                Accessibility
              </a>
              <a
                class="nav-link"
                href="https://www.asu.edu/about/privacy"
              >
                Privacy
              </a>
              <a
                class="nav-link"
                href="https://www.asu.edu/about/terms-of-use"
              >
                Terms of Use
              </a>
              <a
                class="nav-link"
                href="https://www.asu.edu/emergency/"
              >
                Emergency
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <script>
    window.initDataLayer();
    window.initGlobalHeader();
  </script>
  </body>
</html>
`;
