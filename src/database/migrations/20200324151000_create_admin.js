
exports.up = function (knex) {
  return knex.schema.createTable('admins', function (table) {
    table.increments('id'),
      table.string('user').notNullable(),
      table.string('password_hash').notNullable(),
      table.string('admin_authorization').notNullable()
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('admin')
};
