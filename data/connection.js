const knex = require("knex");
const knexfile = require();

const environment = process.env.DB_ENV || "development";

const knexConfig = knexfile[environment];

module.exports = knex(knexConfig);
