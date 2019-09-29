const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const HttpStatus = require("http-status-codes");
var cors = require('cors');

app.use(cors({origin: 'http://localhost:3000'}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const message = require("./utils/messages");
const index = require("./routes/index");
const login = require("./routes/login");
const users = require("./routes/users");
const installations = require("./routes/installations");

app.use("/", index);
app.use("/login", login);
app.use("/users", users);
app.use("/installations", installations);

app.use((err, req, res, next) => {
  const messages = [];
  
  if (err.status === HttpStatus.UNAUTHORIZED) {
		messages.push(...message.UNAUTHORIZED.messages);
  }
  
  if (err.errors) {
    err.errors.map(error => 
      messages.push(...error.messages))
  }

  if (err.error) {
    messages.push(err.error)
  }

	res.status(err.status).json({
    success: false,
    messages
	});
});

module.exports = app;
