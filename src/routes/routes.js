const express = require('express')

//Controllers
const UserController = require('../controllers/UserController');
const ProdutoController = require('../controllers/ProdutoController');
const EnderecoController = require('../controllers/EnderecoController');
const TechsController = require('../controllers/TechController');
const RelatorioController = require('../controllers/RelatorioController');
const AlunoController = require('../controllers/AlunoController');

const route = express.Router()

/** Alunos */
route.get('/alunos', AlunoController.index);
route.get('/alunos/:id', AlunoController.show);
route.post('/alunos', AlunoController.store);
route.post('/alunos/:id', AlunoController.update);
route.delete('/alunos/:id', AlunoController.destroy);

/** Produtos */
route.post('/produtos', ProdutoController.store);
route.get('/produtos', ProdutoController.index);
route.get('/produtos/:id', ProdutoController.show);
route.put('/produtos/:id', ProdutoController.update);
route.delete('/produtos/:id', ProdutoController.destroy);


/** Users */
route.get('/users', UserController.index);
route.get('/users/:id', UserController.show);
route.get('users/busca/:busca', UserController.busca);
route.post('/users', UserController.store);
route.delete('/users/:id', UserController.destroy);

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