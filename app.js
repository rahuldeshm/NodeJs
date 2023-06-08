//Creating a Node Server.

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log("Rahul");
  //process.exit(); to exit the registered event listener.
  //hard exit our loop so our project shut down.

  if (req.url === "/") {
    fs.readFile(
      "C:\\Users\\RAHUL\\Desktop\\Node.js\\Hello.text",
      "utf8",
      (e, d) => {
        res.write("<html>");
        res.write("<head> <title> enter message</title></head>");
        res.write(
          `<body><p>${d}</p><form action='/message' method='POST'><input type='text' name='message' /><button type='submit'>submit</button></form></body>`
        );
        res.write("</html>");
        return res.end();
      }
    );
  } // if (req.url === "/node") {
  //   res.write("<body><h1>Welcome to my node.js project</body></h1>");
  // } else if (req.url === "/about") {
  //   res.write("<body><h1>Welcome to about page .</body></h1>");}
  else if (req.url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (e) => {
      console.log(e);
      body.push(e);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("hello.text", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      }); //this is sync file and this block the stack
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title> My first backend</title></head>");
    res.write("<body><h1>form submitted</body></h1>");
    res.write("</html>");
    res.end();
  }
});

server.listen(4000);
