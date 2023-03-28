const { v4: uuidv4 } = require('uuid');
const { Produto } = require('../models/Produto');

module.exports = {
  async store(req, res) {
    const { name, price } = req.body;

    const produto = await Produto.create({
      id: uuidv4(),
      name,
      price,
    });

    return res.json(produto);
  },

  async index(req, res) {
    const produtos = await Produto.findAll();
    return res.json(produtos);
  },

  async show(req, res) {
    const { id } = req.params;
    const produto = await Produto.findByPk(id);
    return res.json(produto);
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, price } = req.body;

    const produto = await Produto.findByPk(id);

    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    produto.name = name;
    produto.price = price;

    await produto.save();

    return res.json({ message: 'Produto atualizado com sucesso' });
  },

  async destroy(req, res) {
    const { id } = req.params;

    const produto = await Produto.findByPk(id);

    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    await produto.destroy();

    return res.json({ message: 'Produto removido com sucesso' });
  }
};
