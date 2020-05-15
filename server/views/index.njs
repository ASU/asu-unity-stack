<!doctype html>
<html lang="en">

<head>
  <title>ASU Unity Components</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Bootstrap includes for asu-web-standards-bootstrap4-->
  {% include "head.njs" %}
</head>

<body>
  <div class="container">
    <!-- Include pre-rendered AsuBrandHeader React component -->
    <div id="headerContainer">{% include "asu-brand/dist/templates/header.html" %}</div>

    <h1 class="display-1">Unity Kitchen Sink Page</h1>

    <!-- Bootstrap 4 HTML Components -->
    <section id="bootstrap-components">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h2 class="display-3">ASU Unity Bootstrap 4 Components</h2>
          <p class="lead">This section contains HTML elements styled and controlled by Bootstrap CSS and JS.</p>
        </div>
      </div>
      {% include "asu-web-standards-bootstrap4.njs" %}
    </section>

    <!-- React Components-->
    <section id="react-components">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h2 class="display-3">ASU Unity React Components</h2>
          <p class="lead">This section contains components rendered by ReactJS.</p>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <h3 class="display-4">ASU GIS Feature Picker</h3>
          <div id="gisFPContainer"></div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <h3 class="display-4">ASU Hero Image Carousel</h3>
          <div id="heroContainer"></div>
        </div>
      </div>
    </section>
  </div>
  <footer>
    {% include "scripts.njs" %}
  </footer>
</body>

</html>
