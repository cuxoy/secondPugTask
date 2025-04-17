const express = require("express");
const path = require("path");
const productsRouter = require("./routes/products");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/", productsRouter);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
