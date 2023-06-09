const { Model, DataTypes } = require('sequelize');

class Tech extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'techs',
        })
    }

    static associate(models) {
        this.belongsToMany(models.User, { foreignKey: 'techs_id', through: 'user_techs', as: 'users' });
    }
}

module.exports = Tech