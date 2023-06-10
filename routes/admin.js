const express = require("express");
const path = require("path");
const rootDir = require("./../util/path");

const router = express.Router();

router.get("/addproduct", (req, res, next) => {
  console.log("inProduct");
  res.sendFile(path.join(rootDir, "views", "addProduct.html"));
});
router.post("/addproduct", (req, res, next) => {
  console.log(req.body);
  res.redirect("/shop");
});

module.exports = router;
