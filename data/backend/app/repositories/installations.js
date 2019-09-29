const { installations } = require("../models");

exports.search = async options => {
	if (!options) {
    return null;
  }

  return await installations.findAll(options);
};