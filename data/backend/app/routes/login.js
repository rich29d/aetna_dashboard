const express = require("express");
const router = express.Router();
const validation = require("express-validation");

const loginValidate = require("../validators/login");
const login = require("../controllers/login");

router.post("/", validation(loginValidate), login);

module.exports = router;
