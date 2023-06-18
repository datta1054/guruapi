require("dotenv").config();

const connectDb = require("./db/connect");
const Product = require("./models/product");

const productJson = require("./products.json");

const start = async () => {
  try {
    await connectDb(process.env.MONGODB_URL);
    await Product.deleteMany();
    await Product.create(productJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();
