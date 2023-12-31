const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const {
    name,
    vehicle_type,
    release_year,
    sort,
    select,
    price,
    brand,
    min_price,
    max_price,
    min_rating,
    max_rating,
  } = req.query;
  const queryObject = {};

  if (vehicle_type) {
    queryObject.vehicle_type = { $regex: vehicle_type, $options: "i" };
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (brand) {
    queryObject.brand = { $regex: brand, $options: "i" };
  }
  if (release_year) {
    queryObject.release_year = release_year;
  }
  if (price) {
    queryObject.price = price;
  }
  if (min_price) {
    queryObject.price = { $gte: min_price };
  }
  if (max_price) {
    if (queryObject.price) {
      queryObject.price.$lte = max_price;
    } else {
      queryObject.price = { $lte: max_price };
    }
  }
  if (min_rating) {
    queryObject.rating = { $gte: parseFloat(min_rating) };
  }
  if (max_rating) {
    queryObject.rating = { $lte: parseFloat(max_rating) };
  }

  let apiData = Product.find(queryObject);

  if (sort) {
    let sortFix = sort.replace(",", " ");
    apiData = apiData.sort(sortFix);
  }
  if (select) {
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 5;
  let skip = (page - 1) * limit; 

  apiData = apiData.skip(skip).limit(limit);

  console.log(apiData);

  const myProducts = await apiData;
  res.status(200).json({ myProducts, nbHits: myProducts.length });
};

const getAllProductsTesting = async (req, res) => {
  const myProducts = await Product.find(req.query).select("price");
  res.status(200).json({ myProducts });
};

module.exports = { getAllProducts, getAllProductsTesting };
