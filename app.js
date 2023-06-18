require("dotenv").config();

const express = require("express");
const app = express();
const connectDb = require("./db/connect");
const port = process.env.PORT || 8000;

const products_routes = require("./routes/products");

connectDb(process.env.MONGODB_URL);

app.get("/", (req, res) => {
  res.send("Hi");
});

app.use("/api/products", products_routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
