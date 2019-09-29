const bcrypt = require("bcrypt");

const { users } = require("../models");

exports.store = async user => {
	if (!user) {
    return null;
  }

  return await users.create(user);
};

exports.show = async id => {
  if (!id) {
    return null;
  }

  return await users.findOne({
    where: { id },
  });
};

exports.showByEmail = async email => {
  if (!email) {
    return null;
  }

  return await users.findOne({
		where: { email },
	});
};

exports.destroy = async id => {
  if (!id) {
    return null;
  }

  return await users.destroy({
    where: { id }
  });
};

exports.comparePasswords = async (password1, password2) => {
  if (!password1 || !password2) {
    return false;
  }

  return bcrypt.compare(password1, password2);
};
