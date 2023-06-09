// const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/addproduct", (req, res, next) => {
  console.log("inProduct");
  res.send(
    "<form action='/product' method='POST' ><input  type='text' name='title'  /><br><input  type='text' name='size'  /><br><button type='submit'>submit</button></form>"
  );
});
app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
app.use("/", (req, res, next) => {
  //   console.log("in another middleware");
  res.send("<h1>Hello from Express.js</h1>");
});
app.listen(3000);
// const server = http.createServer(app);

// server.listen(3000);

//middleware will run for each incoming request
//next -> is function will be passed by experss to use method

// send allows to send response and this allows to attach body which of any type and this body will automatically detects the content type and send to the response.
//allows the request to cantinue to next middleware in the line
// app.use("/", (req, res, next) => {
//   //   console.log("this always runs");
//   next();
// });
