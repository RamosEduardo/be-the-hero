
exports.up = function(knex) {
    return knex.schema.createTable('motoristas', function(table) {
        table.increments();
        table.string('numero_cnh').notNullable();
        table.string('description').notNullable();
        
        table.string('id_pessoa').notNullable();

        table.foreign('id_pessoa').references('id').inTable('pessoas');

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('motoristas');
};
