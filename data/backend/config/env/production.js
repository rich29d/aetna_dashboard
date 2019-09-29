module.exports = {
  // databases
  databases: {
    main: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      host: process.env.DB_HOST,
      dialect: 'mysql',
      logging: null,
      timezone: 'UTC',
      modelsPath: `${__dirname}/models`,
      default: true,
    },
  },
};