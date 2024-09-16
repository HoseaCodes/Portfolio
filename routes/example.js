const express = require("express");

const exampleRouter = express.Router();
const {
  featured,
  images,
  property,
  propertyowner,
  response,
  useremail,
} = require("../lib/data");

exampleRouter.get("/", async (req, res) => {
  async function main() {
    res.render("example", {
      featured,
      images,
      property: property,
      useremail: useremail[0],
      propertyowner: propertyowner[0],
      response: response,
    });
    return "done example";
  }
  main();
});

module.exports = exampleRouter;
