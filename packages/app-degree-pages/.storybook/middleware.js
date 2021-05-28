// @ts-check
const express = require("express");
const dataSearch = require("../mocks/data/degree-search.json");

function mockDegreeSeearch(router) {
  router.use(express.urlencoded({ extended: true }));
  router.use(express.json());
  router.get("/api/get-orders/:orderId", (request, response) => {
    if (request.params.orderId === "error") {
      response.status(500).send("Something broke!");
    }
    response.send({ data: { text: "hello world" } });
  });

  router.get("/api/mocks/degree-search", (request, response) => {
    response.send(dataSearch);
  });
}

module.exports = mockDegreeSeearch;
