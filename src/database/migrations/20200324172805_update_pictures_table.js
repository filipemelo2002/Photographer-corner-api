exports.up = function (knex) {
  return knex.schema.alterTable('pictures', (table) => {
    table.string('picture_id')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('pictures')
};
