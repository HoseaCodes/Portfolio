const express = require("express");

const detailRouter = express.Router();
const {
  engineer,
  featured,
  images,
  property,
  propertyowner,
  response,
  useremail,
} = require("../lib/data");

detailRouter.get("/", async (req, res) => {
  async function main() {
    res.render("details", {
      engineer,
      featured,
      images,
      property: property,
      useremail: useremail[0],
      propertyowner: propertyowner[0],
      response: response,
    });
    return "done propertydetails";
  }
  main();
});

module.exports = detailRouter;
