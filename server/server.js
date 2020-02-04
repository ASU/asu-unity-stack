const express = require("express");
const path = require("path");
const nunjucks = require("nunjucks");

// import prerendering functions for ASU Brand header
const brandRender = require("../packages/asu-brand/dist/asu-brand.ssr");

const app = express();

//configure nunjucks
nunjucks.configure("server/views", {
  autoescape: false,
  express: app
});

// configure packages directory to serve static files (bundles)
app.use(express.static('packages'));

/*****
 * Kitchen sink page
 * Serve HTML page which tests bundled packages
 */
app.get("/", function(req, res) {
  // todo: add not found message
  res.render("index.html", {
    // include the pre-rendered header in the template
    header: brandRender.renderedHeader
  });
});

// Server side rendering of ASU Header
app.get("/header", brandRender.sendASUHeader);

// Server side rendering of ASU Footer
//app.get('/footer', sendASUFooter);

// Start server
app.listen(3000);
