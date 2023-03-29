const Aluno = require('../models/Aluno');

module.exports = {
    async index(req, res) {
        const alunos = await Aluno.findAll();

        return res.json(alunos);
    },

    async store(req, res) {
        const { nome, sala } = req.body;

        const aluno = await Aluno.create({
            nome,
            sala
        });

        return res.json({ message: "Aluno cadastrado com sucesso!" });
    },

    async show(req, res) {
        const { id } = req.params;

        const aluno = await Aluno.findByPk(id);

        return res.json(aluno);
    },

    async update(req, res) {
        const { id } = req.params;
        const { nome, sala } = req.body;

        const aluno = await Aluno.findByPk(id);

        aluno.nome = nome;
        aluno.sala = sala;

        await aluno.save();

        return res.json({ message: "Aluno atualizado com sucesso!" });
    },

    async destroy(req, res) {
        const { id } = req.params;

        const aluno = await Aluno.findByPk(id);

        await aluno.destroy();

        return res.json({ message: "Aluno removido com sucesso!" });
    }
}