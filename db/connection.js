const dbConfig =
  process.env.NODE_ENV === 'production'
    ? { client: "pg",
        connection: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
} }
    : require('../knexfile');

module.exports = require('knex')(dbConfig);
