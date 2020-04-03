
exports.up = function(knex) {
    return knex.schema.createTable('pessoas', function(table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('rg').notNullable();
        table.string('cpf').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('cep').notNullable();
        table.string('logradouro').notNullable();
        table.string('numero').notNullable();
        table.string('bairro').notNullable();
        table.string('cidade').notNullable();
        table.string('uf',2).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('pessoas');
};