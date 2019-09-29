const joi = require("../utils/joi/customJoi");

const params = {
  id: joi.number().min(1).required()
}

module.exports = {
  get: { params },
  delete: { params },
  post: {
    body: {
      nome: joi.string().required(),
      email: joi.string().email().required(),
      senha: joi.string().min(6).required(),
      estado: joi.string().uppercase().length(2).required(),
    }
  }
};
