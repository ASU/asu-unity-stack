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
    const pageHTML = fs.readFileSync(PAGE_PATH + campusPages[campus]);

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
