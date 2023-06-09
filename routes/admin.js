const express = require("express");

const router = express.Router();

router.get("/addproduct", (req, res, next) => {
  console.log("inProduct");
  res.send(
    "<form action='/admin/addproduct' method='POST' ><input  type='text' name='title'  /><br><input  type='text' name='size'  /><br><button type='submit'>submit</button></form>"
  );
});
router.post("/addproduct", (req, res, next) => {
  console.log(req.body);
  res.redirect("/shop");
});

module.exports = router;
