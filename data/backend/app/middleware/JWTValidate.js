const jwt = require("jwt-simple");
const HttpStatus = require("http-status-codes");
const moment = require("moment");

const users = require("../repositories/users");
const message = require("../utils/messages");

module.exports = async (req, res, next) => {
  try {
    const auth = req.headers.authorization;
    const [, typeAuth, token] = auth.match(/^(JWT)+\s+(.*)/) || [];

    if (!token || typeAuth !== "JWT") {
      res
        .status(HttpStatus.UNAUTHORIZED)
        .json(message.TOKEN_INVALID);
    }

    const JWTKeySecret = process.env.JWT_KEY_SECRET;
    const decoded = jwt.decode(token, JWTKeySecret);

    if (decoded.exp < moment().valueOf()) {
      res
        .status(HttpStatus.BAD_REQUEST)
        .json(message.TOKEN_INVALID);
    }

    const user = await users.show(decoded.iss);

    if (!user) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json(message.USER_NOT_FOUND);
    }

    req.user = user;

    return next();
  } catch (err) {
    return res
      .status(HttpStatus.UNAUTHORIZED)
      .json(message.TOKEN_INVALID);
  }
};
