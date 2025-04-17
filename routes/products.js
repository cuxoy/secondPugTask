const express = require("express");
const router = express.Router();

const products = [
  { name: "Apple", price: 1.2, inStock: true },
  { name: "Banana", price: 0.8, inStock: false },
  { name: "Cherry", price: 2.5, inStock: true },
  { name: "Date", price: 3.0, inStock: false },
];

router.get("/", (req, res) => {
  res.render("index", { products });
});

module.exports = router;
