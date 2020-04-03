const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    async index(request, response) {
        const pessoas = await connection('pessoas').select('*');
        return response.json({ pessoas })
    },

    async create(request, response) {

        const { name, rg, cpf, email, whatsapp, cep, logradouro, numero, bairro, cidade, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        await connection('pessoas').insert({
            id,
            name,
            rg,
            cpf,
            email,
            whatsapp,
            cep,
            logradouro,
            numero,
            bairro,
            cidade,
            uf
        });

        return response.json({ id, name, whatsapp });
    }
}