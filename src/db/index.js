const Sequelize = require("sequelize");
const dbConfig = require('../config/db');

const User = require('../models/User');
const Produto = require('../models/Produto');
const Endereco = require('../models/Endereco');
const Tech = require('../models/Tech');
const Aluno = require("../models/Aluno");
const Curso = require("../models/Curso");

const connect = new Sequelize(dbConfig);

User.init(connect);
Produto.init(connect);
Endereco.init(connect);
Tech.init(connect);
Aluno.init(connect);

Endereco.associate(connect.models);
User.associate(connect.models);
Tech.associate(connect.models);

connect
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = connect;