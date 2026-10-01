import express from "express";

const app = express();

app.get("/", (req, res) => {
//  res.send("Hello Express");
// res.send("<h1>Hello Express</h1>");
 res.send(`
   <h1> Hello Server </h1>
    <h2> I am responding from express framework </h2>
    <h3> The code is minimal and easy to return </h3>
    `)
});
app.get("/about", (req, res) => {
    res.send("<h2></h2>About Page</h2>");
})

app.get("/products", (req, res) => {
   const products = 
    { id: 1, name: "Product 1", price: 100 };
    res.send
});

// this line must be at the end of the file 
app.listen(4444, () => {
  console.log("Prg1  is running at 4444");
});