const sequelize = require("sequelize");
const models = require("../models");

const functionsMysql = {
  ano: "YEAR",
  mes: "MONTH",
  semana: "WEEK",
  dia: "DAY",
  soma: "SUM",
  conta: "COUNT"
};

const mountFunction = (field = "", attributes, alias) => {
  const [fieldExtracted, keyFunction] = field.split(".");

  if (keyFunction) {
    const functionsMysqlItem = functionsMysql[keyFunction];
    const fieldModel = attributes[fieldExtracted];

    const sequelizeFunction = sequelize.fn(
      functionsMysqlItem,
      sequelize.col(fieldModel.field)
    );

    return alias
      ? [sequelizeFunction, `${fieldExtracted}_${keyFunction}`]
      : sequelizeFunction;
  }

  return fieldExtracted;
};

const mountAttributes = (fields = [], attributes, alias) =>
  fields.map(field => mountFunction(field, attributes, alias));

const mountAttributesOrder = (fields = [], attributes, alias) =>
  fields.map(field => [mountFunction(field, attributes, alias), "DESC"]);

module.exports = (query = {}, tableName) => {
  const model = models[tableName];
  const attributes = model.tableAttributes;

  const { fields, groupBy, orderBy, limit = 500 } = query;

  const options = { limit };

  if (fields) {
    options.attributes = mountAttributes(fields, attributes, true);
  }

  if (groupBy) {
    options.group = mountAttributes(groupBy, attributes, false);
  }

  if (orderBy) {
    options.order = mountAttributesOrder(orderBy, attributes, false);
  }

  return options;
};
