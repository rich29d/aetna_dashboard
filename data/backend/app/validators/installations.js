const joi = require("../utils/joi/customJoi");

const fieldsIntallations = [
  "id",
  "id.conta",
  "fornecedor",
  "dataInstalacao",
  "dataInstalacao.ano",
  "dataInstalacao.mes",
  "dataInstalacao.semana",
  "dataInstalacao.dia",
  "potencia",
  "potenciaSistema",
  "potenciaSistema.soma",
  "cep",
  "custo",
  "custo.soma",
];

const joiArrayFileds = joi.array().items(joi.string().valid(fieldsIntallations));

module.exports = {
  query: {
    fields: joiArrayFileds,
    groupBy: joiArrayFileds,
    orderBy: joiArrayFileds,
    limit: joi.number().integer().max(500).default(500),
  }
};
