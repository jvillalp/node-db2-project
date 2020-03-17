const knex = require("knex");
const knexfile = require('../knexfile');

const environment = process.env.DB_ENV || "development";

const knexConfig = knexfile[environment];

module.exports = knex(knexConfig);
