const express = require("express");
const router = express.Router();

const users = [
  { name: "User1", age: 25, email: "user1@example.com" },
  { name: "User2", age: 35, email: "user2@example.com" },
  { name: "User3", age: 45, email: "user3@example.com" },
];

router.get("/", (req, res) => {
  res.render("index", { title: "User List", users });
});

module.exports = router;
