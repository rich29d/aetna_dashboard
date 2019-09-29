const jwt = require("jwt-simple");
const moment = require("moment");

const users = require("../repositories/users");
const messages = require("../utils/messages");

module.exports = async function(req, res) {
  const { email, senha } = req.body;

  const user = await users.showByEmail(email);
  const isMatch = user && (await users.comparePasswords(senha, user.senha));

  if (!isMatch) {
    return res.status(401).json(messages.USER_NOT_FOUND);
  }

  const JWTKeySecret = process.env.JWT_KEY_SECRET;

  const expires = moment()
    .add(1, "days")
    .valueOf();

  const token = jwt.encode(
    {
      iss: user.id,
      exp: expires
    },
    JWTKeySecret
  );

  const data = {
    ...messages.SUCCESS_LOGIN,
    token,
    expires,
    user: {
      estado: user.estado,
      nome: user.nome
    }
  };

  return res.json({ data });
};
