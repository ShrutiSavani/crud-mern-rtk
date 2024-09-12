const express = require("express");
const {
  getAll,
  create,
  update,
  deleteUser,
} = require("../controllers/userController");

const route = express.Router();

route.get("/", getAll);
route.post("/", create);
route.put("/:id", update);
route.delete("/:id", deleteUser);

module.exports = route;
