import * as http from "http";

const PORT = 3000;

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    const url = req.url;

    if (url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Home</h1>");
    } else if (url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>About</h1>");
    } else if (url === "/my-account") {
      res.writeHead(403, { "Content-Type": "text/plain" });
      res.end("You have no access to this page");
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Page not found");
    }
  }
);

server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
