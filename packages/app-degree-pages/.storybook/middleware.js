// @ts-check
const { createProxyMiddleware } = require("http-proxy-middleware");
const express = require("express");
const fs = require("fs");

const dataSearch = require("../__mocks__/data/degree-search.json");

const getFullUrl = req =>
  req.protocol + "://" + req.get("host") + req.originalUrl;

function mockDegreeSeearch(router) {
  router.use(express.urlencoded({ extended: true }));
  router.use(express.json());

  router.get("/api/mocks/degree-search", (req, res) => {
    console.log("> request from " + getFullUrl(req));

    res.send(dataSearch);
  });

  /**
   * TODO: this was necessary to test the default images inside the folder assets.
   * for some reason the storybook webpack which config is into the file main.js
   * it does not allow the plugin CopyWebpackPlugin to work properly
   * new CopyWebpackPlugin({
   *    patterns: [
   *      // TODO: mock may not be needed anymore
   *      { from: path.join(PROJECT_DIR, "__mocks__"), to: "__mocks__" },
   *      { from: path.join(PROJECT_DIR, "src/assets"), to: "assets" },
   *    ],
   *   ),
   */
  router.get(/^\/assets\/(img|video)/, (req, res) => {
    console.log("> request asset from " + getFullUrl(req));
    console.log("> url: " + req.originalUrl);
    const PAGE_PATH = "./src/" + req.originalUrl;

    const img = fs.readFileSync(PAGE_PATH);
    res.send(img);
  });

  router.get(/^\/examples\/assets\/(img|video)/, (req, res) => {
    console.log("> request mock image from " + getFullUrl(req));
    console.log("> url: " + req.originalUrl);
    const PAGE_PATH = "./" + req.originalUrl;

    const img = fs.readFileSync(PAGE_PATH);
    res.send(img);
  });

  router.get(/^\/programs\/tooltipcampus/, (req, res) => {
    console.log("> request from " + getFullUrl(req));
     const campus = req.query.campus;
    const campusPages = {
      ASULOCAL: "asu-local.html",
      TEMPE: "asu-tempe.html",
      ONLNE: "asu-online.html",
    };
    const PAGE_PATH = "./__mocks__/pages/tooltip-campus/";
    let pageHTML;

    if (campusPages[campus]) {
      pageHTML = fs.readFileSync(PAGE_PATH + campusPages[campus]);
    } else {
      pageHTML = `
            <html>
            <head></head>
            <body>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, deserunt.
                NO MAP FOR THIS CAMPUS
            </body>
          </html>
      `;
    }

    res.send(pageHTML);
  });

  // {DOMAIN_URL}/programs/tooltipdynamic/accelerate/FAARTHBA/null/ASU00/undergrad
  router.get(/^\/programs\/tooltipdynamic\/accelerate/, (req, res) => {
    console.log("> request from " + getFullUrl(req));

    const pageHTML = `
    <html>
    <head></head>
    <body>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, deserunt.
        This program allows students to accelerate their studies by combining
        undergraduate with graduate coursework, which may allow them to earn a
        bachelor's and a master's degree in as few as five years (for some
        programs). <br /><br />Each program has requirements students must meet to
        be eligible for consideration. Acceptance to the graduate program requires
        a separate application. During their junior year, eligible students are
        advised by their academic departments to apply.
      </div>
    </body>
  </html>
    `;

    res.send(pageHTML);
  });

}

module.exports = mockDegreeSeearch;
