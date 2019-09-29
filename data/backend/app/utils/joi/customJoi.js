const language = require("./languageJoi");
const joi = require("joi");

module.exports = joi.defaults(schema => schema.options({ language }));