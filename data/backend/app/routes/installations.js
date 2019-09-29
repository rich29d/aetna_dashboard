const express = require("express");
const router = express.Router();
const validation = require("express-validation");

const installationsValidate = require("../validators/installations");
const JWTValidate = require("../middleware/JWTValidate");
const controller = require("../controllers/installations");

router.get(
  "/",
  validation(installationsValidate),
  JWTValidate,
  controller.search
);

module.exports = router;