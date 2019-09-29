const express = require("express");
const router = express.Router();
const validation = require("express-validation");
const policy = require("express-policies");

const usersValidate = require("../validators/users");
const usersPolicy = require("../policies/users");

const JWTValidate = require("../middleware/JWTValidate");
const controller = require("../controllers/users");

router.post(
  "/",
  validation(usersValidate.post),
  controller.post
);

router.get(
  "/:id",
  validation(usersValidate.get),
  JWTValidate,
  policy(usersPolicy),
  controller.get
);

router.delete(
  "/:id",
  validation(usersValidate.delete),
  JWTValidate,
  policy(usersPolicy),
  controller.delete
);

module.exports = router;
