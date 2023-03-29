const Endereco = require('../models/Endereco');
const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'enderecos' }
        });

        return res.json(user.enderecos);
    },

    async store(req, res) {
        const { user_id } = req.params;
        const { cep, rua, numero } = req.body;

        const user = await User.findByPk(user_id);

        if(!user) {
            return res.status(400).json({error: 'Usuário não encontrado'});
        }

        const endereco = await Endereco.create({
            cep,
            rua,
            numero,
            user_id,
        });

        return res.json(endereco);
    },
}