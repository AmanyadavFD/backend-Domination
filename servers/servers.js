const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello Node JS");
  } else {
    res.end("Page Not Found !");
  }
});

server.listen(4000);
