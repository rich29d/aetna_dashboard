const installations = require("../repositories/installations");
const mountOptionsSequelize = require("../utils/mountOptionsSequelize");

exports.search = async (req, res) => {
  const options = mountOptionsSequelize(req.query, 'installations');
  
  options.where = {
    estadoSigla: req.user.estado,
  }
  
  const data = await installations.search(options);

  res.json({ data });
};
