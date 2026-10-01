import express from "express";
import path from "path";
import { fileURLToPath } from "node:url";

const app = express();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.get("/", (req, res) => {
  res.sendFile(path.join(dirname, "pages", "product.html"));
});
app.get("/about", (req, res) => {
    res.sendFile(path.join(dirname, "pages", "about.html"));
});
app.get("/products", (req, res) => {
  res.sendFile(path.join(dirname, "pages", "products.html"));
});

app.use((req, res) => {
    res.status(404).send("<h1>Page not found</h1>");
});