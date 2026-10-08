import express from "express";
import products from "./products.js";
const app = express();
// returns name , image , price of the product
app.get("/", (req, res) => {
   let sortedProducts = products.map(({name , image, price, id }) => {
    return {name , image, price, id };
   }
  });
res
.status(200)
.json({count:sortedProducts.length, products: sortedProducts });






app.use((req, res) => {
  res.status(404).send("<h1>404 Page Not Found</h1>");
});

app.listen(4444, () => {
  console.log("Prg4 is running at 4444");
});  
