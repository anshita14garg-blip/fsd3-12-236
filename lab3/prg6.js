import { createReadStream } from "fs";
import http from "http";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.end(`
      <h1>Home Page</h1>
      <a href="/product">Product</a><br>
      <a href="/contact">Contact</a>
    `);
  } else if (req.url === "/product") {
    const stream = createReadStream("product.html", {
      encoding: "utf-8",
    });
    stream.pipe(res);
  } else if (req.url === "/contact") {
    const stream = createReadStream("contact.html", {
      encoding: "utf-8",
    });
    stream.pipe(res);
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
});

server.listen(3000, () => {
  console.log("prg6 is running...");
});
