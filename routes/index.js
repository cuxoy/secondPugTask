var express = require("express");
var router = express.Router();

ъ;
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
