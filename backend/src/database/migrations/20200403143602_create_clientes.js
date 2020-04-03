
exports.up = function(knex) {
    return knex.schema.createTable('clientes', function(table) {
        table.increments();
        table.string('description').notNullable();
        
        table.string('id_pessoa').notNullable();

        table.foreign('id_pessoa').references('id').inTable('pessoas');

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('clientes');
};
