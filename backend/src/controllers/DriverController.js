const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('motoristas').count();
        
        const motoristas = await connection('motoristas')
        .join('pessoas', 'pessoas.id', '=', 'motoristas.id_pessoa')
        .limit(5)
        .offset( ( page - 1 ) * 5 )
        .select([
            'motoristas.*',
            'pessoas.name',
        ]);

        response.header('X-Total-Count',count['count(*)'])

        return response.json({ motoristas });
    },

    async create(request, response) {
        const { numero_cnh, description } = request.body;
        const id_pessoa = request.headers.authorization;

        const [id] = await connection('motoristas').insert({
            numero_cnh,
            description,
            id_pessoa
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const id_pessoa = request.headers.authorization;

        const motorista = await connection('motoristas')
        .where('id',id)
        .select('id_pessoa')
        .first();

        if (id_pessoa !== motorista.id_pessoa) {
            return response.status(401).json({ error: 'Operation not permit' });
        }

        await connection('motoristas').where('id',id).delete();
        return response.status(204).send();
    }
}