const User = require('../models/User');
const { Op } = require('sequelize');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async show(req, res) {
        const { id } = req.params;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        };

        res.json(user);
    },

    async store(req, res) {
        const { nome, email } = req.body;

        const user = await User.create({ nome, email});

        return res.json(user);
    },

    async destroy (req, res) {
        const { id } = req.params;

        const user = await User.findOne({ where: { id } });

        if (!user) {
            return res.status(404).json({ message: 'Produto não encontrado' });
          }

        await user.destroy();

        return res.json({ message: "Usuário deletado com sucesso!"});
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