exports.up = knex =>
  knex.schema.createTable('users', tbl => {
    tbl.increments();

    tbl.string('username', 255).notNullable();
  });

exports.down = knex => knex.schema.dropTableIfExists('hobbits');
