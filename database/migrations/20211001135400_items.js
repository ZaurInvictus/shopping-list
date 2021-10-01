
exports.up = function(knex) {
    return knex.schema
    .createTable('items', tbl => {
        tbl.increments()
        tbl.string('name', 10000).notNullable()
        tbl.string('description', 10000).notNullable()
        tbl.string('count', 10000).notNullable()
        tbl.timestamp('created_at').defaultTo(knex.fn.now())
    })
        
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('items')
  }