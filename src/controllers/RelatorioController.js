const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
    async show(req, res) {
        // Encontrar todos os usuaários que tem email te terminam com @test.com
        // Desses usuários, buscar todos os usuários que moram na "rua das ruas"
        // Desses usuários, buscar as techs que começam com Python

        const users = await User.findAll({
            attributes: ['nome', 'email'],
            where: {
                email: { 
                    [Op.like]: '%@teste.com%'
                 },
            },
            include: [
                { association: 'enderecos', where: { rua: 'Rua das Ruas' } },
                { association: 'techs', 
                    required: false,
                    where: { 
                        nome:  {
                            [Op.like]: '%Node%'
                        }
                    } },
            ]
        });

        return res.json(users);
    },

    async busca(req, res) {
        const { busca } = req.params;

        const users = await User.findAll({
            attributes: ['nome', 'email'],
            where: {
                nome: {
                    [Op.like]: `%${busca}%`
                }
            }
        });

        return res.json(users);
    }
}