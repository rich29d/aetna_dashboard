require('dotenv').config();
const bcrypt = require('bcrypt');
const HttpStatus = require("http-status-codes");

const message = require("../utils/messages");
const users = require("../repositories/users");

exports.get = async (req, res) => {
  const { id } = req.params;  
  const data = await users.show(id);
  
  res.json({ data });
};

exports.post = async (req, res) => {
  const {
    nome,
    email,
    senha,
    estado,
  } = req.body;

  const userFound = await users.showByEmail(email);

  if (userFound) {
    res
      .status(HttpStatus.FORBIDDEN)
      .json(message.EMAIL_ALREADY_EXISTS);
  }
  
  const user = await users.store({
    nome,
    email,
    senha: await bcrypt.hash(senha, +process.env.SALT_ROUNDS),
    estado,
  });

  const data = user ? message.SUCCESS_REGISTER : message.ERROR;
  
  res.json({ data });
};

exports.delete = async (req, res) => {
  const { id } = req.params;  
  const deleted = await users.destroy(id);

  const data = deleted ? message.SUCCESS_DELETE : message.ERROR;
  
  res.json({ data });
};
