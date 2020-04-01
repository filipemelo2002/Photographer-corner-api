const knex = require("knex");

const configuration = require("../../knexfile");
const config =
  process.env.ENV == "development"
    ? configuration.development
    : configuration.production;
const connection = knex(config);

module.exports = connection;
