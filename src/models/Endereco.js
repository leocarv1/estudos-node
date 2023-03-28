const { Model, DataTypes } = require('sequelize');

class Endereco extends Model {
    static init(sequelize) {
        super.init({
            cep: DataTypes.STRING,
            rua: DataTypes.STRING,
            numero: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'proprietario'});
    }
}

module.exports = Endereco