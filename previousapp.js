//Creating a Node Server.
const routes = require("./routes");
const http = require("http");

console.log(routes.someText);
const server = http.createServer((req, res) => {
  // const server = http.createServer(routes) can do like this to
  routes.handler(req, res);
  console.log("Rahul");
  //process.exit(); to exit the registered event listener.
  //hard exit our loop so our project shut down.
});

server.listen(3000);
