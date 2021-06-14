// @ts-check
const express = require("express");
const fs = require("fs");

const { createProxyMiddleware } = require("http-proxy-middleware");
const dataSearch = require("../mocks/data/degree-search.json");

// const app = express();
// app.use(
//   "/programs/**",
//   createProxyMiddleware({
//     target: "https://webapp4.asu.edu",
//     changeOrigin: true,
//   })
// );

const getFullUrl = req =>
  req.protocol + "://" + req.get("host") + req.originalUrl;

function mockDegreeSeearch(router) {
  router.use(express.urlencoded({ extended: true }));
  router.use(express.json());

  router.get("/api/mocks/degree-search", (req, res) => {
    console.log("> request from " + getFullUrl(req));

    res.send(dataSearch);
  });

  router.get(/^\/programs\/tooltipcampus/, (req, res) => {
    console.log("> request from " + getFullUrl(req));
    // res.redirect('https://webapp4.asu.edu/' + req.originalUrl)
    const campus = req.query.campus;
    const campusPages = {
      ASULOCAL: "asu-local.html",
      TEMPE: "asu-tempe.html",
      ONLNE: "asu-online.html",
    };
    const PAGE_PATH = "./mocks/pages/tooltip-campus/";
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

  // https://webapp4.asu.edu/programs/tooltipdynamic/accelerate/FAARTHBA/null/ASU00/undergrad
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

  //   router.get(
  //     "/programs/**",
  //     createProxyMiddleware({
  //       target: "https://webapp4.asu.edu",
  //       changeOrigin: true,
  //     })
  //   );
}

module.exports = mockDegreeSeearch;
