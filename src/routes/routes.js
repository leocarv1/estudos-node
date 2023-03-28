const express = require('express')

//Controllers
const UserController = require('../controllers/UserController');
const ProdutoController = require('../controllers/ProdutoController');
const EnderecoController = require('../controllers/EnderecoController');
const TechsController = require('../controllers/TechController');
const RelatorioController = require('../controllers/RelatorioController');

const route = express.Router()

/** Produtos */
route.post('/produtos', ProdutoController.store);
route.get('/produtos', ProdutoController.index);
route.get('/produtos/:id', ProdutoController.show);
route.put('/produtos/:id', ProdutoController.update);
route.delete('/produtos/:id', ProdutoController.destroy);


/** Users */
route.get('/users', UserController.index);
route.post('/users', UserController.store);

/** Endereços */
route.get('/users/:user_id/enderecos', EnderecoController.index);
route.post('/users/:user_id/enderecos', EnderecoController.store);

/** Tecnologias */
route.get('/techs', TechsController.index);
route.get('/users/:user_id/techs', TechsController.show);
route.post('/users/:user_id/techs', TechsController.store);
route.delete('/users/:user_id/techs', TechsController.delete);

/** Relatórios */
route.get('/relatorio', RelatorioController.show);
route.get('/relatorio/users/:busca', RelatorioController.busca);

module.exports = route