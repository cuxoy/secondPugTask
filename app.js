const express = require("express");
const path = require("path");
const usersRouter = require("./routes/users");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/", usersRouter);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
