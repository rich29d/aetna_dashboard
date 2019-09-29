'use strict';
require('dotenv').config();

const users = require('./users.json');
const bcrypt = require('bcrypt');

async function processData(data) {
  await data.map(async item =>
    item.password = await bcrypt.hash(item.password, +process.env.SALT_ROUNDS));
  
    return data;
}

module.exports = {
  up: async (queryInterface) => {
    const usersProcessed = await processData(users);
    return queryInterface.bulkInsert('users', usersProcessed, {});
  },
  down: (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
