const express = require("express");
const router = express.Router();
const {
  clients,
  featured,
  findResult,
  images,
  sideProjects,
  wip,
} = require("../lib/data");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "HoseaCodes",
    findResult,
    featured,
    wip,
    clients,
    images,
    sideProjects,
  });
});

module.exports = router;
