require('dotenv').config();

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const env = require(`./env/${environment}`);

module.exports = env.databases.main;
