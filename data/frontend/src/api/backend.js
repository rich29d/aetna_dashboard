require("dotenv").config();

const axios = require("axios");

const token = localStorage.getItem("token");

export default axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
  headers: { Authorization: `JWT ${token}` }
});
