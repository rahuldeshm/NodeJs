const http = require("http");
const express = require("express");

const app = express();
app.use((req, res, next) => {
  console.log("in the middleware");
  next(); //allows the request to cantinue to next middleware in the line
}); //middleware will run for each incoming request
//next -> is function will be passed by experss to use method
app.use((req, res, next) => {
  console.log("in another middleware");
  res.send({ key: "somevalue" });
  // send allows to send response and this allows to attach body which of any type and this body will automatically detects the content type and send to the response.
});
const server = http.createServer(app);

server.listen(3000);
