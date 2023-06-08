//Creating a Node Server.

const http = require("http");

const server = http.createServer((req, res) => {
  // console.log("Rahul");
  //process.exit(); to exit the registered event listener.
  //hard exit our loop so our project shut down.
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head> <title> My first backend</title></head>");
  if (req.url === "/node") {
    res.write("<body><h1>Welcome to my node.js project</body></h1>");
  } else if (req.url === "/about") {
    res.write("<body><h1>Welcome to about page .</body></h1>");
  } else {
    res.write("<body><h1>welcome to home page of our project</body></h1>");
  }
  res.write("</html>");
  res.end();
});

server.listen(4000);
