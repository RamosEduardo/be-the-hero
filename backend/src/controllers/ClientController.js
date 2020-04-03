const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('clientes').count();
        
        const clientes = await connection('clientes')
        .join('pessoas', 'pessoas.id', '=', 'clientes.id_pessoa')
        .limit(5)
        .offset( ( page - 1 ) * 5 )
        .select([
            'clientes.*',
            'pessoas.name',
        ]);

        response.header('X-Total-Count',count['count(*)'])

        return response.json({ clientes });
    },

    async create(request, response) {
        const { description } = request.body;
        const id_pessoa = request.headers.authorization;

        const [id] = await connection('clientes').insert({
            description,
            id_pessoa
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const id_pessoa = request.headers.authorization;

        const cliente = await connection('clientes')
        .where('id',id)
        .select('id_pessoa')
        .first();

        if (id_pessoa !== cliente.id_pessoa) {
            return response.status(401).json({ error: 'Operation not permit' });
        }

        await connection('clientes').where('id',id).delete();
        return response.status(204).send();
    }
}