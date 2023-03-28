const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(connection) {
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING
        }, {
            sequelize: connection
        })
    }

    static associate(models) {
        // Relação do usuário com o endereço 1-N
        this.hasMany(models.Endereco, { foreignKey: 'user_id', as: 'enderecos' });
        // Relação do usuário com as tecnologias N-N
        this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs' });
    }
}

module.exports = User