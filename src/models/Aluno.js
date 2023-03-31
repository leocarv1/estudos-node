const { Model, DataTypes } = require('sequelize');

class Aluno extends Model {
    static init(connection) {
        super.init({
            nome: DataTypes.STRING,
            sala: DataTypes.INTEGER
        }, {
            sequelize: connection
        })
    }

}

// Relações

module.exports = Aluno