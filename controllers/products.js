const product = require("../model/product");

const getAllProducts = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;
  const queryObject = {};

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  if (featured) {
    queryObject.featured = featured;
  }

  let apiData = product.find(queryObject);

  if (sort) {
    let shortFix = sort.split(",").join(" ");
    apiData = apiData.sort(shortFix);
  }

  if (select) {
    let selectFix = select.replace(",", " ");
    apiData = apiData.select(selectFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 3;

  let skip = (page - 1) * limit;
  apiData = apiData.skip(skip).limit(limit);

  const myData = await apiData;
  res.status(200).json({ myData, nbHits:myData.length });
};

const getAllProductsTesting = async (req, res) => {
  const myData = await product.find(req.query).select("name company");
  res.status(200).json({ myData });
};

module.exports = {
  getAllProducts,
  getAllProductsTesting,
};
