const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { vehicle_type, release_year, sort, select } = req.query;
  const queryObject = {};

  if (vehicle_type) {
    queryObject.vehicle_type = { $regex: vehicle_type, $options: "i" };
  }
  if (release_year) {
    queryObject.release_year = release_year;
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

  console.log(queryObject);

  const myProducts = await apiData;
  res.status(200).json({ myProducts, nbHits: myProducts.length });
};

const getAllProductsTesting = async (req, res) => {
  const myProducts = await Product.find(req.query).select("price");
  res.status(200).json({ myProducts });
};

module.exports = { getAllProducts, getAllProductsTesting };
