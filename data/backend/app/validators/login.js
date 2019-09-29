const joi = require("../utils/joi/customJoi");

module.exports = {
  body: {
    email: joi
      .string()
      .email()
      .required(),
    senha: joi.string().required()
  }
};
