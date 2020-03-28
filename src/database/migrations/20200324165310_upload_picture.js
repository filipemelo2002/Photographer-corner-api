
exports.up = function (knex) {
  return knex.schema.createTable('pictures', (table) => {
    table.increments('id')
    table.string('picture').notNullable()
    table.string('category').notNullable()
    table.string('picture_url').notNullable()
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('pictures')
};
