const express = require("express");
const route = express.Route();

//Get a list of all users
route.get("/users", (req, res, next) => {
  res.json({
    status: "success",
    elements: [{}],
  });
});

module.exports = route;
