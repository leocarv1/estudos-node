const Tech = require('../models/Tech');
const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const techs = await Tech.findAll();

        return res.json(techs);
    },

    async show(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'techs' }
        });

        return res.json(user.techs);
    },

    async store(req, res) {
        const { user_id } = req.params;
        const { nome } = req.body;

        const user = await User.findByPk(user_id);

        if(!user) {
            return res.status(400).json({ error: "Usuário não encontrado" });
        }

        // Procurando uma tecnologia onde o nome seja esse que está tentando criar
        const [ tech ] = await Tech.findOrCreate({
            where: { nome }
        });

        await user.addTech(tech);

        return res.json(tech);
    },

    async delete(req, res) {
        const { user_id } = req.params;
        const { nome } = req.body;

        const user = await User.findByPk(user_id);

        if(!user) {
            return res.status(400).json({ error: "Usuário não encontrado" });
        }

        const tech = await Tech.findOne({
            where: { nome }
        });

        await user.removeTech(tech);

        return res.json({ message: "Tech removida com sucesso!" });
    }
}