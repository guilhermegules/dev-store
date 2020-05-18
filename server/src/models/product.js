const mongoose = require("../database/database");
const Schema = mongoose.Schema;
const products = require("../database/data");

const productSchema = new Schema({
  name: String,
  img: String,
  price: Number,
  type: String,
  description: String,
});

const Product = mongoose.model("Product", productSchema);

products.forEach((product) => {
  const { name, img, price, type, description } = product;
  Product.insertMany([
    new Product({
      name,
      img,
      price,
      type,
      description,
    }).populate((error) => {
      if (error) console.error(error);
      else console.log("Data save");
    }),
  ]);
});

module.exports = Product;
