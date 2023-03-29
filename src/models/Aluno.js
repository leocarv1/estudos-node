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

    // static associate(models) {
    //     // Relação do aluno com o curso
    //     this.hasOne(models.Aluno, { foreignKey: 'curso_id', as: 'cursos' });
    // }
}

module.exports = Aluno