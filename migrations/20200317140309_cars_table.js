exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();

    tbl
      .string("VIN", 255)
      .unique()
      .index();

    tbl.string("make", 255).index();
    tbl.string("model", 255).index();

    tbl.integer("mileage")
    .index();

    tbl.string("transmission-type").defaultTo('unknown');

    tbl
    .string("status-of-title").defaultTo('unknown');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
};
