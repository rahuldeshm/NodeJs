// const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);
app.use("/contactus", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "contactus.html"));
});
app.use("/success", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "success.html"));
});
app.use("/", (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "notFound.html"));
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
